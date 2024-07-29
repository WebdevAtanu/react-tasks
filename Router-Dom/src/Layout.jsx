import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './comps/header/Header';
import Footer from './comps/footer/Footer';

export default function Layout()
{
	return(
		<>
		<Header/>
		<Outlet/>
		<Footer/>
		</>
		)
}