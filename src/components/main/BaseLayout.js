import React from "react";
import styles from './BaseLoyout.module.css';
import {useNavigate} from "react-router-dom";

import logo from '../../images/main.png';
import DropMenu from "../additionalСomponent/dropdown/DropMenu";
import Pages from "../additionalСomponent/Pages";
import Finder from '../additionalСomponent/finder/Finder'
import DarkModeToggle from "../additionalСomponent/darkModeToggle/DarkModeToggle";


export const BaseLayout = ({children}) => {

    const navigate = useNavigate()

    const toHome = () => {
        navigate(`/`)
    }

    return (
        <div className={styles.mainWrapper}>

            <header>
                <DropMenu/>
                <DarkModeToggle/>
                <img className={'mainImg'} onClick={toHome} src={logo} alt={'main logo'}/>
                <Finder/>
            </header>
            <main>
                {children}
            </main>
            <footer className={'pages'}><Pages/></footer>
        </div>
    )
}