import React, {useContext} from 'react';

import Context from '../../store/context';

import { products } from '../../assets/products';
import Card from '../Card/Card';

const IstegnutiMetali = () => {
	const {eng} = useContext(Context);
	return (
		<div
			className='d-flex d-flex-col center container mb-30'
			id='istegnuti-metali'>
			<h2 className='title mb-30'>Istegnuti Metali</h2>
			{eng ? (
				<p>
					Expanded metal in recent years are used in all fields. There
					are many adventages in using expanded metal such as cost
					efficiency, greater strength, lightness, ideal for secondary
					operations. Among these, expanded metal can be produced in
					carbon steel, galvanized steel, naluminium, coper end other
					metal alloys.
				</p>
			) : (
				<p>
					Istegnuti metal se dobija prosećanjem I razvlačenjem lima
					bez otpada. Zbog dobrih mehaničkih osobina a posebno iz
					ekonomskih razloga dobija na sve većoj primeni. Materijali
					koji se koriste su crni lim, pocinkovani lim, aluminijumski
					lim, prohromski lim I bakarni lim.{' '}
				</p>
			)}

			<div className='container d-flex'>
				{products.istegnutiMetal.map((filter, index) => (
					<Card
						key={index}
						ime={filter.ime}
						name={filter.name}
						src={filter.fileName}
					/>
				))}
			</div>
		</div>
	);
};

export default IstegnutiMetali;
