export default function Nav()
{
	return(
		<>
			<div className='flex flex-row justify-between p-2 bg-gray-200'>
				<div>
				<img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png" alt="" id='logo'/>
				</div>
				<div>
					<ul className='flex flex-row gap-3 hover:cursor-pointer'>
						<li className='hover:text-white hover:bg-blue-500 p-2 transition-all duration-200 rounded-2xl border border-black'>HOME</li>
						<li className='hover:text-white hover:bg-blue-500 p-2 transition-all duration-200 rounded-2xl border border-black'>ABOUT</li>
						<li className='hover:text-white hover:bg-blue-500 p-2 transition-all duration-200 rounded-2xl border border-black'>CONTACT</li>
					</ul>
				</div>
			</div>
		</>
		)
}