import img from "./8ixKaobip.gif"

export default function Loading(){
        return(
            <div  style= {{margin: "10%" }}>
                <h1>Loading...</h1>
        
               <img src={img} alt="loading" style= {{width: "30%" }}/>
            </div>
        )
}