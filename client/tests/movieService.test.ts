{/*{ getMovieResponse } from '../utils/movieService'
jest.mock('../utils/movieService')
import { Movie, Review } from '../models/TMDB.ts'
import MoviePage from '../pages/MoviePage'
import { render, screen } from '@testing-library/react'


TESTS

//Movie test also handles loading, error, search checks which would be repeated in AI

Movie service returns expected data

describe('Movie review service', () => {
test ('renders search input', async () => {
  render(<MoviePage />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('shows loading state', () =>{
render(<MoviePage loading={true} />)
expect(screen.getByTestId('loading')).toBeVisible()
})

test('hides loading state when not loading', () =>{
render(<MoviePage loading={false} />)
expect(screen.getByTestId('loading')).toBeNull()
})


test('displays error message', () => {
render(<MoviePage error="Failed to fetch" />)
expect(screen.getByText(/failed to fetch/i)).toBeVisible()
})

test('handles empty search results', () => {
  render(<MoviePage results={[]} />)
  expect(screen.getByText(/no results found/i)).toBeVisible()
})

test('displays movie data', () =>{
render(<MoviePage...)
})

test('returns a valid movie response', async () => {
(getMovieResponse as jest.Mock).mockResovedValue({nnnn})
const result = await getMovieResponse('some input')
expect (result.toHaveProperty('text', 'nnnn'))
}) --MODELS? expect(screen.getByText(/Batman/i)).toBeVisible() etc.
  

test('returns a valid review response', async () => {
(getReviewResponse as jest.Mock).mockResovedValue({nnnn})
const result = await getReview('some input')
expect (result.toHaveProperty('text', 'nnnn'))
}) --MODELS? expect(screen.getByText(/Fabulous/i)).toBeVisible() etc.
  

)}



Optional: edge cases for empty input?? Maybe handled on app page.


  */}