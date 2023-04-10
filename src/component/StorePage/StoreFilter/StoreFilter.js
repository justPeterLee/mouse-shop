import styles from "./StoreFilter.module.css";
import StoreItem from "../StoreItem/StoreItem";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function StoreMain() {
  const store = useSelector((store) => store.mainStore.mainStore);
  const router = useRouter();
  const { filterCat } = router.query;

  useEffect(() => {
    if (filterCat) {
      console.log("hello");
    } else {
      console.log("bye");
    }
  }, []);

  return (
    <div className={styles.itemContainer}>
      {store.map((item) => {
        return (
          <StoreItem
            key={item.id}
            id={item.id}
            name={item.product_name}
            price={item.product_price}
            cat={item.category_connection[0].category_ref.category_name}
          />
        );
      })}
    </div>
  );
}
