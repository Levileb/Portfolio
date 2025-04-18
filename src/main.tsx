import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home'
import ObserverProvider from './ObserverProvider';


createRoot(document.getElementById('root')!).render(
  <ObserverProvider> 
  <StrictMode>
    <Home />
  </StrictMode>
  </ObserverProvider>
)
