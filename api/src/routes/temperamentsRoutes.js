
const express = require('express');

const getApiDataTemperaments = require ("../controllers/temperControllers")
const {Temperament} = require ("../db");



const temperaments = express.Router()
temperaments.use(express.json());



temperaments.get("/temperaments", async(req,res) =>{
    try {
        allTempers = await getApiDataTemperaments();
        result = await Temperament.findAll()
        res.status(200).json(result)
    } catch (error) {
        
    }
})



module.exports = temperaments