import type { TmdbMovie, Movie, TmdbReview, Review } from '../models/tmdbmodels';

/**
 * TMDB stores paths like "/abcd.jpg".
 * Use full URLs for display:
 * https://image.tmdb.org/t/p/w500/<poster_path>
 */
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

export function normaliseMovie(raw: TmdbMovie): Movie {
  return {
    id: raw.id,
    title: raw.title,
    overview: raw.overview,
    posterUrl: raw.poster_path
      ? `${TMDB_IMAGE_BASE}${raw.poster_path}`
      : '',
    releaseDate: raw.release_date,
    rating: raw.vote_average,
    voteCount: raw.vote_count,
  };
}

export function normaliseMovies(rawMovies: TmdbMovie[]): Movie[] {
  return rawMovies.map(normaliseMovie);
}



/**
 * Plain text reviews 
 */
export function normaliseReview(raw: TmdbReview): Review {
  return {
    author: raw.author,
    content: raw.content,
    url: raw.url,
  };
}

export function normaliseReviews(rawReviews: TmdbReview[]): Review[] {
  return rawReviews.map(normaliseReview);
}