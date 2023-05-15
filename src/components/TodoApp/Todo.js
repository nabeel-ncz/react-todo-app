import React, { useState } from 'react'
import './Todo.css'
import Tasks from './Tasks/Tasks';
import Completed from './completed/Completed';
import InCompleted from './incompleted/InCompleted';

function Todo() {
    const [completed,setCompleted] = useState([])
    const [deleted,setDeleted] = useState([])

    const handleCompleted = (childData) =>{
        setCompleted(childData)
    }
    const handleDeleted = (childData) =>{
        setDeleted(childData)
    }

    return (
        <div className='todo-app'>
            <InCompleted deletedData = {deleted}/>
            <Tasks addCompleted = {handleCompleted} addDeleted={handleDeleted}/>
            <Completed data = {completed}/>
        </div>
    );
};

export default Todo;