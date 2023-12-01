import React from "react";
import Todo from "../components/Todo/Todo";

function Home(props){
    const { item,
        items,
        setItem,
        setItems,
        onHandleChange,
        onHandleSubmit,
        handleClearTodo } = props;
    return(
        <Todo onHandleChange={onHandleChange}
        onHandleSubmit={onHandleSubmit} handleClearTodo={handleClearTodo}
        item={item} items={items} setItem={setItem} setItems={setItems} />
    )
}

export default Home;