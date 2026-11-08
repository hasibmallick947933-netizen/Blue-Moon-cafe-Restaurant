# 🌙 Blue Moon Cafe & Restaurant — Full Stack Web Application

> **A contemporary fine dining & celestial evening experience website for Blue Moon Cafe & Restaurant (Budge Budge, Kolkata).**  
> Built with high-performance scroll storytelling, responsive editorial design, and a production-ready Node.js/Express backend integrated with **MongoDB Atlas** and **Cloudinary**.

---

## 🚀 Features

- **Cinematic Scroll Storytelling**: Full-bleed magazine editorial scroll animations matching the reference video (0:00 to 0:13) with GPU-accelerated `translate3d` and a zero-lag `requestAnimationFrame` render loop.
- **Table Reservation System**: Instant booking form saving to MongoDB with automatic confirmation code generation (`BM-XXXX`) and WhatsApp reservation routing.
- **Dynamic Menu System**: Over 170+ authentic dishes across 20 categories dynamically synced from MongoDB Atlas (with static JSON fallback).
- **Cloudinary Media Storage**: Production CDN image uploading and delivery for restaurant dishes, ambiance photos, and branding assets.
- **Multi-Cloud Ready**: 100% pre-configured for one-click deployment on **Vercel** (Serverless Edge) and **Render** (Node.js Web Service).

---

## 🛠️ Tech Stack & Services

- **Frontend**: HTML5, CSS3 (Custom properties, CSS Grid, Fluid Typography, GPU Transforms), Vanilla JavaScript (Modular ES6+).
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB Atlas via Mongoose 8 (`bluemoon` database).
- **Media CDN**: Cloudinary v2 SDK (`ppcahncd`).
- **File Uploads**: Multer memory storage stream directly to Cloudinary.
- **Deployments**: Vercel Serverless (`vercel.json`), Render Web Service (`render.yaml`).

---

## 📁 Project Structure

```text
├── config/
│   ├── db.js             # MongoDB connection pooling & caching
│   └── cloudinary.js     # Cloudinary SDK config & buffer stream upload
├── models/
│   ├── Reservation.js    # Table reservation Mongoose schema
│   ├── MenuItem.js       # Dynamic menu item Mongoose schema
│   └── Contact.js        # Catering & contact inquiry schema
├── routes/
│   └── api.js            # REST API endpoints (/api/reservations, /api/menu, /api/upload, /api/health)
├── scripts/
│   └── seed.js           # CLI script to seed menu.json directly into MongoDB Atlas
├── api/
│   └── index.js          # Vercel serverless function entry point
├── server.js             # Production Express server (Render & Local)
├── index.html            # Main fine-dining landing experience
├── styles.css            # Luxury Italian crimson editorial stylesheets
├── app.js                # High-performance scroll engine & interactive client logic
├── menu.json             # Complete menu data (170+ dishes, 20 categories)
├── vercel.json           # Vercel serverless deployment routing config
├── render.yaml           # Render blueprint deployment config
├── .env.example          # Environment variables template
└── package.json          # Node dependencies and npm scripts
```

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check reporting server uptime, MongoDB status, and Cloudinary ping. |
| `POST` | `/api/reservations` | Records a new table reservation in MongoDB and generates a WhatsApp confirmation link. |
| `GET` | `/api/reservations` | Lists existing reservations (supports `?status=pending` and `?date=YYYY-MM-DD`). |
| `PATCH`| `/api/reservations/:id` | Updates a reservation status (`confirmed`, `completed`, `cancelled`). |
| `GET` | `/api/menu` | Retrieves all active menu items from MongoDB (or `menu.json` fallback). |
| `POST` | `/api/menu` | Creates a new dish item with category, price, and Cloudinary image. |
| `POST` | `/api/upload` | Uploads an image file to Cloudinary and returns the secure CDN URL. |
| `POST` | `/api/contact` | Submits a catering or customer service inquiry. |
| `POST` | `/api/seed-menu` | Syncs all dishes from `menu.json` into MongoDB Atlas. |

---

## 🔑 Environment Variables

Create a `.env` file in the root directory (or configure these in Vercel / Render dashboard):

```env
PORT=5000
MONGODB_URI=mongodb+srv://admin:HM2506@cluster0.e4ansif.mongodb.net/bluemoon?retryWrites=true&w=majority
CLOUDINARY_CLOUD_NAME=ppcahncd
CLOUDINARY_API_KEY=318814916524947
CLOUDINARY_API_SECRET=W4fTFjiQ5zBGhZL8AkRNZCjfBuA
NODE_ENV=production
```

---

## 🚢 Deployment Guide

### Option 1: Deploy to Vercel (Recommended for Global Edge CDN)

1. **Push your code to GitHub** (already pushed to `https://github.com/hasibmallick947933-netizen/Blue-Moon-cafe-Restaurant.git`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New..."** → **"Project"**.
3. Import the `Blue-Moon-cafe-Restaurant` repository.
4. Under **Environment Variables**, add:
   - `MONGODB_URI`: `mongodb+srv://admin:HM2506@cluster0.e4ansif.mongodb.net/bluemoon?retryWrites=true&w=majority`
   - `CLOUDINARY_CLOUD_NAME`: `ppcahncd`
   - `CLOUDINARY_API_KEY`: `318814916524947`
   - `CLOUDINARY_API_SECRET`: `W4fTFjiQ5zBGhZL8AkRNZCjfBuA`
   - `NODE_ENV`: `production`
5. Click **Deploy**. Vercel will build the project using [`vercel.json`](vercel.json) and deploy the frontend on the Edge network while serving all `/api/*` routes as serverless functions.

---

### Option 2: Deploy to Render (Node.js Web Service)

1. Log in to [Render](https://render.com) and click **"New +"** → **"Web Service"**.
2. Connect your GitHub repository: `hasibmallick947933-netizen/Blue-Moon-cafe-Restaurant`.
3. Configure the service settings:
   - **Name**: `blue-moon-restaurant`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Under **Advanced** → **Environment Variables**, add:
   - `MONGODB_URI`: `mongodb+srv://admin:HM2506@cluster0.e4ansif.mongodb.net/bluemoon?retryWrites=true&w=majority`
   - `CLOUDINARY_CLOUD_NAME`: `ppcahncd`
   - `CLOUDINARY_API_KEY`: `318814916524947`
   - `CLOUDINARY_API_SECRET`: `W4fTFjiQ5zBGhZL8AkRNZCjfBuA`
   - `NODE_ENV`: `production`
5. Click **Create Web Service**. Render will deploy your full stack app and provide a live `https://blue-moon-restaurant.onrender.com` URL.

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Seed MongoDB with initial menu**:
   ```bash
   npm run seed
   ```
3. **Start local server**:
   ```bash
   npm start
   ```
4. Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## 📍 Restaurant Details

- **Name**: Blue Moon Cafe & Restaurant
- **Address**: 75/3/C Halder Para Road, Budge Budge, Kolkata - 700137
- **Reservations & WhatsApp**: [+91 8420800739](https://wa.me/918420800739)
