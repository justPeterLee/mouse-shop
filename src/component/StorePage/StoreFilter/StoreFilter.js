import styles from "./StoreFilter.module.css";
import StoreItem from "../StoreItem/StoreItem";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function StoreFilter() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.mainStore.mainStore);
  const router = useRouter();
  const { filterCat } = router.query;

  useEffect(() => {
    dispatch({type: "FETCH_FILTER_PRODUCT"})
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
