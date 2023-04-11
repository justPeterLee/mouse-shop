import styles from "./StoreMenuLink.module.css";
import MenuOption from "./MenuOption/MenuOption";
export default function StoreMenuLink() {
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkTitle}>
        <button className={styles.linkButton}>
          <p>Computer Mouse</p>
        </button>
      </div>
      <div className={styles.linkOptions}>
        <MenuOption/>
        <MenuOption/>
        <MenuOption/>
        <MenuOption/>
        <MenuOption/>
        <MenuOption/>
      </div>
    </div>
  );
}
