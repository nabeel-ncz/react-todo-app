import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    state = {
        task: "",
        data: []
    }
    onHandleChange = (event) => {
        this.setState({
            task: event.target.value
        })
    }
    onHandleSubmit = () => {
        const { task } = this.state;
        const copy = this.state.data;
        copy.push(task);
        this.setState({
            data: copy,
            task: ""
        });
    }
    deleteItem = (index)=>{
        const copy = this.state.data;

        copy.splice(index,1);
        this.setState({
            data:copy
        })
    }
    render() {
        const { task, data } = this.state;
        return (
            <div className='todo-app'>
                <div className="container">
                    <div className="input-section">
                        <h4>Todo List</h4>
                        <input type="text" value={task} placeholder='Enter your task' onChange={this.onHandleChange} />
                        <button onClick={this.onHandleSubmit}>submit</button>
                    </div>
                    <div className="list-section">
                        <h6>Today Tasks</h6>
                        <ul>
                            {data.map((data, index) => {
                                return (
                                    <li key={index}>
                                        {data}
                                        <button onClick={()=>this.deleteItem(index)}><i className='bx bx-message-square-x'></i></button>
                                    </li>
                                )
                            })}


                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;