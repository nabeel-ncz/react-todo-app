import React, { useState } from "react";
import Form from "../Form/Form";
import List from "../List/List";
import Clear from "../Clear/Clear";

function Todo(props) {
    const { item,
        items,
        setItem,
        setItems,
        onHandleChange,
        onHandleSubmit,
        handleClearTodo } = props;
    return (
        <div className="todo">
            <div className="todo_add">
                <Form onHandleChange={onHandleChange} onHandleSubmit={onHandleSubmit} item={item} />
            </div>
            <List todos={items} setTodos={setItems} />
            <Clear handleClear={handleClearTodo} />
        </div>
    )
}

export default Todo;