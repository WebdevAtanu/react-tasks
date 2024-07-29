export default function Input({type,id,place,...rest}){
	return(
		<>
			<input {...rest} type={type} name={id} id={id} placeholder={place} className='border border-black p-2 w-full'/>
		</>
		)
}