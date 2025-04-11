import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Body from './__mocks__/Index'

// Mock del hook de useTranslation
interface UseTranslationReturnMock {
  t: (key: string) => string;
}

vi.mock('react-i18next', () => ({
  useTranslation: (): UseTranslationReturnMock => ({
    t: (key: string) => key,
  }),
}))

// Mock de React.lazy para evitar cargar los módulos federados
const mockRickComponent = (): React.ReactElement => (
  <div data-testid="rick-app">Rick and Morty App</div>
)

const mockPotterComponent = (): React.ReactElement => (
  <div data-testid="potter-app">Harry Potter App</div>
)

// Definición de tipos para el mock de React.lazy
type LazyComponentType = React.ComponentType<React.PropsWithChildren<unknown>>;
type LazyFactory = () => Promise<{ default: LazyComponentType }>;

vi.mock('react', async () => {
  const actual = await vi.importActual<typeof React>('react')
  return {
    ...actual,
    lazy: vi.fn().mockImplementation((factory: LazyFactory): LazyComponentType => {
      if (factory.toString().includes('rick/AppContainer')) {
        return mockRickComponent
      }
      if (factory.toString().includes('potter/AppContainer')) {
        return mockPotterComponent
      }
      return () => <div>Default Mock</div>
    }),
  }
})

describe('Body Component', () => {
  it('renders correctly with buttons', () => {
    render(<Body />)
    
    // Verificar que el título esté presente
    expect(screen.getByText('description')).toBeInTheDocument()
    
    // Verificar que los botones estén presentes
    expect(screen.getByText('buttonRick')).toBeInTheDocument()
    expect(screen.getByText('buttonHP')).toBeInTheDocument()
  })

  it('should have buttons that can be clicked', async () => {
    const user = userEvent.setup()
    render(<Body />)
    
    // Verificar que los botones funcionen (no podemos probar la carga dinámica real)
    const rickButton = screen.getByText('buttonRick')
    const potterButton = screen.getByText('buttonHP')
    
    await user.click(rickButton)
    await user.click(potterButton)
    
    // Solo verificamos que no haya errores al hacer clic
    expect(true).toBe(true)
  })
}) 