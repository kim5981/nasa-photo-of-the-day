import React from "react";
import Home from "./Home"

function Loading (props) {

    if(!props.photoOfTheDay){
        return <h3>Loading...</h3>
    } else {
       return <Home/> 
    }
}

export default Loading;