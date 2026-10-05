🍽️ Restaurant Automation System

A full-stack restaurant management and automation application that helps restaurants securely manage orders, reservations, tables, kitchen operations, staff activities, customer requests, cleaning tasks, menu, inventory, reports, notifications, and restaurant operations from a centralized platform.

🔗 Live Links
Frontend: https://restaurant-automation-system-theta.vercel.app/
Backend API: https://restaurant-automation-system-ntaq.onrender.com/
GitHub: https://github.com/samarthunhale-alt/Restaurant-Automation-System
📌 Project Overview

Restaurant Automation System is a full-stack web application developed to simplify and automate restaurant operations.

Users can securely log in and access features according to their assigned role. The system provides separate workflows for restaurant administrators, kitchen staff, restaurant staff, cleaning staff, customers, and super administrators.

The project uses a separate React frontend, Node.js/Express backend, TypeScript, and MongoDB database.

✨ Features
User Registration & Login
JWT-based Authentication
Role-Based Access Control
Secure Password Hashing
Protected API Routes
Restaurant Management
Order Management
Reservation Management
Table Management
Kitchen Dashboard
Staff Dashboard
Cleaning Management
Customer Requests
Food Ready Management
Table Turnover Management
Menu Management
Inventory Management
Staff Management
Customer Management
Reports & Analytics
Notifications & Alerts
Subscription Management
Transaction Management
Audit Logs
REST API
Real-Time Operations using Socket.IO
API Rate Limiting
CORS Protection
Security Headers using Helmet
MongoDB Integration
Responsive User Interface
Cloud Deployment
🛠️ Tech Stack
Frontend
React.js
Vite
TypeScript
Axios
React Router
Socket.IO Client
CSS
Backend
Node.js
Express.js
TypeScript
MongoDB
Mongoose
JWT
bcryptjs
Helmet
CORS
Morgan
Express Rate Limit
Socket.IO
Nodemailer
Zod
Deployment
Vercel – Frontend
Render – Backend
MongoDB Atlas – Database
🏗️ Architecture
User
  ↓
React + Vite Frontend
  ↓
Axios / REST API
  ↓
Node.js + Express Backend
  ↓
Mongoose
  ↓
MongoDB Atlas
Project Structure
Restaurant-Automation-System/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── scripts/
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── docs/
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
👥 User Roles

The application supports different role-based dashboards:

Restaurant Admin – Restaurant operations and management
Staff – Orders, tables, reservations and customer service
Kitchen Staff – Food preparation and kitchen workflow
Cleaning Staff – Table cleaning and cleaning tasks
Customer – Restaurant reservations and customer operations
Super Admin – Restaurant, subscription, analytics and system management
🔄 Restaurant Workflow
Customer
   ↓
Reservation / Order
   ↓
Restaurant Staff
   ↓
Kitchen
   ↓
Food Preparation
   ↓
Food Ready
   ↓
Customer Service
   ↓
Table Turnover
   ↓
Cleaning
   ↓
Reports & Analytics
🌐 API Architecture

The backend API uses the following base path:

/api/v1

Example API modules include:

/api/v1/auth
/api/v1/orders
/api/v1/reservations
/api/v1/tables
/api/v1/customers

The application also uses Socket.IO for real-time restaurant operations where required.

🚀 Installation
Clone Repository
git clone https://github.com/samarthunhale-alt/Restaurant-Automation-System.git
cd Restaurant-Automation-System
Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173
Backend Setup

Open another terminal:

cd backend
npm install
npm run dev

The backend runs on the configured local server port.

🔐 Environment Variables
Frontend
VITE_API_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
Backend
PORT=
MONGODB_URI=
JWT_SECRET=
REFRESH_TOKEN_SECRET=
CORS_ORIGINS=
CLIENT_URL=
SOCKET_CORS_ORIGIN=

Never commit .env files or production secrets to GitHub.

🔒 Security

The application implements:

JWT Authentication
Secure Password Hashing
Protected API Routes
Role-Based Authorization
CORS Protection
Helmet Security Headers
API Rate Limiting
MongoDB Sanitization
Environment Variables
Secure REST API Architecture
☁️ Deployment Architecture

                  ┌─────────────────────────┐
                 │         Vercel          │
                 │ React + Vite Frontend   │
                 └────────────┬────────────┘
                              │
                              │ REST API
                              ↓
                 ┌─────────────────────────┐
                 │         Render          │
                 │ Node + Express Backend  │
                 └────────────┬────────────┘
                              │
                              ↓
                 ┌─────────────────────────┐
                 │      MongoDB Atlas      │
                 │        Database         │
                 └─────────────────────────┘
