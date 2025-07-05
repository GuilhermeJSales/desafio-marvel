import { Container } from '../../components/container'
import { HomeHeader } from './header'
import { HomeHeros } from './heros'
import styles from './home.module.css'

export default function Home() {
  return (
    <Container>
      <HomeHeader />
      <main className={styles.herosHome}>
        <HomeHeros />
      </main>
    </Container>
  )
}
