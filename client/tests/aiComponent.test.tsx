import { vi, describe, test, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import React from 'react'
import { renderWithStateAndQueryClient } from '../../server/utils/testHelpers'
import { render, screen } from '@testing-library/react'
import App from '../components/App'



const mockAIResponse = {
  reviewId: 'rev1',
  content: 'This movie is basically two hours of explosions and questionable decisions.',
  rating: 5
}

//  TESTS GEARED FOR MODULAR FUNCTIONS VS DIRECT API CALLS FROM APP


vi.mock('../api/aiApi', () => ({
  getAIResponse: vi.fn(() => Promise.resolve(mockAIResponse))
}))


describe.skip('AI component', () =>{
 beforeEach(() => {
    vi.clearAllMocks()
  })

    test('renders input box', () => {
      renderWithStateAndQueryClient(<App />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    test('shows loading state', () => {
      renderWithStateAndQueryClient({component: <App />, loading: true})
      expect(screen.getByTestId('loading')).toBeVisible()
    })

    test('displays error message', () => {
      renderWithStateAndQueryClient({component: <App />, error: "AI call failed"})
      expect(screen.getByText(/ai call failed/i)).toBeVisible()
    })

    test('displays AI response', () => {
      renderWithStateAndQueryClient({component: <App />, results: mockAIResponse })
      expect(await screen.findByText(mockAIResponse.content)).toBeVisible() 
    })

    test('handles empty AI response gracefully', () => {
      renderWithStateAndQueryClient({component: <App />, results: [] })
      expect(screen.getByText(/no results found/i)).toBeVisible()
    })

  })

 