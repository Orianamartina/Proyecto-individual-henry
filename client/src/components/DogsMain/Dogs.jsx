import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import { filterByTemperament, getAllBreeds,  getAllTemperaments, getDatabaseOrApi, getDogByName, orderByName, orderByWeight } from "../../redux/actions";

import SearchBar from "../SearchBar/SearchBar";
import DogCards from "../DogCards/DogCards";
import style from "./dogs.module.css";
import Pages from "../Pages/Pages";
import Nav from "../Nav/Nav";

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
    const breedsPerPage= 8
    const lastIndex = currentPage * breedsPerPage; 
    const firstIndex = lastIndex - breedsPerPage;
    let currentDogs = breeds.slice(firstIndex, lastIndex)   

    //botones de paginado
    //(el estado llega con delay)
   
    let amountOfPages = []

    for (let i = 1; i <= Math.ceil(breeds.length / breedsPerPage); i++){  
        amountOfPages.push(i)}

    //reset selects 
    function resetS(id) {
        const multipleSelect = document.getElementById(id);
        multipleSelect.selectedIndex = 0;
    }
    //handle changes =
    const handleTemperamentChange= (e) => {
        e.preventDefault();
        dispatch(filterByTemperament(e.target.value));
        setFlag(e.target.value)
        setCurrentPage(1)
        resetS(1)
        resetS(2)
        resetS(4)
    }
    
    const handleOrderByName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setFlag(e.target.value)
        setCurrentPage(1)
        resetS(2)
        resetS(3)
        resetS(4)
    }

    const handleOrderByWeight  = (e) => {
        e.preventDefault();
        dispatch(orderByWeight(e.target.value))
        setFlag(e.target.value)
        setCurrentPage(1)
        resetS(1)
        resetS(3)
        resetS(4)
    }
    const handleOrderBySource = (e) => {
        e.preventDefault()
        dispatch(getDatabaseOrApi(e.target.value))
        setFlag(e.target.value)
        setCurrentPage(1)
        resetS(1)
        resetS(2)
        resetS(3)
    }

    //busqueda
   
    const [text, setText] = useState()
    const onSearch = async(text) => {
        setText(text)
        await dispatch(getDogByName(text))
    }   
  
    return(
       
    

        <div>

            <div className={style.nav}>
                    <Nav />
            </div>
                    <div className={style.buttonsAndOptionsContainer}>

                    
                        <div className={style.buttonsContainer}>

                            
                            <div className={style.searchBarContainer}>
                                <SearchBar  onSearch = {onSearch} />
                            </div>
                            
                            
                        </div>
                        <div className={style.optionsContainer}>

                            
                            <div className={style.select}>
                            
                                <select id="1" className={style.options} onChange={(e) => {handleOrderByName(e)}}>
                                    <option value="" disabled selected  > Sort by name </option>
                                    <option value="asc">A - Z</option>
                                    <option value="desc">Z - A</option> 
                                    
                                </select>
                            </div>
                            
                            
                            <div className={style.select}>
                                
                                <select id="2" className={style.options} onChange={(e) => {handleOrderByWeight(e)}} >
                                    <option  value="" disabled selected > Sort by weight </option>
                                    <option  value="light">Light - Heavy</option>
                                    <option  value="heavy">Heavy - Light</option>
                                </select>
                            </div>
                            
                            
                            <div className={style.select}>
                                
                                <select id="3" className={style.options} onChange={(e) => {handleTemperamentChange(e)}} >
                                    <option value="" disabled selected > Filter by temperament</option>
                                {temperaments.map(temp =>{
                                    return <option key = {temp.id} value={temp.temperamentName}>{temp.temperamentName}</option>
                                        }
                                    ) 
                                }      
                                </select>
                            </div> 
                            <div className={style.select}>
                                
                                <select id="4" className={style.options} onChange={(e) => {handleOrderBySource(e)}}>
                                    <option value="" disabled selected > Filter by source </option>
                                    <option value="api">Api</option>
                                    <option value="db">Created</option> 
                                    
                                </select>
                            </div>
                            
                    
                        </div>  
                     
            </div>

            <div className={style.displayContainer}>
                
                <div className={style.cardsContainer}>
                    <DogCards currentDogs = {currentDogs} />
                </div>
                <div>
                    
                    <Pages amountOfPages = {amountOfPages} currentPage = {currentPage} setCurrentPage = {setCurrentPage}/>
                </div>
                
            </div>
                
            
        </div>)}
        
        
        



