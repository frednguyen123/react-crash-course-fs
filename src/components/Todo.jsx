import React from 'react';
import './Todo.css'

const Todo = ({title, onTodoDelete}) => {

    // function deleteTodo(id) {
    //     console.log('deleteTodo', title.toUpperCase(), id)
    // }

    return (
        <div className='todo'>
            <h2>{title}</h2>
            {/* <p>{paragraph}</p> */}
            <button onClick={onTodoDelete}>Delete</button>
        </div>
    );
}

export default Todo;
