# Full-Stack Deployment Guide

A full-stack web application featuring a Node.js/Express backend and a frontend client, structured for clean environment management and cloud deployment.

## Project Structure

```text
deployment/
├── backend/          # Express API server
│   ├── index.js      # Server entry point
│   ├── package.json
│   └── .env          # Environment variables (ignored by Git)
├── frontend/         # Frontend client application
└── .gitignore        # Git ignore rules
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

## Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/Madhav-Kochhar7/deployment-guide.git
cd deployment
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory and configure your environment variables:
```env
PORT=3000
# Add other keys (e.g., DATABASE_URL, JWT_SECRET) here
```

Start the backend server:
```bash
node index.js
```

### 3. Frontend Setup
Open a new terminal window, navigate to the frontend folder, and install dependencies:
```bash
cd frontend
npm install
npm run dev
```

## Deployment Checklist

- [ ] Ensure `.env` and `node_modules/` are listed in `.gitignore`.
- [ ] Configure environment variables directly in your hosting provider's dashboard (e.g., Render, Railway, Vercel).
- [ ] Update CORS origins in `backend/index.js` to allow requests from your deployed frontend URL.
- [ ] Set the start command to `node index.js` (or `npm start`) for the backend service.