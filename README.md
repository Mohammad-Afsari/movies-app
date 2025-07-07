# 🎬 Movies App - NapFlix

A modern full-stack movie search application powered by the OMDB API.  
Search for movies, explore detailed film information and enjoy a smooth user experience!

---

## ⚙️ Requirements

- **Node.js v20 LTS or later** (recommended: `v20.19.3`)
- `npm` installed globally

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movies-app.git
cd movies-app
```

### 2. Backend Setup

Navigate to the backend directory:

```
cd backend
```

Install dependencies:

```
npm install
```

Follow the `.env.example` for the environment variables you would need to set before running the server. These include `OMDB_API_KEY`, `OMDB_API_URL` and `PORT`.

Once `.env` has been set then run the server:

```
npm run dev
```

The backend server will be running at: http://localhost:4000

### 2. Frontend Setup

Navigate to the frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Follow the `.env.example` for the environment variables you would need to set before running the server. The only environment variable set in the frontend is the `PORT` URL, namely, `NEXT_PUBLIC_API_BASE_URL`.

Once `.env` has been set then run the frontend server:

```
npm run dev
```

The frontend will be available at: http://localhost:3000

## 🙌 Built With

This project is powered by:

- 🎥 &nbsp; **[OMDB API](https://www.omdbapi.com/)** &nbsp;– Provides access to extensive movie data.
- ⚡ &nbsp; **[Next.js](https://nextjs.org/)** &nbsp;– React-based framework for building the frontend UI.
- 🚀 &nbsp; **[Node.js](https://nodejs.org/)** & **[Express](https://expressjs.com/)** &nbsp;– Handles server-side logic and API routes.
- 🛠️ &nbsp; **TypeScript** &nbsp;– Ensures a type-safe development experience.
