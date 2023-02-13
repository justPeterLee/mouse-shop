import { Fragment } from "react"
import styles from './NavBar.module.css'
export default function StaticNavBar(props){
    return (
        <Fragment>
            <header className={styles.staticNavBar}>asdf</header>
            <main>{props.children}</main>
        </Fragment>
    )
}