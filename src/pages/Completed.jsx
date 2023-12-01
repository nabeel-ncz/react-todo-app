import React, { useEffect, useState } from 'react'

function Completed({ items }) {
    const [completed, setCompleted] = useState([]);
    useEffect(() => {
        setCompleted((prev) => {
            return items.filter((val) => {
                return val.isCompleted === true;
            })
        });
    }, [items])
    return (
        <div>
            <h2>Completed</h2>
            <ul>
                {completed.map((val, index) => {
                    return (
                        <li key={index}>{val.data}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Completed;