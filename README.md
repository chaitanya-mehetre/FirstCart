# 🛒 FirstCart — MERN E-Commerce App

A full-stack e-commerce application with a customer storefront, online payments, order management, and an admin panel.

🔗 **Live Demo:** [FirstCart](https://first-cart-chaitanya-mehetre.vercel.app/)

> The backend runs on Render's free plan, so the first request after a period of inactivity can take up to a minute.

---

## ✨ Features

**Customers**
- Register and log in with JWT authentication
- Browse products in the shop and view product details
- Add products to the cart and check out
- Pay online with Razorpay (test mode)
- Order confirmation page and email notifications sent through the Gmail API
- Profile page
- Static pages: About, Disclaimer, and Return Policy

**Admin panel**
- Dashboard with analytics
- Add, edit, and manage products
- View and manage all orders
- View all users
- Product image uploads stored on Cloudinary

## 🛠️ Tech Stack

**Frontend:** React, Vite, Tailwind CSS, Axios, Context API

**Backend:** Node.js, Express, MongoDB (Mongoose), JWT, bcryptjs, Multer

**Services:** Razorpay (payments), Cloudinary (image storage), Gmail API (emails)

**Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas (database)

## 📁 Project Structure

```
FirstCart/
├── backend/
│   ├── config/         # Database and Cloudinary setup
│   ├── constants/      # Email templates
│   ├── controllers/    # Analytics, auth, order, payment, product logic
│   ├── middleware/     # Auth and admin middleware
│   ├── models/         # User, Product, Order schemas
│   ├── routes/         # API routes
│   ├── utils/          # Email sender
│   └── index.js        # Server entry point
└── frontend/
    └── src/
        ├── admin/      # Admin pages
        ├── api/        # Axios setup
        ├── components/ # Navbar, Footer, ProductCard
        ├── context/    # Auth context
        └── pages/      # Customer pages
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/chaitanya-mehetre/FirstCart.git
cd FirstCart
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder (see `.env.example` for the exact variable names):

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

EMAIL_USER=your_gmail_address
GMAIL_CLIENT_ID=your_google_client_id
GMAIL_CLIENT_SECRET=your_google_client_secret
GMAIL_REFRESH_TOKEN=your_gmail_refresh_token

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Razorpay test keys (use the names from .env.example)
```

Start the server:

```bash
npm run dev
```

### 3. Set up the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and proxies `/api` requests to the backend.

## 👤 Author

**Chaitanya Mehetre**
GitHub: [@chaitanya-mehetre](https://github.com/chaitanya-mehetre)