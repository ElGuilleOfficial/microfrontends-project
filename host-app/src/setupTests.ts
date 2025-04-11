import '@testing-library/jest-dom'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Limpia automáticamente después de cada prueba
afterEach(() => {
  cleanup()
})