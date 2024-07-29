import {useParams} from 'react-router-dom';

export default function User()
{
	const {userid}=useParams();
	return(
		<>
		<div>
		<h2 className='text-2xl text-center'>User: {userid}</h2>
		</div>
		</>
		)
}