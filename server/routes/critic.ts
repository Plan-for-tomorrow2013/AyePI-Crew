import express from 'express'
import { generateAiReview } from '../utils/aiService'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const { movieTitle, reviewText, persona } = req.body
    
    console.log(`[Server] Generating review for: ${movieTitle} as ${persona}`)

    const aiResult = await generateAiReview(movieTitle, reviewText, persona)
    res.json(aiResult)

  } catch (error: any) {
    console.error('[Server Error]:', error)
    res.status(500).json({
      error: 'Failed to generate AI review',
      details: error.message,
    })
  }
})

export default router
