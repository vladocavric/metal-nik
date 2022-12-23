import React, { useState, useContext } from 'react';

import Context from '../../store/context';

import styles from './MainNav.module.scss';

import logo from '../../assets/logo.png';
import srbFlag from '../../assets/srb-flag.svg';
import ukFlag from '../../assets/uk-flag.svg';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';

const MainNavigation = () => {
	const { changeThemeHandler, changeLangHandler, eng, dark } =
		useContext(Context);
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenuHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	const onChangThemeHandler = () => {
		changeThemeHandler();
	};

	const onChangeLangHandler = () => {
		changeLangHandler();
	};

	const darkTheme = {
		'--bg': '#292929',
	};

	return (
		<nav className={styles.MainNav} style={dark ? darkTheme : {}}>
			<div className={styles.MainNav__Logo}>
				<a href='/#about-us' className={styles.MainNav__logoLink}>
					<img src={logo} alt='logo' />
					<h1>Metal-nik</h1>
				</a>
			</div>
			<ul className={`${isOpen ? styles.MainNav__IsOpen : ''}`}>
				<li style={{ '--time': '0.2s' }}>
					<a href='/#'>{eng ? 'About Us' : 'O Nama'}</a>
				</li>
				<li style={{ '--time': '0.4s' }}>
					<a href='/#istegnuti-metali'>
						{eng ? 'Stretched Metals' : 'Istegnuti Metali'}
					</a>
				</li>
				<li style={{ '--time': '0.6s' }}>
					<a href='/#usluge-varenja'>
						{eng ? 'Welding Services' : 'Usluge Varenja'}
					</a>
				</li>
				<li style={{ '--time': '0.8s' }}>
					<a href='/#prohromske-lese'>
						{eng ? 'Prokhrom Lese' : 'Prohromske Lese'}
					</a>
				</li>
				<li style={{ '--time': '1s' }}>
					<a href='/#filteri'>{eng ? 'Filters' : 'Filteri'}</a>
				</li>
				<li style={{ '--time': '1.2s' }}>
					<a href='/#contact'>{eng ? 'Contact' : 'Kontakt'}</a>
				</li>
				<li style={{ '--time': '1.4s' }} className={styles.Switches}>
					<button className={`${dark ? styles.MainNav__Button__Dark : styles.MainNav__Button__Light}`} onClick={onChangThemeHandler}>{dark ? <img src={sun} alt="sun" /> : <img src={moon} alt="moon" />}</button>
					<div onClick={onChangeLangHandler}>
						{eng ? (
							<img src={srbFlag} alt="serbian flag" />
						) : (
							<img src={ukFlag} alt="uk flag" />
						)}
					</div>
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
