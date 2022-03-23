import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home"
import axios from "axios";


function App() {

  const [ planetData, setPlanetData ] = useState({});

  useEffect( () => {

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=Z6mpNwJCGiyQKtfQvRBNbW3lSHhUM2nhvPQOcdjx`)
    .then(res=>{
        setPlanetData(res.data);
    })
    .catch(err=> console.error(err));

  }, [] )

  

  return (
    <div className="App">
      <Home/>
      
    </div>
  );
}

export default App;
