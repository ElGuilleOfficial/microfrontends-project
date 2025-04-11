import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import AppContainer from './index'

// Mock de los componentes hijos
vi.mock('../Header/Index', () => ({
  default: () => <div data-testid="header">Header Component</div>,
}))

vi.mock('../Body/Index', () => ({
  default: () => <div data-testid="body">Body Component</div>,
}))

describe('AppContainer Component', () => {
  it('renders Header and Body components', () => {
    const { getByTestId } = render(<AppContainer />)
    
    // Verificar que se rendericen los componentes Header y Body
    expect(getByTestId('header')).toBeInTheDocument()
    expect(getByTestId('body')).toBeInTheDocument()
  })
}) 