import logo from '/plate-icon.svg'
import styles from './NavBar.module.css'

export function NavBar() {
  return (
    <nav className={styles.nav}>
      {/* TODO - replace with more appropriate logo */}
      <img src={logo} alt="Logo" className={styles.logo} />
    </nav>
  )
}
