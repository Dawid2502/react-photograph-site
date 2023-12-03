import React from 'react';
import './Typesessionstyle.scss';

const ChildSession = () => {
	return (
		<div className='session-type-container'>
			<h2 className='section-title'>Sesje dziecięce</h2>
			<div className='session-description'>
				<div className='img-container'>
					<img
						className='session-img2'
						src={require('../../Sessions/TypeSession/kid-6344307_1280.jpg')}
						alt='chłopiec z aparatem'
					/>
					<div className='background-square'></div>
				</div>
				<div className='type-text'>
					<span>Lorem</span> ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam mi diam, tincidunt at eros sit amet, viverra ultrices eros.
					Morbi aliquam orci id justo gravida, sit amet venenatis lectus varius.
					Nam posuere eros nulla, vel imperdiet ipsum facilisis eu. Vestibulum
					accumsan gravida lorem, sed tempus dolor laoreet commodo. Aliquam
					sollicitudin malesuada dui, in faucibus augue sodales ut. Donec luctus
					augue quis arcu facilisis eleifend. In hac habitasse platea dictumst.
					Quisque orci ex, placerat sed orci nec, fringilla feugiat sapien.
					Curabitur blandit odio erat, ut lobortis dolor placerat id. Vivamus
					rutrum nisl id lacus auctor, id lacinia lacus congue. Nulla iaculis.
				</div>
			</div>
			<div className='session-price' id='plan'>
				<h2 className='section-title price-title'>Cennik</h2>
				<div className='underline'></div>
				<div className='wrapper'>
					<div className='all-packages'>
						<div className='price-package'>
							<img
								className='session-img'
								src={require('../../Sessions/TypeSession/photo-camera-2027073_640.png')}
								alt='aparat'
							/>
							<div className='package-text'>
								<h3 className='package-title'>Pakiet MINI</h3>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
							</div>
							<p className='price'>109 zł</p>
						</div>
						<div className='price-package'>
							<img
								className='session-img'
								src={require('../../Sessions/TypeSession/photo-camera-2027073_640.png')}
								alt='aparat'
							/>
							<div className='package-text'>
								<h3 className='package-title'>Pakiet MIDI</h3>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
							</div>
							<p className='price'>179 zł</p>
						</div>
						<div className='price-package'>
							<img
								className='session-img'
								src={require('../../Sessions/TypeSession/photo-camera-2027073_640.png')}
								alt='aparat'
							/>
							<div className='package-text'>
								<h3 className='package-title'>Pakiet MAXI</h3>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
								<p className='text-item'>* Lorem ipsum dolor sit amet</p>
							</div>
							<p className='price'>219 zł</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChildSession;
