import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

router.get('/', async (req, res) => {
  // console.log(process.env.TMDB_READACCESS_TOKEN)
  try {
  const response = await request
    .get('https://api.themoviedb.org/3/movie/11')
    .set('Authorization', `Bearer ${process.env.TMDB_READACCESS_TOKEN}`)
  res.json(response.body.results)
} catch (err) {
  res.status(500).json({ error: 'Failed to fetch movie'})
}
})



export default router
