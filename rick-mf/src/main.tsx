import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n/index'
import './index.css'
import AppContainer from './components/AppContainer/Index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>,
)
