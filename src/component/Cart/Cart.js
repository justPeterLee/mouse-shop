import styles from './Cart.module.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Cart(props){
    const [toggleCartState, setToggleCartState] = useState(false); // current display state of cart

    const dispatch = useDispatch();
    const toggleCartHandler = ()=>{
        props.bringCartState(true)
        dispatch({type:"HIDE_CART"})
    }
    return(
        <div className={styles.body}>
            <button onClick={toggleCartHandler}>x</button>
            <p>cart</p>
        </div>
    )
}