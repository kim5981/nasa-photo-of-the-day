import React, { useState, useEffect } from "react";
import clouds from "../media/clouds.png";
import axios from "axios";
import Planet from "./Planet";

function Home() {
  const [cloudAnimation, setCloudAnimation] = useState(false);

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
      .catch((err) => console.error(err));
  }, []);

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

      
    <Planet hdurl={ planetObj.hdurl } title={ planetObj.title } />
    

      <footer>
        <a href="/">home</a>
      </footer>
    </div>
  );
}

export default Home;
