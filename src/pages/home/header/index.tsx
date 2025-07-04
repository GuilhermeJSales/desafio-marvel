import group from '../../../assets/logo/Group.png'
import group1 from '../../../assets/logo/Group@1,5x.svg'
import group2 from '../../../assets/logo/Group@2x.png'
import group3 from '../../../assets/logo/Group@3x.png'
import styles from './header.module.css'

export function HomeHeader() {
  return (
    <header className={styles.header}>
      <img
        src={group}
        srcSet={`${group} 1x, ${group1} 1.5x, ${group2} 2x, ${group3} 3x`}
        alt="Logo - Marvel search heroes"
      />
      <div>
        <h1>Explore o universo</h1>
        <p>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </p>
      </div>
    </header>
  )
}
