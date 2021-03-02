import { useState } from "react"; 
import React from "react";
function Counter(){
    const value = 0; 

    let[count,setCount] = useState(0)

    function counterIncrement(){
        setCount(count + 1);
    }

    function counterdecrement(){
        
        if(count>0)
        {
            setCount(count - 1);
        }
        else
        {
            setCount(0);
        } 

    }

    return (
        <div className = "App"> 
            <h1 className = {count < 100 ? "first" : "second"}> counter : {count} </h1>
            <button onClick = {counterIncrement} > + </button>
            <button onClick = {counterdecrement} > - </button>

        </div>
    )
};
export default Counter;