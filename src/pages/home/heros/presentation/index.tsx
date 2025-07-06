import { Link } from 'react-router'
import { Heart } from '../../../../components/heart'
import styles from './presentation.module.css'

interface InfosProps {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface PresentationProps {
  infos: InfosProps
}

export function Presentation({ infos }: PresentationProps) {
  return (
    <>
      <Link to={`/hero/${infos.id}`}>
        <img
          className={styles.thumb}
          src={`${infos.thumbnail.path}/portrait_incredible.${infos.thumbnail.extension}`}
          alt={`foto do ${infos.name}`}
        />
      </Link>

      <div className={styles.heroInfo}>
        <h3>{infos.name}</h3>
        <Heart hero={infos} />
      </div>
    </>
  )
}
