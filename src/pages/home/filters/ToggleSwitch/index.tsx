import { useState, type Dispatch } from 'react'
import styles from './toggleSwitch.module.css'

interface ToggleSwitchProps {
  setSortAZ: Dispatch<React.SetStateAction<boolean>>
  sortAZ: boolean
}

export function ToggleSwitch({ setSortAZ, sortAZ }: ToggleSwitchProps) {
  const [isOn, setIsOn] = useState(false)

  function handleToggle() {
    const newState = !isOn
    setIsOn(newState)
    setSortAZ(!sortAZ)
  }

  return (
    <button
      className={styles.toggle}
      onClick={handleToggle}
      aria-label="Alternar favoritos"
    >
      <span className={`${styles.circle} ${isOn ? styles.on : ''}`} />
    </button>
  )
}
