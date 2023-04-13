import styles from "./StoreMenuLink.module.css";
import MenuOption from "./MenuOption/MenuOption";
import { useRouter } from "next/router";
export default function StoreMenuLink({name, option, id}) {
  const router = useRouter();

  const navigateHandler = () => {
    router.push(`/shop/${id}`)
  }
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkTitle}>
        <button className={styles.linkButton} onClick={navigateHandler}>
          <p>{name}</p>
        </button>
      </div>
      <div className={styles.linkOptions}>
        {option && option.map((option)=>(
          <MenuOption
          key={Math.random()}
          name={option.product_ref.product_name}
          />
        ))}
      </div>
    </div>
  );
}
