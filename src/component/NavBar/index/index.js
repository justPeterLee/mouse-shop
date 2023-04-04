import styles from "./index.module.css";
import Link from "next/link";
export default function Index() {
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <div className={styles.logo_item}>Logo</div>
        </Link>
      </div>

      <div className={styles.tabs}>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className={styles.user}>
        <Link href="/user/login">Sign up</Link>
        <button>cart</button>
      </div>
    </>
  );
}
