import {Link} from "react-router-dom"

export default function LandingPage() {

    return(
        <div>
            <h1> Dogs Landing Page</h1>
            <button>
                <Link to = "/dogs"> Home</Link>
            </button>
        </div>
    )


}