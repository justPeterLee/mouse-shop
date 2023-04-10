import styles from "./StoreItem.module.css";
import { useRouter } from "next/router";
export default function StoreItem({id, name, cat, price}) {
    const router = useRouter();
    
    const navigateProduct = ()=>{
        router.push(`/products/${id}`)
    }
  return (
    <button className={styles.body} onClick={navigateProduct}>

      <div className={styles.image}></div>

      <div className={styles.desc}>
        <div>
          <p className={styles.title}>{name}</p>
          <p className={styles.cat}>{cat}</p>
        </div>
        <p className={styles.price}>${price}</p>
      </div>

    </button>
  );
}
