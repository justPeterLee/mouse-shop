import LineAbout from "@/component/About/LineAbout/LineAbout";
import AboutPage from "@/component/About/MainAbout/AboutPage";
import ShowAbout from "@/component/About/ShowAbout/ShowAbout";
export default function About(){
    return(
        <div>
            <AboutPage/>
            <LineAbout/>
            <ShowAbout/>
        </div>
    )
}