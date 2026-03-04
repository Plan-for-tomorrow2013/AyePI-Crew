{/*{ getMovieResponse } from '../utils/movieService'
jest.mock('../utils/movieService')
import { Movie, Review } from '../models/TMDB.ts'
import MoviePage from '../pages/MoviePage'
import { render, screen } from '@testing-library/react'


TESTS

Movie service returns expected data

const mockMovies = [
  { id: 1, title: 'Inception', releaseDate: '2010', overview: 'A mind-bending thriller.' },
  { id: 2, title: 'Highlander', releaseDate: '1986', overview: 'Fighting with style.' },
]

const mockReviews = [
  { id: 'r1', author: 'Alice', content: 'Amazing movie!' },
  { id: 'r2', author: 'Bob', content: 'Pretty good.' },
]


describe('MoviePage component', () => {
  
beforeEach(() => {
    jest.clearAllMocks()
  })

test ('renders search input', async () => {
  render(<MoviePage loading={false} error={null} movies={[]} reviews={[]} />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('shows loading state', () =>{
  render(<MoviePage loading={true} results={[]} error={null} reviews={[]} />)
  expect(screen.getByTestId('loading')).toBeVisible()
})

test('hides loading state when not loading', () => {
    render(<MoviePage loading={false} error={null} movies={[]} reviews={[]} />)
    expect(screen.queryByTestId('loading')).toBeNull()
})

test('displays error message', () => {
  render(<MoviePage loading={false} results={[]} error="Failed to fetch" reviews={[]} />)
  expect(screen.getByText(/failed to fetch/i)).toBeVisible()
})

test('renders empty movie results when no error', () => {
  render(<MoviePage loading={false} results={[]} error={null} review={[]} />)
  expect(screen.getByText(/no movies found/i)).toBeVisible()
})

test('renders empty review results when no error', () => {
  render(<MoviePage loading={false} results={[]} error={null} review={[]} />)
  expect(screen.getByText(/no results found/i)).toBeVisible()
})

test ('renders movie results when available', async () =>{
  render(<MoviePage loading={false} movies={mockMovies} reviews={[]} error={null />})
  mockResults.forEach(movie=> {
  expect(screen.getByText(movie.title)).toBeVisible()
  expect(screen.getByText(movie.releaseDate)).toBeVisible()
  expect(screen.getByText(movie.overview)).toBeVisible()
  })
})

test ('renders review results when available', async () =>{
  render(<MoviePage loading={false} movies={[]} reviews={mockReviews} error={null />})
  mockResults.forEach(review=> {
  expect(screen.getByText(review.author)).toBeVisible()
  expect(screen.getByText(review.content)).toBeVisible()
  })
})

  test('displays both movies and reviews together', () => {
    render(<MoviePage loading={false} error={null} movies={mockMovies} reviews={mockReviews} />)
    mockMovies.forEach(movie => expect(screen.getByText(movie.title)).toBeVisible())
    mockReviews.forEach(review => expect(screen.getByText(review.content)).toBeVisible())
  })
})


})

*/}