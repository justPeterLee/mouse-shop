import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./NavBar.module.css";

import Index from "./index";
export default function NavBar(props) {
  const nav = useRef();
  let lastScroll = 0;

  const pageScroll = (event) => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > 112 && nav.current.classList) {
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

  const onBringCartState = (data) => {
    props.bringCartState(data);
  };
  useEffect(() => {
    window.addEventListener("scroll", pageScroll), { passive: true };
    return () => {
      window.removeEventListener("scroll", pageScroll, { passive: true });
    };
  }, []);

  return (
    <Fragment>
      <header
        ref={nav}
        className={`${styles.navbar} ${styles.hidden} ${styles.extraOne} ${styles.extraTwo}`}
      >
        <Index onBringCartState={onBringCartState} />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
