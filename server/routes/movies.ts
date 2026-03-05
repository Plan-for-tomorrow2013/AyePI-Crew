import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

router.get('/', async (req, res) => {
  console.log(process.env.TMDB_READACCESS_TOKEN)

  try {
  const response = await request
    .get('https://api.themoviedb.org/3/trending/movie/day')
    .set('Authorization', `Bearer ${process.env.TMDB_READACCESS_TOKE}`)
  res.json(response.body.results)
} catch (err) {
  console.error(err)
  res.status(500).json({ error: 'Failed to fetch movies' })
}
})

export default router
