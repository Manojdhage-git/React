import { useState } from "react";

export default function Counter(){
    let [count,setCount]=useState(0);
    console.log("Counter component rendered");

    let incCount=()=>{
       setCount((currCount)=>{
        return currCount+1;
       });

       setCount((currCount)=>{
        return currCount+1;
       });
    
       setCount((currCount)=>{
        return currCount+1;
       });

    };
    
    return(
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )

}