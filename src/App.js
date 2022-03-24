import "./App.css"

import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home"
import space from "./media/space.gif"





function App() {

  const backgroundStyle={
    
      backgroundImage: `url( ${ space } )`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
  }


  return (
    <div className="App" style={backgroundStyle}>
      <Home/>
  
    </div>
  );
}

export default App;
