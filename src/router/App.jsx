import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AllTask from '../pages/AllTask'
import CompleteTask from '../pages/CompleteTask'
import IncompleteTask from '../pages/IncompleteTask'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<AllTask/>}/>
            <Route path='home-completeTask' element={<CompleteTask/>}/>
            <Route path='home-incompleteTask' element={<IncompleteTask/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
