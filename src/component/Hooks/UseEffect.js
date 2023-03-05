import React,{useState,useEffect} from 'react'
import "./style.css"

const UseEffect = () => {

    const [counter , setCounter] = useState(0);


//   `(${ your_javascript_code })` --> backtick and this syntax is used to take javascript code in a string


// document.title = `chats(${counter})`

    useEffect(()=>{
        document.title = `chats(${counter})`
    },);


    return (
    <>
    <div className='center-div'>
        <p>{counter}</p>
        <div className='button2' onClick={()=> {
    setCounter(counter+1);
}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
        </div>
        
    
    </div>
    </>
    )
}

export default UseEffect