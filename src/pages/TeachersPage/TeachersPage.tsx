import styles from "./TeachersPage.module.css";

export default function TeachersPage() {
  return (
    <section className={styles.teachersSection}>
      <div className="container">
        <h1 className={styles.title}>Our Teachers</h1>

        <div
          style={{
            padding: "40px 0",
            textAlign: "center",
            color: "rgba(18, 20, 23, 0.5)",
          }}
        >
          [ Тут незабаром з'являться фільтри та картки викладачів ]
        </div>
      </div>
    </section>
  );
}
