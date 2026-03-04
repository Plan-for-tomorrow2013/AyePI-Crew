import request from 'superagent'
import Movie from '../../models/Movie'


export async function getMovies() {
  const response = await request.get(`${rootURL}/movie`)
  return response.body as Movie[]
}