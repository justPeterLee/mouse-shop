import styles from './SideFeature.module.css'
export default function SideFeature(props){
    return(
        <div className={styles.container} style={{backgroundColor:`${props.backgroundColor}`}}>
            <h1>SideFeature</h1>
        </div>
    )
}