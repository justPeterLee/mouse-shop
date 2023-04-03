import styles from "./ProductSelection.module.css";
import ProductSelectionContainer from "../ProductSelecctionContainer/ProductSelectionContainer";
import ProductSelectionItem from "../ProductSelectionItem/ProductSelectionItem";
import { useEffect, useState } from "react";
const selectionData = [
  {
    selectionId: 1,
    selectionCat: "color",
    selectionItem: [
      {
        selectionItemId: 1,
        selectionItemDesc: "red",
        selectionItemExample: "rgb(255,0,0)",
      },
      {
        selectionItemId: 2,
        selectionItemDesc: "green",
        selectionItemExample: "rgb(0,255,0)",
      },
      {
        selectionItemId: 3,
        selectionItemDesc: "blue",
        selectionItemExample: "rgb(0,0,255)",
      },
      {
        selectionItemId: 4,
        selectionItemDesc: "blue",
        selectionItemExample: "rgb(0,0,255)",
      },
    ],
  },

  {
    selectionId: 2,
    selectionCat: "size",
    selectionItem: [
      {
        selectionItemId: 4,
        selectionItemDesc: "90cm x 40cm",
        selectionItemExample: null,
      },
      {
        selectionItemId: 5,
        selectionItemDesc: "100cm x 60cm",
        selectionItemExample: null,
      },
      {
        selectionItemId: 6,
        selectionItemDesc: "120cm x 80cm",
        selectionItemExample: null,
      },
    ],
  },
];
export default function ProductSelection(props) {
    const [selection, setSelection] = useState({});

    const onBringSelection = async (selectionData) => {
      if(selectionData){
        await setSelection({...selection,[selectionData.cat]:{
          id: selectionData.selectionId,
          selection: selectionData.selection
        }})
      }
    }

    useEffect(()=>{
      console.log(selection)
    }, [selection])

  return (
    <div className={styles.body}>
      {selectionData.map((selection) => {
        return (
          <ProductSelectionContainer
            key={selection.selectionId}
            cat={selection.selectionCat}
            items={selection.selectionItem}
            onBringSelection={onBringSelection}
          />
        );
      })}
      {selection.color && <p>{selection.color.selection}</p>}
    </div>
  );
}
