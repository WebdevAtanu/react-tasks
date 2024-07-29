import React, {Component} from 'react';
import './App.css';

export default class App extends Component
{
  //State declaration
    state={
        name: '',
        date: '',
        des: '',
        data: []
    }

  //setting data from inputs to state variables
    setinfo=(e)=>{
      this.setState({
        [e.target.name]: [e.target.value]
      })
    }

  //listing data to the table 
    addinfo=()=>{
      this.setState({data:[...this.state.data,{name:this.state.name,date:this.state.date,des:this.state.des}],name:'',date:'',des:''})
      document.getElementById("name").value="";
      document.getElementById("date").value="";
      document.getElementById("des").value="";
    }

  //remove elements from data state
    delinfo=(index)=>{
        this.state.data.splice(index,1);
        this.setState({data:this.state.data});
    }

    render(){
        return(
            <>
            {/* Input */}
            <div id="container">
            <table id="t1">
           <tbody >
             <tr>
             <td>Task Name:</td>
             <td><input type="text" name="name" id="name" onChange={this.setinfo}/></td>
             </tr>
             <tr>
             <td>Task Date:</td>
             <td><input type="date" name="date" id="date" onChange={this.setinfo}/></td>
             </tr>
             <tr>
             <td>Task Description:</td>
             <td><textarea name="des" id="des" rows='5' cols='40' onChange={this.setinfo}></textarea></td>
             </tr>
             <tr><td colSpan='2'><button onClick={this.addinfo} id="addbtn">ADD</button></td></tr>
             </tbody>
           </table>

          {/* output */}
           <table id="t2">
           <tbody>
             <tr>
               <th>Serial No.</th>
               <th>Name</th>
               <th>Date</th>
               <th>Description</th>
               <th>Remove</th>
             </tr>

             {
              this.state.data.map((item,index)=>
                <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.des}</td>
                <td><button onClick={()=>this.delinfo(index)} id="removebtn">DELETE</button></td>
                </tr>
              )
             }
             </tbody>

           </table>
           </div>
                
            </>
        )
    }
}

