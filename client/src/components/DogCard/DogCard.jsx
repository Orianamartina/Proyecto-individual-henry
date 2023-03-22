export default function CardDog({id, name, weight,temperament, image}) {
    return(
        <div>
            
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <h2>{temperament}</h2>
            <h2>{weight}</h2>
        </div>

    )
}