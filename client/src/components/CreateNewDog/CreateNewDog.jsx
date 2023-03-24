import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllTemperaments } from "../../redux/actions"
import Loading from "../Loading/Loading"
import { postDog } from "../../redux/actions"
import {Link} from "react-router-dom"

const validate = (form) => {
        let errors = {}
        if(!form.name || !form.maximumHeight || !form.minimumHeight ||
            !form.minimumWeight || !form.maximumWeight || !form.lifespan) {
            errors.completed = "all fields are required"
        }
        if(!isNaN(parseInt(form.name) )){
            errors.name = "Numbers are not allowed"
        }
        if(isNaN(parseInt(form.minimumHeight) )){
            errors.minimumHeight = "Height must be an integer"
        }
        if(isNaN(parseInt(form.maximumHeight))){
            errors.maximumHeight = "Height must be an integer"
        }
        if(isNaN(parseInt(form.minimumWeight))){
            errors.minimumWeight = "Weight must be an integer"
        } if(isNaN(parseInt(form.maximumWeight))){
            errors.maximumWeight = "Weight must be an integer"
        }
        if(isNaN(parseInt(form.lifespan))){
            errors.lifespan = "Lifespan must be an integer"
            console.log(parseInt(form.lifespan))
        }
        if(parseInt(form.minimumHeight) > parseInt(form.maximumHeight)){
            errors.minimumHeight = "Minimum height must be smaller than maximum height"
        }
        if(parseInt(form.minimumWeight) > parseInt(form.maximumWeight)){
            errors.minimumWeight = "Minimum weight must be smaller than maximum weight"
        }
        if(form.temperament.length === 0){
            errors.temperament = "Choose at least one temperament out of the list"
            console.log(form.temperament.length)
        }
        return errors
    }

    export default function CreateNewDog ()  {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
    
        return () => clearTimeout(timer);
    }, []);
    
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.allTemperaments)
    
    useEffect(() => {
        dispatch(getAllTemperaments())
    },[dispatch])


    const [form, setForm] = useState({
        name: "",
        minimumHeight: "",
        maximumHeight: "",
        minimumWeight:"",
        maximumWeight:"",
        lifespan: "",
        image: "",
        temperament: []

    });

    const [button, setButton] = useState(true);


    const [error, setError] = useState({
        name: "",
        minimumHeight: "x",
        maximumHeight: "x",
        minimumWeight:"x",
        maximumWeight:"x",
        lifespan: "x",
        image: "x",
        temperament: "x",
        
    });

    

    const handleChange = (e) => {
         setForm({
            ...form,
            [e.target.name] : e.target.value 
        });
         setError(validate({
            ...form,
            [e.target.name] : e.target.value
        }))
        console.log(error)
        
        
    }

    const handleSelect =  (e) => {
        setForm({
            ...form,
            temperament: [...form.temperament, e.target.value]
        }) 
        setError(validate({...form,
            temperament: [...form.temperament, e.target.value]}))
        
    }
    
    const handleDelete = (el) => {
        setForm({
            ...form,
            temperament: form.temperament.filter(temp => temp !== el)
        })
    }
    
    useEffect(()=>{
        setButton(true)
        if (Object.entries(error).length === 0)setButton(false)
    }, [error, setButton]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let submitForm = { 
            name: form.name,
            height: `${form.minimumHeight} - ${form.maximumHeight}`,
            weight: `${form.minimumWeight} - ${form.maximumWeight}`,
            lifespan: `${form.lifespan} years`,
            image: form.image,
            temperament: form.temperament
        }
        dispatch(postDog(submitForm));
        alert("The new dog was added successfully");
        setForm({
            name: "",
            min_height: "",
            max_height: "",
            min_weight: "",
            max_weight: "",
            lifespan: "",
            image: "",
            temperament: []
        });
        window.location.replace("/dogs")
    }
    return(
        <>
         
            {loading ? (
            <Loading/>
            ) : (
                <>
                <Link to="/dogs">
                    <button>Home</button>
                </Link>
                <form id="form" onSubmit={handleSubmit} action="">

                    <label htmlFor="">
                        Name:
                        <input name= "name" placeholder="..." onChange={(e) => {handleChange(e)}} />
                    </label>
                    <div>{error.name && <p>{error.name}</p>}</div> 
                    <label htmlFor="">
                        Minimum Height
                        <input name= "minimumHeight" placeholder="..." onChange={(e) => {handleChange(e)}} />
                    </label>
                    <div>{error.minimumHeight && <p>{error.minimumHeight}</p>}</div> 
                    <label htmlFor="">
                        Maximum Height
                        <input name= "maximumHeight" placeholder="..." onChange={(e) => {handleChange(e)}} />
                    </label>
                    <div>{error.maximumHeight && <p>{error.maximumHeight}</p>}</div> 
                    <label htmlFor="">
                        Minimum Weight
                        <input name= "minimumWeight" placeholder="..." onChange={(e) => {handleChange(e)}}  />
                    </label>
                    <div>{error.minimumWeight && <p>{error.minimumWeight}</p>}</div> 
                    <label htmlFor="">
                        Maximum Weight
                        <input name= "maximumWeight" placeholder="..." onChange={(e) => {handleChange(e)}} />
                    </label>
                    <div>{error.maximumWeight && <p>{error.maximumWeight}</p>}</div> 
                    <label htmlFor="">
                    Lifespan 
                        <input name= "lifespan" placeholder="..." onChange={(e) => {handleChange(e)}} />
                    </label>
                    <div>{error.lifespan && <p>{error.lifespan}</p>}</div> 
                    
                    <label htmlFor="">
                        Image
                        <input  name="image" placeholder="..."  onChange={(e) => {handleChange(e)}} />
                    </label>

                    
                    
                    <select  onChange={(e) => handleSelect(e)} name="filter" id="2">
                        <option value=""> Select Option</option>
                        {temperaments.map(temp =>{
                            return ( <>
                                    
                                        <option key = {temp.id} value={temp.temperamentName}>{temp.temperamentName}</option>
                            
                                     </>

                                    )
                                }
                            ) 
                        }      
                    </select>
                    <div>{error.temperament && <p>{error.temperament}</p>}</div> 
                    <label htmlFor="">
                        Temperaments: 
                        <ul>
                            {
                                form.temperament.map(t => {
                                    return(<>
                                        <button onClick={() =>handleDelete(t)} key={t}>x</button>
                                        <li>{t}</li> 
                                    </> )
                                })
                            }
                        </ul>
                        
                    <button disabled={button}  type="submit" form="form">Create Dog</button>
                    </label>

                </form>
                </>
                )}
            
    
        </>
    )
}