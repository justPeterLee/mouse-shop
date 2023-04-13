import styles from "./StoreMenu.module.css";
import { useDispatch, useSelector } from "react-redux";

import StoreMenuLink from "./StoreMenuLink/StoreMenuLink";
import { useEffect } from "react";

export default function StoreMenu({category}) {
  const dispatch = useDispatch();
  const filCat = useSelector(store=>store.mainStore.menuCategory);
  useEffect(()=>{
    console.log(category)
  })
  const arr = [1,2]

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
