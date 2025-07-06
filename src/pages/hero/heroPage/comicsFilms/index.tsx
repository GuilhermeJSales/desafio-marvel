import styles from './comicsFilms.module.css'
import iconComics from '../../../../assets/icones/book/Group.png'
import iconComics1 from '../../../../assets/icones/book/Group@1,5x.svg'
import iconComics2 from '../../../../assets/icones/book/Group@2x.png'
import iconComics3 from '../../../../assets/icones/book/Group@3x.png'
import iconFilms from '../../../../assets/icones/video/Shape.png'
import iconFilms1 from '../../../../assets/icones/video/Shape@1,5x.svg'
import iconFilms2 from '../../../../assets/icones/video/Shape@2x.png'
import iconFilms3 from '../../../../assets/icones/video/Shape@3x.png'

interface ComicsFilmsProps {
  available: number
}

export function ComicsFilms({ available }: ComicsFilmsProps) {
  return (
    <div className={styles.ComicsFilms}>
      <div>
        <h3 className={styles.infosTitles}>Quadrinhos</h3>
        <div className={styles.comics}>
          <img
            src={iconComics}
            srcSet={`${iconComics1} 1.5x, ${iconComics2} 2x, ${iconComics3} 3x`}
            alt="Icone - Quadrinhos"
            style={{ width: '35px', height: '35px' }}
          />
          <p className={styles.infosText}>{available}</p>
        </div>
      </div>

      <div>
        <h3 className={styles.infosTitles}>Filmes</h3>
        <div className={styles.comics}>
          <img
            src={iconFilms}
            srcSet={`${iconFilms1} 1.5x, ${iconFilms2} 2x, ${iconFilms3} 3x`}
            alt="Icone - Filmes"
            style={{ width: '35px', height: '35px' }}
          />
          <p className={styles.infosText}>{available}</p>
        </div>
      </div>
    </div>
  )
}
