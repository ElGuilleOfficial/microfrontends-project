import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import AppContainer from './components/AppContainer/Index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContainer/>
  </StrictMode>
)
