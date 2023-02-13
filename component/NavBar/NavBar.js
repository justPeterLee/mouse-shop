import { Fragment, useEffect, useRef } from "react";
import styles from "./NavBar.module.css";
export default function NavBar(props) {
  const nav = useRef();
  let lastScroll = 0;

  const pageScroll = (event) => {
    let currentScroll = window.pageYOffset;
    let touchTop = false;

    console.log(`current: ${currentScroll}  last:${lastScroll}`)
    if(currentScroll > 112){
        nav.current.classList.remove(styles.hidden)
        if (currentScroll - lastScroll > 0) {
            nav.current.classList.add(styles.scrollDown);
            nav.current.classList.remove(styles.scrollUp);
          } else {
            // scrolled up -- header show
            nav.current.classList.add(styles.scrollUp);
            nav.current.classList.remove(styles.scrollDown);
          }
    }else{
        if(currentScroll === 0){
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
        asdf
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
