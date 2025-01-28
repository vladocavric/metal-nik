import React, { useContext } from 'react';

import Context from '../../store/context';
import { products } from '../../assets/products';
import Card from '../Card/Card';
const Filteri = () => {
	const { eng } = useContext(Context);
	return (
		<div className='d-flex d-flex-col center container mb-50' id='filteri'>
			<h2 className='title mb-10'>{eng ? 'Filters' : 'Filteri'}</h2>
			<p className="mb-30">
				{eng
					? 'With decades of experience in filter production, we design and create ideal solutions for filtration in the food, chemical, pharmaceutical, and metal industries.'
					: 'Višedecenijskom proizvodnjom filtera projektujemo i izrađujemo idealna rešenja za filtraciju u prehrambenoj, hemijskoj, farmaceutskoj i metalnoj industriji.'}
			</p>

			<div className='grid'>
				{products.filters.map((filter, index) => (
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

export default Filteri;
