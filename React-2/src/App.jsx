import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (<div>
     <LikeButton/>
    <Counter/>

  </div>
   
  )
}

export default App
