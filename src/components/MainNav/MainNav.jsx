import React, { useState } from 'react';
import logo from '../../assets/logo.png'



import styles from './MainNav.module.scss';

const MainNavigation = () => {
	// const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
	// console.log(isTouch);
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenuHandler = () => {
		setIsOpen((prevState) => !prevState);
	};
	
	return (
		<nav className={`${styles.MainNav}`}>
			<div className={styles.MainNav__Logo}>
				<a href='/#about-us' className={styles.MainNav__logoLink}>
					<img src={logo} alt="logo" /><h1>Metal-nik</h1>
				</a>
			</div>
			<ul className={`${isOpen ? styles.MainNav__IsOpen : ''}`}>
				<li style={{ '--time': '0.2s' }}>
					<a href='/#'>O nama</a>
				</li>
				<li style={{ '--time': '0.4s' }}>
					<a href='/#istegnuti-metali'>Istegnuti metali</a>
				</li>
				<li style={{ '--time': '0.6s' }}>
					<a href='/#usluge-varenja'>Usluge varenja</a>
				</li>
				<li style={{ '--time': '0.8s' }}>
					<a href='/#prohromske-lese'>Prohromske lese</a>
				</li>
				<li style={{ '--time': '1s' }}>
					<a href='/#filteri'>Filteri</a>
				</li>
				<li style={{ '--time': '1.2s' }}>
					<a href='/#contact'>Kontakt</a>
				</li>
				<li style={{ '--time': '1.4s' }}>
					<button>theme</button>
				</li>
				<li style={{ '--time': '1.6s' }}>
					<button>lang</button>
				</li>
			</ul>

			<button
				onClick={toggleMenuHandler}
				className={`${styles.MainNav__Hamburger} ${
					isOpen ? styles.MainNav__IsOpen : ''
				}`}>
				<span className='c-nav-burger-l1'></span>
				<span className='c-nav-burger-l2'></span>
				<span className='c-nav-burger-l3'></span>
			</button>
		</nav>
	);
};

export default MainNavigation;
