import React,{useContext,useEffect,useState} from 'react';
import conText from './conText';

export default function Cart (){
  const {data}=useContext(conText);
  const [total,setTotal]=useState();
  useEffect(()=>{
    if(data.length > 0){
      let sum=0;
      for(let i=0;i<data.length;i++){
        sum+=(data[i].fprice);
      }
      setTotal(sum);
  }
  },[data]);
  
  
  return (
    <>
      <h1>Cart</h1>
      <table>
        <tbody>
        <tr>
          <td>Name</td>
          <td>Total</td>
        </tr>
        {
          data.map((item,index)=>{
            return(
              <tr key={index}>
            <td>{item.fname}</td>
            <td>{item.fprice}</td>
          </tr>
          )
          }) 
        }
        <tr><td><br/></td></tr>
        
        <tr>
          <th>Sum of Total- {total}</th>
        </tr>
        </tbody>
      </table>
    </>
  )
}

