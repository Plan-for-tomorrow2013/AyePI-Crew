import { vi, describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import server from '../server'
import superagent from 'superagent'

// Mock superagent
vi.mock('superagent', () => {
  return {
    default: {
      get: vi.fn().mockReturnThis(),
      set: vi.fn().mockReturnThis(),
      send: vi.fn().mockReturnThis(),
      query: vi.fn().mockReturnThis(),
      then: vi.fn()
    }
  }
})

describe('GET /api/v1/movies', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    process.env.TMDB_READACCESS_TOKEN = 'mock-token'
  })

  it('should return a list of normalised movies', async () => {
    const mockTmdbData = {
      body: {
        results: [
          {
            id: 1,
            title: 'Test Movie',
            overview: 'Test Overview',
            poster_path: '/test.jpg',
            release_date: '2021-01-01',
            vote_average: 8.5,
            vote_count: 100,
            adult: false
          }
        ]
      }
    }

    // Mock the specific call sequence in the route
    ;(superagent.get as any).mockReturnValue({
      set: vi.fn().mockResolvedValue(mockTmdbData)
    })

    const response = await request(server).get('/api/v1/movies')

    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body[0]).toEqual({
      id: 1,
      title: 'Test Movie',
      overview: 'Test Overview',
      posterUrl: 'https://image.tmdb.org/t/p/w500/test.jpg',
      releaseDate: '2021-01-01',
      rating: 8.5,
      voteCount: 100
    })
  })

  it('should return 500 if the TMDB API fails', async () => {
    ;(superagent.get as any).mockReturnValue({
      set: vi.fn().mockRejectedValue(new Error('TMDB API Error'))
    })

    const response = await request(server).get('/api/v1/movies')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Failed to fetch movies')
  })
})
