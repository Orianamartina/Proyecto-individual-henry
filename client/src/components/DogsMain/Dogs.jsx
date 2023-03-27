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
        setCurrentPage(1)
    }
    
    const handleOrderByName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setFlag(e.target.value)
        setCurrentPage(1)
        
    }

    const handleOrderByWeight  = (e) => {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setFlag(e.target.value)
        setCurrentPage(1)
    }
    const handleOrderBySource = (e) => {
        
    }

    //busqueda
   
    const [text, setText] = useState()
    const onSearch = async(text) => {
        setText(text)
        await dispatch(getDogByName(text))
        
    }   
  
    return(
       
        <div>
            {currentDogs.length === 0 ? (
            <Loading/>
            ) : (
                <div>

                    <div className={style.nav}>
                            <div className={style.logoContainer}>
                                <img className={style.logo} src={logo} alt="DogHub" />
                                <h1 className={style.title}>DogHub</h1>
                            </div>
                            <div className={style.buttonsAndOptionsContainer}>

                            
                                <div className={style.buttonsContainer}>

                                    <Link to="/about">
                                        <button className={style.changePageButton}>About</button>
                                    </Link>
                                    <div className={style.searchBarContainer}>
                                        <SearchBar  onSearch = {onSearch} />
                                    </div>
                                    <Link to="/createDog">
                                        <button className={style.changePageButton}>Create New Dog</button>
                                    </Link>
                                    
                                </div>
                                <div className={style.optionsContainer}>

                                    
                                   
                                    <div className={style.select}>
                                    
                                        <select className={style.options} onChange={(e) => {handleOrderByName(e)}}>
                                            <option value="" disabled selected> Sort by name </option>
                                            <option value="asc">A - Z</option>
                                            <option value="desc">Z - A</option> 
                                            
                                        </select>
                                    </div>
                                    
                                    
                                    <div className={style.select}>
                                        
                                        <select className={style.options} onChange={(e) => {handleOrderByWeight(e)}} >
                                            <option  value="" disabled selected> Sort by weight </option>
                                            <option  value="light">Light - Heavy</option>
                                            <option  value="heavy">Heavy - Light</option>
                                        </select>
                                    </div>
                                    
                                    
                                    <div className={style.select}>
                                        
                                        <select className={style.options} onChange={(e) => {handleTemperamentChange(e)}} >
                                            <option value="" disabled selected> Filter by temperament</option>
                                        {temperaments.map(temp =>{
                                            return <option key = {temp.id} value={temp.temperamentName}>{temp.temperamentName}</option>
                                                }
                                            ) 
                                        }      
                                        </select>
                                    </div> 
                                    <div className={style.select}>
                                        
                                        <select className={style.options} onChange={(e) => {handleOrderBySource(e)}}>
                                            <option value="" disabled selected> Filter by source </option>
                                            <option value="api">Api</option>
                                            <option value="db">Created</option> 
                                            
                                        </select>
                                    </div>
                                    
                            
                                </div>  
                            </div>  
                        

                   </div>
                    
                        
                      
                    <div className={style.displayContainer}>
                       
                        <div >
                            <button className={style.pageControlButtons} onClick={pageOnClickPrevious}>Previous</button>
                            <button className={style.pageControlButtons} onClick={pageOnClick}>Next</button>

                        </div>
                        

                        <div className={style.cardsContainer}>
                            <DogCards currentDogs = {currentDogs} />
                        </div>
                        <div>
                            <button className={style.pageControlButtons} onClick={pageOnClickPrevious}>Previous</button>
                            <button className={style.pageControlButtons} onClick={pageOnClick}>Next</button>
                        </div>
                        
                    </div>
                        
                    
                </div>)}
        
        
        </div>
        )

}



