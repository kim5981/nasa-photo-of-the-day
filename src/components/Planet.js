
import React from "react";

export default function Planet (props) {

    const { hdurl, title } = props;

    
    return (

        <>

        <img src= { hdurl } alt="" />
        <h2> { title } </h2>
        <button>more info</button>

        </>
    )

}