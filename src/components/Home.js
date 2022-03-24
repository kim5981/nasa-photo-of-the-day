import React, { useState, useEffect } from "react";
import clouds from "../media/clouds.png";
import axios from "axios";
import Space from "./Space";
import "./Home.css"


function Home() {
  const [animation, setAnimation] = useState(false);

  const [photo, setPhoto] = useState(false);

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
      <img
        /*src = clouds */ className="cloud hidden"
        alt="a fluffy pink cloud"
      />
      <img
        /* src = clouds */ className="cloud hidden"
        alt="a fluffy pink cloud"
      />

      
    <Space image={ planetObj.hdurl } title={ planetObj.title } explanation={ planetObj.explanation }  />
    
    </div>
  );
}

export default Home;
