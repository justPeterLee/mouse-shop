import styles from './Review.module.css';
import CartReceipt from '../CartReceipt/CartReceipt';
import ReviewCartProduct from '../ReviewCartProducts/ReviewCartProduct';

export default function Review(){
    return(
        <div>
            <ReviewCartProduct/>
            <CartReceipt/>
        </div>
    )
}