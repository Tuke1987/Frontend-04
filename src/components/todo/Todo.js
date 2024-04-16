import React from 'react';
import style from './todo.module.css'

export function Todo(todo) {
    return (
        <div>
            <h2 className={style.TodoStyleFonts}>{todo.todo}</h2>
            <img className={style.TodoStyleImg} src="https://i.pinimg.com/736x/1a/fd/36/1afd3681beeab9e6b656db725e17fb3e.jpg" alt="Todo-Img"/>
        </div>
    );
}

