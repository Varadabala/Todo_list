import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [tasks,SetTasks] = useState([]);

  const addTask = (userInput) =>{
    if (userInput) {
      SetTasks([...tasks, userInput]);
    }
  };

  const removeTask = (index) =>{
    SetTasks([...tasks.slice(0,index), ...tasks.slice(index + 1)]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask}/>
      <TodoList tasks={tasks} removeTask={removeTask}/>
    </div>
  );
}

export default App;
