import styles from "./index.module.css";
import Link from "next/link";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
    // cart button event handler
    const [toggleCartState, setToggleCartState] = useState(false); // current display state of cart

    const dispatch = useDispatch();
    const toggleCartHandler = async ()=>{
        await setToggleCartState(!toggleCartState);
        if(!toggleCartState){
            dispatch({type: "SHOW_CART"})
        }else{
            dispatch({type:"HIDE_CART"})
        }
    }
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logo_item}>Logo</div>
        </Link>
      </div>

      <div className={styles.tabs}>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className={styles.user}>
        <Link href="/user/login">Sign up</Link>
        <button onClick={toggleCartHandler}>cart</button>
      </div>
    </>
  );
}
