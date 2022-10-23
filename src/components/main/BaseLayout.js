import React from "react";
import styles from './BaseLoyout.module.css';
import {useNavigate} from "react-router-dom";
import logo from '../../images/main.png';
import DropMenu from "../additionalСomponent/dropdown/DropMenu";
import Pages from "../additionalСomponent/Pages";

export const Baselayout = ({children}) =>{

    const navigate = useNavigate()

    const toHome = () => {
        navigate(`/`)
    }

    return (
        <div className={styles.mainWrapper}>
            <header>
                <DropMenu/>
                <img className={'mainImg'} onClick={toHome} src={logo} alt={'main logo'}/>
                <div>Finder</div>
            </header>
            <main>
                {children}
            </main>
            <footer className={'pages'}><Pages/></footer>
        </div>
    )
}