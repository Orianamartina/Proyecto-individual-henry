import {Link} from "react-router-dom"
import style from "./landingpage.module.less"
import logo from "./Logo.png"

export default function LandingPage() {

    return(
        <div className={style.mainContainer }>
           
            <img className={style.logo} src={logo} alt="" />
            <Link to = "/dogs" className={style.link}> 
                <h1>Let's go!</h1>
            </Link>
        
        </div>
    )


}