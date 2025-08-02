import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList(){
    let [todos,setTodos] = useState([{task:"sample-task", id:uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
            // Create a new todo with a unique ID
    });
        setNewTodo(""); // Clear the input field after adding the task.
    }

    let updateTadoValue=(event)=>{

        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
     setTodos((prevTodos)=>todos.filter((prevTodos) => prevTodos.id !== id));

    }

    let markAllDone = () => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => ({
                ...todo,
                isDone: true // Mark all todos as done.
            }));
        });

    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone:true };
                }
                return todo;
            });
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
                    <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                    &nbsp;&nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    &nbsp;&nbsp;
                     <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                    </li>
                ))}
                <br />
                <br />
                <button onClick={markAllDone}>Mark All as done</button>
            </ul>
        </div>
    )
}