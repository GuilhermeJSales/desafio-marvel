import { useContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { Link } from 'react-router'
import styles from './heros.module.css'
import { Heart } from '../../../components/heart'
import { Loader } from '../../../components/loader'
import { FilterFavorites } from '../filters/filterFavorites'
import HerosContext from '../../../context/HerosContext'
import heroi from '../../../assets/icones/heroi/noun_Superhero_2227044.png'
import heroi1 from '../../../assets/icones/heroi/noun_Superhero_2227044@1,5x.svg'
import heroi2 from '../../../assets/icones/heroi/noun_Superhero_2227044@2x.png'
import heroi3 from '../../../assets/icones/heroi/noun_Superhero_2227044@3x.png'
import { ToggleSwitch } from '../filters/ToggleSwitch'

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
  const { favorites } = useContext(HerosContext)
  const [loading, setLoading] = useState(true)
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  const [sortAZ, setSortAZ] = useState(false)

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

  const baseHeros = showOnlyFavorites ? favorites : heros

  const filteredHeros = sortAZ
    ? [...baseHeros].sort((a, b) => a.name.localeCompare(b.name))
    : baseHeros

  if (loading) {
    return <Loader />
  }

  return (
    <section>
      <div className={styles.filtersCol}>
        <span className={styles.heroNumber}>
          Encontrados {filteredHeros.length} heróis
        </span>

        <div className={styles.filtersContainer}>
          <div className={styles.buttonSort}>
            <img
              src={heroi}
              srcSet={`${heroi1} 1.5x, ${heroi2} 2x, ${heroi3} 3x`}
              alt="Imagem - Favoritos"
            />
            <span>{sortAZ ? 'Ordem padrão' : 'Ordenar por nome A-Z'}</span>
          </div>
          <ToggleSwitch setSortAZ={setSortAZ} sortAZ={sortAZ} />
          <FilterFavorites
            showOnlyFavorites={showOnlyFavorites}
            toggleShowOnlyFavorites={() =>
              setShowOnlyFavorites(!showOnlyFavorites)
            }
          />
        </div>
      </div>
      <article className={styles.hero}>
        {filteredHeros.map((hero) => (
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
