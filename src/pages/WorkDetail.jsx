import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { PROJECTS, IMAGES } from '../constants'
import styles from './WorkDetail.module.css'

export default function WorkDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const idx = PROJECTS.findIndex((p) => p.slug === slug)
  const project = PROJECTS[idx]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'auto' : 'auto' })
  }, [slug])

  if (!project) {
    return (
      <main className={`page ${styles.page}`}>
        <div className="container">
          <p className={styles.notFound}>Project not found.</p>
          <button className={styles.back} onClick={() => navigate('/')}>← BACK</button>
        </div>
      </main>
    )
  }

  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length]
  const next = PROJECTS[(idx + 1) % PROJECTS.length]
  const image = IMAGES.works[project.slug]

  return (
    <main className={`page ${styles.page}`}>
      <div className="container">
        <Link to="/works" className={styles.back}>← WORKS</Link>
        <header className={styles.header}>
          <h1 className={styles.title}>{project.title}</h1>
          <span className={styles.year}>{project.year}</span>
        </header>
      </div>

      <div className={styles.imageWrap}>
        <img src={image} alt={project.title} />
      </div>

      <div className="container">
        <div className={styles.body}>
          <p>{project.description}</p>
        </div>

        <nav className={styles.pager}>
          <Link to={`/works/${prev.slug}`} className={styles.pagerLink}>
            <span className={styles.pagerLabel}>← PREV</span>
            <span className={styles.pagerTitle}>{prev.title}</span>
          </Link>
          <Link to={`/works/${next.slug}`} className={`${styles.pagerLink} ${styles.right}`}>
            <span className={styles.pagerLabel}>NEXT →</span>
            <span className={styles.pagerTitle}>{next.title}</span>
          </Link>
        </nav>
      </div>
    </main>
  )
}
