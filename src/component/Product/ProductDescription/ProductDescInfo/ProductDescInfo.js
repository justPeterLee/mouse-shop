import styles from "./ProductDescInfo.module.css";
import { useEffect, useState } from "react";
const productData = {
  productName: "Piano Tile Mouse",
  productDesc:
    "Keeping it real, the Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and vacuum-sealed accents keep ‘em looking fresh and clean, while colors inspired by the London music scene give your look the edge. Point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce, helping you push past your limits.",
  productDescList: [
    "Shown: Phantom/High Voltage/White/Reflective Silver",
    "Style: DR0453-001",
  ],
  productCat: "computer mouse",
  productPrice: 120,
  productDiscount: false,
};

const discountData = {
  discountName: "discount",
  discountPercent: 0.2,
};
export default function ProductDescInfo({ name, cat, price }) {
  const [curPrice, setCurPrice] = useState(productData.productPrice);
  useEffect(() => {
    if (productData.productDiscount) {
      setCurPrice(curPrice - curPrice * discountData.discountPercent);
    }
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.name}>
        <p>{productData.productName}</p>
      </div>
      <div className={styles.desc}>
        <p>{productData.productCat}</p>
      </div>
      <div className={styles.price}>
        <p>${curPrice}</p>
      </div>
    </div>
  );
}
