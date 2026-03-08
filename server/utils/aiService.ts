import { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config'
import { buildPrompt, PromptType } from './promptBuilder'
import { AiResponse } from '../../interface/AiResponse'

const defaultModelName = 'models/gemini-2.5-flash'

export async function generateAiReview(
  movieTitle: string, 
  reviewText: string, 
  persona: string
): Promise<AiResponse> {
  const apiKey = process.env.GEMINI_API_KEY || ''

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set')
  }

  const genAI = new GoogleGenerativeAI(apiKey)
  const model = genAI.getGenerativeModel({ 
    model: defaultModelName,
    generationConfig: { responseMimeType: "application/json" }
  })

  const prompt = buildPrompt(persona as PromptType, movieTitle, reviewText)
  
  const result = await model.generateContent(prompt)
  const response = await result.response
  let text = response.text()

  // Gemini sometimes wraps JSON in markdown blocks
  text = text.replace(/```json/g, '').replace(/```/g, '').trim()

  return JSON.parse(text) as AiResponse
}
