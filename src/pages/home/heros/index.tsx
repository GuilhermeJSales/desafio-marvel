import { useEffect, useState } from 'react'
import styles from './heros.module.css'
import { Link } from 'react-router'
import { api } from '../../../services/api'
import { Loader } from '../../../components/loader'
import { Heart } from '../../../components/heart'

export interface HeroProps {
  id: number
  name: string
  description?: string
  thumbnail: {
    extension: string
    path: string
  }
}

export function HomeHeros() {
  const [heros, setHeros] = useState<HeroProps[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getHeros(offset = 0, limit = 20) {
      try {
        setLoading(true)
        const response = await api.get('characters', {
          params: { offset, limit },
        })
        const {
          data: { results },
        } = response.data

        setHeros(results)
      } catch (err) {
        console.error('Erro ao buscar:', err)
      } finally {
        setLoading(false)
      }
    }
    getHeros()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <section>
      <div className={styles.filtersCol}>
        <span className={styles.heroNumber}>
          Encontrados {heros.length} heróis
        </span>
      </div>
      <article className={styles.hero}>
        {heros.map((hero) => (
          <div key={hero.id}>
            <Link to={`/hero/${hero.id}`}>
              <img
                className={styles.thumb}
                src={`${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`}
                alt={`foto do ${hero.name}`}
              />
            </Link>

            <div className={styles.heroInfo}>
              <h3>{hero.name}</h3>
              <Heart hero={hero} />
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}
