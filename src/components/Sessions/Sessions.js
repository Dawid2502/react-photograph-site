import React from 'react';
import './Sessionsstyle.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

function Sessions() {
	const settings = {
		className: 'center',
		centerMode: true,
		dots: true,
		arrows: false,
		infinite: true,
		centerPadding: '20px',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	return (
		<div className='sessions-container' id='sessions'>
			<h2 className='section-title'>Oferta</h2>
			<Slider {...settings}>
				<Link to='/model-session'>
					<div className='photo-container'>
						<img
							className='session-img'
							src={require('../Sessions/photo-session-in-bodysuit-1759811_1280.jpg')}
							alt='Kobieta w kostiumie kąpielowym'
						/>
						<h3>Modeling</h3>
					</div>
				</Link>
				<Link to='/child-session'>
					<div className='photo-container'>
						<img
							className='session-img'
							src={require('../Sessions/boy-4326461_1280.jpg')}
							alt='chłopiec z aparatem'
						/>
						<h3>Sesje dla dzieci</h3>
					</div>
				</Link>
				<Link to='/wedding-session'>
					<div className='photo-container'>
						<img
							className='session-img'
							src={require('../Sessions/love-6600903_1280.jpg')}
							alt='Pan i pani młoda'
						/>
						<h3>Sesje ślubne</h3>
					</div>
				</Link>
				<Link to='/occasional-session'>
					<div className='photo-container'>
						<img
							className='session-img'
							src={require('../Sessions/corina-rainer-g6zF0KtUTFk-unsplash.jpg')}
							alt='Tort i prezenty'
						/>
						<h3>Sesje okolicznościowe</h3>
					</div>
				</Link>
				<Link to='/outdoor-session'>
					<div className='photo-container'>
						<img
							className='session-img s-img5'
							src={require('../Sessions/girl-6598198_1280.jpg')}
							alt='Kobieta na łące'
						/>
						<h3>Sesje plenerowe</h3>
					</div>
				</Link>
				<Link to='/baby-session'>
					<div className='photo-container'>
						<img
							className='session-img'
							src={require('../Sessions/baby-200760_1280.jpg')}
							alt='Noworodek trzymający ojca za rękę'
						/>
						<h3>Sesje noworodkowe</h3>
					</div>
				</Link>
			</Slider>
		</div>
	);
}

export default Sessions;
