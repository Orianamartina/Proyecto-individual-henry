import { useState } from "react"
import style from "./pages.module.css"

export default function({amountOfPages, currentPage, setCurrentPage}){
    console.log(currentPage)
    let pages = amountOfPages
    let lowestHighestPagePossible = amountOfPages.length - 4
    const lowestIndex = currentPage - 1
    const highestIndex = currentPage + 3 
   
    const pageOnClickNext = () => {
        if (currentPage < amountOfPages.length){
            setCurrentPage(currentPage + 1)
        }  
             
    };
    const pageOnClickPrevious = () => {
        if (currentPage > 1){
            setCurrentPage( currentPage - 1)
        }
    }
    

    console.log(pages)
    return (
        <div  className={style.buttonsContainer}>
            <button className={style.button} onClick={() => setCurrentPage(1)}>{"<<"}</button>
            <button className={style.button}  onClick={() => pageOnClickPrevious()}>{"<"}</button>
            {currentPage <= lowestHighestPagePossible? pages.slice(lowestIndex, highestIndex).map(page => {return <button style ={{ backgroundColor: currentPage === page? "rgb(160, 255, 249)" : "" }} onClick={() => setCurrentPage(page)} className={style.button}>{page}</button>})
            : pages.slice(-4, pages.length).map(page => {return <button style ={{ backgroundColor: currentPage === page? "rgb(160, 255, 249)" : "" }} onClick={() => setCurrentPage(page)} className={style.button}>{page}</button>})
        }
            <button className={style.button}  onClick={() => pageOnClickNext()}>{">"}</button>
            <button className={style.button}  onClick={() => setCurrentPage(pages.length)}>{">>"}</button>
            
            
        </div>
    )
}