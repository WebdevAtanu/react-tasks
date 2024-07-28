import { useState,useRef } from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [flag,setFlag]= useState(false);
  const [flag1,setFlag1]= useState(false);
  const [flag2,setFlag2]= useState(false);
  const [flag3,setFlag3]= useState(false);
  const [name,setName]=useState();
  const [target,setTarget]=useState();
  const [final,setFinal]=useState();

  const random=()=>{
    let num=Math.floor(Math.random()*700);
    axios.get(`https://www.superheroapi.com/api.php/1637127203359769/${num}`)
    .then(res=>setData1(res.data))
    .then(()=>{setFlag2(true);setFlag(false);});
  }

  const input=(e)=>{
    setFlag1(false);
    setName(e.target.value);
  }

  const search=()=>{
    if(name==null){
      alert("no name");
    }
    else{
    axios.get(`https://www.superheroapi.com/api.php/1637127203359769/search/${name}`)
    .then(res=>{setData(res.data); setFlag3(true)});
    }
  }

  const variant=(e)=>{
    setTarget(e.target.value);
    setFlag1(true)
  }

  const view=()=>{
    setFlag2(false);
    setFlag(true);
    let res=data.results.filter((item)=>item.name==target)
    setFinal(res);
  }

  return (
    <>
    {/* nav */}
    <div id="navbar" className='bg-slate-800 w-full p-3 flex justify-between'>
      <h2 className="text-white">The Supe-Pedia</h2>
    </div>

    {/* random */}
    <div className='p-3'>
    <button onClick={random} className='border border-black w-full p-2 bg-slate-200 duration-200 hover:bg-slate-700 hover:text-white' id='random'>Generate Random</button>
    </div>

    {/* search */}
    <div id="search" className='p-3 flex flex-col gap-3 md:flex-row'>
    <div className='flex w-full md:w-1/2'>
      <input type="text" placeholder="Search Name" onChange={input} className='border border-black p-2 w-full'/>
      <button onClick={search} className='border border-black p-3 bg-slate-700 duration-200 hover:text-white'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    </svg></button>
    </div>

    {
    flag3?
    <div className='flex w-full md:w-1/2'>
      <select className='border border-black p-2 w-full' onChange={variant}>
      <option disabled selected>Select Variant</option>
      {
          data?.results?.map((item,i)=>
          <option value={item.name} key={i}>{item.name}</option>
          )
      }
      </select>
      {
        flag1?<button onClick={view} className='border border-black p-3 duration-200 hover:text-white bg-slate-700'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-binoculars" viewBox="0 0 16 16">
      <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"/>
      </svg></button>:<button onClick={view} className='border border-black p-3 bg-slate-200' disabled><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-binoculars" viewBox="0 0 16 16">
      <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"/>
      </svg></button>
      }
      </div>:null
    }
    </div>

    {
    flag?
    <div>
    <h1 className='text-2xl md:text-5xl text-center mb-2'>Biography</h1>

    <div id="main" className='p-3 flex flex-col justify-between h-full'>
    <div className='flex justify-center'>
      <img src={final[0]?.image?.url} alt="" className='w-3/4 md:w-1/4 aspect-video outline outline-dashed outline-offset-2 outline-1'/>
    </div>
      <div className='mb-16 mt-6 flex justify-center'>
      <table className='w-full'>
        <tbody>
          <tr>
            <td className='font-bold'>Name:</td>
            <td>{final[0].name}</td>
          </tr>
           <tr>
            <td className='font-bold'>Aliaces:</td>
            <td>{final[0]?.biography?.aliases}</td>
          </tr>
          <tr>
            <td className='font-bold'>Publisher:</td>
            <td>{final[0]?.biography?.publisher}</td>
          </tr>
          <tr>
            <td className='font-bold'>Occupation:</td>
            <td>{final[0]?.work?.occupation}</td>
          </tr>
          <tr>
            <td className='font-bold'>Base:</td>
            <td>{final[0]?.work?.base}</td>
          </tr>
          <tr>
            <td className='font-bold'>Gender:</td>
            <td>{final[0]?.appearance?.gender}</td>
          </tr>
          <tr>
            <td className='font-bold'>Race:</td>
            <td>{final[0]?.appearance?.race}</td>
          </tr>
          <tr>
            <td className='font-bold'>Relatives:</td>
            <td>{final[0]?.connections?.relatives}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </div>
    : null
  }
  {
    flag2?
    <div>
    <h1 className='text-2xl md:text-5xl text-center mb-2'>Biography</h1>
    <div id="main" className='p-3 flex flex-col justify-between h-full'>
    
    <div className='flex justify-center'>
      <img src={data1?.image?.url} alt="" className='w-3/4 md:w-1/4 aspect-video outline outline-dashed outline-offset-2 outline-1'/>
    </div>
      
      <div className='mb-16 mt-6 flex justify-center'>
      <table className='w-full'>
        <tbody>
          <tr>
            <td className='font-bold'>Name:</td>
            <td>{data1.name}</td>
          </tr>
           <tr>
            <td className='font-bold'>Aliaces:</td>
            <td>{data1?.biography?.aliases}</td>
          </tr>
          <tr>
            <td className='font-bold'>Publisher:</td>
            <td>{data1?.biography?.publisher}</td>
          </tr>
          <tr>
            <td className='font-bold'>Occupation:</td>
            <td>{data1?.work?.occupation}</td>
          </tr>
          <tr>
            <td className='font-bold'>Base:</td>
            <td>{data1?.work?.base}</td>
          </tr>
          <tr>
            <td className='font-bold'>Gender:</td>
            <td>{data1?.appearance?.gender}</td>
          </tr>
          <tr>
            <td className='font-bold'>Race:</td>
            <td>{data1?.appearance?.race}</td>
          </tr>
          <tr>
            <td className='font-bold'>Relatives:</td>
            <td>{data1?.connections?.relatives}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    </div>:null
  }
 </>
  )
}

export default App
