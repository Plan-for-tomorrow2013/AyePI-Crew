
{/*{ getAIResponse } from '../utils/aiService'
jest.mock('../utils/aiService')


  TESTS
AI service returns expected data

test ('returns AI response successfully', async () => {
(getAIResponse as jest.Mock).mockResolvedValue({ text: 'Hello'})
const result = await getAIResponse('input text')
expect (result.text).toBe('Hello')
})

test('handles AI API error', async () => {
(getAIResponse as jest.Mock).mockResolvedValue(new Error ('Failed'))
await expect(getAIResponse('fail')).rejects.toThrow('Failed')
})
 
Handles API/network errors??
Optional: edge cases for empty input??


  */}