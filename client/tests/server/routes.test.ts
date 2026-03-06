// @vitest-environment node
import { vi, describe, test, beforeEach, expect } from 'vitest'
import request from 'supertest'
import app from '../..'
import * as movieService from '../..'
import * as aiService from '../..'

//Testing mock service, status codes, response passthrough, assert validation/500 

describe.skip('API/Server Routes', () => {

  beforeEach(() => {
    vi.clearAllMocks()
  })

//AI ROUTES
describe('Get /api/v1/ai', () => {

  test('returns AI data', async () => {
  (aiService.getAIResponse as vi.Mock)
  .mockResolvedValue({text: 'Hello AI'})
  const res = await request(app).get(`/api/v1/ai?input=test`)
  expect(res.status).toBe(200)
  expect(res.body.text).toBe('Hello AI')
  })

  test(`missing input returns 400`, async () => {
  const res = await request(app)
  .get('/api/v1/ai')
  expect(res.status).toBe(400)
  })

  test ('returns 500 if service throws', async () => {
  (aiService.getAIResponse as vi.Mock)
  .mockRejectedValue(new Error('Failure'))
  const res = await request(app)
  .get('/api/v1/ai?input=test')
  expect(res.status).toBe(500)
  expect(res.body).toHaveProperty('error')
  })
})


//MOVIE ROUTES
describe.skip('GET /api/v1/movies', () => {
  const mockMovie =[{id: 1, title: 'Batman'}]

  test('returns movies from service', async () => {
    (movieService.searchMovies as vi.Mock)
    .mockResolvedValue(mockMovies)
    const res = await request(app)
    .get('/api/v1/movies?query=Batman')
    expect (res.status).toBe(200)
    expect (res.body).toEqual(mockMovies)//Deep equality not reference equality (toBe)
  })


  test(`Get /api/v1/movies missing query returns 400`,() => {
    const res = await request(app)
    .get('/api/v1/movies')
    expect(res.status).toBe(400)
  })


  test(`server error returns 500`, async () => {
  (movieService.searchMovies as vi.Mock)
  .mockRejectedValue(new Error('Server failure'))
  const res = await request(app)
  .get('/api/v1/movies?query=Batman')
  expect(res.status).toBe(500)
  expect (res.body).toHaveProperty('error')
  })
})

//REVIEW ROUTES
describe.skip ('GET /api/v1/reviews', () => {
  const mockReview = [{author: 'Kevin', content: 'Fabulous'}]

  test('returns review data from service', async () => {  
    (movieService.getReviews as vi.Mock)
    .mockResolvedValue(mockReview)
    const res = await request(app)
    .get('/api/v1/reviews?movieId=99')
    expect (res.status).toBe(200)
    expect (res.body[0]).toEqual(mockReview)
  })

  test(`missing query returns 400`,async () => {
    const res = await request(app)
      .get('/api/v1/reviews')
    expect(res.status).toBe(400)
  })

  test(`returns 500 if server throws`,() => {
    (movieService.getReviews as vi.Mock)
    .mockRejectedValue(new Error('Server failure'))
    const res = await request(app)
    .get('/api/v1/reviews?movieId=99')
    expect(res.status).toBe(500)
    expect (res.body).toHaveProperty('error')
    })
  })
})
