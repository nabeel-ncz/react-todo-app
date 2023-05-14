import React, { useState, useEffect } from 'react'
import './Tasks.css'
function Tasks({ childToParent }) {

    const [topDate, setTopDate] = useState(new Date())
    const [currentDate, setCurrentDate] = useState("")

    useEffect(() => {
        let day = new Date().getDate();
        let month = new Date().getMonth() + 1;
        let year = new Date().getFullYear();
        let hours = new Date().getHours();
        let min = new Date().getMinutes();
        let sec = new Date().getSeconds();
        setCurrentDate(
            day + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);

    const [item, setItem] = useState("");
    const [data, setData] = useState([])
    const [completed,setCompleted] = useState([])

    

    const onHandleChange = (event) => {
        setItem(event.target.value)
    }
    const onHandleSubmit = (e) => {
        e.preventDefault()
        setData([...data, { id: Date.now(), task: item, currentDate: currentDate, status: false }])
        setItem("")
    }

    const removeItem = (id) => {
        data.map((obj, i) => {
            if (obj.id === id) {
                if (obj.status === false) {
                    alert("are you want to delete without complete!")
                }
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
            }
            return obj;
        })
        data.filter((obj)=>{
            if(obj.status === true){
                setCompleted([...completed,{task:obj.task,added:obj.currentDate,completed:currentDate}])
            }
            return null;
        })
        childToParent(completed)
        const dup = data.filter((obj) => obj.status !== true)
        setData(dup)
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