A full-stack restaurant management and automation application that helps restaurants securely manage orders, reservations, tables, staff operations, kitchen workflows, customer requests, cleaning tasks, notifications, reports, and daily restaurant activities from a centralized platform.
🔗 Live Links
Frontend: https://restaurant-automation-system-theta.vercel.app/
Backend API: https://restaurant-automation-system-ntaq.onrender.com/
GitHub: https://github.com/samarthunhale-alt/Restaurant-Automation-System

📌 Project Overview

Restaurant Automation System is a full-stack web application developed to simplify and automate restaurant operations.

The system provides different dashboards and workflows for restaurant administrators, kitchen staff, restaurant staff, cleaning staff, customers, and super administrators.
Users can securely log in and perform role-based operations such as managing orders, reservations, tables, customer requests, kitchen tasks, cleaning tasks, menu items, staff, inventory, reports, notifications, and restaurant settings.
The project uses a separate React frontend, Node.js/Express backend, and MongoDB database.

Features
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

# Deployment
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

# Clone Repository
git clone https://github.com/samarthunhale-alt/Restaurant-Automation-System.git
cd Restaurant-Automation-System

# Frontend Setup
cd frontend
npm install
npm run dev

🍽️ Restaurant Automation System

A full-stack restaurant management and automation application that helps restaurants securely manage orders, reservations, tables, staff operations, kitchen workflows, customer requests, cleaning tasks, notifications, reports, and daily restaurant activities from a centralized platform.

🔗 Live Links
Frontend: https://restaurant-automation-system-theta.vercel.app/
Backend API: https://restaurant-automation-system-ntaq.onrender.com/
GitHub: https://github.com/samarthunhale-alt/Restaurant-Automation-System
📌 Project Overview

Restaurant Automation System is a full-stack web application developed to simplify and automate restaurant operations.

The system provides different dashboards and workflows for restaurant administrators, kitchen staff, restaurant staff, cleaning staff, customers, and super administrators.

Users can securely log in and perform role-based operations such as managing orders, reservations, tables, customer requests, kitchen tasks, cleaning tasks, menu items, staff, inventory, reports, notifications, and restaurant settings.

The project uses a separate React frontend, Node.js/Express backend, and MongoDB database.

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

🚀 Installation
Clone Repository
git clone https://github.com/samarthunhale-alt/Restaurant-Automation-System.git
cd Restaurant-Automation-System

# Frontend Setup
cd frontend
npm install
npm run dev

Frontend runs on: http://localhost:5173

# Backend Setup
cd backend
npm install
npm run dev

🔐 Environment Variables
Frontend:
VITE_API_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000

Backend:
PORT=
MONGODB_URI=
JWT_SECRET=
REFRESH_TOKEN_SECRET=
CORS_ORIGINS=
CLIENT_URL=
SOCKET_CORS_ORIGIN=

👥 User Roles

The system supports role-based restaurant operations including:

Restaurant Admin
Staff
Kitchen Staff
Cleaning Staff
Customer
Super Admin

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
Table Turnover / Cleaning
   ↓
Reports & Analytics

☁️ Deployment Architecture
                 ┌──────────────────────┐
                 │       Vercel         │
                 │ React + Vite Frontend│
                 └──────────┬───────────┘
                            │
                            │ REST API
                            ↓
                 ┌──────────────────────┐
                 │       Render         │
                 │ Node + Express API   │
                 └──────────┬───────────┘
                            │
                            ↓
                 ┌──────────────────────┐
                 │    MongoDB Atlas     │
                 │      Database        │
                 └──────────────────────┘
