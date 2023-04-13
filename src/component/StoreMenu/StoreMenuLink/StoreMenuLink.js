import styles from "./StoreMenuLink.module.css";
import MenuOption from "./MenuOption/MenuOption";
export default function StoreMenuLink({name, option, id}) {
  return (
    <div className={styles.linkContainer}>
      <div className={styles.linkTitle}>
        <button className={styles.linkButton}>
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
