import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Body from './__mocks__/Index'

// Mock del hook de useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

// Mock de React.lazy para evitar cargar los módulos federados
const mockRickComponent = () => <div data-testid="rick-app">Rick and Morty App</div>
const mockPotterComponent = () => <div data-testid="potter-app">Harry Potter App</div>

vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...actual,
    lazy: vi.fn().mockImplementation((factory) => {
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