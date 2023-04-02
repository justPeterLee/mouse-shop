import styles from './ProductPage.module.css';
import { useRouter } from 'next/router';

import ProductImageContainer from './ProductImageContainer/ProductImageContainer';
export default function ProductPage(){
    const router = useRouter();
    const productId = router.query.productId
    console.log(productId)
    return(
        <div>
            <ProductImageContainer/>
        </div>
    )
}