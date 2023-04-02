import styles from "./ProductSelectionItem.module.css";
import { useEffect, useState } from "react";
export default function ProductSelectionItem(props) {
  const sendSelection = () => {
    props.bringSelection({
      cat: props.cat,
      selection: props.item,
      selectionId: props.id,
    });
  };

  const [outline, setOutline] = useState({});
  useEffect(() => {
    if (props.setTrue) {
      if (props.setTrue.selectionId == props.id) {
        setOutline({ border: "solid 1px black" });
      }else{
        setOutline({})
      }
    }
  }, [props.setTrue]);

  return (
    <button className={styles.body} onClick={sendSelection} style={outline}>
      <p>{props.item}</p>
    </button>
  );
}
