
/*******************/
/       REVIEWS     /
 /******************/

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

//Normalised

export interface Review {
  author: string;
  content: string;
  url: string;     // link to original review
}


/***********************/
 /      MOVIE INFO      /
 /**********************/

/**
 * TMDB search/movie result item — limited fields
 */
export interface TmdbMovie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  vote_average: number;
  vote_count: number;
  adult: boolean;
}

/**
 * Full API response shape from /search/movie
 */
export interface TmdbMovieSearchResponse {
  page: number;
  results: TmdbMovie[];
  total_pages: number;
  total_results: number;
}

//Normalised

export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;   // full image URL
  releaseDate: string;
  rating: number;
  voteCount: number;
}

