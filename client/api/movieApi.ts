import request from 'superagent'
import Movie from '../../interface/Movie'


export async function getMovies() {
  const response = await request.get(`${rootURL}/movie`)
  return response.body as Movie[]
}