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
						SZR "METAL-NIK" was established in 1992 in Novi Sad and has been engaged in the same 
						activity since its inception. Primarily, the company specializes in the production of 
						filters for various purposes. Years of experience and continuous improvement in production, 
						as well as alignment with market needs, have led to the expansion of the types and varieties 
						of products. Today, the most prominent products in the manufacturing process include: 
						natural gas filters (inserts), felt filters, wire filters (in various dimensions and shapes), 
						air filters for motor vehicles (primarily for commercial vehicles such as combines, tractors, 
						trucks, and other heavy machinery), oil filters (mainly for filtering hydraulic oil in 
						industrial systems of machinery). Our products are also used in other industries, 
						such as the food industry, beekeeping, and in the installation of filters on chimneys 
						of production facilities to purify exhaust materials/gases. The company continues to 
						strive to expand its range of products and adapt them to consumer needs.{' '}
					</p>
				) : (
					<p>
						SZR &quot;METAL-NIK&quot; osnovana je 1992. godine u Novom Sadu i od osnivanja bavi se istom
						delatnošću. pre svega, proizvodnjom filtera različitih namena. Godine iskustva i
						usavršavanja proizvodnje i usklađivanje sa potrebama tržišta, dovele su do širenja tipova i
						vrsta samih proizvoda. Tako da su danas u proizvodnom procesu najzastupljeniji: filteri za
						prirodni gas (ulošci), filcani, žičani (u različitim dimenzijama i oblicima), filteri vazduha – za
						motorna vozila (prvenstveno teretnog saobraćaja: kombajni, traktori, kamioni i druge radne
						mašine), filteri ulja (pre svega za filtriranje hidrauličnog ulja radnih mašina u industrijskim
						sistemima). Naši proizvodi nalaze primenu i u drugim delatnostima prehrambene
						industrije, npr. pčelarstvu, a takođe i u postavljanju filtera na odžake proizvodnih pogona
						radi pročišćavanja izduvnih materija/gasova. Firma i dalje nastoji da proširuje lepezu svojih
						proizvoda i prilagođava ih potrebama potrošača.
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
