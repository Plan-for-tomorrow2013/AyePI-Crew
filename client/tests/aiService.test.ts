
{/*{ getAIResponse } from '../utils/aiService'
jest.mock('../utils/aiService')


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
      render(<AIPage loading={true} />)
      expect(screen.getByTestId('loading')).toBeVisible()
    })

    test('displays error message', () => {
      render(<AIPage error="AI failed" />)
      expect(screen.getByText(/ai failed/i)).toBeVisible()
    })

    test('displays AI response', () => {
      render(<AIPage results={[{ text: 'Hello AI' }]} />)
      expect(screen.getByText(/Hello AI/i)).toBeVisible()
    })

    test('handles empty AI response gracefully', () => {
      render(<AIPage results={[]} />)
      expect(screen.getByText(/no results found/i)).toBeVisible()
    })

  })

 
})

import { render } from '@testing-library/react'
import React, { ReactElement } from 'react'

interface RenderWithStateProps {
  component: ReactElement
  loading?: boolean
  error?: string | null
  results?: any[]
}

export function renderWithState({
  component,
  loading = false,
  error = null,
  results = []
}: RenderWithStateProps) {
  return render(
    React.cloneElement(component, { loading, error, results })
  )
}

  */}