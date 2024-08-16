import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Title from './components/Title';
import Modal from './components/Modal';
import React, { useEffect, useState } from 'react';
import Counter from './components/Counter'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
import Nav from './components/Nav';
import Users from './components/Pages/Users';

function App() {

  /**
   * 1. Create a "Counter.jsx" component
   * 2. Create a default 'count' of 0
   * 3. Create a button to increment 'count' by 1
   * 4. Create a button to decrement 'count' by 1
   * 5. Import your Counter in App.jsx and test it
   */

  // return <Counter />

  // const [showModal, setShowModal] = useState(false)

  // function onTodoDelete(){
  //   setShowModal(true);
  // }

  // function cancelModal(){
  //   setShowModal(false)
  // }

  // function confirmModal(){
  //   setShowModal(false)
  // }

  // useEffect(() => {
  //   console.log('on mount')
  // }, [])
  // useEffect(() => {
  //   console.log(`on mount AND on ${showModal} change`)
  // }, [showModal])
  // useEffect(() => {
  //   console.log('Every Render')
  // })

  // return (
  //   <div>
  //     <Title />
  //     <div>
  //       <input type="text" onChange={(event) => {console.log(event.target.value)}}/>
  //       <button onClick={() => setShowModal(true)}>Add Todo</button>
  //     </div>
  //     <div className = "todo__wrapper">
  //       <Todo title="Finish Frontend Simplified"
  //             onTodoDelete = {onTodoDelete}
  //             // paragraph = "Code along with Frontend Simplified step by step."
  //       />
  //       <Todo title="Finish Interview Section"
  //             onTodoDelete = {onTodoDelete}
  //             // paragraph = "Finish Interview Questions in the next 6 weeks."
  //       />
  //       <Todo title="Land a $100k Job"
  //             onTodoDelete = {onTodoDelete}
  //             // paragraph = "Apply to 100 jobs "
  //       />
  //     </div>
  //     {showModal && 
  //     <Modal title = "Are you sure you want to delete?" 
  //            cancelModal = {cancelModal}
  //            confirmModal = {confirmModal}
  //     />
  //     }

  //     {/* <Modal title = "Are you sure you want to add?"/> */}
  //   </div>
  // );

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element = {<Contact/>}/>
        <Route path="/contact" element = {<About/>}/>
        <Route path="/users/:username" element = {<Users/>} />
      </Routes>
    </div>
  );
}

export default App;
