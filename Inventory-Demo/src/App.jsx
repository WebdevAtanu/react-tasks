import { useState,useEffect,useRef} from 'react'
import './App.css'

function App() {
  // hooks declaration
  const [msg, setMsg] = useState("");
  const [tag, setTag] = useState("Add Field Mode");
  const [flag, setFlag] = useState(false);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const[active,setActive]=useState(0);
  const name=useRef();
  const price=useRef();
  const desc=useRef();

  //add function
  const add=()=>{
    let nm= name.current.value;
    let pr= price.current.value;
    let des= desc.current.value;
    // empty field validation
    if(nm===''||pr===''||des===''){
      setMsg("Field can't be empty")
      setTimeout(()=>{
        setMsg('')
      },1500)
    }
    else{
      setData([...data,{'name':nm,'price':pr,'desc':des}]);
    }
  }

  // editor mode
  const editor=(index)=>{
    setFlag(true);
    setTag("Edit Field Mode");
    setIndex(index);
    // disable buttons
    let editbtn=document.getElementsByClassName('Btns');
    Array.from(editbtn).forEach(item=>item.disabled=true);
    // getting the refs
    name.current.value=data[index].name;
    price.current.value=data[index].price;
    desc.current.value=data[index].desc;
    //adding a style to the active row
    document.getElementById(`${index}`).classList.add('active');
  }

  // edit function
  const edit=()=>{
    setFlag(false);
    setTag("Add Field Mode");
    let nm= name.current.value;
    let pr= price.current.value;
    let des= desc.current.value;
    data.splice(index, 1, {'name':nm,'price':pr,'desc':des});
    setData([...data]);
    // enable buttons
    let editbtn=document.getElementsByClassName('Btns');
    Array.from(editbtn).forEach(item=>item.disabled=false);
    //removing style from the row
    document.getElementById(`${index}`).classList.remove('active');
  }

  // delete function
  const deleter=(index)=>{
    let delitem=data.splice(index, 1);
    alert('Item- '+delitem[0].name+' deleted from inventory.');
    setData([...data]);
  }

  // useEffect clear the input fields on data dependency
  useEffect(()=>{
      name.current.value='';
      price.current.value='';
      desc.current.value='';
    },[data])

  return (
    <>
      <h1>CRUD using Hooks</h1>
      <div id='div'>
      <table id='t1'>
        <tbody>
        <tr>
            <td colSpan='2'><h3>{tag}</h3></td>
          </tr>
          <tr>
            <td>Item Name</td>
            <td><input type="text" placeholder='Enter the item name' ref={name}/></td>
          </tr>
          <tr>
            <td>Item Price</td>
            <td><input type="number" placeholder='Enter the item price' ref={price}/></td>
          </tr>
          <tr>
            <td>Item Description</td>
            <td><textarea rows='5' placeholder='Enter the item description' ref={desc}/></td>
          </tr>
          <tr>
          <td colSpan='2'><p>{msg}</p></td>
          </tr>
          <tr>
            <td colSpan='2'><button onClick={flag?edit:add}>{flag?'EDIT':'ADD'}</button></td>
          </tr>
        </tbody>
      </table>
      </div>

      <table id='t2'>
        <tbody>
          <tr>
            <th>Serial No.</th>
            <th>Item Name</th>
            <th>Item Price</th>
            <th>Item Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {
            data.map((item,index)=>{
              return(
                  <tr key= {index} id={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.desc}</td>
                    <td><button id='edit' className='Btns' onClick={(e)=> editor(index)}>EDIT</button></td>
                    <td><button id='delete' className='Btns' onClick={(e)=> deleter(index)}>DELETE</button></td>
                  </tr>
                )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default App
