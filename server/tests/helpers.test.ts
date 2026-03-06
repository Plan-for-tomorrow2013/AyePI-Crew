// @vitest-environment node
import { vi, describe, test, expect, beforeEach } from 'vitest'
// import { searchMovies, getReviews } from '../../server/utils/movieService'
// import http from '../../server/utils/http'
 import { normaliseMovie, normaliseMovies, normaliseReview,normaliseReviews} from '../utils/normalise'


vi.mock('../../server/utils/http') // mock any HTTP client your service uses


describe.skip('Movie Service(server-side)', () => {

  const rawApiData = [
  {
    id: 99,
    title: 'Batman',
    overview: 'Fighting crime rather than using money to improve society',
    poster_path: 'I-am-a-poster-path',
    backdrop_path: 'I-am-a-backdrop-path',
    release_date: 1989,
    vote_average: 4.5,
    vote_count: 1066,
    adult: false,
  }
]
  
test('transforms raw API data to movie model', () =>{
  const result = normaliseMovie(rawApiData)
    expect(result).toEqual([
    {id: 99,
    title: 'Batman';
    overview: 'Fighting crime rather than using money to improve society',
    posterURL: 'I-am-a-poster-path',
    releaseDate: 1989,
    voteAverage: 4.5,
    voteCount: 1066,
    }
  ])
})

  test('handles empty API response',() => {
  const result = normaliseMovie([])
  expect(result).toEqual([])
  })

  //Add another mock movie here for array experience
  test('searchMovies returns normalised movie array', async () => {
  (searchMovies as vi.Mock).mockResolvedValue(rawApiData)
  const movies = normaliseMovies(await mockSearchMovies)
  expect (movies[0]).toHaveProperty('title', 'Batman')
  expect(movies[0]).toHaveProperty('posterURL', 'I-am-a-poster-path')
})
  
  test('searchMovies handles network/API errors', async () =>{
  (searchMovies as vi.Mock).mockRejectedValue(new Error('API down'))
  await expect (searchMovies('fail query')).rejects.toThrow('API down')
  })
})
  
describe.skip('Review Service (server-side)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const rawApiReviews = [
    {
      id: 'r1',
      author: 'Alice',
      content: 'Amazing movie!',
      rating: 5,
      created_at: '2026-03-06T12:00:00Z'
    },
    {
      id: 'r2',
      author: 'Bob',
      content: 'Pretty good.',
      rating: 4,
      created_at: '2026-03-05T15:30:00Z'
    }
  ]

  test('transforms raw API review data to model', () => {
    const result = normaliseReview(rawApiReviews[0])
    expect(result).toEqual({
      id: 'r1',
      author: 'Alice',
      content: 'Amazing movie!',
      rating: 5,
      createdAt: '2026-03-06T12:00:00Z'
    })
  })

  test('transforms multiple reviews correctly', () => {
    const result = normaliseReviews(rawApiReviews)
    expect(result).toEqual([
      {
        id: 'r1',
        author: 'Alice',
        content: 'Amazing movie!',
        rating: 5,
        createdAt: '2026-03-06T12:00:00Z'
      },
      {
        id: 'r2',
        author: 'Bob',
        content: 'Pretty good.',
        rating: 4,
        createdAt: '2026-03-05T15:30:00Z'
      }
    ])
  })

  test('handles empty review API response', () => {
    const result = normaliseReviews([])
    expect(result).toEqual([])
  })

  // Mocking getReviews (replace with actual import if available)
  test('getReviews returns normalized review array', async () => {
    const mockGetReviews = vi.fn().mockResolvedValue(rawApiReviews)
    const reviews = normaliseReviews(await mockGetReviews('movieId123'))

    expect(reviews[0]).toHaveProperty('author', 'Alice')
    expect(reviews[1]).toHaveProperty('content', 'Pretty good.')
  })

  test('getReviews handles network/API errors', async () => {
    const mockGetReviews = vi.fn().mockRejectedValue(new Error('API down'))
    await expect(mockGetReviews('failMovieId')).rejects.toThrow('API down')
  })
})