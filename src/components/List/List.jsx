import React, { useState, useEffect } from "react";
import '../Todo/Todo.css'
import Edit from "../EditForm/EditForm";

function List({ todos, setTodos }) { 

    const handleCheckChange = (e, key) => {
        setTodos((prevTodo) => {
            const updated = prevTodo.map((item) => {
                if (item.date === key) return { ...item, isCompleted: e.target.checked };
                return item;
            })
            return [...updated];
        })
    }
    const handleEditing = (e, key) => {
        setTodos((prevTodo) => {
            const updated = prevTodo.map((item) => {
                if (item.date === key) return { ...item, isEditing: !item.isEditing };
                return item;
            })
            return [...updated];
        })
    }
    const handleDelete = (key) => {
        setTodos((prevTodo) => {
            return prevTodo.filter((val) => val.date !== key);
        })
    }
    return (
        <div className="todo_list">
            {todos.map((todo) => {
                return (
                    <div key={todo.date} className={`todo_list_item ${todo.isCompleted ? 'todo_list_item_completed' : ''}`}>
                        {!todo.isEditing ? (
                            <>
                                <div className="txt">
                                    <input type="checkbox" checked={todo.isCompleted} onChange={(e) => handleCheckChange(e, todo.date)} />
                                    <h4>{todo.data}</h4>
                                </div>
                                <div className="btns">
                                    <button onClick={(e) => handleEditing(e, todo.date)} disabled={todo.isCompleted}>Edit</button>
                                    <button onClick={() => handleDelete(todo.date)} disabled={todo.isCompleted}>Delete</button>
                                </div>
                            </>
                        ) : (
                            <Edit setTodos={setTodos} changeKey={todo.date} currItem={todo.data} />
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default List;