import { React, Component } from 'react';
import './Contactstyle.scss';

function Contact() {
	return (
		<div className='form-container' id='contact'>
			<h2 className='section-title'>Kontakt</h2>
			<div className='contact-container'>
				<form>
					<label>Imię i Nazwisko</label>
					<input type='text' id='name' />
					<label>Email:</label>
					<input type='text' id='email' />
					<label type='text'>Wiadomość</label>
					<textarea type='text' />
					<input type='submit' value='Wyślij' className='send-msg-btn'/>
				</form>
				<div className='contact-info'>
					<div className='contact-author'>
						<p>Stuart Bailey</p>
						<p>
							tel.: <span>+ 48 555 222 111</span>
						</p>
						<p>
							email: <span>email@email.pl</span>
						</p>
					</div>

					<div className='contact-studio'>
						<p>Studio</p>
						<p>ul. Warszawska 20</p>
						<p>00-000 Warszawa</p>
						<p>
							tel.: <span>+ 48 555 222 111</span>
						</p>
						<p>
							email: <span>email@email.pl</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
