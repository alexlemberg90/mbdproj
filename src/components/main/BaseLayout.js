import React, {useState} from "react";
import styles from './BaseLoyout.module.css';
import {useNavigate} from "react-router-dom";

import logo from '../../images/main.png';
import DropMenu from "../additionalСomponent/dropdown/DropMenu";
import Pages from "../additionalСomponent/Pages";
import Finder from '../additionalСomponent/finder/Finder'


export const BaseLayout = ({children}) => {
    const [isClicked, setIsClicked] = useState(false);

    function darkMode() {
        setIsClicked(isClicked => !isClicked);
    };

    const navigate = useNavigate();

    const toHome = () => {
        navigate(`/`)
    };
    let color1 = "orange";
    let color2 = "blue";

    return (
        <div className={styles.mainWrapper} style={isClicked ? ({backgroundColor: `#181818`}) : (
            {backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`}
        )}>

            <header style={isClicked ? ({backgroundColor: `darkred`}) : (
                {backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`}
            )}>
                <DropMenu/>
                <img className={'mainImg'} onClick={toHome} src={logo} alt={'main logo'}/>
                <Finder/>
            </header>

            <main>
                <button onClick={darkMode} className={styles.darkTheme}> {isClicked ? 'Light Mod' : 'Dark Mod'}</button>
                {children}
            </main>
            <footer className={'pages'}  style={isClicked ? ({backgroundColor: `darkred`}) : (
                {backgroundImage: `linear-gradient(135deg, ${color1}, ${color2})`}
            )}><Pages/></footer>
        </div>
    )
}