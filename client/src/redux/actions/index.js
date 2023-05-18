import { FILTER_BY_TEMPERAMENT, GET_ALL_BREEDS, GET_ALL_TEMPERAMENTS,GET_DATABASE_BREEDS, GET_DOG_BY_NAME, GET_DOG_DETAIL, ORDER_BY_NAME, ORDER_BY_WEIGHT, GET} from "../action-types";
import axios from "axios";
const apiUrl = "https://dog-hub.onrender.com"

export const getAllBreeds = () => {
    return async function(dispatch){
        let data = await axios(`${apiUrl}/dogs`)
        return dispatch({type: GET_ALL_BREEDS, payload: data.data})
    }
}

export const getAllTemperaments = () => {
    return async function(dispatch){
        let data = await axios(`${apiUrl}/temperaments`)
    
        return dispatch({type: GET_ALL_TEMPERAMENTS, payload: data.data})
    }
}
export const getDogDetail  = (id) => {
    return async function(dispatch){
        let data = await axios(`${apiUrl}/dogs/${id}`)
    
        return dispatch({type: GET_DOG_DETAIL, payload: data.data})
    }
    
}
export const getDogByName = (name) => {
    return async function(dispatch){
        let data = await axios(`${apiUrl}/dogs/name/?name=${name}`)
    
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
export const filterByTemperament = (payload) => {
    return{
        type: FILTER_BY_TEMPERAMENT,
        payload
    }
}

export const postDog = (payload) => {
    return async function() {
        const data = await axios.post(`${apiUrl}/dogs`, payload)
        return data
    }
    
}
export const getDatabaseOrApi = (payload) => {
    return{
        type: GET_DATABASE_BREEDS,
        payload
    }
}
