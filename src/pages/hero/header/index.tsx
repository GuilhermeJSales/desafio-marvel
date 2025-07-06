import { Link } from 'react-router'
import group from '../../../assets/logo/Group.png'
import group1 from '../../../assets/logo/Group@1,5x.svg'
import group2 from '../../../assets/logo/Group@2x.png'
import group3 from '../../../assets/logo/Group@3x.png'
import styles from './header.module.css'
import { SearchBarHero } from '../searchBar'

export function HeroHeader() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img
          src={group}
          className={styles.img}
          srcSet={`${group} 1x, ${group1} 1.5x, ${group2} 2x, ${group3} 3x`}
          alt="Logo - Marvel search heroes"
        />
      </Link>
      <div>
        <SearchBarHero />
      </div>
    </header>
  )
}
