import request from 'supertest'
import app from '../app'

{/*
  ROUTER TESTS:

  Route returns correct data
  Missing parameters handled properly
  Status codes correct
  Mocked services so tests don’t depend on real API

import * as aiService from '../utils/aiService'
import * as movieService from '..utils/movieService'

jest.mock('../utils/aiService')
jest.mock('../utils/movieService')

describe('API Routes', () => {
test('GET /api/v1/ai returns data', async () => (
(aiService.getAIResponse as jest.Mock).mockResolvedValue({ text: 'Hello' })
const res = await request(app).get(`/api/v1/ai?input=test`)
expect(res.status).toBe(200)
expect(res.body.text).toBe('Hello')
))

test('GET /api/v1/ai missing input returns 400', async () => {
const res = await request(app).get('/api/v1/ai')
expect (res.status).toBe(400)
})

test('GET /api/v1/movies returns movie data', async () => (
(movieService.searchMovies as jest.Mock).mockResolvedValue({ title: 'Batman' })
const res = await request(app).get(`/api/v1/movies?query=Batman`)
expect(res.status).toBe(200)
expect(res.body[0].title).toBe('Batman')
))

test('GET /api/v1/movies empty results', async,() => {
(movieService.searchMovies as jest.Mock).mockResolvedValue([])
const res = await request(app).get(`/api/v1/movies?query=UnknownMovie`)
expect(res.status).toBe(200)
expect(res.body).toHaveLength(0)
})

test('GET /api/v1/movies missing input returns 400', async () => {
const res = await request(app).get('/api/v1/movies')
expect (res.status).toBe(400)
})

test('GET /api/v1/reviews returns review data', async () => (
(movieService.getReviews as jest.Mock).mockResolvedValue({ movieId: '99' })
const res = await request(app).get(`/api/v1/movies?query=99`)
expect(res.status).toBe(200)
expect(res.body[0].content).toBe('Fabulous')
))

test('GET /api/v1/movies empty results', async,() => {
(movieService.getReviews as jest.Mock).mockResolvedValue([])
const res = await request(app).get(`/api/v1/movies?query=UnknownMovie`)
expect(res.status).toBe(200)
expect(res.body).toHaveLength(0)
})

test('GET /api/v1/reviews missing input returns 400', async () => {
const res = await request(app).get('/api/v1/movies')
expect (res.status).toBe(400)
})

//Unsure of api pathing. Abstract loading,error
import render from @testing-library/react
import React, {react element} from 'react'

Interface RenderWithStateProps {
component: ReactElement
loading?: boolean
error?: boolean
results?: any[]
}

export function renderWithState({
component,
loading = false,
error=null,
results =[]}
: RenderWithStateProps){
return render (
React.cloneElement(component, {loading,error,results })
)
}

OR

interface RenderPropsOpts {
component: ReactElement
props?: Record<string,any}
}

export function renderWithProps({ component, props = {} }: RenderWithPropsOptions) {
  return render(
    React.cloneElement(component, { ...props })
  )
}



e.g. 
  test('shows error message', () => {
    renderWithState({ component: <MoviePage />, error: 'Failed to fetch' })
    expect(screen.getByText(/failed to fetch/i)).toBeVisible()
  })


    test('displays movie data', () => {
    renderWithState({ component: <MoviePage />, results: [{ title: 'Inception', year: 2010 }] })
    expect(screen.getByText(/Inception/i)).toBeVisible()
    expect(screen.getByText(/2010/i)).toBeVisible()


  */}