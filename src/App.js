import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Filteri from './components/Filteri/Fitleri.jsx';
import Footer from './components/Footer/Footer.jsx';
import IstegnutiMetali from './components/IstegnutiMetali/IstegnutiMetali.jsx';
import MainNav from './components/MainNav/MainNav.jsx';
import OstaliProizvodi from './components/OstaliProizvodi/OstaliProizvodi.jsx';

function App() {
	return (
		<div>
			<MainNav />
			<main>
				<AboutUs />
				<IstegnutiMetali />
				<Filteri />
				<OstaliProizvodi />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}

export default App;
