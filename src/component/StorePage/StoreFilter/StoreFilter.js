import styles from "./StoreFilter.module.css";
import StoreItem from "../StoreItem/StoreItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
export default function StoreFilter({ catId }) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.mainStore.filterStore);

  useEffect(() => {
    dispatch({ type: "FETCH_FILTER_PRODUCT", payload: catId });
  }, []);

  return (
    <div className={styles.itemContainer}>
      {store.map((item) => {
        return (
          <StoreItem
            key={item.product_ref.id}
            id={item.product_ref.id}
            name={item.product_ref.product_name}
            price={item.product_ref.product_price}
            // cat={item.category_connection[0].category_ref.category_name}
          />
        );
      })}
    </div>
  );
}
