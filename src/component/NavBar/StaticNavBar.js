import Link from "next/link";
import { Fragment } from "react";
import styles from "./NavBar.module.css";

import Index from "./index";
export default function StaticNavBar(props) {
  return (
    <Fragment>
      <header className={styles.staticNavBar}>
       <Index/>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
