import express from 'express'
import request from 'superagent'
import 'dotenv/config'
import { normaliseMovie, normaliseMovies } from '../utils/normalise'

const router = express.Router()
const tmdbBase = 'https://api.themoviedb.org/3'

function withTmdbAuth(req: request.SuperAgentRequest) {
  const token = process.env.TMDB_READACCESS_TOKEN
  const apiKey = process.env.TMDB_API_KEY

  if (token) return req.set('Authorization', `Bearer ${token}`)
  if (apiKey) return req.query({ api_key: apiKey })

  throw new Error('Missing TMDB credentials. Set TMDB_READACCESS_TOKEN or TMDB_API_KEY in .env')
}

router.get('/', async (req, res) => {
  try {
    const response = await withTmdbAuth(
      request.get(`${tmdbBase}/trending/movie/day`)
    )
    
    // Normalise the array of results
    const normalised = normaliseMovies(response.body.results)
    res.json(normalised) 
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch movies' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const response = await withTmdbAuth(
      request.get(`${tmdbBase}/movie/${id}`)
    )
    
    // Normalise the single movie object
    const normalised = normaliseMovie(response.body)
    res.json(normalised) 
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch movie details' })
  }
})

export default router
