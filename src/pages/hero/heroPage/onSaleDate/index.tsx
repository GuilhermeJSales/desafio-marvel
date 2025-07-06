import { useEffect, useState } from 'react'
import styles from './onSaleDate.module.css'

interface OnSaleDateProps {
  comics: {
    dates: {
      type: string
      date: string
    }[]
  }[]
}

export function OnSaleDate({ comics }: OnSaleDateProps) {
  const [lastReleaseDate, setLastReleaseDate] = useState<string | null>(null)

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    const validDates: string[] = []

    comics.forEach((comic) => {
      const onsale = comic.dates.find((date) => date.type === 'onsaleDate')
      if (onsale) {
        const year = new Date(onsale.date).getFullYear()
        if (year >= 1939 && year <= currentYear + 1) {
          validDates.push(onsale.date)
        }
      }
    })

    if (validDates.length > 0) {
      const mostRecent = validDates.sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime(),
      )[0]

      const formattedDate = new Date(mostRecent).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })

      setLastReleaseDate(formattedDate)
    }
  }, [comics])

  return (
    <div className={styles.dateContainer}>
      <h3 className={styles.dateTitle}>Último quadrinho:</h3>{' '}
      <p className={styles.infosText}>{lastReleaseDate || 'Indisponível'}</p>
    </div>
  )
}
