import { useState } from 'react'
import { useNavigate } from 'react-router'
import { api } from '../../../services/api'
import styles from './searchBarHero.module.css'
import lupa from '../../../assets/busca/Lupa/Shape.png'
import lupa1 from '../../../assets/busca/Lupa/Shape@1,5x.svg'
import lupa2 from '../../../assets/busca/Lupa/Shape@2x.png'
import lupa3 from '../../../assets/busca/Lupa/Shape@3x.png'
import { useLoading } from '../../../context/LoadingContext'

export function SearchBarHero() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const { setLoading } = useLoading()

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!search.trim()) return

    try {
      setLoading(true)
      const response = await api.get('/characters', {
        params: {
          name: search,
        },
      })

      const results = response.data.data.results
      if (results.length > 0) {
        const heroId = results[0].id
        navigate(`/hero/${heroId}`)
      } else {
        alert('Herói não encontrado, digite o nome completo!')
      }
    } catch (err) {
      console.error('Erro ao buscar herói:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={styles.containerSearch} onSubmit={handleSearch}>
      <img
        src={lupa}
        srcSet={`${lupa1} 1.5x, ${lupa2} 2x, ${lupa3} 3x`}
        alt="Ícone de busca"
      />
      <input
        type="text"
        placeholder="Procure por heróis"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}
