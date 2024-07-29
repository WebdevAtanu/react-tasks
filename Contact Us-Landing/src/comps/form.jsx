import {useState} from 'react';
import Button from './button'
import Input from './input'
import Area from './textarea'
export default function Form(){
	const[name,setName]=useState("");
	const[email,setEmail]=useState("");
	const[text,setText]=useState("");
	let [flag,setFlag]=useState(false);
	function formSubmit(e){
		e.preventDefault();
		// setName(e.target[0].value);
		// setEmail(e.target[1].value);
		// setText(e.target[2].value);
		setFlag(true);
	}
	return(
		<>
		<div className='p-5'> 
			<h1 className="text-3xl font-bold mb-5 text-center">
     			CONTACT US
    		</h1>
    		<div className='flex flex-col md:flex-row'>
    		<div>
    		<div className='flex justify-between mb-2'>
    			<Button value="VIA CHAT" onClick={()=>{console.log('CHAT button clicked')}}/>
    			<Button value="VIA CALL" onClick={()=>{console.log('CALL button clicked')}}/>
    		</div>
    			<form action="" onSubmit={formSubmit}>
    			<table>
    				<tbody>
    					<tr>
    						<td><Input type='text' id='name' place='Enter Name' onChange={(e)=>setName(e.target.value)}/></td>
    					</tr>
    					<tr>
    						<td><Input type='email' id='email' place='Enter Email' onChange={(e)=>setEmail(e.target.value)}/></td>
    					</tr>
    					<tr>
    						<td><Area onChange={(e)=>setText(e.target.value)}/></td>
    					</tr>
    				</tbody>
    			</table>
    				
    				<Button value="SUBMIT" type='submit'/>
    			</form>
    		</div>
    		<div>
    			<img src="https://unblast.com/wp-content/uploads/2020/09/Contact-Us-Vector-Illustration-Part-02-1.jpg" alt="" className='w-3/4 float-right'/>
    		</div>
		</div>
		{
			flag?<ul>
			<li>Name: {name}</li>
			<li>Email: {email}</li>
			<li>Query: {text}</li>
		</ul>:null
		}
		
		</div>
		</>
		
		)
}