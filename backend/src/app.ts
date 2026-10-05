import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';
import path from 'path';

import { env } from './config/env';
import { logger } from './config/logger';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { requestId } from './middleware/requestId';
import { apiRateLimiter } from './middleware/rateLimiters';
import { apiRouter } from './modules';
import billingRoutes from './modules/billing/billing.routes';
import customerRequestsRoutes from './modules/notifications/customerRequests.routes';
import notificationsRoutes from './modules/notifications/notifications.routes';
import tableSessionRoutes from './modules/tableSessions/tableSessions.routes';
import tableRoutes from './modules/tables/tables.routes';
import { healthRouter } from './modules/health/health.routes';

const app = express();

app.disable('x-powered-by');

if (env.TRUST_PROXY) {
  app.set('trust proxy', 1);
}

app.use(requestId);

if (env.HELMET_ENABLED) {
  app.use(
    helmet({
      crossOriginResourcePolicy: false,
    }),
  );
}

/* =========================
   CORS CONFIGURATION
   ========================= */

app.use(
  cors({
    origin(origin, callback) {
      const allowedOrigins = [
        'https://restaurant-automation-system-theta.vercel.app',
        ...env.corsOrigins,
      ];

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS origin denied: ${origin}`));
    },

    credentials: true,

    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],

    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
  }),
);

/* =========================
   LOGGING
   ========================= */

app.use(
  morgan(env.isProduction ? 'combined' : 'dev', {
    stream: {
      write: (message) => logger.http(message.trim()),
    },
    skip: () => !env.ENABLE_REQUEST_LOGS,
  }),
);

/* =========================
   BODY PARSING
   ========================= */

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

/* =========================
   SECURITY
   ========================= */

app.use(cookieParser(env.COOKIE_SECRET));
app.use(mongoSanitize());

/* =========================
   STATIC FILES
   ========================= */

app.use(
  `/${env.UPLOAD_PATH}`,
  express.static(path.resolve(process.cwd(), env.UPLOAD_PATH)),
);

/* =========================
   HEALTH
   ========================= */

app.use(healthRouter);

/* =========================
   ROOT
   ========================= */

app.get('/', (_req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: 'Restaurant Automation SaaS API',
      version: 'v1',
      docs: 'restaurant_automation_api_documentation_updated.pdf',
      health: '/health',
      ready: '/ready',
      versionRoute: '/version',
    },
  });
});

/* =========================
   API RATE LIMITER
   ========================= */

app.use('/api', apiRateLimiter);

/* =========================
   API INFO
   ========================= */

app.get(env.API_PREFIX, (_req, res) => {
  res.status(200).json({
    success: true,
    data: {
      name: 'Restaurant Automation SaaS API',
      version: 'v1',
      docs: 'restaurant_automation_api_documentation_updated.pdf',
    },
  });
});

/* =========================
   API ROUTES
   ========================= */

app.use(`${env.API_PREFIX}/tables`, tableRoutes);

app.use(`${env.API_PREFIX}/sessions`, tableSessionRoutes);

app.use(
  `${env.API_PREFIX}/customer/requests`,
  customerRequestsRoutes,
);

app.use(
  `${env.API_PREFIX}/notifications`,
  notificationsRoutes,
);

app.use(`${env.API_PREFIX}`, billingRoutes);

app.use(env.API_PREFIX, apiRouter);

/* =========================
   ERROR HANDLING
   ========================= */

app.use(notFoundHandler);

app.use(errorHandler);

export default app;