import React from 'react';


const Contact = () => {
	return (
		<div className='d-flex eq-width' id='contact'>
			<div>
			<iframe title='googlemap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.947530174993!2d19.796817615550292!3d45.24885377909894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1197f58e55b7%3A0x7d2a5ad246f5525d!2sBate%20Brki%C4%87a%208%2C%20Novi%20Sad%2021000!5e0!3m2!1sen!2srs!4v1671675067352!5m2!1sen!2srs" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
			</div>
			<div className='center d-flex-col p-100'>
				<h1 className='title mb-30'>Kontakt</h1>
				<p>Metal Nik, Srbija, Novi Sad, Bate Brkića 8a</p>
				<p>
					Prodaja: Nikolic Veselin, tel:{' '}
					<a href='tel:+381643162221'>0643162221</a>, mail:{' '}
					<a href='mailto:nikolic.veselin@gmail.com'>
						nikolic.veselin@gmail.com
					</a>
				</p>
				<p>
					Tehnička podrška: dipl. ing. mašinstva Nikolić Dragan, tel:{' '}
					<a href='tel:+381643078215'>0643078215</a>, mail:{' '}
					<a href='mailto:infometalnik27@gmail.com'>
						infometalnik27@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default Contact;
