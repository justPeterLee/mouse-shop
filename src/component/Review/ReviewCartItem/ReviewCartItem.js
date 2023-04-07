import styles from "./ReviewCartItem.module.css";
import { TfiTrash } from "react-icons/tfi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function ReviewCartItem() {
  return (
    <div className={styles.body}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <div className={styles.title}>Piano Tile Mouse</div>
        <div className={styles.subInfo}>computer mouse</div>
        <div className={styles.quanity}>
          <button>-</button>
          <p>{1}</p>
          <button>+</button>
        </div>
        <div className={styles.button}>
          <button className={styles.action_buttons}>
            <div className={styles.icon_div}>
              <AiOutlineHeart size={25} style={{color: "rgb(150,150,150"}}/>
            </div>
          </button>
          <button className={styles.action_buttons}>
            <div className={styles.icon_div}>
              <TfiTrash size={25} style={{color: "rgb(150,150,150"}}/>
            </div>
          </button>
        </div>
      </div>
      <div className={styles.price}>$120.00</div>
    </div>
  );
}
