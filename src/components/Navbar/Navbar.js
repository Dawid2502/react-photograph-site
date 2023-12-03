import React, { Component, useState, useEffect } from 'react';
import './Navbarstyle.scss';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Aboutme from '../Aboutme/Aboutme';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [color, setColor] = useState(false);

	const menuClick = () => {
		setClicked(!clicked);
	};

	const location = useLocation();
	const [isInSession, setIsInSession] = useState(false);

	useEffect(() => {
		// Sprawdzaj lokalizację i ustaw flagę isInSession
		setIsInSession(
			[
				'/child-session',
				'/baby-session',
				'/model-session',
				'/outdoor-session',
				'/occasional-session',
				'/wedding-session',
			].includes(location.pathname)
		); // dostosuj do rzeczywistych ścieżek
	}, [location]);
	// useEffect(() => {
	// 	const changeColor = () => {
	// 		if (window.scrollY >= 90 && window.innerWidth > 576) {
	// 			setColor(true);
	// 		} else setColor(false);
	// 	};
	// 	window.addEventListener('scroll', changeColor);
	// }, []);

	return (
		<>
			<button className='burger-btn'>
				<FontAwesomeIcon
					className='bars'
					icon='fa-solid fa-bars'
					onClick={menuClick}
				/>
			</button>
			<nav className={clicked ? 'nav-active' : ''} >
				<img
					src={require('../Navbar/camera-303839_640 (1).png')}
					className={isInSession ? 'logo-hide' : 'logo'}
				/>

				{/* <div className='nav-items'> */}
				{/* <a className='item' href='#'>
							Start
						</a>
						<a className='item' href='#about-me' onClick={menuClick}>
							O mnie
						</a>
						<a className='item' href='#portfolio' onClick={menuClick}>
							Galeria
						</a>
						<a className='item' href='#sessions' onClick={menuClick}>
							Oferta
						</a>
						<a className='item' href='#contact' onClick={menuClick}>
							Kontakt
						</a> */}
				{isInSession ? (
					// Renderuj inny Navbar dla sesji
					<div className='nav-items'>
						<Link to='/' className='item item-session' onClick={menuClick}>
							Home
						</Link>
						<Link
							to='/model-session'
							className='item item-session'
							onClick={menuClick}
						>
							Modeling
						</Link>
						<Link
							to='/child-session'
							className='item item-session'
							onClick={menuClick}
						>
							Sesje dla dzieci
						</Link>
						<Link
							to='/wedding-session'
							className='item item-session'
							onClick={menuClick}
						>
							Sesje ślubne
						</Link>
						<Link
							to='/occasional-session'
							className='item item-session'
							onClick={menuClick}
						>
							Sesje okolicznościowe
						</Link>
						<Link
							to='/outdoor-session'
							className='item item-session'
							onClick={menuClick}
						>
							Sesje plenerowe
						</Link>
						<Link
							to='/baby-session'
							className='item item-session'
							onClick={menuClick}
						>
							Sesje noworodkowe
						</Link>
					</div>
				) : (
					// Standardowy Navbar
					<div className='nav-items'>
						<Link to='/' className='item' onClick={menuClick}>
							Home
						</Link>
						<Link to='/aboutme' className='item' onClick={menuClick}>
							O mnie
						</Link>
						<Link to='/portfolio' className='item' onClick={menuClick}>
							Portfolio
						</Link>
						<Link to='/sessions' className='item' onClick={menuClick}>
							Oferta
						</Link>
						<Link to='/contact' className='item' onClick={menuClick}>
							Kontakt
						</Link>
					</div>
				)}

				{/* </div> */}
			</nav>
		</>
	);
};

export default Navbar;
