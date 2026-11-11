import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import heroIllustration from "../../assets/hero-img.jpg";

export default function HomePage() {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroMainContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Unlock your potential with the best{" "}
              <span className={styles.titleHighlight}>language</span> tutors
            </h1>
            <p className={styles.description}>
              Embark on an exciting language journey with expert tutors. Elevate
              your language proficiency to new heights by connecting with highly
              qualified and experienced tutors.
            </p>
            <Link to="/teachers" className={styles.getStartedBtn}>
              Get started
            </Link>
          </div>

          <div className={styles.heroImageWrapper}>
            <img
              src={heroIllustration}
              alt="Language tutor with laptop"
              className={styles.heroImage}
            />
          </div>
        </div>

        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>32,000 +</span>
            <span className={styles.statText}>Experienced tutors</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>300,000 +</span>
            <span className={styles.statText}>5-star tutor reviews</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>120 +</span>
            <span className={styles.statText}>Subjects taught</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>200 +</span>
            <span className={styles.statText}>Tutor nationalities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
