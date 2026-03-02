//TMDB Models
//These are exactly what is exported from the TMDB models after they
//have been normalised


//Client service/API uses this, as do components.
//Server-side gets TMDB data , normalises it to match this
//Client side receives pre-normalised data


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


