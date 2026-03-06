
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



//What would be passed to front end
//https://developer.themoviedb.org/reference/movie-details
export interface Movie {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;   // full image URL; built server-side
  releaseDate: string;
  rating: number;
  voteCount: number;
  genres?: string[];
}


//https://developer.themoviedb.org/reference/movie-reviews
export interface Review {
  author: string;
  content: string;
  url: string;     // link original review
}




