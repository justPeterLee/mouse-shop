import Link from "next/link";
import { Fragment } from "react";
import styles from "./NavBar.module.css";

import Index from "./index";
export default function StaticNavBar(props) {
  const onBringCartState = (data) => {
    props.bringCartState(data);
  };
  return (
    <Fragment>
      <header className={styles.staticNavBar}>
        <Index onBringCartState={onBringCartState} />
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}
