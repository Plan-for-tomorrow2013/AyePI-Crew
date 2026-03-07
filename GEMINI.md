# Project Overview

**AyePI-Crew** is a full-stack movie application that leverages **The Movie Database (TMDB)** for movie data and uses **Google Generative AI (Gemini)** to generate alternative movie reviews based on specific critic personas.

## Tech Stack

*   **Frontend:** React, Vite, TypeScript, Tailwind CSS
*   **Backend:** Node.js, Express, TypeScript, Google Generative AI SDK
*   **API Communication:** `superagent` and React Query
*   **Testing:** Vitest, React Testing Library, Supertest

## Features

- **Movie Feed:** Fetches trending movies from TMDB and displays them in a responsive grid.
- **Data Normalisation:** Backend logic to transform raw TMDB data into clean, internal models (including full poster URLs).
- **AI Critic:** An "Alternate Commentary" feature that uses AI to rewrite movie overviews into different personas (e.g., Snarky, Funny, Contrarian, Hopeless Romantic).
- **Interactive UI:** Real-time transformation of movie descriptions via client-side state and AI mutations.

## Project Structure

- `client/`: React frontend
  - `api/`: Domain-specific API clients (`movieApi.ts`, `aiClient.ts`).
  - `components/`: UI components like `MovieCard` and `App`.
- `server/`: Express backend
  - `routes/`: API endpoints for movies and AI critics.
  - `utils/`: Core business logic, including `normalise.ts` and `promptBuilder.ts`.
- `interface/`: Shared TypeScript interfaces between client and server.

## Getting Started

### Environment Variables
You will need a `.env` file in the root directory with the following keys:
```bash
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_READACCESS_TOKEN=your_tmdb_token_here
GEMINI_API_KEY=your_gemini_api_key_here
```

### Development
To start the Vite development server and the backend watcher:
```bash
npm run dev
```

### Testing
To run the full test suite (including server and client tests):
```bash
npm test -- --run
```

## Development Conventions

- **Type Safety:** All data structures should use the shared interfaces in the `interface/` directory.
- **Modularity:** Keep API routes lean by moving complex logic into `server/utils`.
- **Validation:** Always include tests for new routes and components.
- **Styling:** Use Tailwind CSS for a consistent, modern UI.

## PromptKit Quick Reference
- Review the available artefacts when the student requests them:
  - Protocol: `promptkit/protocols/setup.md`
  - Workflow: `promptkit/workflows/tutor.md`
  - Workflow: `promptkit/workflows/reflect.md`
- Student notes live in `promptkit/notes/progress-journal.md`.
