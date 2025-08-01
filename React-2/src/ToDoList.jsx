import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList(){
    let [todos,setTodos] = useState([{task:"sample-task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos([...todos, {task: newTodo, id: uuidv4()}]);
        setNewTodo(""); // Clear the input field after adding the task
    }

    let updateTadoValue=(event)=>{

        setNewTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="Add a task" value={newTodo} onChange={updateTadoValue}/> 
            <br />
            <button onClick={addNewTodo}>Add Task</button>   
           
            <br />
            <br />

            <hr />

            <h4>Tasks To Do</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
}