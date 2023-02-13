import { Fragment, useEffect, useRef } from "react";
import styles from "./NavBar.module.css";
export default function NavBar(props) {
  const nav = useRef();
  let lastScroll = 0;

  const pageScroll = (event) => {
    let currentScroll = window.pageYOffset;
    console.log(nav.current.classList);
    if (currentScroll - lastScroll > 0) {
      nav.current.classList.add(styles.scrollDown);
      nav.current.classList.remove(styles.scrollUp);
    } else {
      // scrolled up -- header show
      nav.current.classList.add(styles.scrollUp);
      nav.current.classList.remove(styles.scrollDown);
    }
    lastScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", pageScroll);
  }, []);
  return (
    <Fragment>
      <header ref={nav} className={styles.navbar}>
        asdf
      </header>
      <main onScroll={pageScroll}>{props.children}</main>
    </Fragment>
  );
}
