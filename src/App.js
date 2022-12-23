import { useContext } from 'react';
import Context from './store/context.js';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Filteri from './components/Filteri/Fitleri.jsx';
import Footer from './components/Footer/Footer.jsx';
import IstegnutiMetali from './components/IstegnutiMetali/IstegnutiMetali.jsx';
import MainNav from './components/MainNav/MainNav.jsx';
import ProhromskeLese from './components/ProhromskeLese/ProhromskeLese.jsx';
import UslugeVarenja from './components/UslugeVarenja/UslugeVarenja.jsx';

function App() {
	const {dark} = useContext(Context);
	const darkTheme = {
		'--bg': '#292929',
		'--color': 'white',
	}

	
	return (
		<div style={dark ? darkTheme : {}}>
			<MainNav />
			<main>
				<AboutUs />
				<IstegnutiMetali />
				<UslugeVarenja />
				<ProhromskeLese />
				<Filteri />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
