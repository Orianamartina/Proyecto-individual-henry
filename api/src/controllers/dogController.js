const axios = require("axios")
const {api_key} = process.env 
const {Dog, Temperament} = require ("../db");

//


// ALL BREEDS


//

const getAllBreedsApi = async () => {
    try {
        let dogsArrayApi = []
        let temperamentArray = []
        let apiData= await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${api_key}`);
        await apiData.data.map( dog =>{

            if(dog.temperament) temperamentArray = dog.temperament.split(", ")
            
            dogsArrayApi.push({
                id: dog.id,
                name: dog.name,
                weight: dog.weight.metric,
                image: dog.image.url,
                height:dog.height.metric,
                lifespan: dog.life_span,
                temperament: temperamentArray
            })
        })
        return dogsArrayApi
    
    
    }catch(error){
        return error
    }
}


const getAllBreedsDb = async () => {

    try{
        
        const dbData = await Dog.findAll({
            include: Temperament
        });

        
        const dogsArrayDb = await dbData.map(dog => {
            return {
                id: dog.id,
                name: dog.name,
                weight: dog.weight,
                image: dog.image,
                height:dog.height,
                lifespan: dog.lifespan,
                temperament: dog.Temperaments.map(temp => temp.temperamentName)
            }
        })
        return dogsArrayDb;
    }catch(error){
            return {error: "Problem finding all breeds! who let the dogs out?"}
        }
}

//concateno la informacion de api y la informacion de db para retornar todo junto

const getAllBreeds = async ()=>{
    let apiDogs = await getAllBreedsApi();
    //let databaseDogs = await getAllBreedsDb()

   // let result = apiDogs.concat(databaseDogs)
    return apiDogs
}
//



// BREEDS BY ID



//

const getBreedByIdApi = async (idRaza) => {
    try {
        let dogsArrayApi = []
        let apiData= await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${api_key}`);
        await apiData.data.map( dog =>{
            dogsArrayApi.push({
                id: dog.id,
                name: dog.name,
                weight: dog.weight.metric,
                image: dog.image.url,
                height:dog.height.metric,
                lifespan: dog.life_span,
                temperament: dog.temperament
            })
        })
        let foundBreed = dogsArrayApi.find(dog => dog.id === Number(idRaza));
        return foundBreed
    } catch (error) {s
        return {error: "There was a problem finding the breed"}
    }
}


const getBreedByIdDb = async (id) => {
    try{
       
        let apiDogs = await getAllBreedsDb();

        let dogFound = apiDogs.find(dog => dog.id === id)
        return  dogFound
    } catch (error) {
        return {error: "There was a problem finding the breed"}
     }
}
// BUSCO POR ID EN API Y DATABASE 
const getBreedByIdBoth = async (id) => {
    
    try {
        const getIdApi = await getBreedByIdApi(id);
        const getIdDb = await getBreedByIdDb(id); 

        //is there a better way to do this ??'
        if (id.length > 5) return getIdDb;
        else {
            return getIdApi
        }
    } catch (error) {
        return error
    }
    
}


//


// BREEDS BY NAME


//

const getBreedByNameApi = async (string) => {
    try {
        let apiData= await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${api_key}`);

    } catch (error) {
        
    }
}

//


// DOGS POST


//
const createDog = async (image, name, height, weight, lifespan, temperament) => {
    
     try {
        const newDog = Dog.create({
        image, name, height, weight, lifespan, temperament
     }).then(async temper => {
        for (let index = 0; index < temperament.length; index++) {
    
            temper.addTemperaments(await Temperament.findOne({
                where: {
                    temperamentName: temperament[index]
                }, include: Temperament.temperamentName
            }))
        }})
     return "Breed succesfully created! Woof!" 
     } catch (error) {
        return "There was a problem creating a new breed :c"
     }
}


module.exports = {
    
   
    createDog,
    getAllBreeds,
    getBreedByIdBoth
}