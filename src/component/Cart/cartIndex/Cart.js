import styles from "./Cart.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import CartItem from "../CartItem/CartItem";
export default function Cart(props) {
  const [toggleCartState, setToggleCartState] = useState(false); // current display state of cart

  // global cart state (redux)
  const cartState = useSelector((store) => store.cart.toggleCart);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    props.bringCartState(true);
    dispatch({ type: "HIDE_CART" });
  };

  const router = useRouter();

  const navigateToCartReview = ()=>{
    router.push('/review/cart')
    props.bringCartState(true);
    dispatch({ type: "HIDE_CART" });
  }

  return (
    <div
      className={
        cartState ? `${styles.body}` : `${styles.body} ${styles.hideBody}`
      }
    >
      <button
        className={
          cartState
            ? `${styles.backdrop}`
            : `${styles.backdrop} ${styles.hideBackdrop}`
        }
        onClick={toggleCartHandler}
      ></button>

      <div
        className={
          cartState
            ? `${styles.cartSection}`
            : `${styles.cartSection} ${styles.hideCart}`
        }
      >
        <div className={styles.cartButton}>
          <button onClick={toggleCartHandler}>x</button>
        </div>
        <div className={styles.cartItemContainer}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.reviewOrderContainer}>
          <button className={styles.reviewOrder} onClick={navigateToCartReview}> review order </button>
        </div>
      </div>
    </div>
  );
}
