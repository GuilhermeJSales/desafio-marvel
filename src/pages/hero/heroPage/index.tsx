import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api } from '../../../services/api'
import { Loader } from '../../../components/loader'
import styles from './heroPage.module.css'
import { Heart } from '../../../components/heart'
import { ComicsFilms } from './comicsFilms'

interface HeroProps {
  comics: {
    available: number
  }
  description: string
  id: number
  name: string
  resourceURI: string
  thumbnail: {
    extension: string
    path: string
  }
}

interface ComicProps {
  id: number
  title: string
  thumbnail: {
    extension: string
    path: string
  }
}

export function HeroPage() {
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState(false)
  const [heroInfo, setHeroInfo] = useState<HeroProps | null>(null)
  const [comics, setComics] = useState<ComicProps[]>([])

  console.log(heroInfo)

  useEffect(() => {
    async function getHeroAndComics() {
      try {
        setLoading(true)
        const response = await api.get(`characters/${id}`)
        const {
          data: { results },
        } = response.data
        const hero = results[0]
        setHeroInfo(hero)
        const comicsResponse = await api.get(`characters/${id}/comics`, {
          params: {
            orderBy: '-onsaleDate',
            limit: 10,
          },
        })
        setComics(comicsResponse.data.data.results)
      } catch (err) {
        console.error('Erro ao buscar:', err)
      } finally {
        setLoading(false)
      }
    }
    getHeroAndComics()
  }, [id])

  if (loading || !heroInfo) {
    return <Loader />
  }

  return (
    <section className={styles.heroContent}>
      <div className={styles.heroBg}>{heroInfo.name.split(' ')[0]}</div>
      <article className={styles.infosContainer}>
        <div>
          <div className={styles.heroNameFav}>
            <h1>{heroInfo.name}</h1>
            <Heart hero={heroInfo} />
          </div>
          <p className={styles.heroDescription}>
            {heroInfo.description || 'Sem descrição disponível.'}
          </p>

          <ComicsFilms available={heroInfo.comics.available} />
        </div>

        <img
          src={`${heroInfo.thumbnail.path}/portrait_incredible.${heroInfo.thumbnail.extension}`}
          alt={heroInfo.name}
        />
      </article>

      <article>
        <h2>Últimos Lançamentos</h2>
        <div className={styles.comicsContainer}>
          {comics.map((comic) => (
            <div key={comic.id}>
              <img
                src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`}
                alt={comic.title}
                title={comic.title}
              />
              <p className={styles.comicsTitle} title={comic.title}>
                {comic.title}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  )
}
