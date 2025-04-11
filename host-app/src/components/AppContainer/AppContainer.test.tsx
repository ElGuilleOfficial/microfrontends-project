import { describe, it, expect, vi } from 'vitest'
import { render, RenderResult } from '@testing-library/react'
import React from 'react'
import AppContainer from './index'

// Mock de los componentes hijos
vi.mock('../Header/Index', () => ({
  default: (): React.ReactElement => <div data-testid="header">Header Component</div>,
}))

vi.mock('../Body/Index', () => ({
  default: (): React.ReactElement => <div data-testid="body">Body Component</div>,
}))

describe('AppContainer Component', () => {
  it('renders Header and Body components', () => {
    const { getByTestId }: RenderResult = render(<AppContainer />)
    
    // Verificar que se rendericen los componentes Header y Body
    expect(getByTestId('header')).toBeInTheDocument()
    expect(getByTestId('body')).toBeInTheDocument()
  })
}) 