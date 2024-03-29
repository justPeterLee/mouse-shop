import styles from "./ProductDescription.module.css";
import ProductDescInfo from "../ProductDescInfo/ProductDescInfo";
import ProductSelection from "../ProductSelection/selectIndex/ProductSelection";
import ProductReview from "../ProductReview/reviewIndex/ProductReview";
import ProductDesc from "../ProductDesc/ProductDesc";
export default function ProductDescription() {
  return (
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
      <ProductDescInfo />
      <ProductSelection />
      <div className={styles.product_button}>
        <button className={styles.cart_button}>
          <p>Add to Cart</p>
        </button>
      </div>
      <ProductDesc/>
      <ProductReview />
    </div>
  );
}
