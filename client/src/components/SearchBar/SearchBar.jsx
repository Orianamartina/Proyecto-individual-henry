
import React from "react";
import  {useEffect, useState} from "react"

export default function SearchBar(props) {
    const[text, setText] = useState("")
    
    function handleChange(event){
        setText(event.target.value)
    }
    
    return (
        <div >
            
            <input  type='search' value = {text} onChange ={handleChange}/>
            <button onClick={() => props.onSearch(text)}>Search</button> 
        </div>
    );
}
    