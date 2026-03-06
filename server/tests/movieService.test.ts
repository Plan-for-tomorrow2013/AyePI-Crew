// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { App } from './App'
import { searchMovies, getReviews } from '../../server/utils/movieService'
import * as http from '../../server/utils/http'

  vi.mock('../../server/utils/http')


const mockAPIMovies = [
{
  id: 99,
  title: 'Batman',
  overview:'Fighting crime rather than using money to improve society',
  poster_path: 'I-am-a-poster-path',
  backdrop_path: null,
  release_date: '1989',
  vote_average: 4.5,
  vote_count: 1066,
  adult: false
}
]

const mockMovies = [
{
  id: 99,
  title: 'Batman',
  overview: 'Fighting crime rather than using money to improve society',
  posterURL: 'I-am-a-poster-path',
  releaseDate: '1989',
  voteAverage: 4.5,
  voteCount: 1066,
  }
]

const mockAPIReviews = [
{
  author: 'Kevin',
  content: 'Fabulous',
  id: '99a',
  url: 'direct-review-link',
}
]

const mockReviews = [
{
  author: 'Kevin',
  content: 'Fabulous',
  url: 'direct-review-link',
}
]

describe.skip('Movie Service (server-side)', () => {
    beforeEach(() => {
    vi.clearAllMocks()
  })

//MOVIES
  test('returns valid transformed movie response', async () => {
    (http.getJSON as vi.Mock).mockResolvedValue(mockAPIMovies)
    const result = await searchMovies('Batman')
    expect(result).toEqual(mockMovies)
  })

  test('returns empty movie response gracefully', async () => {
    ;(http.getJSON as vi.Mock).mockResolvedValue([])
    const result = await searchMovies('empty input')
    expect(result).toEqual([])
  })


  test('handles network errors', async () => {
    ;(http.getJSON as vi.Mock).mockRejectedValue
    (new Error('Network failed'))
    await expect(searchMovies('fail input'))
    .rejects
    .toThrow('Network failed')
  })

//REVIEWS
  test('returns valid transformed review response', async () => {
    ;(http.getJSON as vi.Mock).mockResolvedValue(mockAPIReviews)

    const result = await getReviews('99')
    expect(result).toEqual(mockReviews)
  })

  test('returns empty reviews response', async () => {
    ;(http.getJSON as vi.Mock).mockResolvedValue([])
    const result = await getReviews('empty input')
    expect(result).toEqual([]))
  })


  test('handles network errors on review failure', async () => {
    ;(http.getJSON as vi.Mock).mockRejectedValue
    (new Error('Network failed'))
    await expect(getReviews('fail input'))
    .rejects
    .toThrow('Network failed')
  })
