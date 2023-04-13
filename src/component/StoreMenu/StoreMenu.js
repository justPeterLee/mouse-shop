import styles from "./StoreMenu.module.css";
import StoreMenuLink from "./StoreMenuLink/StoreMenuLink";


export default function StoreMenu({category}) {

  if(!category){
    return <p>loading</p>
  }
  return (
    <div className={styles.filterContainer}>
        {
          category.map((cat)=>(
            <StoreMenuLink
            key={cat.id}
            name={cat.category_name}
            option={cat.category_connection}
            id={cat.id}
            />
          ))
        }
    </div>
  );
}
