import React, { useState, useEffect } from "react";
import axios from "axios"

export default function MoreInfo ( props ) {

    const { explanation, display } = props;
    const [showText, setShowText] = useState("");

     function displayText () {
        setShowText(explanation);
    }

    return (
        <>
        <p> {showText} </p>
        
        </>
    )
}