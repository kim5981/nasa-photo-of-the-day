
import React, { useState } from "react";
import "./Space.css"

export default function Space (props) {


    //**************************** PROPS & HELPERS **************************** //

    const { image, title, explanation, display } = props;
    const [showText, setShowText] = useState("");


    const displayText = (props) => {
        setShowText(explanation);
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
        border: "solid",
        borderColor: "#C3B1E1",
        borderWidth: "10px",
        alignItems: "center",
        margin: "4% 10% 4% 10%"

    }


    const titleStyle = {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#C3B1E1",
        textShadow: "2px 4px 6px #1f141f"

    }

    const btnStyle = {

        width: "8%",
        fontFamily: " ' Bungee ', cursive ",
        color: "#ccfff6",
        backgroundColor: "#C3B1E1",
        padding: "1%",
        borderRadius: "8%"

    }


    const textStyle = {

        width: "45%",
        color: "#C3B1E1",
        textShadow: "2px 4px 6px #1f141f",
        textAlign: "justify",
        lineHeight: "2",
        paddingRight: "0",
        paddingTop: "-50%"

    }

    return (

        <div style={ divStyle }>
        
        <img src= { image } alt="" id="planet" style={imageStyle} />

        <div>
        <h2 style={ titleStyle }> { title } </h2>
        <p style={ textStyle } > { showText } </p>
        </div>
        
        <button style={ btnStyle } onClick={ displayText }>more info</button>
        
        </div>
    )

}