import styles from './ProductDescInfo.module.css';

export default function ProductDescInfo({name, cat, price}){
    
    return(
        <div className={styles.body}>
            <div className={styles.name}>
                <p>Piano Tile Mouse</p>
            </div>
            <div className={styles.desc}>
                <p>computer mouse</p>
            </div>
            <div className={styles.price}>
                <p>$120</p>
            </div>      
        </div>
    )
}