import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { PROJECTS, IMAGES } from '../constants'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [worksOpen, setWorksOpen] = useState(false)
  const [hoverSlug, setHoverSlug] = useState(null)
  const overlayRef = useRef(null)
  const itemsRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!overlayRef.current) return
    if (open) {
      document.body.style.overflow = 'hidden'
      gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.4, ease: 'power3.out' })
      gsap.fromTo(
        itemsRef.current?.children || [],
        { y: 40, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out', delay: 0.1 },
      )
    } else {
      document.body.style.overflow = ''
      setHoverSlug(null)
      setWorksOpen(false)
      gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.3, ease: 'power3.in' })
    }
  }, [open])

  const go = (path) => {
    setOpen(false)
    setTimeout(() => navigate(path), 350)
  }

  return (
    <>
      <header className={styles.bar}>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
        <button onClick={() => go('/')} className={styles.logo} aria-label="Home">
          ECEM DİLAN KÖSE
        </button>
      </header>

      <div ref={overlayRef} className={styles.overlay} aria-hidden={!open}>
        {/* Hover-revealed work image background */}
        <div className={styles.hoverBg}>
          {PROJECTS.map((p) => (
            <img
              key={p.slug}
              src={IMAGES.works[p.slug]}
              alt=""
              className={`${styles.hoverImg} ${hoverSlug === p.slug ? styles.hoverImgActive : ''}`}
            />
          ))}
        </div>

        <nav ref={itemsRef} className={styles.menu}>
          <div className={styles.item}>
            <button
              className={styles.link}
              onMouseEnter={() => setWorksOpen(true)}
              onClick={() => {
                if (window.matchMedia('(pointer: coarse)').matches) {
                  setWorksOpen((v) => !v)
                } else {
                  go('/works')
                }
              }}
            >
              WORKS
            </button>
            <div
              className={`${styles.subList} ${worksOpen ? styles.subListOpen : ''}`}
              onMouseLeave={() => { setWorksOpen(false); setHoverSlug(null) }}
            >
              {PROJECTS.map((p) => (
                <Link
                  key={p.slug}
                  to={`/works/${p.slug}`}
                  className={styles.subLink}
                  onMouseEnter={() => setHoverSlug(p.slug)}
                  onMouseLeave={() => setHoverSlug(null)}
                  onClick={() => setOpen(false)}
                >
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
          <button className={styles.link} onClick={() => go('/about')}>ABOUT</button>
          <button className={styles.link} onClick={() => go('/contact')}>CONTACT</button>
        </nav>
      </div>
    </>
  )
}
