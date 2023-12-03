import React, { Component, useEffect } from 'react';
import "./Headerstyle.scss";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee,  } from '@fortawesome/fontawesome-free-solid';
import {fab, faTwitterSquare, faSquareFacebook, faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Header() {
	return (
		<header>
			<div className='social-media'>
				<a className="icon-media" href='#'><FontAwesomeIcon className="icon-media" icon={faSquareFacebook} /></a>
				<a className="icon-media" href='#'><FontAwesomeIcon className="icon-media" icon={faInstagram} /></a>
				<a className="icon-media" href='#'><FontAwesomeIcon className="icon-media" icon={faLinkedin} /></a>
				<a className="icon-media" href='#'><FontAwesomeIcon className="icon-media" icon={faGithub} /></a>
			</div>
			<div className='main-title-box'>
				<h1>Razem<br/>uchwycimy<br/>najlepsze chwile</h1>
			</div>
		</header>
	);
}

export default Header;