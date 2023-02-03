import React from 'react'
import './Logininpage.css'
import ImgAsset from '../public'
import {Link} from 'react-router-dom'
export default function Logininpage () {
	return (
		<div className='Logininpage_Logininpage'>
			<span className='Logintocontinue'>Log in to continue:</span>
			<div className='buton1'>
				<img className='Line1' src = {ImgAsset.Logininpage_Line1} />
				<span className='Email'>E-mail</span>
			</div>
			<div className='Buton2'>
				<img className='Line2' src = {ImgAsset.Logininpage_Line2} />
			</div>
			<div className='Rectangle3'/>
			<span className='Newuser'>New user?</span>
			<Link to='/createaccountpage'>
				<span className='SignUp'> Sign Up</span>
			</Link>
			<Link to='/homepageuser'>
				<img className='Rectangle6' src = {ImgAsset.Logininpage_Rectangle6} />
			</Link>
			<span className='LOGIN'>LOG IN</span>
		</div>
	)
}