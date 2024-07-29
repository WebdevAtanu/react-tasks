export default function Area({...rest}){
	return(
		<>
			<textarea {...rest} name="" id="" cols='40' rows='5' placeholder='Enter your query' className='border border-black resize-none p-2'></textarea>
		</>
		)
}