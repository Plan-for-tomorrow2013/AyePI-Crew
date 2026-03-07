import request from 'superagent'
import { AiResponse } from '../../interface/AiResponse'
    
const rootURL = new URL('/api/v1', document.baseURI)
    
export async function getCritic(
       movieTitle: string,
       reviewText: string,
       persona: string = 'snarky'
    ): Promise<AiResponse> {
      const res = await request
        .post(`${rootURL}/critic`)
        .send({ movieTitle, reviewText, persona })
 
return res.body as AiResponse
}