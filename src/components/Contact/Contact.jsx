import React, { useContext } from 'react';

import Context from '../../store/context';

const Contact = () => {
	const { eng } = useContext(Context);
	return (
		<div className='d-flex eq-width d-flex-col-revers-768' id='contact'>
			<div>
				<iframe
				title='googlemap'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6878469454555!2d19.845927600000003!3d45.2031474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b106ea1c2ec8f%3A0xf0ae2b42b0f6717f!2sMetal-Nik!5e1!3m2!1sen!2srs!4v1749785247631!5m2!1sen!2srs'
					width='100%'
					height='100%'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</div>
			<div className='center-vertical d-flex-col p-100 p-15-768'>
				<h1 className='title mb-30'>{eng ? 'Contact' : 'Kontakt'}</h1>
				<p>Metal-Nik, Srbija, Sremska Kamenica, Jurija Gagarina 25</p>
				<p>
					{eng ? 'Sales' : 'Prodaja'}:&nbsp;Veselin Nikolić,
					tel:&nbsp;
					<a href='tel:+381643162221'>0643162221</a>, email:&nbsp;
					<a href='mailto:nikolic.veselin@gmail.com'>
						nikolic.veselin@gmail.com
					</a>
				</p>
				<p>
					{eng ? 'Technical support' : 'Tehnička podrška'}
					:&nbsp;dipl.&nbsp;inž.&nbsp;mašinstva Dragan Nikolić,
					tel:&nbsp;<a href='tel:+381643078215'>0643078215</a>,
					email:&nbsp;
					<a href='mailto:infometalnik27@gmail.com'>
						infometalnik27@gmail.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default Contact;
