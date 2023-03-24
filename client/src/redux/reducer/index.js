
import { FILTER_BY_TEMPERAMENT, GET_ALL_BREEDS,  GET_ALL_TEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, ORDER_BY_NAME, ORDER_BY_WEIGHT, POST_DOG } from "../action-types"

const initialState = {
    breedsForFunctions: [],
    allBreeds: [],
    allTemperaments: [],
    dogDetail: [],
    dogsByName: []
}

 const reducer = (state = initialState, action) => {

    switch(action.type){

        case GET_ALL_BREEDS: 
            return{
                ...state,
                breedsForFunctions: action.payload,
                allBreeds: action.payload.sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1 
                else return 1})
                
            }
        
        case GET_ALL_TEMPERAMENTS:
            return{
                ...state,
                allTemperaments: action.payload.sort((a, b) => {
                if (a.temperamentName.toLowerCase() < b.temperamentName.toLowerCase())
                return -1 
                else return 1})
            }

        case GET_DOG_DETAIL:
            return{
                ...state,
                dogDetail: action.payload

            }

        case GET_DOG_BY_NAME:
            return{
                ...state,
                allBreeds: action.payload
            }
        case ORDER_BY_NAME:{
            let sortedArray = []
            if (action.payload === "asc"){
                sortedArray = state.allBreeds.sort((a,b) =>{
                    let dogA = a.name.toLowerCase()
                    let dogB = b.name.toLowerCase()
                    if (dogA > dogB) return 1;
                    if (dogA < dogB) return -1;
                return 0; 
                })
                return{
                    ...state,
                    allBreeds: sortedArray
                    } 
            }
            if (action.payload === "desc"){
                sortedArray = state.allBreeds.sort((b,a) =>{
                    let dogA = a.name.toLowerCase()
                    let dogB = b.name.toLowerCase()
                    if (dogA > dogB) return 1;
                    if (dogA < dogB) return -1;
                return 0; 
                })

                return{
                ...state,
                allBreeds: sortedArray
                } 
            
            }
            break;
        }   
        case ORDER_BY_WEIGHT:{
            let sortedArray = []
            if (action.payload === "light"){
                sortedArray = state.allBreeds.sort((a, b) => {
                    let dogA = Number(a.weight.slice(0, 2))
                    let dogB = Number(b.weight.slice(0, 2))
                    if (dogA > dogB) return 1;
                    if (dogA < dogB) return -1;
                     return 0;
                })
                return{
                    ...state,
                    allBreeds: sortedArray
                    } 
            }
            if (action.payload === "heavy"){
                sortedArray = state.allBreeds.sort((b, a) => {
                    let dogA = Number(a.weight.slice(5, 7))
                    let dogB = Number(b.weight.slice(5, 7))
                    if (dogA > dogB) return 1;
                    if (dogA < dogB) return -1;
                    return 0;
                })
                return{
                    ...state,
                    allBreeds: sortedArray
                    } 
            }
            break;
        }
        case FILTER_BY_TEMPERAMENT:{
            let filteredArray = []
            let allBreeds = state.breedsForFunctions
           
            for (let i = 0; i < allBreeds.length; i++) {
                if (allBreeds[i].temperament.includes(action.payload)){
                    filteredArray.push(allBreeds[i])
                }
            }
             
            return{
                ...state,
                allBreeds: filteredArray
            } 
        
        
        }
        default: {
            return state
        }


    }
}




export default reducer;