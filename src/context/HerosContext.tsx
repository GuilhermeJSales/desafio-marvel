import { createContext, useEffect, useState, type ReactNode } from 'react'
import type { HeroProps } from '../pages/home/heros'

interface HerosContextProps {
  favorites: HeroProps[]
  toggleFavorite: (hero: HeroProps) => void
  isFavorite: (id: number) => boolean
}

const FAVORITES_KEY = 'favorites'

const HerosContext = createContext({} as HerosContextProps)

export function HerosContextProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<HeroProps[]>([])

  useEffect(() => {
    const saved = localStorage.getItem(FAVORITES_KEY)
    if (saved) setFavorites(JSON.parse(saved))
  }, [])

  function toggleFavorite(hero: HeroProps) {
    let updated: HeroProps[]
    if (favorites.some((favorite) => favorite.id === hero.id)) {
      updated = favorites.filter((fav) => fav.id !== hero.id)
    } else {
      if (favorites.length >= 5) {
        alert('Você só pode salvar até 5 favoritos')
        return
      }
      updated = [...favorites, hero]
    }

    setFavorites(updated)
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated))
  }

  function isFavorite(id: number) {
    return favorites.some((fav) => fav.id === id)
  }

  return (
    <HerosContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </HerosContext.Provider>
  )
}

export default HerosContext
