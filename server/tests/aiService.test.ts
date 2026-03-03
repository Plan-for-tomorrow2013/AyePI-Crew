{/*
  import { getAIResponse } from '../../server/utils/aiService'
jest.mock('../../server/utils/aiService')

describe('AI Service (server-side)', () => {
  test('returns valid AI response', async () => {
    (getAIResponse as jest.Mock).mockResolvedValue({ text: 'Hello AI', arbitrary value: 0.9 })
    const result = await getAIResponse('test input')
    expect(result).toHaveProperty('text', 'Hello AI')
    expect(result).toHaveProperty('some arbitrary value', 0.9)
  })

  test('returns empty AI response gracefully', async () => {
    (getAIResponse as jest.Mock).mockResolvedValue({ text: '', rating: 0 })
    const result = await getAIResponse('empty input')
    expect(result.text).toBe('')
    expect(result.rating).toBe(0)
  })

  test('handles API/network errors', async () => {
    (getAIResponse as jest.Mock).mockRejectedValue(new Error('Network failed'))
    await expect(getAIResponse('fail input')).rejects.toThrow('Network failed')
  })
})
  */}