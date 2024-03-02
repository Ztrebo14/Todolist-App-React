import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h3>Home Todolist-App</h3>
        <Link to={'/'} >Home</Link>
        <Link to={'./home-incompleteTask'} >Incomplete</Link>
        <Link to={'./home-completeTask'} >Completed</Link>
        <Outlet/>
    </>
  )
}

export default Home