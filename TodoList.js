import React from 'react';

function TodoList({ tasks, removeTask}) {
    return ( 
        <ul>
            {tasks.map((task,index) =>(
                <li key={index}>
                    {task}
                    <button onClick={() => removeTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
     );
}

export default TodoList;
    