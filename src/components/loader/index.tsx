import { useParams } from 'react-router'
import styles from './loader.module.css'
import { useLoading } from '../../context/LoadingContext'

export function Loader() {
  const { id } = useParams()
  const { loading } = useLoading()

  if (!loading) return null
  return (
    <div className={styles.spinnerContainer}>
      <span className={id ? styles.id : styles.spinner}></span>
    </div>
  )
}
