export default function Button({type,value,...rest}){
	return(
		<>
		<button {...rest} className='border border-black p-1 rounded-sm hover:bg-green-600 hover:text-white transition-all duration-200 w-full' type={type}>{value}</button>
		</>
		)
}