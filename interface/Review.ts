/*
 * A single review returned for a movie
 * TMDB `/movie/{id}/reviews` r
 */

export interface TmdbReview {
  author: string;
  content: string;
  id: string;
  url: string;
}

/**
 * Full API response shape from /movie/{id}/reviews
 */

export interface TmdbReviewResponse {
  id: number;                // movie ID
  page: number;
  results: TmdbReview[];
  total_pages: number;
  total_results: number;
}


// Normalised

export interface Review {
  author: string;
  content: string;
  url: string;     // link to original review
}