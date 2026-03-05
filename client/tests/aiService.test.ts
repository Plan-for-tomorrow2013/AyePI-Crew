import { RenderWithState } from '../../utils/testHelpers'

{/*{ getAIResponse } from '../utils/aiService'
jest.mock('../utils/aiService')

import testHelpers.ts

  TESTS
AI service returns expected data

describe('AI service', () =>{
 beforeEach(() => {
    jest.clearAllMocks()
  })


    test('renders input box', () => {
      render(<AIPage />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    test('shows loading state', () => {
      renderWithState({component: <AIPage />, loading: true />)
      expect(screen.getByTestId('loading')).toBeVisible()
    })

    test('displays error message', () => {
      renderWithState({component: <AIPage />, error: "AI call failed" />)
      expect(screen.getByText(/ai call failed/i)).toBeVisible()
    })

    test('displays AI response', () => {
      renderWithState({component: <AIPage /> results: [{ text: 'Hello AI' }] })
      expect(screen.getByText(/Hello AI/i)).toBeVisible()
    })

    test('handles empty AI response gracefully', () => {
      renderWithState({component: <AIPage /> results: {[]} })
      expect(screen.getByText(/no results found/i)).toBeVisible()
    })

  })

 
})


  */}