import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Index'

// Mock del hook useSwitchLanguage con una función de seguimiento
const mockSwitchAllLanguages = vi.fn()
vi.mock('../../hooks/useSwitchLanguage', () => ({
  default: () => ({
    switchAllLanguages: mockSwitchAllLanguages,
    switchHostLanguage: vi.fn(),
    switchAppRickLanguage: vi.fn(),
    switchAppHpLanguage: vi.fn(),
  }),
}))

// Mock del hook de useTranslation
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en',
      changeLanguage: vi.fn(),
    },
  }),
}))

describe('Header Component', () => {
  it('renders correctly', () => {
    render(<Header />)
    
    // Verificar que el texto del título esté presente
    expect(screen.getByText(/N5 Microfrontends/i)).toBeInTheDocument()
    
    // Verificar que el botón de cambio de idioma esté presente
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('changes language when button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    
    // Buscar el botón de idioma
    const languageButton = screen.getByRole('button')
    
    // Hacer clic en el botón de cambio de idioma
    await user.click(languageButton)
    
    // Verificar que se llame a la función para cambiar idioma
    expect(mockSwitchAllLanguages).toHaveBeenCalled()
  })
}) 