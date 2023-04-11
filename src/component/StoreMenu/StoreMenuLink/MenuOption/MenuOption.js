import styles from "./MenuOption.module.css";
export default function MenuOption({name}) {
  return (
    <button className={styles.button}>
      <p>{name}</p>
    </button>
  );
}
