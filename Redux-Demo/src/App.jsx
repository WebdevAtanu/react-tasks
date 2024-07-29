import './App.css';
import Count1 from './comps/Count1'
import Count2 from './comps/Count2'
import {useDispatch} from 'react-redux';

function App() {
  const dispatch=useDispatch();
  return (
    <>
      <button onClick={()=>dispatch({type:'inc'})}>Increment</button>
      <br/>
      <br/>
        <Count1/>
        <Count2/>
        <br/>
        <br/>
      <button onClick={()=>dispatch({type:'dec'})}>Decrement</button>
    </>
  )
}

export default App
