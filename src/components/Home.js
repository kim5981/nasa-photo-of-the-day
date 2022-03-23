
import React, { useState } from "react";
import clouds from "../media/clouds.png"

import Photo from "./Photo";

function Home () {

    // const { home } = props;

    const [cloudAnimation, setCloudAnimation] = useState(false);

    const [photo, setPhoto] = useState(false);
    
    return (

        <div>
            <img src= { clouds } className="cloud hidden" alt="a fluffy pink cloud" />
            <img src= { clouds } className="cloud hidden" alt="a fluffy pink cloud"/>

            <Photo />

            <footer>
                <a href="/">home</a>
            </footer>
        </div>
    
    )
}

export default Home;