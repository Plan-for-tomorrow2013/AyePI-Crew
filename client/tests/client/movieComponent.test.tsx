import { vi, describe, test, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import { renderWithState, renderWithStateAndQueryClient } from '../../../server/utils/testHelpers'
import { Movie } from '../../../interface/Movie'
import { Review } from '../../../interface/Review'
import App from '../../components/App'
import { render, screen } from '@testing-library/react'
import * as movieApi from '../../api/movieApi'


//  TESTS GEARED FOR MODULAR FUNCTIONS VS DIRECT API CALLS FROM APP


const mockMovies: Movie[] = [
  { id: 1, title: 'Inception', releaseDate: '2010', overview: 'A mind-bending thriller.' , posterUrl: '', rating: 8.7, voteCount: 342},
  { id: 2, title: 'Highlander', releaseDate: '1986', overview: 'Fighting with style.', posterUrl: '', rating: 6.5, voteCount: 288},
  { id: 99, title: 'Batman', releaseDate: '1989', overview: 'Epic man cave and unresolved childhood trauma.', posterUrl: '', rating: 9, voteCount: 560 },
]

const mockReviews: Review[] = [
  { id: 'r1', author: 'Alice', content: 'Amazing movie!', url:'' },
  { id: 'r2', author: 'Bob', content: 'Pretty good.', url: '' },
]


vi.mock('../api/movieApi', () =>({
  getMovies: vi.fn(),
}))


describe.skip('MoviePage component', () => {
  
beforeEach(() => {
    vi.clearAllMocks()
  })

test ('renders search input', () => {
  render(<App />)
  expect(screen.getByRole('textbox')).toBeInTheDocument()
})

test('shows loading state', () =>{
  renderWithState({component: <App />, loading: true})
  expect(screen.getByTestId('loading')).toBeVisible()
})

test('hides loading state when not loading', () => {
    renderWithState({component: <App />, loading: false})
    expect(screen.queryByTestId('loading')).toBeNull()
})

test('displays error message', () => {
  renderWithState({component: <App />, error: "Failed to fetch"})
  expect(screen.getByText(/There was an error retrieving the movies./i)).toBeVisible()
})

test('renders empty movie results when no error', () => {
  renderWithState({component: <App />, loading: false, results: [], error: null })
  expect(screen.getByText(/no movies found/i)).toBeVisible()
})

test('renders empty review results when no error', () => {
  renderWithStateAndQueryClient({component: <App />, loading: false, results: [], error: null})
  expect(screen.getByText(/no results found/i)).toBeVisible()
})

test ('renders movie results when available', () =>{
  renderWithStateAndQueryClient({component: <App />, loading: false, movies: mockMovies, reviews: [], error: null})
  mockMovies.forEach(movie=> {
  expect(screen.getByText(movie.title)).toBeVisible()
  expect(screen.getByText(movie.releaseDate)).toBeVisible()
  expect(screen.getByText(movie.overview)).toBeVisible()
  })
})

test ('renders review results when available', async () =>{
  renderWithStateAndQueryClient({component: <App />, loading: false, movies: [], reviews: mockReviews, error: null})
  mockReviews.forEach(review=> {
  expect(screen.getByText(review.author)).toBeVisible()
  expect(screen.getByText(review.content)).toBeVisible()
  })
})

  test('displays both movies and reviews together', () => {
    renderWithStateAndQueryClient({component: <App />, loading: false, error: null, movies: mockMovies, reviews: mockReviews})
    mockMovies.forEach(movie => expect(screen.getByText(movie.title)).toBeVisible())
    mockReviews.forEach(review => expect(screen.getByText(review.content)).toBeVisible())
  })
})

