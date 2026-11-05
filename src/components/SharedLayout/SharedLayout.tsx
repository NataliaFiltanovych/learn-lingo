// src/components/SharedLayout/SharedLayout.tsx
import { Outlet, Link } from "react-router-dom";
import styles from "./SharedLayout.module.css";

export default function SharedLayout() {
  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <Link to="/" className={styles.logo}>
            LearnLingo
          </Link>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
            <Link to="/teachers" className={styles.navLink}>
              Teachers
            </Link>
            <Link to="/favorites" className={styles.navLink}>
              Favorites
            </Link>
          </nav>

          <div className={styles.authBox}>
            <button className={styles.loginBtn} type="button">
              Log in
            </button>
            <button className={styles.registerBtn} type="button">
              Registration
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
