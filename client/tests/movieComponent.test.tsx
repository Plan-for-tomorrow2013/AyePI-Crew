import { vi, describe, test, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import { renderWithStateAndQueryClient } from '../../server/utils/testHelpers'
import { Movie, Review } from '../models/TMDB.ts'
import App from '../components/App'
import { render, screen } from '@testing-library/react'
import * as movieApi from '../api/movieApi'


//  TESTS GEARED FOR MODULAR FUNCTIONS VS DIRECT API CALLS FROM APP


const mockMovies: Movie[] = [
  { id: 1, title: 'Inception', releaseDate: '2010', overview: 'A mind-bending thriller.' },
  { id: 2, title: 'Highlander', releaseDate: '1986', overview: 'Fighting with style.' },
  { id: 99, title: 'Batman', releaseDate: '1989', overview: 'Epic man cave and unresolved childhood trauma.' },
]

const mockReviews: Review[] = [
  { id: 'r1', author: 'Alice', content: 'Amazing movie!' },
  { id: 'r2', author: 'Bob', content: 'Pretty good.' },
]


vi.mock('../api/movieApi', () =>({
  getMovies: vi.fn(),
}))


describe.skip('MoviePage component', () => {
  
beforeEach(() => {
    vi.clearAllMocks()
  })

test ('renders search input', () => {
  renderWithStateAndQueryClient(<App />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('shows loading state', () =>{
  renderWithStateAndQueryClient({component: <App />, loading: true})
  expect(screen.getByTestId('loading')).toBeVisible()
})

test('hides loading state when not loading', () => {
    renderWithStateAndQueryClient({component: <App />, loading: false })
    expect(screen.queryByTestId('loading')).toBeNull()
})

test('displays error message', () => {
  renderWithStateAndQueryClient({component: <App />, error: "Failed to fetch"})
  expect(screen.getByText(/There was an error retrieving the movies./i)).toBeVisible()
})

test('renders empty movie results when no error', () => {
  renderWithStateAndQueryClient(<App loading={false} results={[]} error={null} review={[]} />)
  expect(screen.getByText(/no movies found/i)).toBeVisible()
})

test('renders empty review results when no error', () => {
  renderWithStateAndQueryClient(<App loading={false} results={[]} error={null} review={[]} />)
  expect(screen.getByText(/no results found/i)).toBeVisible()
})

test ('renders movie results when available', () =>{
  renderWithStateAndQueryClient(<App loading={false} movies={mockMovies} reviews={[]} error={null} />)
  mockMovies.forEach(movie=> {
  expect(screen.getByText(movie.title)).toBeVisible()
  expect(screen.getByText(movie.releaseDate)).toBeVisible()
  expect(screen.getByText(movie.overview)).toBeVisible()
  })
})

test ('renders review results when available', async () =>{
  renderWithStateAndQueryClient(<App loading={false} movies={[]} reviews={mockReviews} error={null} />)
  mockReviews.forEach(review=> {
  expect(screen.getByText(review.author)).toBeVisible()
  expect(screen.getByText(review.content)).toBeVisible()
  })
})

  test('displays both movies and reviews together', () => {
    renderWithStateAndQueryClient(<App loading={false} error={null} movies={mockMovies} reviews={mockReviews} />)
    mockMovies.forEach(movie => expect(screen.getByText(movie.title)).toBeVisible())
    mockReviews.forEach(review => expect(screen.getByText(review.content)).toBeVisible())
  })
})

