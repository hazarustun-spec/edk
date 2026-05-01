import { useEffect } from 'react'
import HoverMaskReveal from '../components/HoverMaskReveal'
import { IMAGES } from '../constants'
import styles from './Landing.module.css'

export default function Landing() {
  useEffect(() => {
    document.body.classList.add('no-scroll')
    return () => document.body.classList.remove('no-scroll')
  }, [])

  return (
    <main className={styles.landing}>
      <HoverMaskReveal
        imageBase={IMAGES.hero_base}
        imageHover={IMAGES.hero_hover}
        alt="Ecem Dilan Köse"
        fullScreen
      />

      <div className={styles.footMeta}>
        <span>EST. ISTANBUL</span>
        <span>PORTFOLIO / 2026</span>
      </div>
    </main>
  )
}
