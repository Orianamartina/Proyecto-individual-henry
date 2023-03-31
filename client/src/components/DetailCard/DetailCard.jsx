import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react"
import { getDogDetail} from "../../redux/actions";
import Loading from "../Loading/Loading";
import style from "./detailCard.module.css"
import Nav from "../Nav/Nav";

export default function DetailCard() {

    const dogId = useParams()
    const dispatch = useDispatch()

    
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
        
        <div className={style.module}>
            <Nav />
            {loading ? (
            <Loading />
            ) : (
                    <div className={style.container}>
                        <h1 className={style.title}>
                                {detail.name}
                        </h1>
                        <div className={style.imgContainer}> <img className={style.img} src={detail.image} alt={dogId.id} /></div>
                        
                        <div className={style.textContainer}>
                            
                            <h2 className={style.text}>Id:  {detail.id}</h2>
                            <h2 className={style.text}>Lifespan:  {detail.lifespan}</h2>
                            <h2 className={style.text}>Weight:  {detail.weight} Kg</h2>
                            <h2 className={style.text}>Height:  {detail.height} Cm</h2>
                            <h2 className={style.text}>Temperament: </h2>
                            <h2 className={style.text}>{detail.temperament}</h2> 
                            
                        </div>
                    </div>
                )}
        </div>
 )
}