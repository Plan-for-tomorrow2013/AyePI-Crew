import { vi, describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import MovieCard from '../../components/MovieCard'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as aiClient from '../../api/aiClient'
import React from 'react'

vi.mock('../../api/aiClient', () => ({
  getCritic: vi.fn()
}))

const mockMovie = {
  id: 1,
  title: 'Test Movie',
  overview: 'Original Overview',
  posterUrl: 'http://test.com/image.jpg',
  releaseDate: '2021',
  rating: 8,
  voteCount: 100
}

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: { retry: false },
    mutations: { retry: false }
  }
})

describe('MovieCard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders original movie info initially', () => {
    const queryClient = createTestQueryClient()
    render(
      <QueryClientProvider client={queryClient}>
        <MovieCard movie={mockMovie} />
      </QueryClientProvider>
    )

    expect(screen.getByText('Test Movie')).toBeInTheDocument()
    expect(screen.getByText('Original Overview')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', mockMovie.posterUrl)
  })

  it('transforms overview when Alternate Commentary is clicked', async () => {
    const queryClient = createTestQueryClient()
    const mockAiResponse = {
      content: 'AI Generated Snarky Review',
      rating: 4
    }
    
    ;(aiClient.getCritic as vi.Mock).mockResolvedValue(mockAiResponse)

    render(
      <QueryClientProvider client={queryClient}>
        <MovieCard movie={mockMovie} />
      </QueryClientProvider>
    )

    const button = screen.getByText('Alternate Commentary')
    fireEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText('AI Generated Snarky Review')).toBeInTheDocument()
      expect(screen.getByText('AI Rating: 4/10')).toBeInTheDocument()
    })

    // Original overview should no longer be visible
    expect(screen.queryByText('Original Overview')).not.toBeInTheDocument()
  })

  it('shows loading state while generating', async () => {
    const queryClient = createTestQueryClient()
    
    // Delay the mock response
    ;(aiClient.getCritic as vi.Mock).mockImplementation(() => 
      new Promise(resolve => setTimeout(() => resolve({ content: 'Done' }), 100))
    )

    render(
      <QueryClientProvider client={queryClient}>
        <MovieCard movie={mockMovie} />
      </QueryClientProvider>
    )

    const button = screen.getByText('Alternate Commentary')
    
    // We don't await this, because we want to catch it in the loading state
    fireEvent.click(button)

    expect(await screen.findByText('Generating...')).toBeInTheDocument()
    expect(button).toBeDisabled()
  })
})
