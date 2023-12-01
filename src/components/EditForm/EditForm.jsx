import React, { useState } from "react";

function Edit({ setTodos, changeKey, currItem }) {
    const [ item, setItem ] = useState(currItem);
    const onHandleChange = (e) => {
        setItem(e.target.value)
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        setTodos((prev) => {
            return prev.map((val) => {
                if(val.date === changeKey){
                    return {...val, data: item, isEditing: !val.isEditing};
                }
                return val;
            })
        })
    }
    return (
        <form action="" className="todo_add_form" onSubmit={onHandleSubmit}>
            <input type="text" onChange={onHandleChange} value={item} required/>
            <button type="submit">Update</button>
        </form>
    )
}

export default Edit;