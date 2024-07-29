import React,{useState,useRef,useEffect} from 'react';
import conText from './conText';
import Cart from './Cart';

export default function Item (){
    const [data,setdata]=useState([]);
    const[final,setFinal]=useState([]);
    const ref1=useRef();
    const ref2=useRef();

    // set the inputs
    const setter=()=>{
        let nm=ref1.current.value;
        let pr=ref2.current.value;
        if(nm==='' || pr===''){
          alert('Field can not empty');
        }
        else{
          setdata([...data,{'name':nm,'price':pr,'qty':1}])
        }
    }

    // increment
    const inc=(index)=>{
      data[index].qty+=1;
      setdata([...data]);
    }

    // decrement
    const dec=(index)=>{
      if(data[index].qty<1){
        alert('Invalid');
      }
      else{
        data[index].qty-=1;
        setdata([...data]);
      }
      
    }

    // render and ref clear
    useEffect(()=>{
      ref1.current.value="";
      ref2.current.value="";
    },[data])

    // context passing
    const cart=(index)=>{
      let finalName=data[index].name;
      let finalPrice=data[index].price*data[index].qty;
      
      let i=final.findIndex(item=>item.fname===finalName);

      if(i==-1){
        setFinal([...final,{'fname':finalName,'fprice':finalPrice}])
      }
      else{
        final.splice(i,1,{'fname':finalName,'fprice':finalPrice});
        setFinal([...final])
      } 
    }

    const style={
      div:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      },
      button:{
        width:'100%'
      }
    }
  return (
    <>
    <div style={style.div}>
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td><input type="text" name="name" ref={ref1}/></td>
        </tr>
        <tr>
          <td>Price</td>
          <td><input type="number" name="price" ref={ref2}/></td>
        </tr>
        <tr>
          <td colSpan='2'><button onClick={setter} style={style.button}>Add</button></td>
        </tr>
      </tbody>
    </table>
      <br/>
      <h1>Items</h1>
      <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Action</td>
        </tr>
        {
          data.map((item,index)=>{
            return(
              <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><button onClick={()=>dec(index)}>-</button> {item.qty} <button onClick={()=>inc(index)}>+</button></td>
              <td><button onClick={()=>cart(index)}>Cart</button></td>
              </tr>
              )
          })
        }
      </tbody>
    </table>
      <conText.Provider value={{data:final}}>
        <Cart/>
      </conText.Provider>
      </div>
    </>
  )
}
