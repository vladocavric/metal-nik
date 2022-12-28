import React, { useContext } from 'react';

import background from '../../assets/POZADINA.jpg';

import Context from '../../store/context';

const AboutUs = () => {
	const { eng } = useContext(Context);
	return (
		<div className='d-flex eq-width mb-50 d-flex-col-768' id='about-us'>
			<div className='center d-flex-col p-50'>
				<h1 className='title'>{eng ? 'About Us' : 'O Nama'}</h1>
				{eng ? (
					<p>
						Szr “METAL-NIK “ was founded in 1992 in Novi Sad end has
						been engaged in the same activity since its foundation.
						First of all, the production of filters for different
						purposes. Years of experience in perfecting production
						end harmonizing it with the needs of the market have led
						to the expansion of product types. So, today in the
						production process the most represented are : Cartridge
						filter for the natural gas in different dimensions and
						shapes .” Air filters - for motor vehicles, primarily
						freight traffic ,tractors end other working machines. ‘
						Oil filters of working machine in industrial systems.
						Our products are also used in other activities of the
						food industry,e.g. beekeeping, then installing filters
						on the chimneys of production facilities to purify
						exhaust substances/gasas. The company is still trying to
						expand the range of its products and adapt them to the
						needs of consumers.{' '}
					</p>
				) : (
					<p>
						SZR "METAL-NIK" osnovana je 1992. godine u Novom Sadu i
						od osnivanja bavi se istom delatnošću. Pre svega
						proizvodnjom filtera različitih namena. Godine iskustva
						usavršvanja proizvodnje i usklađivanja sa potrebama
						tržišta, dovele su do širenja tipova proizvoda i vrsta
						samog proizvoda. Tako da su danas u proizvodnom procesu
						najzastupljeniji: Filteri za prirodni gas (ulošci):
						filcani, žičani u različitim dimenzijama i oblicima.;
						Filteri vazduha-za motorna vozila, prvenstveno teretnog
						saobraćaja, kombajni, traktori, kamioni i druge radne
						mašine.; Filteri ulja - pre svega, za filtriranje
						hidrauličnog ulja radnih mašina u industrijskim
						sistemima. Naši proizvodi nalaze primenu i u drugim
						delatnostima prehrambene industrije npr. pčelarstva,
						zatim postavljanje filtera na odžake proizvodnih pogona
						radi pročišćavanja izduvnih materija/gasova. Firma i
						dalje nastoji da proširuje lapezu svojih proizvoda i
						prilagođava ih potebama potrošača.
					</p>
				)}
			</div>
			<div>
				<img
					src={background}
					alt='istegnuti metal'
					className='img-obj-cover'
				/>
			</div>
		</div>
	);
};

export default AboutUs;
