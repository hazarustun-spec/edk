import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      gsap.to(dotRef.current, { x: e.clientX, y: e.clientY, duration: 0.05, ease: 'power2.out' })
    }

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18
      pos.current.y += (target.current.y - pos.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    let raf = requestAnimationFrame(tick)

    const onOver = (e) => {
      const t = e.target
      if (t.closest('a, button, [data-cursor="hover"]')) {
        ringRef.current?.classList.add(styles.active)
      }
    }
    const onOut = (e) => {
      const t = e.target
      if (t.closest('a, button, [data-cursor="hover"]')) {
        ringRef.current?.classList.remove(styles.active)
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden />
      <div ref={dotRef} className={styles.dot} aria-hidden />
    </>
  )
}
