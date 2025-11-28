# NextShop — Full-Stack E-Commerce Website with Next.js & MongoDB

## Description
**NextShop** is a modern full‑stack e‑commerce website that makes shopping and product management simple. Users can browse, search, and filter products with detailed info and images to guide decisions.Sellers get secure authentication with dashboards to add and manage products. The platform focuses on speed, clean design, and intuitive navigation for a seamless experience.

---

**🔗 Live Demo:** [NextShop (Vercel)](https://next-shop-1aqj.vercel.app/)

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
  - date-fns (date formatting)
  - SweetAlert2 (confirmation alerts for product deletion)

---

## 🌐 API Endpoints (Backend)

```
GET /all-products        → Fetch all products
GET /all-products/:id    → Fetch single product details
POST /all-products       → Add new product
GET /manage-products     → Fetch products by user email
DELETE /manage-products/:id → Delete product by ID

```

---

## 🧩 Key Features

* Fully responsive UI (optimized for mobile, tablet, and desktop breakpoints)
* Dynamic product listing with category & search filters
* Product Details Page
* Add & manage products (for logged‑in users)
* Firebase Authentication (Google & Email login)
* Clean, gradient‑driven interface with modern styling
* Secure logout flow with toast notifications

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

Frontend `.env` (Next.js):

```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
```

Backend `.env` (Express + MongoDB):

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

* **Vercel** (official Next.js platform, GitHub integration for auto deploys)
* **Netlify** (optional)

---

## 📄 License
This project is intended solely for educational and portfolio purposes, not for commercial use.

--- 

## 👤 Author

**Islamul Hoque**  
*MERN Stack Web Developer*  

📍 **Chattogram, Bangladesh**  
📧 **islamulhoque2006@gmail.com**  

🔗 **Social Links:**  
- [GitHub](https://github.com/Islamul-Hoque)  
- [LinkedIn](https://linkedin.com/in/Islamul-Hoque)  
- [Facebook](https://facebook.com/ISLAMUL.HOQUE.ISHFAK.OFFICIAL)  
- [Twitter](https://twitter.com/ISHFAK2003)
