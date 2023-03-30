import style from "./searchbar.module.css"
import React from "react";
import  {useEffect, useState} from "react"

export default function SearchBar(props) {
    const[text, setText] = useState("")
    
    function handleChange(event){
        setText(event.target.value)
    }
    
    return (
        <div className={style.barContainer}>
            
            <input className={style.barInput} type='search' value = {text} placeholder="Search by name" onChange ={handleChange}></input>
              
            <button className={style.searchButton} onClick={() => props.onSearch(text)}>Search</button> 
        
                            
        </div>
    );
}
    