import {useEffect,useState} from 'react';

export default function Github()
{
	const [data,setData]=useState();
	useEffect(()=>{
		fetch('https://api.github.com/users/WebdevAtanu').then(res=>res.json()).then(res=>setData(res));
	},[])
	return(
		<>
		<h2 className='text-2xl text-center'>My Github Data</h2>
		<div className='p-5 flex justify-around items-center'>
			<img src={data?.avatar_url} alt="" className='w-1/4 rounded-full'/>
			<div className=''>
				<ul>
				<li>Name: {data?.name}</li>
				<li>Bio: {data?.bio}</li>
				<li>Repo: {data?.public_repos}</li>
				<li>Followers: {data?.followers}</li>
				<li>Following: {data?.following}</li>
				</ul>
			</div>
		</div>
		</>
		)
}