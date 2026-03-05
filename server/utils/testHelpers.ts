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
