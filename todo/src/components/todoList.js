import React, {useState} from 'react';
import Todo from './Todo';
import Inp from './inp';
import './/todoList.css';

const TodoList= () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Learn React',
            taskStatus: false,
        },
    ]
    );

    const handleClick = (e) => {
        e.preventDefault();
        if(tasks.name !== '' && tasks.name !== undefined){
        setTasks([
            ...tasks,
            {
                id: tasks.length + 1,
                name: tasks.name,
                taskStatus: false,
            },
        ]);}
        
    }
    
    return(
        <div className='todoList'>
            <h1>||_Track ToDo_||</h1>
            <Inp tasks={tasks} handleClick={handleClick}/>
            {
                tasks.map(e => (
                    <Todo key={e.id} task={e} tasks={tasks} updateTask={setTasks}/>
                ))
            }
        </div>
    );
}

export default TodoList;