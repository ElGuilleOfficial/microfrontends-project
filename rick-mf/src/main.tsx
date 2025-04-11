import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n/index'
import AppContainer from './components/AppContainer/Index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>,
)
