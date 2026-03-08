import { vi, beforeEach, describe, test, expect} from 'vitest'
import type { Mock } from 'vitest'
import request from 'supertest'
import { generateAiReview } from '../../../server/utils/aiService'
import { searchMovies } from '../../../server/utils/movieService'
import app from '../../components/App'

/*
  API Route Tests (Client side):

  - Validate route returns data
  - Validate missing parameters return 400
  - Validate empty responses
  - Mocked services to avoid real API calls
*/
import * as aiService from '../../../server/utils/aiService'
import * as movieService from '../../../server/utils/movieService'

vi.mock('../../../server/utils/aiService', () => ({
  getAIResponse:vi.fn(),
}))
vi.mock('../../../server/utils/movieService', () => ({
  getMovieResponse:vi.fn(),
  searchMovies: vi.fn(),
  getReviews: vi.fn(),
}))


const mockedGetAIResponse = aiService.generateAiReview as unknown as Mock
const mockedSearchMovies = movieService.searchMovies as unknown as Mock
const mockedGetReviews = movieService.getReviews as unknown as Mock

describe.skip('API Routes (Client tests)', () => {
   beforeEach(() => {
    vi.clearAllMocks()
  })

//AI ROUTES  
  test('GET /api/v1/ai returns data', async () => {
    mockedGetAIResponse.mockResolvedValue({ text: 'Hello' })
    const res = await request(app).get(`/api/v1/ai?input=test`)
    expect(res.status).toBe(200)
    expect(res.body.text).toBe('Hello')
})

  test('GET /api/v1/ai missing input returns 400', async () => {
    const res = await request(app).get('/api/v1/ai')
    expect (res.status).toBe(400)
  })

//MOVIE ROUTES  
  test('GET /api/v1/movies returns movie data', async () => {
    mockedSearchMovies.mockResolvedValue({ title: 'Batman' })
    const res = await request(app).get(`/api/v1/movies?query=Batman`)
    expect(res.status).toBe(200)
    expect(res.body[0].title).toBe('Batman')
})

  test('GET /api/v1/movies empty results', async () => {
     mockedSearchMovies.mockResolvedValue([])
    const res = await request(app).get(`/api/v1/movies?query=UnknownMovie`)
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(0)
  })

  test('GET /api/v1/movies missing input returns 400', async () => {
    const res = await request(app).get('/api/v1/movies')
    expect (res.status).toBe(400)
  })

//REVIEWS ROUTES  
  test('GET /api/v1/reviews returns review data', async () => {
    const mockReviews = [{ content: 'Fabulous' }]
    mockedGetReviews.mockResolvedValue(mockReviews)
    const res = await request(app).get(`/api/v1/reviews?query=99`)
    expect(res.status).toBe(200)
    expect(res.body[0].content).toBe('Fabulous')
})

  test('GET /api/v1/reviews empty results', async () => {
  mockedGetReviews.mockResolvedValue([])
  const res = await request(app).get(`/api/v1/reviews?query=UnknownMovie`)
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(0)
  })

  test('GET /api/v1/reviews missing input returns 400', async () => {
  const res = await request(app).get('/api/v1/reviews')
  expect (res.status).toBe(400)
  })
})