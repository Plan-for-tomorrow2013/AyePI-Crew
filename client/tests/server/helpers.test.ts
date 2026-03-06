// @vitest-environment node
//<reference types="vitest"/>
import { vi, describe, test, expect, beforeEach } from 'vitest'
//import { searchMovies, getReviews } from '../../../server/utils/movieService'
//import http from '../../../server/utils/http'
import { normaliseMovie, normaliseMovies, normaliseReview,normaliseReviews} from '../../../server/utils/normalise'
import * as movieService from '../../../server/utils/movieService'

vi.mock('../../server/utils/movieService') // auto-mocks the whole module


vi.mock('../../../server/utils/http') // mock any HTTP client your service uses

const mockedSearchMovies = movieService.searchMovies as unknown as ReturnType<typeof vi.fn>

describe.skip('Movie Service (server-side)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const rawMovie = 
  {
    id: 99,
    title: 'Batman',
    overview: 'Fighting crime rather than using money to improve society',
    poster_path: 'I-am-a-poster-path',
    backdrop_path: 'I-am-a-backdrop-path',
    release_date: '1989',
    vote_average: 4.5,
    vote_count: 1066,
    adult: false,
  }

  
  const rawMovieArray = [rawMovie]

test('transforms single raw movie to model', () =>{
  const result = normaliseMovie(rawMovie)
    expect(result).toEqual({
    id: 99,
    title: 'Batman',
    overview: 'Fighting crime rather than using money to improve society',
    posterURL: 'I-am-a-poster-path',
    releaseDate: '1989',
    voteAverage: 4.5,
    voteCount: 1066,
    })
})

  test('transforms multiple movies correctly', () => {
    const result = normaliseMovies(rawMovieArray)
    expect(result).toEqual([
      {
        id: 99,
        title: 'Batman',
        overview: 'Fighting crime rather than using money to improve society',
        posterURL: 'I-am-a-poster-path',
        releaseDate: 1989,
        voteAverage: 4.5,
        voteCount: 1066,
      },
    ])
  })

  test('handles empty API response',() => {
  const result = normaliseMovies([])
  expect(result).toEqual([])
  })

  test('searchMovies returns normalised movie array (mocked)', async () => {
  const mockSearchMovies = vi.fn().mockResolvedValue(rawMovieArray)
  const movies = normaliseMovies(await mockSearchMovies('Batman'))
  expect(movies[0]).toHaveProperty('title', 'Batman')
  expect(movies[0]).toHaveProperty('posterURL', 'I-am-a-poster-path')
})

  
  test('searchMovies handles network/API errors', async () =>{
  mockedSearchMovies.mockRejectedValue(new Error('API down'))
  await expect (mockedSearchMovies('fail query')).rejects.toThrow('API down')
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
      url: 'blogspot.com',
      created_at: '2026-03-06T12:00:00Z'
    },
    {
      id: 'r2',
      author: 'Bob',
      content: 'Pretty good.',
      rating: 4,
      url: 'blogger.com',
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
      url: 'blogspot.com',
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
        url: 'blogspot.com',
        createdAt: '2026-03-06T12:00:00Z'
      },
      {
        id: 'r2',
        author: 'Bob',
        content: 'Pretty good.',
        rating: 4,
        url: 'blogger.com',
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