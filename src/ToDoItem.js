import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "./store";

function ToDoItem({ todo }) {
    const dispatch = useDispatch();

    return (
        <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
                <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </span>
        </li>
    );
}

export default ToDoItem;