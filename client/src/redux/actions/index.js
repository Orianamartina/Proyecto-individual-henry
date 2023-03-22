import { GET_ALL_BREEDS, GET_ALL_TEMPERAMENTS, GET_DOG_BY_NAME, GET_DOG_DETAIL, ORDER_BY_NAME, ORDER_BY_WEIGHT} from "../action-types";
import axios from "axios";

export const getAllBreeds = () => {
    return async function(dispatch){
        let data = await axios("http://localhost:3001/dogs")
        return dispatch({type: GET_ALL_BREEDS, payload: data.data})
    } 
}

export const getAllTemperaments = () => {
    return async function(dispatch){
        let data = await axios("http://localhost:3001/temperaments")
    
        return dispatch({type: GET_ALL_TEMPERAMENTS, payload: data.data})
    }
}
export const getDogDetail  = (id) => {
    return async function(dispatch){
        let data = await axios(`http://localhost:3001/dogs/${id}`)
    
        return dispatch({type: GET_DOG_DETAIL, payload: data.data})
    }
    
}
export const getDogByName = (name) => {
    return async function(dispatch){
        let data = await axios(`http://localhost:3001/dogs/name/?name=${name}`)
    
        return dispatch({type: GET_DOG_BY_NAME, payload: data.data})
    }
}

export const orderByName = (payload) => {
    return{
        type: ORDER_BY_NAME,
        payload
    }
}

export const orderByWeight = (payload) => {
    return{
        type: ORDER_BY_WEIGHT,
        payload
    }
}