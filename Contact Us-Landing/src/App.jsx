import { useState } from 'react'
import './App.css'
import Nav from './comps/nav'
import Form from './comps/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Form/>
    </>
  )
}

export default App
