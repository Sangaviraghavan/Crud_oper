import React from 'react'
import Main from './Component/Main'
import Edit from './Component/Edit'
import Create from './Component/Create'
import Read from './Component/Read'
import Delete from './Component/Delete'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Edit/:id' element={<Edit/>} />
        <Route path='/Create' element={<Create/>} />
        <Route path='/Read/:id' element={<Read/>} />
        <Route path='/Delete' element={<Delete/>} />
      </Routes>
    </div>
  )
}

export default App