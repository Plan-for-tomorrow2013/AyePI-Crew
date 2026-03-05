import request from 'superagent'
import { Movie } from '../../interface/Movie'

const rootURL = new URL(`/api/v1`, document.baseURI)

export async function getMovies() {
  const response = await request.get(`${rootURL}/movies`)
  console.log('response from getMovies', response.body)
  return response.body as Movie[]
}