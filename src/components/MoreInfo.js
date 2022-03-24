import React, { useState, useEffect } from "react";
import axios from "axios"

export default function MoreInfo ( props ) {

    const { explanation } = props;
    

    // useEffect(  ()  => {
    //     setSummary(explanation)
    // }, [explanation])

    return (
        <>
        <p>{ explanation }</p>
    
        </>
    )
}