import { useState,useEffect } from 'react'
import './App.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Showtab from './Showtab';

function App() {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/recipes')
    .then(res=>{
      setData(res.data.recipes);
    })
    .catch(error=>{
      console.log(error);
    })
  })
  const coldata=[
        {
            name:'Name',
            selector:row=>row.name,
        },
        {
            name:'Ingredients',
            selector:row=>row.ingredients,
            sortable:false,
            wrap:true,
        },
        {
            name:'Instructions',
            selector:row=>row.instructions,
            wrap:true,
        },
        {
            name:'Image',
            selector:row=><img src={row.image} style={{width:'50%',height:'50%'}}/>,
            
        }

    ]
  const addrow=(e)=>{
        setSelect(e.selectedRows);
    }

  return (
    <div id='main'>
    <div className="table">
      <DataTable
      title='DATA'
      columns={coldata}
      data={data}
      pagination responsive dense highlightOnHover selectableRows
      onSelectedRowsChange={addrow}
      />
    </div>
    <div className="table">
    <Showtab propdata={select}/>
    </div>
    </div>
  )
}

export default App
