import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			Copyright{' '}
			<a
				href='https://www.linkedin.com/in/vlado-%C4%8Davri%C4%87-057b3312b/'
				target='_blank'
				rel='noopener noreferrer'>
				Vlado Čavrić
			</a>{' '}
			&#169; {new Date().getFullYear()}
		</footer>
	);
};

export default Footer;
