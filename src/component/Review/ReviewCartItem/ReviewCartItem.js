import styles from './ReviewCartItem.module.css';

export default function ReviewCartItem(){
    return(
        <div className={styles.body}>
            <div className={styles.image}></div>
            <div className={styles.info}>
                <div className={styles.title}></div>
                <div className={styles.subInfo}></div>
                <div className={styles.quanity}></div>
                <div className={styles.button}>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className={styles.price}></div>
        </div>
    )
}