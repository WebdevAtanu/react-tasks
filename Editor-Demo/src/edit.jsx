import React from "react";
import './App.css';
export default class Edit extends React.Component

// state declaration
{
    state={
    nm:"",
    dept:"",
    data:[],
    flag:false,
    index:0
}

// set the input values in state variables
setInput=(e)=>{
    this.setState({[e.target.name]:[e.target.value]})
}

// set the state values in data array and display via map
setInfo=()=>{
    // validation check
    let nmfield=document.getElementById('nm').value;
    let deptfield=document.getElementById('dept').value;
    if(nmfield=="" || deptfield==""){
        alert("Empty field")
    }

    else{
    this.setState({data:[...this.state.data,{nm:this.state.nm,dept:this.state.dept}],nm:'',dept:''})

    // input field clear
    document.getElementById('nm').value='';
    document.getElementById('dept').value='';
}
}

// set the editor for changing
setEditor=(index)=>{
    // disable all edit buttons
    let editbtn=document.getElementsByClassName('editBtn');
    Array.from(editbtn).forEach(item=>item.disabled=true);

    this.setState({flag:!this.state.flag,index:index})

    // taking the indexed values to input box
    document.getElementById('nm').value=this.state.data[index].nm;
    document.getElementById('dept').value=this.state.data[index].dept;
}

// set the edited info
editInfo=(e)=>{
    let newnm=document.getElementById('nm').value;
    let newdept=document.getElementById('dept').value;
    this.state.data.splice(this.state.index,1,{nm:newnm,dept:newdept});
    this.setState({flag:!this.state.flag});

    // enable all edit buttons
    let editbtn=document.getElementsByClassName('editBtn');
    Array.from(editbtn).forEach(item=>item.disabled=false);

    // input field clear
    document.getElementById('nm').value='';
    document.getElementById('dept').value='';
}
    render(){
        
        return(
            <>
            <div id="main">
            <table id='t1'>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" name="nm" id="nm" onChange={this.setInput}/></td>
                    </tr>
                    <tr>
                        <td>Dept:</td>
                        <td><input type="text" name="dept" id="dept" onChange={this.setInput}/></td>
                    </tr>
                    <tr><td colSpan='2'><input type="button" value={(this.state.flag)?"EDIT":"ADD"} onClick={(this.state.flag)?this.editInfo:this.setInfo}/></td></tr>
                </tbody>
            </table>
           
           <table id='t2'>
            <tbody>
            <tr>
                <th>Name</th>
                <th>Dept</th>
                <th>Edit</th>
            </tr>
           {
            this.state.data.map((item,index)=>
                        <tr key={index}>
                            <td>{item.nm}</td>
                            <td>{item.dept}</td>
                            <td><button onClick={()=>this.setEditor(index)} className="editBtn">EDIT</button></td>
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