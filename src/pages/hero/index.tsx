import { Container } from '../../components/container'
import { HeroHeader } from './header'
import { HeroPage } from './heroPage'
import styles from './hero.module.css'

export function Hero() {
  return (
    <div className={styles.bg}>
      <Container>
        <HeroHeader />
        <main className={styles.herosPage}>
          <HeroPage />
        </main>
      </Container>
    </div>
  )
}
