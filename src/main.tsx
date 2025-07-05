import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './App'
import { HerosContextProvider } from './context/HerosContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HerosContextProvider>
      <RouterProvider router={router} />
    </HerosContextProvider>
  </StrictMode>,
)
