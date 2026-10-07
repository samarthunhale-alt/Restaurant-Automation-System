# 🍽️ Restaurant Automation System

A full-stack, role-based restaurant management and automation platform that helps restaurants manage orders, reservations, tables, kitchen operations, staff, cleaning tasks, menu, inventory, reports and notifications from one centralized system, with real-time updates powered by Socket.IO.

---

## 🔗 Live Links

| Resource | Link |
|----------|------|
| 🌐 Frontend | https://restaurant-automation-system-theta.vercel.app/ |
| ⚙️ Backend API | https://restaurant-automation-system-ntaq.onrender.com/ |
| 📦 GitHub Repository | https://github.com/samarthunhale-alt/Restaurant-Automation-System |

---

## 📌 Project Overview

Restaurant Automation System is a full-stack web application built to simplify and automate day-to-day restaurant operations.

Users log in securely and see only the features allowed for their role. The platform provides separate workflows for restaurant administrators, restaurant staff, kitchen staff, cleaning staff, customers and super administrators.

It is built with a React + TypeScript frontend, a Node.js/Express + TypeScript backend, and a MongoDB database, and is deployed on cloud platforms.

---

## ✨ Key Features

### 🔐 Authentication & Access Control

- User registration and login
- JWT-based authentication
- Role-based access control
- Secure password hashing
- Protected API routes

### 🏪 Restaurant Operations

- Restaurant management
- Order management
- Reservation management
- Table management
- Table turnover management
- Customer requests

### 👨‍🍳 Kitchen & Service

- Kitchen dashboard
- Food ready management
- Staff dashboard
- Cleaning management

### 📦 Business Management

- Menu management
- Inventory management
- Staff management
- Customer management
- Subscription management
- Transaction management

### 📊 Insights & Monitoring

- Reports and analytics
- Notifications and alerts
- Audit logs

### ⚡ Real-Time & Platform

- Real-time operations using Socket.IO
- REST API under `/api/v1`
- API rate limiting
- CORS protection
- Security headers using Helmet
- Responsive user interface
- Cloud deployment

---

## 👥 User Roles

| Role | Responsibility |
|------|----------------|
| 🛡️ **Super Admin** | Restaurant, subscription, analytics and system management |
| 🏪 **Restaurant Admin** | Restaurant operations and management |
| 🧑‍💼 **Staff** | Orders, tables, reservations and customer service |
| 👨‍🍳 **Kitchen Staff** | Food preparation and kitchen workflow |
| 🧹 **Cleaning Staff** | Table cleaning and cleaning tasks |
| 🙋 **Customer** | Restaurant reservations and customer operations |

---

## 🔄 Restaurant Workflow

```text
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
```

---

## 🏗️ System Architecture

```text
┌───────────────────────────────┐
│             Users             │
│  Admin / Staff / Kitchen /    │
│  Cleaning / Customer          │
└───────────────┬───────────────┘
                │
                ↓
┌───────────────────────────────┐
│    React + Vite + TypeScript  │
│           Frontend            │
└───────┬───────────────┬───────┘
        │               │
        │ Axios         │ Socket.IO Client
        │ REST API      │ Real-time events
        ↓               ↓
┌───────────────────────────────┐
│  Node.js + Express + TypeScript│
│            Backend            │
└───────────────┬───────────────┘
                │
                │ Mongoose
                ↓
┌───────────────────────────────┐
│         MongoDB Atlas         │
│           Database            │
└───────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- TypeScript
- Axios
- React Router
- Socket.IO Client
- CSS

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Helmet
- CORS
- Morgan
- Express Rate Limit
- Socket.IO
- Nodemailer
- Zod (request validation)

### Database

- MongoDB Atlas

### Deployment

- Vercel – Frontend
- Render – Backend
- MongoDB Atlas – Database

---

## 📁 Project Structure

```text
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
```

---

## 🌐 API Architecture

The backend API uses the following base path:

```text
/api/v1
```

Example API modules:

```text
/api/v1/auth
/api/v1/orders
/api/v1/reservations
/api/v1/tables
/api/v1/customers
```

The application also uses **Socket.IO** for real-time restaurant operations such as live order and kitchen updates.

---

## 🔐 Environment Variables

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
```

### Backend (`backend/.env`)

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CORS_ORIGINS=http://localhost:5173
CLIENT_URL=http://localhost:5173
SOCKET_CORS_ORIGIN=http://localhost:5173
```

> ⚠️ Never commit `.env` files or production secrets to GitHub.

---

## 🚀 Installation & Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/samarthunhale-alt/Restaurant-Automation-System.git
cd Restaurant-Automation-System
```

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

---

## 🔒 Security

The application implements:

- JWT authentication
- Secure password hashing with bcryptjs
- Protected API routes
- Role-based authorization
- Request validation using Zod
- CORS protection
- Helmet security headers
- API rate limiting
- MongoDB sanitization
- Environment-based secrets

---

## ☁️ Deployment Architecture

```text
┌─────────────────────────┐
│         Vercel          │
│  React + Vite Frontend  │
└────────────┬────────────┘
             │
             │ REST API + WebSocket
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
```

---

## 🎯 What This Project Demonstrates

- **Full-stack TypeScript** across both frontend and backend
- **Role-based access control** with six distinct user roles and dashboards
- **Real-time communication** using Socket.IO for live restaurant operations
- **RESTful API design** with versioned routes (`/api/v1`)
- **Secure backend practices**: JWT, hashing, validation, rate limiting, Helmet
- **Modular architecture**: controllers, routes, middleware and models kept separate
- **Production deployment** using Vercel, Render and MongoDB Atlas
- **Real-world domain modelling**: orders, reservations, tables, inventory, subscriptions and audit logs

---

## 🚧 Future Enhancements

- Online payment integration
- Customer-facing mobile application
- QR-code based table ordering
- Advanced analytics dashboards
- Multi-branch restaurant support
- Email and SMS notifications
- Multi-language support

---

## 👨‍💻 Developer

**Samarth Unhale**
Computer Engineering Student & Full-Stack Developer

- GitHub: https://github.com/samarthunhale-alt
- Project Repository: https://github.com/samarthunhale-alt/Restaurant-Automation-System

---

## 📄 License

This project is developed for educational, portfolio, and demonstration purposes.