import { createContext, useContext, useState } from 'react'

interface LoadingContextType {
  loading: boolean
  setLoading: (value: boolean) => void
}

const LoadingContext = createContext({} as LoadingContextType)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  return useContext(LoadingContext)
}
