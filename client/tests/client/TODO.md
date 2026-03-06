# Client side/component tests

component renders
search input render
AI output display
Loading state,errors

# Integrate
Update to reflect eventual page/component structure

# Test the tests. Current suite set up for:

        ┌───────────────────────┐
        │       App Component   │
        │  (React, UI rendering)│
        └─────────┬─────────────┘
                  │
                  ▼
        ┌───────────────────────┐
        │   Service Layer (API) │
        │  aiService / movieService │
        │  Modular functions:   │
        │  - getAIResponse      │
        │  - searchMovies       │
        │  - getReviews         │
        └─────────┬─────────────┘
                  │
                  ▼
        ┌───────────────────────┐
        │   External APIs        │
        │  - TMDB API             │
        │  - OpenAI / AI API      │
        └───────────────────────┘

Tests: 
────────────
- Component Tests (UI): 
  renderWithStateAndQueryClient(<App />) 
  - mock service layer
  - verify loading, error, empty & data states
  - tests designed for components which call service/helpers not API direct

- Service Layer Tests:
  call individual modular functions
  - test behavior independent of App
  
- API Route Tests:
  mock service functions
  - verify HTTP status codes and responses