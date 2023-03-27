import sadDog from "./sadDog.jpg"
import { Link } from "react-router-dom"
import style from "./notfound.module.css"

export default function(){

    return(
        <div>
            <h1 className={style.text}>
                The page you're looking for was not found 
            </h1>
            <Link to="/dogs">
                <h1 className={style.text} >Home</h1>
            </Link>
            <img className={style.img} src={sadDog} alt="sad dog :C" />
        </div>
    )
}