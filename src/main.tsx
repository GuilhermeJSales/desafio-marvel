import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './App'
import { HerosContextProvider } from './context/HerosContext'
import { LoadingProvider } from './context/LoadingContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoadingProvider>
      <HerosContextProvider>
        <RouterProvider router={router} />
      </HerosContextProvider>
    </LoadingProvider>
  </StrictMode>,
)
