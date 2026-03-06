import { render } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from'@tanstack/react-query'

interface RenderWithStateProps {
  component: ReactElement
  loading?: boolean
  error?: string | null
  results?: any[]
}

interface RenderWithStateAndQueryClientProps extends RenderWithStateProps {
  options?: Omit<RenderOptions, 'wrapper'>
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