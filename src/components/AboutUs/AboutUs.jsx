import React, { useContext } from 'react';

import background from '../../assets/POZADINA.jpg';

import Context from '../../store/context';

const AboutUs = () => {
	const { eng } = useContext(Context);
	return (
		<div className='d-flex eq-width mb-50 d-flex-col-768' id='about-us'>
			<div className='center d-flex-col p-50'>
				<h1 className='title'>{eng ? 'About Us' : 'O Nama'}</h1>
				<p>
					SZR "METAL-NIK" osnovana je 1992. godine u Novom Sadu i od
					osnivanja bavi se istom delatnošću. Pre svega proizvodnjom
					filtera različitih namena. Godine iskustva usavršvanja
					proizvodnje i usklađivanja sa potrebama tržišta, dovele su
					do širenja tipova proizvoda i vrsta samog proizvoda. Tako da
					su danas u proizvodnom procesu najzastupljeniji: Filteri za
					prirodni gas (ulošci): filcani, žičani u različitim
					dimenzijama i oblicima.; Filteri vazduha-za motorna vozila,
					prvenstveno teretnog saobraćaja, kombajni, traktori, kamioni
					i druge radne mašine.; Filteri ulja - pre svega, za
					filtriranje hidrauličnog ulja radnih mašina u industrijskim
					sistemima. Naši proizvodi nalaze primenu i u drugim
					delatnostima prehrambene industrije npr. pčelarstva, zatim
					postavljanje filtera na odžake proizvodnih pogona radi
					pročišćavanja izduvnih materija/gasova. Firma i dalje
					nastoji da proširuje lapezu svojih proizvoda i prilagođava
					ih potebama potrošača.
				</p>
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
