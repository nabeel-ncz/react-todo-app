import React, { useEffect, useState } from 'react'
import './InCompleted.css'
function InCompleted({ deletedData }) {
    const [deleted,setDeleted] = useState([]);

    useEffect(()=>{
        setDeleted(deletedData)
    },[deletedData])

    const removeDeleted = ()=>{
        setDeleted([])
    }

    return (
        <div className='container-0'>
            <div className="pending-container">
                <div className="content">
                    <div className='head'>
                        <h4>Pending Tasks</h4>
                        <button >Remove all</button>
                    </div>
                    <div className="items">
                        <ul>
                            <li>
                                <div>
                                    <h4>Not available</h4>
                                    <h6>Added : nil</h6>
                                </div>
                                <span><i class='bx bx-plus'></i></span>
                            </li>
                            <li>
                                <div>
                                    <h4>Not available</h4>
                                    <h6>Added : nil</h6>
                                </div>
                                <span><i class='bx bx-plus'></i></span>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="delete-container">
                <div className="content">
                    <div className='head'>
                        <h4>Deleted Tasks</h4>
                        <button onClick={removeDeleted}>Remove all</button>
                    </div>
                    <div className="items">
                        <ul>
                            {deleted.map((obj,i)=>{
                                return(
                                    <li key={i}>
                                        <div>
                                            <h4>{obj.task}</h4>
                                            <h6>Added : {obj.added}</h6>
                                        </div>
                                        <span><i class='bx bx-plus'></i></span>
                                    </li>
                                )
                            })}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InCompleted