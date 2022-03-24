
import React, { useState } from "react";
import MoreInfo from "./MoreInfo";

export default function Planet (props) {

    const { image, title, explanation, displayText } = props;
    const [ summary, setSummary ] = useState( null);

    // const displaySummary = explanation => {
    //     // setSummary(explanation)
    // }

    // console.log(displaySummary());

    // const hideSummary = () => {
    //     setSummary(null);
    // }

    
    return (

        <>

        <img src= { image } alt="" />
        <h2> { title } </h2>
        < MoreInfo  explanation={ explanation } display={ displayText }/>
        <button onClick={ displayText }>more info</button>
        </>
    )

}