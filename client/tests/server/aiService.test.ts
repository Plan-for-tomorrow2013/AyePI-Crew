// @vitest-environment node
import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateAiReview } from '../../../server/utils/aiService';
import type { Mock } from 'vitest'
import { GEMINI_API_KEY } from './../../../server/.env/config'
import { vi } from 'vitest'

const generateMockContent = vi.fn()

vi.mock('@google/generative-ai', () => {
  return {
  GoogleGenerativeAI:vi.fn(() => ({
    getGenerativeModel: vi.fn(() => ({
      generateContent: generateMockContent
    }))
  }))
}
})

//Server load after AI service on import
import request from 'supertest'
import server from '../../../server/server'

describe.skip('AI Service (server-side)', () => {

beforeEach(() => {
  vi.clearAllMocks();
});

  test('returns valid AI review for movie', async () => {
    generateMockContent.mockResolvedValue({
    response: {
      text: () => 
        JSON.stringify({
        content: 'Fighting crime grim-darkly',
        rating: 1
        })
    }
  })

  const response = await request(server)
  .post('/api/v1/critic')
  .send({
    movieTitle: 'Batman',
    reviewText: 'Fighting crime grim-darkly',
    persona: 'snarky'
  })

  expect(response.status).toBe(200)
  expect(response.body).toHaveProperty('content')
  expect(response.body.content).toEqual('Fighting crime grim-darkly')
  expect(response.body.rating).toBe(3)
  })



  test('returns empty AI response gracefully', async () => {
    generateMockContent.mockResolvedValue({
      response: {
      text: () => 
        JSON.stringify({
        content: 'No movie data returned',
        rating: null
        })
    }
  })

  const response = await request(server)
  .post('/api/v1/critic')
  .send({
    movieTitle: '',
    reviewText: '',
    persona: ''
  })  
    
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('content', 'No movie data returned')
    expect(response.body).toHaveProperty('rating', null)
  })


  
  test('handles AI error', async () => {
    generateMockContent.mockRejectedValue(new Error('AI error'))

    const response = await request(server)
    .post('/api/v1/critic')
    .send({
      movieTitle: 'Error',
      reviewText: 'Testing 123',
      persona: 'snarky'
    })  
    
    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty('error', 'Failed to create AI review')
  })


  //Also covered in config.ts check
  test('handles missing key', async () => {
    delete process.env.GEMINI_API_KEY

    const response = await request(server)
    .post('/api/v1/critic')
    .send({
      movieTitle: 'No key today',
      reviewText: 'Nope, missing key',
      persona: 'snarky'
    })

    expect(response.status).toBe(500)
    expect(response.body).toHaveProperty('error', 'API key not configured')
  })
})