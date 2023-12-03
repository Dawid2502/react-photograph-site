import React, { useEffect } from 'react';
import './Aboutmestyle.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aboutme() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='about-me-container' id='about-me'>
			<div className='photo-container'>
				<img
					className='about-me-photo photo1'
					src={require('../Aboutme/woman-4297471_1280.jpg')}
					alt='kobieta fotograf'
				/>
				<img
					className='about-me-photo photo2'
					src={require('../Aboutme/noemi-macavei-katocz-zrk7WirlxgM-unsplash.jpg')}
					alt='kobieta fotograf'
				/>
			</div>
			<div
				className='about-me-text'
				data-aos='fade-down'
				data-aos-easing='linear'
				data-aos-duration='1500'
			>
				<h2 className='section-title'>O mnie</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
					diam, tincidunt at eros sit amet, viverra ultrices eros. Morbi aliquam
					orci id justo gravida, sit amet venenatis lectus varius. Nam posuere
					eros nulla, vel imperdiet ipsum facilisis eu. Vestibulum accumsan
					gravida lorem, sed tempus dolor laoreet commodo. Aliquam sollicitudin
					malesuada dui, in faucibus augue sodales ut. Donec luctus augue quis
					arcu facilisis eleifend. In hac habitasse platea dictumst. Quisque
					orci ex, placerat sed orci nec, fringilla feugiat sapien. Curabitur
					blandit odio erat, ut lobortis dolor placerat id. Vivamus rutrum nisl
					id lacus auctor, id lacinia lacus congue. Nulla iaculis.
				</p>
				<div className='experience-container'>
					<div>
						<h3>Wykształcenie</h3>
						<p>Akademia sztuk pięknych</p>
					</div>
					<div>
						<h3>Doświadczenie</h3>
						<p>10 lat pracy jako fotograf</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Aboutme;
