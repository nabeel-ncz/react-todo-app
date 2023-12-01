import React, { useState, useEffect } from 'react'

function NotCompleted({ items }) {
    const [notCompleted, setNotCompleted] = useState([]);
    useEffect(() => {
        setNotCompleted((prev) => {
            return items.filter((val) => {
                return val.isCompleted === false;
            })
        });
    }, [items])
    return (
        <div>
            <h2>Not Completed</h2>
            <ul>
                {notCompleted.map((val, index) => {
                    return (
                        <li key={index}>{val.data}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NotCompleted;