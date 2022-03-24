
import React, { useState } from "react";
import MoreInfo from "./MoreInfo";

export default function Planet (props) {


    const { image, title, explanation, display } = props;
    const [showText, setShowText] = useState("");


    const displayText = (props) => {
        setShowText(explanation);
    }

    const hideText = (props) => {
        setShowText("");
    }
    
    return (

        <>

        <img src= { image } alt="" />
        <h2> { title } </h2>
        <button onClick={ displayText }>more info</button>
        <p> { showText } </p>
        </>
    )

}