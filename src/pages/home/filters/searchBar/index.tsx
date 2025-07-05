import styles from './searchBar.module.css'
import lupa from '../../../../assets/busca/Lupa/Shape.png'
import lupa1 from '../../../../assets/busca/Lupa/Shape@1,5x.svg'
import lupa2 from '../../../../assets/busca/Lupa/Shape@2x.png'
import lupa3 from '../../../../assets/busca/Lupa/Shape@3x.png'

interface SearchBarProps {
  searchHero: string
  onSearchChange: (value: string) => void
}

export function SearchBar({ searchHero, onSearchChange }: SearchBarProps) {
  return (
    <div className={styles.containerSearch}>
      <img
        src={lupa}
        srcSet={`${lupa1} 1.5x, ${lupa2} 2x, ${lupa3} 3x`}
        alt="Ícone de busca"
      />
      <input
        type="text"
        placeholder="Procure por heróis"
        value={searchHero}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}
