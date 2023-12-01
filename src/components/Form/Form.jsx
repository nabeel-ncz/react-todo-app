import React from "react";

function Form(props) {
    const { onHandleChange, onHandleSubmit, item } = props;
    return (
        <form action="" className="todo_add_form" onSubmit={onHandleSubmit}>
            <input type="text" placeholder="Enter your task..." value={item}
                onChange={onHandleChange} required />
            <button type="submit">Add</button>
        </form>
    )
}

export default Form;