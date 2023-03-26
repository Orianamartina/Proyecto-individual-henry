import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { filterByTemperament, getAllBreeds,  getAllTemperaments, getDogByName, orderByName, orderByWeight } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import {Link} from "react-router-dom"
import DogCards from "../DogCards/DogCards";
import style from "./dogs.module.css";
import logo from "./logo.png"

export default function Dogs() {
   
    const dispatch = useDispatch()
    const breeds = useSelector((state) => state.allBreeds)
    const temperaments = useSelector((state) => state.allTemperaments) 

    //loading component timing(could await dispatch load)
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
    
        return () => clearTimeout(timer);
    }, []);
    
    
    //use effect es para traer la informacion cuando se monta el componente 
    // y que se actualize cuando cambia el estado de redux.
    useEffect(() => { 
        dispatch(getAllBreeds())
        dispatch(getAllTemperaments())
         
    }, [dispatch])

    //flags for reloading

    const [flag, setFlag] = useState()
    
    //queremos que cuando muestra todos los perros, se muestren de a 8

    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8
    const lastIndex = currentPage * dogsPerPage; 
    const firstIndex = lastIndex - dogsPerPage;
    let pageQuantity = Math.ceil(breeds.length / dogsPerPage)
    let currentDogs = breeds.slice(firstIndex, lastIndex)   

    //botones de paginado
    const pageOnClick = () => {
        if (currentPage < pageQuantity){
            setCurrentPage(currentPage + 1)
            
        }  
             
    };
    const pageOnClickPrevious = () => {
        if (currentPage > 1){
            setCurrentPage( currentPage - 1)
        }
    }

   //handle changes =

    const handleTemperamentChange= (e) => {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value));
        setFlag(e.target.value)

    }
    
    const handleOrderByName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setFlag(e.target.value)
        
    }

    const handleOrderByWeight  = (e) => {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setFlag(e.target.value)
    }

    //busqueda
   
    const [text, setText] = useState()
    const onSearch = async(text) => {
        setText(text)
        await dispatch(getDogByName(text))
        
    }   
  
    return(
       
        <div>
            {loading ? (
            <Loading/>
            ) : (
                <div className="bigContainer">
                    
                    

                    <div className= {style.cardsAndOptions}>
                    
                        <div className={style.optionsContainer}>
                            
                            <img className={style.logo} src={logo} alt="" />
                            
                            <Link to="/createDog">
                                <button>Create New Dog</button>
                            </Link>
                            <h1>Sort By:</h1>
                            <h2>Alphabetical order</h2>
                            <select onChange={(e) => {handleOrderByName(e)}}name="sort" id="1">
                                <option value=""> Select Option </option>
                                <option value="asc">A - Z</option>
                                <option value="desc">Z - A</option> 
                            </select>
                            <h2>Weight</h2>
                            <select onChange={(e) => {handleOrderByWeight(e)}} name="" id="">
                                <option value=""> Select Option </option>
                                <option value="light">Light - Heavy</option>
                                <option value="heavy">Heavy - Light</option>
                            </select>
                            <h1>Filter By:</h1>
                            <h2>Temperament</h2>
                            <select onChange={(e) => {handleTemperamentChange(e)}} name="filter" id="2">
                                <option value=""> Select Option</option>
                            {temperaments.map(temp =>{
                                return <option key = {temp.id} value={temp.temperamentName}>{temp.temperamentName}</option>
                                    }
                                ) 
                            }      
                            </select>
                        
                        </div>    
                        
                        <div className={style.displayContainer}>

                            <h1>DogHub</h1>
                        
                            <div>
                                 <SearchBar onSearch = {onSearch} />
                             </div>
                            <button onClick={pageOnClickPrevious}>Previous</button>
                            <button onClick={pageOnClick}>Next</button>

                            <div className={style.cardsContainer}>
                                <DogCards currentDogs = {currentDogs} />
                            </div>

                            <button onClick={pageOnClickPrevious}>Previous</button>
                            <button onClick={pageOnClick}>Next</button>
                        </div>
                        
                    </div>
                </div>)}
        
        
        </div>
        )

}



