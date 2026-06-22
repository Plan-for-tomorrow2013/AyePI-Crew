# AyePI-Crew 🎬

A full-stack movie database app built as a group project at Dev Academy Aotearoa. Uses The Movie Database (TMDB) for live movie data and Google Gemini AI to generate alternate commentary on movie descriptions.

Created by Tania, Laura, Jen and Dylan.

## Team Roles
- 🌟 **Vibes Watcher** — Tania, Laura, Jen, Dylan
- 🔐 **Git Keeper** — Laura, Dylan
- 👑 **Product Owner** — Dylan

## My Contributions
- **AI Implementation** — integrated Google Gemini AI to generate alternate commentary on movie overviews
- **Styling** — built and styled the frontend UI using Tailwind CSS

## What it does
- Browse trending movies from the TMDB live API
- Click "Alternate Commentary" on any movie to get an AI rewrite of the movie description
- Clean grid-based responsive UI
- Normalised backend that transforms external API data into a consistent internal format

## Tech Stack
React · Vite · React Query · Tailwind CSS · Node.js · Express · Google Gemini AI · Vitest · Supertest · 
React Testing Library

## Getting Started

```bash
git clone git@github.com:Plan-for-tomorrow2013/AyePI-Crew.git
cd AyePI-Crew
npm install
```

Create a `.env` file in the root directory:
```bash
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_READACCESS_TOKEN=your_tmdb_token_here
GEMINI_API_KEY=your_gemini_api_key_here
```

```bash
npm run dev
```

Client: http://localhost:5173
Server: http://localhost:3000

## Testing
```bash
npm test -- --run
```

## Status
✅ Completed — Dev Academy group project
