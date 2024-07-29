import {useSelector} from 'react-redux';
export default function Count(){
	const count=useSelector(state=>state);
	return(
		<>
		<h2>Counter 2: {count}</h2>
		</>
		)
}