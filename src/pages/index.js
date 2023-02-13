import AboutModule from "component/HomePage/AboutModule/AboutModule";
import MainFeatureModule from "component/HomePage/MainFeature/MainFeature";
import SideFeature from "component/HomePage/SideFeature/SideFeature";
import SlideShow from "component/HomePage/SlideShow/SlideShow";
import styles from '../styles/Home.module.css'
 
 export default function HomePage(){
  return(
    <div className={styles.container}>
      <MainFeatureModule/>
      <SlideShow/>
      <SideFeature backgroundColor={'rgb(150, 150, 150)'}/>
      <SideFeature backgroundColor={'rgb(240, 240, 220)'}/>
      <AboutModule/>
    </div>
  )
 }