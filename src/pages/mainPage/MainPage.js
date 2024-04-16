import React from 'react';
import style from '../../pages/mainPage/Main.module.css'

export function MainPage({props2}) {
    return (
        <div>
            <p className={style.DT1}>Title: {props2.title}</p>
            <p className={style.DT2}>Description: {props2.description}</p>
            <img className={style.DT3} src="https://i.pinimg.com/236x/bf/23/fa/bf23fa7be62c30bfcf98c6a4355b8eba.jpg" alt="Title2-Description2"/>
        </div>
    );
}

