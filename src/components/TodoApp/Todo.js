import React,{useState} from 'react'
import './Todo.css'

function Todo() {
    const [item,setItem] = useState("");
    const [data,setData] = useState([])

    const onHandleChange = (event)=>{
        setItem(event.target.value);
    }

    const addTask = () =>{
        setData([...data,{id:Date.now(),item:item,status:false}])
        setItem("")
    }

    const removeItem=(id)=>{
        data.map((obj)=>{
            if(obj.id === id){
                if(obj.status === false){
                    alert("are you sure to delete without complete !");
                }
            }
            return null;
        })
        const temp = data.filter((items) => items.id !== id)
        setData(temp)
    }
    const handleCheckBox = (event , id) =>{
        setData(data.filter((items)=>{
            if(items.id === id){
                items.status = event.target.checked
            } 
            return items;
        }))
        
    }

    return (
        <div className='todo-app'>
            <div className="container">
                <div className="input-section">
                    <h4>Todo List</h4>
                    <input type="text" value={item} placeholder='Enter your task' onChange={onHandleChange}/>
                    <button onClick={addTask}>Add task</button>
                </div>
                <div className="list-section">
                    <h6>Today Tasks</h6>
                    <ul>
                        {data.map((objects,index)=>{
                            return(
                            <li key={index}>
                                <input key={index} type="checkbox" checked={objects.status} onChange={(event)=>{handleCheckBox(event,objects.id)}}/>
                            {objects.item}
                            <button onClick={()=>{removeItem(objects.id)}}><i className='bx bx-message-square-x'></i></button>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Todo;