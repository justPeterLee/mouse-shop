import styles from './StoreMain.module.css';
import StoreItem from './StoreItem/StoreItem';
import { useSelector } from 'react-redux';
export default function StoreMain(){
    const store = useSelector(store=>store.mainStore.mainStore)

    return(
        <div className={styles.container}>
            <div className={styles.filterContainer}></div>

            <div className={styles.itemContainer}>
                {store.map((item)=>{
                    return(
                        <StoreItem
                        key={item.id}
                        id={item.id}
                        name={item.product_name}
                        price={item.product_price}
                        cat={item.category_connection[0].category_ref.category_name}
                        />
                    )
                })}
            </div>
        </div>
    )
}