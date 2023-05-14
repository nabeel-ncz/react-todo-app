import React, { useState } from 'react'
import './Todo.css'
import Tasks from './Tasks/Tasks';
import Completed from './completed/Completed';
import InCompleted from './incompleted/InCompleted';

function Todo() {
    const [completed,setCompleted] = useState([])
    const handleCallback = (childData) =>{
        setCompleted(childData)
    }
    return (
        <div className='todo-app'>
            <InCompleted />
            <Tasks childToParent = {handleCallback}/>
            <Completed data = {completed}/>
        </div>
    );
};

export default Todo;