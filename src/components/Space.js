
import React, { useState } from "react";
import "./Space.css"

export default function Space (props) {


    //**************************** PROPS & HELPERS **************************** //

    const { image, title, explanation, display } = props;
    const [showText, setShowText] = useState("");


    const toggleText = (props) => {
        if(showText === ""){
            setShowText(explanation)
        } else {
            setShowText("");
        }
    }

    const hideText = (props) => {
        setShowText("");
    }
    

//**************************** STYLING**************************** //

    const divStyle = {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center"
    }



    const imageStyle = {
        width: "30%",
        height: "55vh",
        borderRadius: "5%",
        alignItems: "center",
        margin: "4% 10% 4% 10%",
        boxShadow: "6px 6px 15px #1f141f"
    }


    const titleStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textShadow: "2px 4px 6px #1f141f"
    }

    const btnStyle = {
        width: "8%",
        color: "#ccfff6",
        backgroundColor: "#1f141f",
        padding: "1%",
        borderRadius: "5px",
        border: "none"
    }


    const textStyle = {
        width: "45%",
        textShadow: "2px 4px 6px #1f141f",
        textAlign: "justify",
        lineHeight: "2",
        paddingRight: "0",
        paddingTop: "-50%"
    }

    const descriptionStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }

    return (

        <div style={ divStyle }>
        
        <img src= { image } alt="" id="planet" style={imageStyle} />

        <div style={ descriptionStyle }>
        <h2 style={ titleStyle }> { title } </h2>
        <p style={ textStyle } > { showText } </p>
        </div>
        
        <button style={ btnStyle } onClick={ toggleText }>more info</button>
        
        </div>
    )

}