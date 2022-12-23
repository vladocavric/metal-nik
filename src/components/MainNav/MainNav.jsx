import React, { useState, useContext } from 'react';
import logo from '../../assets/logo.png'

import Context from '../../store/context';

import styles from './MainNav.module.scss';

const MainNavigation = () => {
	const {changeThemeHandler, changeLangHandler, eng} = useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenuHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	const onChangThemeHandler = () => {
		changeThemeHandler()
	}

	const onChangeLangHandler = () => {
		changeLangHandler()
	}
	
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
					<button onClick={onChangThemeHandler}>theme</button>
					<button onClick={onChangeLangHandler}>{eng ? 'srb' : 'eng'}</button>
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
