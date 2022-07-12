import React, { useState, useEffect } from "react";
import axios from "axios";
import Space from "./Space";
import "./Home.css"


function Home(props) {

    const [planetObj, setPlanetObj] = useState({});

  

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=Z6mpNwJCGiyQKtfQvRBNbW3lSHhUM2nhvPQOcdjx`
      )
      .then((res) => {
        setPlanetObj(res.data);
      })
      .catch((err) => console.error("DEV ERROR", err));
  }, [ ]);

  
  return (
    <div>
      
    <Space image={ planetObj.hdurl } title={ planetObj.title } explanation={ planetObj.explanation }  />
    
    </div>
  );
}

export default Home;
