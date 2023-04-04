import ReviewCartItem from '../ReviewCartItem/ReviewCartItem';
import styles from './ReviewCartProduct.module.css';

export default function ReviewCartProduct(){
    return(
        <div className={styles.body}>
            <ReviewCartItem/>
            <ReviewCartItem/>
            <ReviewCartItem/>
        </div>
    )
}