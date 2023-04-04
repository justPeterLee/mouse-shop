import styles from "./index.module.css";
import Link from "next/link";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Index(props) {
    // cart button event handler
    const [toggleCartState, setToggleCartState] = useState(false); // current display state of cart
    const cartToggleState = useSelector(store=>store.cart.toggleCart)
    const dispatch = useDispatch();
    const toggleCartHandler = async ()=>{
        props.onBringCartState(false)
        dispatch({type: "SHOW_CART"})
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
