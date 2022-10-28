import React, { useState } from 'react';
import"./toggle.module.css"
import Movie from "../../movies/Movie";

export default function DarkModeToggle() {

    const [isClicked, setIsClicked] = useState(false);

    function darkMode() {
        setIsClicked(isClicked => !isClicked);
    }

    let color1 = "orange"
    let color2 = "blue"

    return (

        <div className="App" style={isClicked ? ( {backgroundColor: `#181818`}) : (
            {backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`}
        )}>

            <button onClick={darkMode}> Click for Dark Mode </button>
        </div>
    );
}