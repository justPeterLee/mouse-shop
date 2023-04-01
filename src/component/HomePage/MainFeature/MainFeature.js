import styles from "./MainFeature.module.css";
import { useRouter } from "next/router";

export default function MainFeatureModule() {
  const router = useRouter();

  // event hander (redirect to shop page)
  const navigateToShop = () => {
    router.push('/shop/')
  }
  return (
    <div className={`${styles.container} top-module`}>
      <button className={styles.shopButton} onClick={navigateToShop}>shop</button>
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
