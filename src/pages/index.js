import FeatureModule from "component/HomePage/Feature/Feature";
import SlideShow from "component/HomePage/SlideShow/SlideShow";
import styles from '../styles/Home.module.css'
 
 export default function HomePage(){
  return(
    <div className={styles.container}>
      <FeatureModule/>
      <SlideShow/>
    </div>
  )
 }