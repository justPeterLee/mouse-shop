import styles from './ProductSelectionContainer.module.css';

import ProductSelectionItem from '../ProductSelectionItem/ProductSelectionItem';

export default function ProductSelectionContainer(props){
    return(
        <div>
        <div>
          <p>{props.cat}</p>
        </div>
        <div className={styles.item_container}>
            {props.items.map((item)=>{
                return(
                    <ProductSelectionItem key={item.selectionItemId} item={item.selectionItemDesc} cat={props.cat} bringSelection={null}/>
                )
            })}
        </div>
      </div>
    )
}