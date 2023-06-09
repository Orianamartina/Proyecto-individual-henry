import style from "./dogcards.module.css"
import {Link} from "react-router-dom"
import Loading from "../Loading/Loading"

 
export default function({currentDogs}){

    return(
        <>
            
            {currentDogs.length === 0  ? (
                <Loading />   
            ) : (
                <div>

                    {currentDogs.map(dog => {
                    
                    const temperament = dog.temperament
                    return (<Link to= {`/dogs/${dog.id}`}>
                        <div className={style.cardContainer}>

                            <img className={style.cardImage} src={dog.image} alt={dog.name}/>
                            <h1 className={style.nameTitle}>{dog.name}</h1>
                            <h3 className={style.h3Title}>{dog.weight} kg</h3>
                            <h3 className={style.h3Title}>
                                {temperament.map(t =>` ${t}`) +  `.`}
                            </h3>
                        
                        </div>
                        
                    </Link>)})}

                </div>
          
           
                
            )}
           
            
        </>
    )
}