import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

function ToDoList() {
    const todos = useSelector(state => state.todos.todos);

    return (
        <ul>
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default ToDoList;