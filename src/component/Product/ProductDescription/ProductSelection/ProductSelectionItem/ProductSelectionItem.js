import styles from "./ProductSelectionItem.module.css";

export default function ProductSelectionItem(props) {
  return (
    <button className={styles.body}>
      <p>{props.item}</p>
    </button>
  );
}
