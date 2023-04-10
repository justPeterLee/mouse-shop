import styles from './StoreMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';

export default function StoreMenu(){
    const dispatch = useDispatch();
    // const filCat = useSelector();
    

    return(
        <div className={styles.filterContainer}></div>
    )
}