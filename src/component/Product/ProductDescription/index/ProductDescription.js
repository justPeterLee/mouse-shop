import styles from './ProductDescription.module.css';
import ProductDescInfo from '../ProductDescInfo/ProductDescInfo';
import ProductSelection from '../ProductSelection/selectIndex/ProductSelection';
import ProductReview from '../ProductReview/reviewIndex/ProductReview';
export default function ProductDescription(){
    return(
        <div className={styles.body}> 
            {/* 
                name
                price  
                description

                -------
                picture select
                -------

                selection 

                -------
                add to card
                favorite
                -------
                reviews (stretch)
            */}
            <ProductDescInfo/>
            <ProductSelection/>
            <button className={styles.cart_button}><p>Add to Cart</p></button>

            
            <ProductReview/>
        </div>
    )
}