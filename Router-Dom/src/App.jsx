import './App.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './comps/home/Home';
import About from './comps/about/About';
import Contact from './comps/contact/Contact';
import User from './comps/user/User';
import Github from './comps/github/Github';

function App() {
  const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='user/:userid' element={<User/>}></Route>
      <Route path='github' element={<Github/>}></Route>
    </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
     )
}

export default App
