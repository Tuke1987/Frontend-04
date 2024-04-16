import React from 'react';
import {Todo} from "../../components/todo/Todo";
import style from './TodosPage.module.css'


const TodoList = ["Todo 1", "Todo 2", "Todo 3"]

function TodosPage(props) {
    return (
        <div>
            <h1 className={style.TodoListH1}>---TodoList---</h1>
            {
                TodoList.map((el, index) => <Todo key={index} todo={el}/>)
            }
        </div>
    );
}

export default TodosPage;