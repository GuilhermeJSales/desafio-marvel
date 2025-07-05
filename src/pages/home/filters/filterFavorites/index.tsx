import fav from '../../../../assets/icones/heart/fav.svg'
import fav1 from '../../../../assets/icones/heart/fav@1,5x.png'
import fav2 from '../../../../assets/icones/heart/fav@2x.png'
import fav3 from '../../../../assets/icones/heart/fav@3x.png'
import styles from './filterFavorites.module.css'

interface FavoriteProps {
  showOnlyFavorites: boolean
  toggleShowOnlyFavorites: () => void
}

export function FilterFavorites({
  showOnlyFavorites,
  toggleShowOnlyFavorites,
}: FavoriteProps) {
  return (
    <button className={styles.button} onClick={toggleShowOnlyFavorites}>
      <img
        src={fav}
        srcSet={`${fav1} 1.5x, ${fav2} 2x, ${fav3} 3x`}
        alt="Imagem - Favoritos"
      />
      <span>{showOnlyFavorites ? 'Ver Todos' : 'Somente Favoritos'}</span>
    </button>
  )
}
