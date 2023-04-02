import styles from "./StoreItem.module.css";
import { useRouter } from "next/router";
export default function StoreItem() {
    const router = useRouter();
    
    const navigateProduct = ()=>{
        router.push(`/products/1`)
    }
  return (
    <button className={styles.body} onClick={navigateProduct}>

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
