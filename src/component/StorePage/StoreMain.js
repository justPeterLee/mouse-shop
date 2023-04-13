import styles from "./StoreMain.module.css";
import StoreItem from "./StoreItem/StoreItem";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function StoreMain({ product, isFilter }) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.mainStore.mainStore);
  const router = useRouter();

  useEffect(() => {
    console.log(product);
  });

  if (!store) {
    return <p> loading </p>;
  }
  return (
    <div className={styles.itemContainer}>
      {isFilter ? (
        product ? (
          product.map((item) => {
            return (
              <StoreItem
                key={item.id}
                id={item.id}
                name={item.product_name}
                price={item.product_price}
                //cat={item.category_connection[0].category_ref.category_name}
              />
            );
          })
        ) : (
          <p>no items found </p>
        )
      ) : product ? (
        product.map((item) => {
          return (
            <StoreItem
              key={item.product_ref.id}
              id={item.product_ref.id}
              name={item.product_ref.product_name}
              price={item.product_ref.product_price}
              //cat={item.category_connection[0].category_ref.category_name}
            />
          );
        })
      ) : (
        <p>no items found</p>
      )}
    </div>
  );
}
