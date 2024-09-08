import React, { useState } from 'react'
import NavBar from './components/NavBar'
import List from './components/List'
import Modal from './components/Modal'

function App() {
  const [selected, setselected] = useState(null)
  return (
    <>
    <NavBar/>
    <List setSelected={setselected}/>
    <Modal selected={selected} setSelected={setselected}/>
    </>
  )
}

export default App