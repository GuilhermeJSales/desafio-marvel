import styles from './loader.module.css'

export function Loader() {
  return (
    <div className={styles.spinnerContainer}>
      <span className={styles.spinner}></span>
    </div>
  )
}
