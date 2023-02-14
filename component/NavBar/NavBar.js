import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";
export default function NavBar(props) {
  const nav = useRef();
  let lastScroll = 0;

  const pageScroll = (event) => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > 112) {
      nav.current.classList.remove(styles.hidden);
      if (currentScroll - lastScroll > 0) {
        nav.current.classList.add(styles.scrollDown);
        nav.current.classList.remove(styles.scrollUp);
      } else {
        // scrolled up -- header show
        nav.current.classList.add(styles.scrollUp);
        nav.current.classList.remove(styles.scrollDown);
      }
    } else {
      if (currentScroll < 6 && nav.current.classList) {
        nav.current.classList.add(styles.hidden);
      }
      nav.current.classList.remove(styles.scrollUp);
    }

    lastScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", pageScroll);
  }, []);
  return (
    <Fragment>
      <header ref={nav} className={`${styles.navbar} ${styles.hidden}`}>
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
