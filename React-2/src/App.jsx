import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton.jsx';
import ToDoList from './ToDoList.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (<div>
   <ToDoList />
  </div>
   
  )
}

export default App
