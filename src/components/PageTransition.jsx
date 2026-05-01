import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import styles from './PageTransition.module.css'

/**
 * Demmuseums-style route transition: a solid panel sweeps in from the
 * bottom to cover the screen, then sweeps out off the top. Triggered on
 * pathname change.
 */
export default function PageTransition() {
  const panelRef = useRef(null)
  const labelRef = useRef(null)
  const location = useLocation()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const panel = panelRef.current
    if (!panel) return

    const tl = gsap.timeline()
    tl.set(panel, { yPercent: 100, autoAlpha: 1 })
      .to(panel, { yPercent: 0, duration: 0.45, ease: 'power3.inOut' })
      .to(labelRef.current, { autoAlpha: 1, duration: 0.15 }, '-=0.15')
      .to({}, { duration: 0.1 })
      .to(panel, { yPercent: -100, duration: 0.55, ease: 'power3.inOut' })
      .set(panel, { autoAlpha: 0, yPercent: 100 })
      .set(labelRef.current, { autoAlpha: 0 })

    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div ref={panelRef} className={styles.panel} aria-hidden>
      <span ref={labelRef} className={styles.label}>EDK</span>
    </div>
  )
}
