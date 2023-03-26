import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react"
import { getAllBreeds, getDogDetail} from "../../redux/actions";
import {Link} from "react-router-dom"
import Loading from "../Loading/Loading";

export default function DetailCard() {

    const dogId = useParams()
    const dispatch = useDispatch()

    let breeds = useSelector((state) => state.allBreeds);
    let detail = useSelector((state) => state.dogDetail)
    //hacemos dispatch de la action cuando se monta el componente
    useEffect(() =>{
        
        dispatch(getDogDetail(dogId.id))
    }, [])
    
    
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1500);
    
        return () => clearTimeout(timer);
    }, []);
    
    
    
    
    return (
        
        <div>
            {loading ? (
            <Loading />
            ) : (

                <div>
                        <Link to= "/dogs">
                            <button>
                                Home
                            </button>
                        </Link>
                        
                        <h1>
                            {detail.name}
                        </h1>
                        <img src={detail.image} alt={dogId.id} />
                        <h2>Id: {detail.id}</h2>
                        <h2>Lifespan: {detail.lifespan}</h2>
                        <h2>weight: {detail.weight} Kg</h2>
                        <h2>Height: {detail.height} Cm</h2>
                        <h2>Temperament:</h2>
                        <h2>{detail.temperament}</h2>
                    
                </div>)}
        </div>
 )
}