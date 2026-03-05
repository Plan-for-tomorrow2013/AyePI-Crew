import { RenderWithState } from '../../utils/testHelpers'
import { render, screen } from '@testing-library/react'

{/*
import AIPage from '../AIPage'


const mockAIResponse = {
  reviewId: 'rev1',
  content: 'This movie is basically two hours of explosions and questionable decisions.',
  rating: 5
}

  TESTS
AI component returns expected data

describe('AI page', () =>{
 beforeEach(() => {
    jest.clearAllMocks()
  })


    test('renders input box', () => {
      render(<AIPage />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    test('shows loading state', () => {
      renderWithState({component: <AIPage />, loading: true})
      expect(screen.getByTestId('loading')).toBeVisible()
    })

    test('displays error message', () => {
      renderWithState({component: <AIPage />, error: "AI call failed"})
      expect(screen.getByText(/ai call failed/i)).toBeVisible()
    })

    test('displays AI response', () => {
      renderWithState({component: <AIPage />, results: mockAIResponse })
      expect(screen.getByText(mockAIResponse.content)).toBeVisible()
      //expect(await screen.findByText(mockAIResponse.content)).toBeVisible() -structure if async
    })

    test('handles empty AI response gracefully', () => {
      renderWithState({component: <AIPage />, results: [] })
      expect(screen.getByText(/no results found/i)).toBeVisible()
    })

  })

 
})


  */}