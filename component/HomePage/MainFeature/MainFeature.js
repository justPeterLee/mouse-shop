import styles from "./MainFeature.module.css";

export default function MainFeatureModule() {
  return (
    <div className={`${styles.container} top-module`}>
      <button className={styles.shopButton}>shop</button>
      <div className={styles.description}>
        <p>
          さまざまな境遇から、母の日を心から祝えない。
          そんな人たちがいることも知っています。 ごめんなさい。それでも、
          たった一度だけ伝えたいのです。さまざまな境遇から、母の日を心から祝えない。
          そんな人たちがいることも知っています。 ごめんなさい。それでも、
          たった一度だけ伝えたいのです。さまざまな境遇から、母の日を心から祝えない。
        </p>
      </div>
    </div>
  );
}
