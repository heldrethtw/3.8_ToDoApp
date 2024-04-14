import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store';

function AddToDo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddToDo;