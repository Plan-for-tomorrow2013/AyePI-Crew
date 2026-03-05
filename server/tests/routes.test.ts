{/* 
import request from 'supertest'
import app from '../..'
import * as movieService from '../..'
import * as aiService from '../..'

//Testing mock service, status codes, response passthrough, assert validation/500 

describe('API/Server Routes', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

//AI ROUTES
describe('Get /api/v1/ai', () => {

  test('GET /api/v1/ai returns AI data', async () => {
  (aiService.getAIResponse as jest.Mock)
  .mockResolvedValue({text: 'Hello AI'})

  const res = await request(app).get(`/api/v1/ai?input=test`)

  expect(res.status).toBe(200)
  expect(res.body.text).toBe('Hello AI')
  })

  test(`Get /api/v1/ai missing input returns 400`, async () => {
  const res = await request(app)
  .get('/api/v1/ai')
  expect(res.status).toBe(400)
  })

  test ('returns 500 if service throws', async () => {
  (aiService.getAIResponse as jest.Mock)
  .mockRejectedValue(new Error('Failure'))

  const res = await request(app)
  .get('/api/v1/ai?input=test)

  expect(res.status).toBe(500)
  expect(res.body).toHaveProperty('error')
  })
})


//MOVIE ROUTES
describe('GET /api/v1/movies', () => {

  test('returns movies from service', async () => {
  const mockMovie =[{id: 1, title: 'Batman'}]
  
  (movieService.searchMovies as jest.Mock)
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


  test(`Get /api/v1/movies server error returns 500`, async () => {
  (movieService.searchMovies as jest.Mock)
  .mockRejectedValue(new Error('Server failure'))

  const res = await request(app)
  .get('/api/v1/movies?query=Batman')

  expect(res.status).toBe(500)
  expect (res.body).toHaveProperty('error')
  })
})

//REVIEWS

describe ('GET /api/v1/reviews', () => {

  test('returns review data from service', async () => {
    const mockReview = [{author: 'Kevin', content: 'Fabulous'}]

    (movieService.getReviews as jest.Mock)
    .mockResolvedValue(mockReviews)

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
    (movieService.getReviews as jest.Mock)
    .mockRejectedValue(new Error('Server failure'))

    const res = await request(app)
      .get('/api/v1/reviews?movieId=99')

    expect(res.status).toBe(500)
    expect (res.body).toHaveProperty('error')
    })
  })
})


  */}