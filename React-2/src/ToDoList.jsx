import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList(){
    let [todos,setTodos] = useState([{task:"sample-task", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
            // Create a new todo with a unique ID
    });
        setNewTodo(""); // Clear the input field after adding the task
    }

    let updateTadoValue=(event)=>{

        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
     setTodos((prevTodos)=>todos.filter((prevTodos) => prevTodos.id !== id));

    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase()
            }));
        });

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
                    <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
                <br />
                <br />
                <button onClick={upperCaseAll}>Upper Case All</button>
            </ul>
        </div>
    )
}