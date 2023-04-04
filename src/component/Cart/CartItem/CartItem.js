import styles from './CartItem.module.css';

export default function CartItem({title, quanity, price }){
    return(
        <div className={styles.body}>
            <div className={styles.image}></div>
            <div className={styles.info}>
                <div className={styles.title}>Piano Tile Mouse</div>
                <div className={styles.quanity}>
                    <button>-</button>
                    <p>{1}</p>
                    <button>+</button>
                </div>
            </div>
            <div className={styles.price}>${20}.00</div>
        </div>
    )
}