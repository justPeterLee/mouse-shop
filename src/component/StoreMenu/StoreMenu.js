import styles from "./StoreMenu.module.css";
import { useDispatch, useSelector } from "react-redux";

import StoreMenuLink from "./StoreMenuLink/StoreMenuLink";
import { useEffect } from "react";
export default function StoreMenu() {
  const dispatch = useDispatch();
  // const filCat = useSelector();

  useEffect(()=>{
    dispatch({type: "FETCH_MENU_CATEGORY"})
  },[])

  return (
    <div className={styles.filterContainer}>
        <StoreMenuLink/>
        <StoreMenuLink/>
    </div>
  );
}
