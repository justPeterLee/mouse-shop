import styles from './ProductReview.module.css';
import ProductReviewButton from '../ProductReviewButton/ProductReviewButton';
import ProductReviewComments from '../ProductReviewComments/ProductReviewComments';

import { useState } from 'react';
export default function ProductReview(){
    const [toggleState, setToggleState] = useState(false)
    const toggleComment = (toggle)=>{
        setToggleState(toggle)
    }
    return(
        <div className={styles.body}>
            <ProductReviewButton toggleComment={toggleComment}/>
            <ProductReviewComments toggle={toggleState}/>
        </div>
    )
}