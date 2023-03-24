import CardDog from "../DogCard/DogCard";
import {Link} from "react-router-dom"
 
export default function(currentDogs){



    return(
        <>
            
            {currentDogs.currentDogs.map(dog => {
                return (<Link to= {`/dogs/${dog.id}`}>
                    
                    <CardDog 
                        key = {dog.id}
                        id = {dog.id}
                        name= {dog.name}
                        image = {dog.image}
                        weight= {dog.weight}
                        temperament= {dog.temperament}
                    />
                
                </Link>)

                
            })}
           
            
        </>
    )
}