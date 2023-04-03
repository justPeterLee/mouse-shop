import styles from './ProductReviewButton.module.css';
import {MdArrowDropDown} from 'react-icons/md';

import { useState } from 'react';
export default function ProductReviewButton(){
    const [toggle, setToggle] = useState(false)
    const [arrowDir, setArrowDir] = useState('review-hide')
    const toggleComment = ()=>{
        setToggle(!toggle)
    }
    return(
        <button className={styles.body} onClick={toggleComment} >
            <div className={styles.title}>
                <p>Reviews</p>
            </div>
            <div className={styles.info}>
                <MdArrowDropDown size={25} className={toggle ? `${styles.reviewArrow} ${styles.show}` : `${styles.reviewArrow} ${styles.hide}`}/>
            </div>
        </button>
    )
}