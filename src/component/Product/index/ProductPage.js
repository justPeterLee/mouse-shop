import styles from './ProductPage.module.css';
import { useRouter } from 'next/router';

import ProductImageContainer from '../ProductImageContainer/index/ProductImageContainer';
import ProductDescription from '../ProductDescription/index/ProductDescription';
export default function ProductPage(){
    const router = useRouter();
    const productId = router.query.productId
    console.log(productId)
    return(
        <div className={styles.body}>
            <ProductImageContainer/>
            <ProductDescription/>
        </div>
    )
}