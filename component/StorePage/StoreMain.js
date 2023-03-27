import styles from './StoreMain.module.css';
export default function StoreMain(){
    return(
        <div className={styles.container}>
            <div className={styles.filterContainer}></div>

            <div className={styles.itemContainer}></div>
        </div>
    )
}