import styles from "./MenuOption.module.css";
import { useRouter } from "next/router";
export default function MenuOption({name, id}) {
  const router = useRouter();

  const navigateHandler = () => {
    router.push(`/products/${id}`)
  }
  return (
    <button className={styles.button} onClick={navigateHandler}>
      <p>{name}</p>
    </button>
  );
}
