import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

function App() {
let [password,changePassword]=useState("");
let [range,changeRange]=useState(10);
let [numAll,changeNum]=useState(false);
let [symAll,changeSym]=useState(false);
let [msg,changeMsg]=useState("COPY");
let passRef=useRef(null);

function passwordGen(){
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numAll){
    str+="0123456789";
  }
  if(symAll){
    str+="@#&$?/<>+*";
  }
  for(let i=0;i<=range;i++){
    let index=Math.floor((Math.random()*str.length));
    pass+=str.charAt(index);
  }
  changePassword(pass);
}

//useEffect call the passwordGen function according the dependency array
useEffect(()=>{
  passwordGen()
},[range,numAll,symAll])

//copying the password to clipboard
const copyToClip=useCallback(()=>{
  window.navigator.clipboard.writeText(password);
  passRef.current.select();
  changeMsg("COPIED");
  setTimeout(()=>{
    changeMsg("COPY");
  },1500)
},[password])

  return (
    <>
      <div id="contain">
      <h2>PASSWORD GENERATOR</h2>
        <input type="text" id="inp" value={password} readOnly ref={passRef}/>
        <p>Settings</p>
        <div className="blocks">
        <p>Selected Range: {range}</p>
        <input type="range" min="1" max="20" id="slider" step="1" value={range} onChange={(e)=>{changeRange(e.target.value)}}/>
        </div>
         <div className="blocks">
        <p>Numbers Allowed</p>
        <input type="checkbox" defaultChecked={numAll} onChange={()=> {changeNum((prev)=> !prev)}}/>
        </div>
         <div className="blocks">
        <p>Symbols Allowed</p>
        <input type="checkbox" defaultChecked={symAll} onChange={()=> {changeSym((prev)=> !prev)}}/>
        </div>
        <button id="btn" onClick={copyToClip}>{msg}</button>
      </div>
    </>
  )
}

export default App
