import styles from './ProductImageContainer.module.css';
import ProductImageItem from '../ProductImageItem/ProductImageItem';

export default function ProductImageContainer(){
    return(
        <div className={styles.pictureBody}>
            <ProductImageItem/>
            <ProductImageItem/>
            <ProductImageItem/>
            <ProductImageItem/>
            <ProductImageItem/>
            <ProductImageItem/>
            <div className={styles.footPicture}></div>
        </div>
    )
}