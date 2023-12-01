import React, {useState} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Completed from './pages/Completed'
import NotCompleted from './pages/NotCompleted'
import About from './pages/About'

function App() {
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  //for changing the state of the adding item
  const onHandleChange = (e) => {
    setItem(e.target.value);
  }
  //for adding item to the items array
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, { data: item, date: new Date().toLocaleString(), isEditing: false, isCompleted: false }]);
    setItem('');
  }
  //for clear the todo list
  const handleClearTodo = () => {
    setItems([]);
  }


  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home onHandleChange={onHandleChange}
         onHandleSubmit={onHandleSubmit} handleClearTodo={handleClearTodo}
         item={item} items={items} setItem={setItem} setItems={setItems} />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/completed' element={
        <Completed items={items} />}></Route>
        <Route exact path='/notCompleted' element={
        <NotCompleted items={items} />}></Route>
      </Routes>
    </>
  )

}

export default App
