import {Link} from "react-router-dom"
import style from "./landingpage.module.css"


export default function LandingPage() {

    return(
        <div className={style.mainContainer }>
           <div className={style.textContainer}>

             <h1 className={style.text}>Welcome to DogHub</h1>
             <div className={style.linkContainer}>
                <Link  to = "/dogs" > 
                 <button className={style.link}> Let's go!</button>

                </Link>
             </div>
            
           </div>
           
            
        </div>
    )


}