import { ABOUT, IMAGES } from '../constants'
import styles from './About.module.css'

export default function About() {
  return (
    <main className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>ABOUT</p>
          <h1 className={styles.heading}>{ABOUT.heading}</h1>
          <p className={styles.subheading}>{ABOUT.subheading}</p>
          <p className={styles.bio}>{ABOUT.bio}</p>
        </div>
        <div className={styles.imageWrap}>
          <img src={IMAGES.about} alt="Ecem Dilan Köse" />
        </div>
      </div>
    </main>
  )
}
