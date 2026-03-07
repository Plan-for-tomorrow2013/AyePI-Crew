# AyePI-Crew

A full-stack movie database application that uses **The Movie Database (TMDB)** for data and **Google Gemini AI** to provide "alternate commentary" on movie descriptions.

## Features

- **Trending Movies:** View a live feed of trending movies from TMDB.
- **AI Critic:** Click "Alternate Commentary" on any movie to have an AI persona (like a snarky critic) rewrite the movie's overview.
- **Normalised Data:** A robust backend that transforms external API data into a consistent internal format.
- **Responsive Design:** A clean, grid-based UI built with Tailwind CSS.

## Tech Stack

- **Frontend:** React, Vite, React Query, Tailwind CSS.
- **Backend:** Node.js, Express, Google Generative AI SDK.
- **Testing:** Vitest, Supertest, React Testing Library.

---

## Setup

### 1. Installation

```bash
git clone [your-repo-link]
cd AyePI-Crew
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory and add your API keys:

```bash
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_READACCESS_TOKEN=your_tmdb_token_here
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Development

To start both the client and server in development mode:

```bash
npm run dev
```

- **Client:** [http://localhost:5173](http://localhost:5173)
- **Server:** [http://localhost:3000](http://localhost:3000)

### 4. Testing

To run all tests:

```bash
npm test -- --run
```

---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=boilerplate-react-api)
