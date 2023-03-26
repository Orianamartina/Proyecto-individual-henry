import style from "./dogcards.module.css"
import {Link} from "react-router-dom"
 
export default function(currentDogs){

/*
    <CardDog 
        key = {dog.id}
        id = {dog.id}
        name= {dog.name}
        image = {dog.image}
        weight= {dog.weight}
        temperament= {dog.temperament}
    />*/
   
    
    return(
        <>
            
            {currentDogs.currentDogs.map(dog => {
                let lastIndex = dog.temperament[dog.temperament.length-1]
                const temperament = dog.temperament.slice(0, -1)

                return (<Link to= {`/dogs/${dog.id}`}>
                    <div className={style.cardContainer}>

                        <h1 className={style.nameTitle}>{dog.name}</h1>
                        <img className={style.cardImage} src={dog.image} alt={dog.name}/>
                        <h2 className={style.h2Title}>Average weight:</h2>
                        <h3 className={style.h3Title}>{dog.weight} kg</h3>
                        <h2 className={style.h2Title}>Temperament:</h2>
                        <h3 className={style.h3Title}>
                            {temperament.map(t =>` ${t}`) + `, ${lastIndex}.`}
                        </h3>
                    
                    </div>
                    
                </Link>)

                
            })}
           
            
        </>
    )
}