import logo from "./logo.png"
import {Link} from "react-router-dom"
import style from "./nav.module.css"

export default function(){
    
    
    return(
        <div className={style.container}>
            
            
            <div onClick={() => {window.location.replace("/dogs")}} className={style.logoContainer}>
                <img className={style.logo} src={logo} alt="DogHub" />
            </div>
            <div className={style.buttonsContainer}>

            <Link to="/createDog">
                <button className={style.changePageButton}>Create New Dog</button>
            </Link> 
           
             <Link to="/about">
                    <button className={style.changePageButton}>About</button>
                </Link>
            
            </div>
            
            
           

        </div>
    )
}