import React, {useEffect} from 'react';
import './Portfoliostyle.scss';
import Gallery from '../Gallery/Gallery';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className='portfolio' id='portfolio'>
			<h2 className='section-title'>Portfolio</h2>
			<div className='main-container'>
				<div className='text-container'>
					<h3>Zobacz moje prace</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi
						diam, tincidunt at eros sit amet, viverra ultrices eros. Morbi
						aliquam orci id justo gravida, sit amet venenatis lectus varius. Nam
						posuere eros nulla, vel imperdiet ipsum facilisis eu. Vestibulum
						accumsan gravida lorem, sed tempus dolor laoreet commodo. Aliquam
						sollicitudin malesuada dui, in faucibus augue sodales ut.
					</p>

					<Link to='/gallery'>
						<button className='go-to-gallery'>Przejdź do galerii</button>
					</Link>
				</div>
				<div className='photo-container' data-aos="zoom-in-up">
					<img src={require('../Portfolio/model-1963257_1920.jpg')} />
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
