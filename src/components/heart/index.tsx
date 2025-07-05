import styles from './heart.module.css'
import heart from '../../assets/icones/heart/heart.png'
import heart1 from '../../assets/icones/heart/heart@1,5x.svg'
import heart2 from '../../assets/icones/heart/heart@2x.png'
import heart3 from '../../assets/icones/heart/heart@3x.png'
import fav from '../../assets/icones/heart/fav.svg'
import fav1 from '../../assets/icones/heart/fav@1,5x.png'
import fav2 from '../../assets/icones/heart/fav@2x.png'
import fav3 from '../../assets/icones/heart/fav@3x.png'
import type { HeroProps } from '../../pages/home/heros'
import { useContext } from 'react'
import HerosContext from '../../context/HerosContext'

interface HeartProps {
  hero: HeroProps
}

export function Heart({ hero }: HeartProps) {
  const { isFavorite, toggleFavorite } = useContext(HerosContext)
  const favorite = isFavorite(hero.id)

  return (
    <button className={styles.button} onClick={() => toggleFavorite(hero)}>
      <img
        className={styles.heart}
        src={favorite ? fav : heart}
        srcSet={
          favorite
            ? `${fav1} 1.5x, ${fav2} 2x, ${fav3} 3x`
            : `${heart1} 1.5x, ${heart2} 2x, ${heart3} 3x`
        }
        alt="Imagem - Favoritos"
      />
    </button>
  )
}
