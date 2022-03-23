
import axios from "axios";

export default function Photo () {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Z6mpNwJCGiyQKtfQvRBNbW3lSHhUM2nhvPQOcdjx`)

    return (

        <>

        <img src="#"/>
        <h2>name of the planet</h2>
        <button>more info</button>

        </>
    )

}