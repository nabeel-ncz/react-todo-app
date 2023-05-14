import React, { useEffect, useState } from 'react'
import './Completed.css'
function Completed({ data }) {

    const [completed,setCompleted] = useState([])
    useEffect(()=>{
        setCompleted(data)
    },[data])
    const removeAll = ()=>{
        setCompleted([])
    }

  return (
    <div className='container-2'>
        <div className="content-2">
            <div className='head'>
                <h4>Completed Tasks</h4>
                <button onClick={removeAll}>Remove all</button>
            </div>
            <div className="items">
                <ul>
                    {completed.map((obj,i)=>{
                        return(
                            <li key={i}>
                                <h4>{obj.task}</h4>
                                <div>
                                    <span>Added : {obj.added}</span>
                                    <span>Completed : {obj.completed}</span>
                                </div>  
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Completed