import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { getAllBreeds,  getAllTemperaments, getDogByName, orderByName, orderByWeight } from "../../redux/actions";
import DogPages from "../DogPages.jsx/DogPages";
import SearchBar from "../SearchBar/SearchBar";

export default function Dogs() {
   
    const dispatch = useDispatch()
    const breeds = useSelector((state) => state.allBreeds)
    
    let breedsDisplay = breeds
    const [flag, setFlag] = useState(null)
    
    const temperaments = useSelector((state) => state.allTemperaments)
    let dogsByName = useSelector((state) => state.dogsByName)

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
    }, []);
    
    
    //use effect es para traer la informacion cuando se monta el componente
    useEffect(() => { 
        dispatch(getAllBreeds())
        dispatch(getAllTemperaments())
         
    }, [dispatch])
    
  

  
    
    //queremos que cuando muestra todos los perros, se muestren de a 8
    
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8
    const lastIndex = currentPage * dogsPerPage; 
    const firstIndex = lastIndex - dogsPerPage;
    let pageQuantity = Math.ceil(breeds.length / dogsPerPage)
   let currentDogs = breedsDisplay.slice(firstIndex, lastIndex)   

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


   
    

    const handleTemperamentChange= (e) => {


    }
    //busqueda
   
    const [text, setText] = useState()
    const onSearch = async(text) => {
        setText(text)
        await dispatch(getDogByName(text))
        breeds = dogsByName
        
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
    
    return(
       
        <div>
            {loading ? (
            <p>Loading...</p>
            ) : (
                <div>
                    
                    <h1>Componente Dogs</h1>
                    
                    <div>
                        <SearchBar onSearch = {onSearch} />
                    </div>
                    
                    <div>
                        <h1>Sort By:</h1>
                    
                        <select onChange={(e) => {handleOrderByName(e)}}name="sort" id="1">
                            <option value=""> Select Option </option>
                            <option value="asc">A - Z</option>
                            <option value="desc">Z - A</option>
                            
                        </select>
                        <select onChange={(e) => {handleOrderByWeight(e)}} name="" id="">
                            <option value=""> Select Option </option>
                            <option value="light">Light - Heavy</option>
                            <option value="heavy">Heavy - Light</option>
                            
                        </select>
                        
                            <select onChange={(e) => {handleTemperamentChange(e)}} name="filter" id="2">
                            {temperaments.map(temp =>{
                                return <option key = {temp.id} value={temp.temperamentName}>{temp.temperamentName}</option>
                            })
                                
                            }
                            </select>

                        
                    </div>

                            
                    <div>
                        <button onClick={pageOnClickPrevious}>Previous</button>
                        <button onClick={pageOnClick}>Next</button>
                        <DogPages currentDogs = {currentDogs} />
                    </div>

                </div>)}
        
        
        </div>
        )

}



