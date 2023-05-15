import React, { useState } from 'react'
import moment from 'moment/moment';
import './Tasks.css'
function Tasks({ addCompleted,addDeleted }) {

    const [topDate, setTopDate] = useState(new Date())
    const [item, setItem] = useState("");
    const [data, setData] = useState([])

    const [completed,setCompleted] = useState([])
    const [deleted,setDeleted] = useState([])

    const onHandleChange = (event) => {
        setItem(event.target.value)
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        let newDate = moment().format('ddd MMM DD YYYY hh:mm:ss')
        setData([...data, { id: Date.now(), task: item, currentDate: newDate, status: false }])
        setItem("")
    }

    const removeItem = (id) => {
        data.filter((obj) => {
            if (obj.id === id) {
                alert("are you want to delete without complete!")
                let newArr = [...deleted,{task:obj.task,added:obj.currentDate}]
                handleDeletedItems(newArr)
            }
            return null;
        })
        const dup = data.filter((obj) => obj.id !== id)
        setData(dup)
    }
    const handleCheckbox = (e, id) => {
        data.filter((obj) => {
            if (obj.id === id) {
                obj.status = e.target.checked
                let newDate = moment().format('ddd MMM DD YYYY hh:mm:ss')
                let newArr = [...completed,{task:obj.task,added:obj.currentDate,completed:newDate}]
                handleCompletedItems(newArr)
            }
            return obj;
        })
        const dup = data.filter((obj) => obj.status !== true)
        setData(dup)
    }

    const handleCompletedItems = (newArr)=>{
        setCompleted(newArr)
        addCompleted(newArr)
    }
    const handleDeletedItems = (newArr)=>{
        setDeleted(newArr)
        addDeleted(newArr);
    }
    return (
        <div className="container-1">
            <div className="content">
                <div className="time-section">
                    <h1>My day</h1>
                    <h2>
                        {topDate.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })}
                    </h2>
                </div>
                <div className="task-section">
                    <ul>
                        {data.map((obj, i) => {
                            return (
                                <li key={i}>
                                    <div className='outer'>
                                        <div className='inner'>
                                            <input onChange={(event) => { handleCheckbox(event, obj.id) }} type="checkbox" checked={obj.status && "checked"} />
                                            <h4>{obj.task}</h4>
                                        </div>
                                        <span>
                                            {obj.currentDate}
                                        </span>
                                    </div>
                                    <span onClick={() => removeItem(obj.id)}><i class='bx bxs-trash'></i></span>
                                </li>
                            )
                        })}

                    </ul>
                </div>
                <form className="input-section" onSubmit={onHandleSubmit}>
                    <input type="text" value={item} placeholder='Add a task...' onChange={onHandleChange} />
                </form>
            </div>
        </div>
    )
}

export default Tasks