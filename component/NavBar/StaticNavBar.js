import Link from "next/link";
import { Fragment } from "react";
import styles from "./NavBar.module.css";
export default function StaticNavBar(props) {
  return (
    <Fragment>
      <header className={styles.staticNavBar}>
        <Link href="/">
          <div className={styles.logo}>Logo</div>
        </Link>

        <div className={styles.tabs}>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className={styles.user}>
          <Link href="/sign-up">Sign up</Link>
          <Link href="/cart">cart</Link>
        </div>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
