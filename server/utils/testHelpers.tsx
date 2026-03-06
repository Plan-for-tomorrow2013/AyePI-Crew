import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from'@tanstack/react-query'

interface RenderWithStateProps {
  component: ReactElement
  loading?: boolean
  error?: string | null
  results?: any[]
}

interface RenderWithStateAndQueryClientProps extends RenderWithStateProps {
  options?: Omit<RenderOptions, 'wrapper'>
  movies?: any[],
  reviews?: any[],
}


export function renderWithState({
  component,
  loading = false,
  error = null,
  results = []
}: RenderWithStateProps) {
  return React.cloneElement(component, { loading, error, results })
}

export function renderWithStateAndQueryClient({ 
  component, 
  loading = false,
  error = null,
  results = [],
  movies = [],
  reviews = [],
  options
}: RenderWithStateAndQueryClientProps) {
  const queryClient = new QueryClient()

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}</QueryClientProvider>
  )

  const elementWithState = React.cloneElement(component, { loading, error, results })

  return render(elementWithState, { wrapper: Wrapper, ...options })
}