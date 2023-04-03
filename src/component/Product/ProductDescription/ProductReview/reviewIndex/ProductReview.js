import styles from './ProductReview.module.css';

import ProductReviewButton from '../ProductReviewButton/ProductReviewButton';
import ProductReviewComments from '../ProductReviewComments/ProductReviewComments';

export default function ProductReview(){
    return(
        <div>
            <ProductReviewButton/>
            <ProductReviewComments/>
        </div>
    )
}