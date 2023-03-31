import Link from "next/link";
import { Fragment } from "react";
import styles from "./NavBar.module.css";
export default function StaticNavBar(props) {
  return (
    <Fragment>
      <header className={styles.staticNavBar}>
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
          <Link href="/cart">cart</Link>
        </div>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
