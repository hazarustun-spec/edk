import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS, IMAGES } from '../constants'
import styles from './Works.module.css'

export default function Works() {
  const scrollerRef = useRef(null)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    if (isCoarse) return // mobile uses native horizontal scroll

    const onWheel = (e) => {
      // Convert vertical wheel to horizontal scroll for desktop
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY
      }
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>WORKS</p>
        <p className={styles.count}>{String(PROJECTS.length).padStart(2, '0')} PROJECTS</p>
      </header>

      <div ref={scrollerRef} className={styles.scroller}>
        <ul className={styles.list}>
          {PROJECTS.map((p, i) => (
            <li key={p.slug} className={styles.item}>
              <Link to={`/works/${p.slug}`} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={IMAGES.works[p.slug]} alt={p.title} />
                </div>
                <div className={styles.meta}>
                  <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.title}>{p.title}</span>
                  <span className={styles.year}>{p.year}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <footer className={styles.foot}>
        <span>SCROLL →</span>
      </footer>
    </main>
  )
}
