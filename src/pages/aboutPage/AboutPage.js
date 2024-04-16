import React from 'react';
import style from '../../pages/aboutPage/About.module.css'
export function AboutPage({props}) {
    return (
        <div>
            <p className={style.TD1}>Title: {props.title}</p>
            <p className={style.TD2}>Description: {props.description}</p>
            <img className={style.TD3} src="https://i.pinimg.com/236x/3d/ab/bc/3dabbcf086e7ef95d6519f8265f65ec6.jpg" alt="Title-Description"/>
        </div>
    );
}

