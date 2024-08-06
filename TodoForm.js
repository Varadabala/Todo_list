import React,{ useState } from 'react';

function TodoForm({addTask}) {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };
    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder='Enter a task...'
            />
            <button>Submit</button>
        </form>
     );
}

export default TodoForm;

