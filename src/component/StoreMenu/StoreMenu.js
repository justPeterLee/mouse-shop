import styles from "./StoreMenu.module.css";
import { useDispatch, useSelector } from "react-redux";

import StoreMenuLink from "./StoreMenuLink/StoreMenuLink";
import { useEffect } from "react";
export default function StoreMenu() {
  const dispatch = useDispatch();
  const filCat = useSelector(store=>store.mainStore.menuCategory);

  useEffect(()=>{
    dispatch({type: "FETCH_MENU_CATEGORY"})
  },[])

  return (
    <div className={styles.filterContainer}>
        {
          filCat.map((cat)=>(
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
