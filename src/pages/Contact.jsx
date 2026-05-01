import { CONTACT } from '../constants'
import styles from './Contact.module.css'

export default function Contact() {
  const mailto = CONTACT.email && !CONTACT.email.startsWith('[') ? `mailto:${CONTACT.email}` : '#'
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>CONTACT</p>
        <h1 className={styles.heading}>LET&rsquo;S<br />CONNECT</h1>
        <ul className={styles.links}>
          <li>
            <span className={styles.label}>Email</span>
            <a href={mailto}>{CONTACT.email}</a>
          </li>
          <li>
            <span className={styles.label}>Instagram</span>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer">@ecemdilankose</a>
          </li>
          <li>
            <span className={styles.label}>Website</span>
            <a href={CONTACT.website} target="_blank" rel="noreferrer">ecemdilankose.com</a>
          </li>
        </ul>
        <p className={styles.foot}>© {new Date().getFullYear()} Ecem Dilan Köse</p>
      </div>
    </main>
  )
}
