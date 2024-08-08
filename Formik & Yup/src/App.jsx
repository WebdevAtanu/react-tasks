import { useState } from 'react'
import './App.css';
import Formik1 from './Formik1';
import Formik2 from './Formik2';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formik1/>
      {/* <Formik2/> */}
    </>
  )
}

export default App
