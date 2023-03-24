export default function CardDog({id, name, weight,temperament, image}) {
    let lastIndex = temperament[temperament.length-1]
    temperament = temperament.slice(0, -1)
    
    
    return(
        <div>
            
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <h2>Average weight:</h2>
            <h3>{weight}</h3>
            <h2>Temperament:</h2>
            <h3>
                {temperament.map(t =>` ${t}`) + `, ${lastIndex}.`}
            </h3>
        </div>

    )
}