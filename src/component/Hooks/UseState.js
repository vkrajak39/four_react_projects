import React, { useState, useEffect } from 'react'
import "./style.css"

const UseState = () => {
const [counter , setCounter] = useState(0);

function incrCounter() {
    setCounter(counter+1);
}
function decrCounter() {
    
    (counter === 0) ? setCounter(counter):setCounter(counter-1);

// (counter !== 0) ? setCounter(counter-1) : null;

}

// from useEffect HOOK
useEffect(()=>{
    document.title = `Count== (${counter})`
},);






    return (
    <>
    <div className='center-div'>
    <p>{counter}</p>
    <div className='button2' onClick={incrCounter}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    INCR
    </div>
    <div className='button2' onClick={decrCounter}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    DECR
    </div>

    </div>

    </>
)
}

export default UseState