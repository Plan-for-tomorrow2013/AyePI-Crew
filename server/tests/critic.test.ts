import { vi, describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import server from '../server'

// Mock the Google AI SDK
vi.mock('@google/generative-ai', () => {
  return {
    GoogleGenerativeAI: vi.fn().mockImplementation(() => {
      return {
        getGenerativeModel: vi.fn().mockImplementation(() => {
          return {
            generateContent: vi.fn().mockResolvedValue({
              response: {
                text: () => JSON.stringify({
                  content: 'A mock snarky review of the movie.',
                  rating: 3
                })
              }
            })
          }
        })
      }
    })
  }
})

describe('POST /api/v1/critic', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    process.env.GEMINI_API_KEY = 'mock-api-key'
  })

  it('should return an AI generated review', async () => {
    const response = await request(server)
      .post('/api/v1/critic')
      .send({
        movieTitle: 'The Matrix',
        reviewText: 'A computer hacker learns from mysterious rebels about the true nature of his reality.',
        persona: 'snarky'
      })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('content')
    expect(response.body.content).toBe('A mock snarky review of the movie.')
    expect(response.body.rating).toBe(3)
  })

  it('should handle AI generation errors', async () => {
    // Re-mock to throw an error for this test
    const { GoogleGenerativeAI } = await import('@google/generative-ai')
    ;(GoogleGenerativeAI as any).mockImplementationOnce(() => ({
      getGenerativeModel: () => ({
        generateContent: () => { throw new Error('AI Error') }
      })
    }))

    const response = await request(server)
      .post('/api/v1/critic')
      .send({
        movieTitle: 'Error Movie',
        reviewText: 'Testing errors',
        persona: 'snarky'
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Failed to generate AI review')
  })

  it('should return 500 if GEMINI_API_KEY is missing', async () => {
    delete process.env.GEMINI_API_KEY
    const response = await request(server)
      .post('/api/v1/critic')
      .send({
        movieTitle: 'No Key Movie',
        reviewText: 'Testing missing key',
        persona: 'snarky'
      })

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('API key not configured.')
  })
})
