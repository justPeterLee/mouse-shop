import styles from './Review.module.css';
import CartReceipt from '../CartReceipt/CartReceipt';
import ReviewCartProduct from '../ReviewCartProducts/ReviewCartProduct';

export default function Review(){
    return(
        <div className={styles.body}>
            <ReviewCartProduct/>
            <CartReceipt/>
        </div>
    )
}