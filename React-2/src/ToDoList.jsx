import { useState } from "react";

export default function ToDoList(){
    let [todos,setTodos] = useState(["sample task 1", "sample task 2"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos([...todos, newTodo]);
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
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}