import styles from "./ProductSelectionContainer.module.css";
import ProductSelectionItem from "../ProductSelectionItem/ProductSelectionItem";

import { useState, useEffect } from "react";
export default function ProductSelectionContainer(props) {
    const [selection, setSelection] = useState(undefined)
    const bringSelection = async (selectionData) => {
        await setSelection(selectionData)
        props.onBringSelection(selection)
    }
    useEffect(()=>{
        console.log(selection)
      }, [selection])
  return (
    <div>
      <div>
        <p>{props.cat} {selection && selection.selection}</p>
      </div>
      <div className={styles.item_container}>
        {props.items.map((item) => {
          return (
            <ProductSelectionItem
              key={item.selectionItemId}
              item={item.selectionItemDesc}
              cat={props.cat}
              id={item.selectionItemId}
              bringSelection={bringSelection}
              setTrue={selection}
            />
          );
        })}
      </div>
    </div>
  );
}
