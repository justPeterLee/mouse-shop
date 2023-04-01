import styles from "./StoreItem.module.css";

export default function StoreItem() {
  return (
    <button className={styles.body}>

      <div className={styles.image}></div>

      <div className={styles.desc}>
        <div>
          <p className={styles.title}>Item Name</p>
          <p className={styles.cat}>mouse</p>
        </div>
        <p className={styles.price}>$25</p>
      </div>

    </button>
  );
}
