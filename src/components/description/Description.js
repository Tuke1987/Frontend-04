import React from 'react';
import {AboutPage} from '../../pages/aboutPage/AboutPage'
import {MainPage} from '../../pages/mainPage/MainPage'
import style from '../description/description.module.css'


const TitleDescription = [
    {
        id: 1,
        title: "Title",
        description: "Description"
    }
]

const Title2Description2 = [
    {
        id: 2,
        title: "Title2",
        description: "Description2"
    }
]

function Description(props) {
    return (
        <>
            <h1 className={style.DES1}>=====Title Description=====</h1>
            {
                TitleDescription.map(el => <AboutPage key={el.id} props={el}/>)
            }
            <h1 className={style.DES2}>=====Title2 Description2=====</h1>
            {
                Title2Description2.map(el => <MainPage key={el.id} props2={el}/>)
            }
        </>
    );
}

export default Description;