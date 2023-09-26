
// controladores
const {
    
createDog,
getAllBreeds,
getBreedByIdBoth

} = require("../controllers/dogController");


// 


const express = require('express');

const dogs = express.Router();
dogs.use(express.json());


dogs.get("/dogs",async(req, res) =>{
    try {
        
        breedsResponse = await getAllBreeds()
        return res.status(200).json(breedsResponse)
    } catch (error) {
        res.status(400).send(error)
    }} 
);
dogs.get("/dogs/name", async(req, res) =>{
    try {
        const {name} = req.query
        breedsResponse = await getAllBreeds()

        if(name){
           let dogFoundByName = breedsResponse.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()) )
           if (dogFoundByName)  return res.status(200).json(dogFoundByName);
           else{return "The breed you are looking for does not exist"}
           
        }
        else{
            return res.status(200).json(breedsResponse)
        }
        
    } catch (error) {
        res.status(400).send("there was an error loading the data")
    }} )

dogs.get("/dogs/:idRaza", async(req, res)=>{
    try {
      
        const {idRaza} = req.params;
        let breedsResponse = await getBreedByIdBoth(idRaza)
        res.status(200).json(breedsResponse);
        
     
    } catch (error) {
        res.status(400).send("there was an error loading the data")
    }

})

dogs.post("/dogs", async (req, res) =>{
    try {
        const {  image, name, height, weight, lifespan,temperament} = req.body;
        let newDog = createDog(image, name, height, weight, lifespan, temperament)
        res.status(200).json(newDog)
    } catch (error) {
        res.status(400).send("There was an error trying to create a new dog")
    }
})

    

module.exports = dogs