import React from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import s from './index.module.css'

const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark')
    }
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light')
    }
    
    const selectedTheme = localStorage.getItem('selectedTheme');
    if(selectedTheme === 'dark'){
        setDarkMode();
    }
    const toggleTheme = e => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }
    return (
        <div className={s.dark_mode}>
            <input
                className={s.dark_mode_input}
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === 'dark'}
            />
            <label className={s.dark_mode_label} for='darkmode-toggle'>
                <FiSun  className={s.sun}/>
                <IoMoonOutline  className={s.moon}/>
            </label>
        </div>
    );
};

export default DarkMode;