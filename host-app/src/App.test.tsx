import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

// Mock del componente AppContainer
vi.mock('./components/AppContainer', () => ({
  default: () => <div data-testid="app-container">App Container Component</div>,
}))

describe('App Component', () => {
  it('renders AppContainer component', () => {
    const { getByTestId } = render(<App />)
    
    // Verificar que se renderice el componente AppContainer
    expect(getByTestId('app-container')).toBeInTheDocument()
  })
}) 