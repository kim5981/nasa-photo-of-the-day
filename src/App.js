import "./App.css"

import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home"
import space from "./media/spaceGif.gif"





function App() {

  const backgroundStyle={
    
      backgroundImage: `url( ${ space } )`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
  }


  return (
    <div className="App" style={backgroundStyle}>
      <Home/>
  
    </div>
  );
}

export default App;
