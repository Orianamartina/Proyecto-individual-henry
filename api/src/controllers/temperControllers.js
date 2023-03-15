const axios = require ("axios")
const {api_key} = process.env 
const {Temperament} = require("../db")


const getApiDataTemperaments = async  () =>{
    try {
        let apiData= await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${api_key}`);
        apiData.data.map( dog =>{
            let dogTemperament = dog.temperament
            let temperamentArray = dogTemperament.split(",")
            for (let index = 0; index < temperamentArray.length; index++) {
                const element = temperamentArray[index].trim();
                Temperament.findOrCreate({
                    where:{temperamentName: element},
                    defaults:{
                        temperamentName: element
                    }
                })
                
            }
        }
    )    
    
    }
 
     catch (error) {
        return {error: error.message}
    }
}    


module.exports = getApiDataTemperaments