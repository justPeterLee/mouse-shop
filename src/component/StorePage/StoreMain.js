import styles from './StoreMain.module.css';
import StoreItem from './StoreItem/StoreItem';
export default function StoreMain(){
    return(
        <div className={styles.container}>
            <div className={styles.filterContainer}></div>

            <div className={styles.itemContainer}>
                <StoreItem/>
                <StoreItem/>
                <StoreItem/>
                <StoreItem/>
                <StoreItem/>
            </div>
        </div>
    )
}