import {Link,NavLink} from 'react-router-dom';
export default function Header()
{
	return(
		<>
		<div className='flex justify-between p-5 shadow'>
		<Link to='/'><img src="logo.jpg" alt="" className='w-14'/></Link>
		<div className='flex items-center gap-2'>
			<NavLink to='/' className={({isActive})=>`${isActive? "text-blue-900":"text-black hover:text-red-900"} m-3`}>HOME</NavLink>
			<NavLink to='about' className={({isActive})=>`${isActive? "text-blue-900":"text-black hover:text-red-900"} m-3`}>ABOUT</NavLink>
			<NavLink to='contact' className={({isActive})=>`${isActive? "text-blue-900":"text-black hover:text-red-900"} m-3`}>CONTACT</NavLink>
			<NavLink to='github' className={({isActive})=>`${isActive? "text-blue-900":"text-black hover:text-red-900"} m-3`}>GITHUB</NavLink>
		</div>
			
		</div>
		</>
		)
}