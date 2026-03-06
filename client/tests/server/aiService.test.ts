// @vitest-environment node
import { getAIResponse } from '../../server/utils/aiService'

vi.mock('../../server/utils/http')

describe.skip('AI Service (server-side)', () => {

beforeEach(() => {
  vi.clearAllMocks();
});

  test('returns valid AI response', async () => {
    (http.getJSON as vi.Mock).mockResolvedValue({
    text: 'Hello AI', 
    arbitrary value: 0.9 
    })

    const result = await getAIResponse('test input')
    
    expect(result).toHaveProperty('text', 'Hello AI')
    expect(result).toHaveProperty('some arbitrary value', 0.9)
  })

  test('returns empty AI response gracefully', async () => {
    (http.getJSON as vi.Mock).mockResolvedValue({ text: '', rating: 0 })
    const result = await getAIResponse('empty input')
    expect(result.text).toBe('')
    expect(result.rating).toBe(0)
  })

  test('handles API/network errors', async () => {
    (http.getJSON as vi.Mock).mockRejectedValue
    (new Error('Network failed')
    )
    await expect(getAIResponse('fail input'))
    .rejects
    .toThrow('Network failed')
  })
})