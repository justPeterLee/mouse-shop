import styles from "./AboutModule.module.css";
export default function AboutModule() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleAbout}>About</h1>
      <button className={styles.button}> learn more </button>
    </div>
  );
}
