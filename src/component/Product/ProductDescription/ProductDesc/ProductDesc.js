import styles from "./ProductDesc.module.css";
import { useState } from "react";
const productData = {
  productName: "Piano Tile Mouse",
  productDesc:
    "Keeping it real, the Air Max Pulse pulls inspiration from the London music scene, bringing an underground touch to the iconic Air Max line. Its textile-wrapped midsole and vacuum-sealed accents keep ‘em looking fresh and clean, while colors inspired by the London music scene give your look the edge. Point-loaded Air cushioning—revamped from the incredibly plush Air Max 270—delivers better bounce, helping you push past your limits.",
  productDescList: [
    { point: "Shown: Phantom/High Voltage/White/Reflective Silver" },
    { point: "Style: DR0453-001" },
  ],
  productCat: "computer mouse",
  productPrice: 120,
  productDiscount: false,
};

export default function ProductDesc() {
    const [list, setList] = useState(productData.productDescList)
  return (
    <div className={styles.body}>
      <p className={styles.title}>Description</p>
      <p className={styles.text}>{productData.productDesc}</p>
      {list.length && (
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={Math.random()}>
              <p>{item.point}</p>
            </li>
          ))}

        </ul>
      )}
    </div>
  );
}
