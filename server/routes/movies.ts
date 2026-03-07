import express from 'express'
import request from 'superagent'
import 'dotenv/config'
import { normaliseMovie, normaliseMovies } from '../utils/normalise'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const response = await request
      .get('https://api.themoviedb.org/3/trending/movie/day')
      .set('Authorization', `Bearer ${process.env.TMDB_READACCESS_TOKEN}`)
    
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
    const response = await request
      .get(`https://api.themoviedb.org/3/movie/${id}`)
      .set('Authorization', `Bearer ${process.env.TMDB_READACCESS_TOKEN}`)
    
    // Normalise the single movie object
    const normalised = normaliseMovie(response.body)
    res.json(normalised) 
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch movie details' })
  }
})

export default router
