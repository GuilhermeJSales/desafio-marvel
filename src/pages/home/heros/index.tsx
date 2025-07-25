import { useContext, useEffect, useState } from 'react'
import { api } from '../../../services/api'
import styles from './heros.module.css'
import { Loader } from '../../../components/loader'
import { FilterFavorites } from '../filters/filterFavorites'
import HerosContext from '../../../context/HerosContext'
import heroi from '../../../assets/icones/heroi/noun_Superhero_2227044.png'
import heroi1 from '../../../assets/icones/heroi/noun_Superhero_2227044@1,5x.svg'
import heroi2 from '../../../assets/icones/heroi/noun_Superhero_2227044@2x.png'
import heroi3 from '../../../assets/icones/heroi/noun_Superhero_2227044@3x.png'
import { ToggleSwitch } from '../filters/ToggleSwitch'
import { SearchBar } from '../filters/searchBar'
import { useLoading } from '../../../context/LoadingContext'
import { Presentation } from './presentation'

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
  const { loading, setLoading } = useLoading()
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  const [sortAZ, setSortAZ] = useState(false)
  const [searchHero, setSearchHero] = useState('')

  useEffect(() => {
    async function getHeros() {
      try {
        setLoading(true)

        const response = await api.get('characters', {
          params: {
            nameStartsWith: searchHero || undefined,
            limit: 20,
          },
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

    const debounce = setTimeout(() => {
      getHeros()
    }, 500)

    return () => clearTimeout(debounce)
  }, [searchHero])

  const baseHeros = showOnlyFavorites ? favorites : heros

  const filteredHeros = sortAZ
    ? [...baseHeros].sort((a, b) => a.name.localeCompare(b.name))
    : baseHeros

  return (
    <section>
      <SearchBar searchHero={searchHero} onSearchChange={setSearchHero} />

      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.filtersCol}>
            <span className={styles.heroNumber}>
              Encontrados {filteredHeros.length} heróis
            </span>

            <div className={styles.filtersContainer}>
              <div className={styles.buttonSort}>
                <div className={styles.buttonSortContainer}>
                  <img
                    src={heroi}
                    srcSet={`${heroi1} 1.5x, ${heroi2} 2x, ${heroi3} 3x`}
                    alt="Imagem - Favoritos"
                  />
                  <span className={styles.buttonSortText}>
                    {sortAZ ? 'Ordem padrão' : 'Ordenar por nome A-Z'}
                  </span>
                </div>
                <ToggleSwitch setSortAZ={setSortAZ} sortAZ={sortAZ} />
              </div>

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
                <Presentation infos={hero} />
              </div>
            ))}
          </article>
        </>
      )}
    </section>
  )
}
