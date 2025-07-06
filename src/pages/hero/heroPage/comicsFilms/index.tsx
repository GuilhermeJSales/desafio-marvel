import styles from './comicsFilms.module.css'
import iconComics from '../../../../assets/icones/book/Group.png'
import iconComics1 from '../../../../assets/icones/book/Group@1,5x.svg'
import iconComics2 from '../../../../assets/icones/book/Group@2x.png'
import iconComics3 from '../../../../assets/icones/book/Group@3x.png'
import iconFilms from '../../../../assets/icones/video/Shape.png'
import iconFilms1 from '../../../../assets/icones/video/Shape@1,5x.svg'
import iconFilms2 from '../../../../assets/icones/video/Shape@2x.png'
import iconFilms3 from '../../../../assets/icones/video/Shape@3x.png'
import starFilled from '../../../../assets/review/star.png'
import starEmpty from '../../../../assets/review/nostar.png'

interface ComicsFilmsProps {
  available: number
}

export function ComicsFilms({ available }: ComicsFilmsProps) {
  function getRatingFromComics(comicCount: number): number {
    if (comicCount > 1000) return 5
    if (comicCount > 500) return 4
    if (comicCount > 200) return 3
    if (comicCount > 100) return 2
    return 1
  }

  const rating = getRatingFromComics(available)
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? starFilled : starEmpty,
  )

  return (
    <article>
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

      <div className={styles.containerRating}>
        <h3 className={styles.ratingTitle}>Rating:</h3>
        <div className={styles.infosRating}>
          {stars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${i + 1} estrela`}
              width={20}
              height={20}
              className={styles.stars}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
