import styles from "./CartReceipt.module.css";
export default function CartReceipt() {
  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <div className={styles.title}>
          <p>Summary</p>
        </div>
        <div className={styles.subtotal}>
          <p>Subtotal</p> <p>$280.00</p>
        </div>
        <div className={styles.shipping}>
          <p>Estimated Shipping</p> <p>$7.00</p>
        </div>
        <div className={styles.tax}>
          <p>Estimated Tax</p> <p>--</p>
        </div>
        <div className={styles.total}>
          <p>Total</p> <p>$287.00</p>
        </div>
      </div>
      <div className={styles.checkoutButtons}>
        <button>Checkout</button>
      </div>
    </div>
  );
}
