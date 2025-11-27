# NextShop — Modern Full-Stack E-Commerce Experience

## Description
**NextShop** is a streamlined product management and browsing platform where users can explore items, view detailed product information, and manage their own listings after logging in. The platform focuses on delivering a clean and fast shopping experience, enabling users to add products and keep everything organized through a simple and intuitive interface.

---

**🔗 Live Demo:** [NextShop Live](https://next-shop-1aqj.vercel.app/)

---

## 🚀 Tech Stack

Core:
  - Next.js 16+ (App Router)
  - React 18+
  - Tailwind CSS

UI / UX:
  - DaisyUI (UI utilities)
  - SwiperJS (Customer Reviews slider)
  - Framer Motion (smooth animations & micro-interactions)

Authentication:
  - Firebase Authentication (Google + Email)

Backend:
  - MongoDB + Express API (external backend)

Utilities:
  - React Toastify (notifications)

---

## 🌐 API Endpoints (From Your Backend)

```
GET /all-products        → Fetch all products
GET /all-products/:id    → Fetch single product details
POST /all-products       → Add new product
GET /manage-products     → Fetch products by user email
DELETE /manage-products/:id → Delete product by ID

```

---

## 🧩 Key Features

* Fully responsive UI (mobile-first)
* Dynamic Product Listing
* Product Details Page
* Add & Manage Products (Logged-in Users Only)
* Firebase Auth: Google + Email
* Clean, gradient-driven UI
* Secure logout + Toast notifications

---

## 🧭 Run the Project Locally

### 1. Clone Repositories
### Client (Next.js Frontend):

```
git clone https://github.com/Islamul-Hoque/Next-Shop.git
cd Next-Shop
```
### Server (Express + MongoDB Backend):

```
git clone https://github.com/Islamul-Hoque/Next-Shop-Server.git
cd Next-Shop-Server
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

Create `.env`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```
### 4. Setup Environment Variables

Backend `.env`:

```
DB_USER=your_db_username
DB_PASS=your_db_password
```

### 5. Start Development Servers
**Backend:**

```
nodemon index.js
```

**Frontend:**
```
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🛠 Build & Deploy

### Build

```
npm run build
```

### Start Production

```
npm start
```

Deploy on:

* **Vercel** (official Next.js platform)
* **Netlify** (optional)

---