import React, { useContext } from 'react';

import Context from '../../store/context';
import { products } from '../../assets/products';
import Card from '../Card/Card';
const Filteri = () => {
	const { eng } = useContext(Context);
	return (
		<div className='d-flex d-flex-col center container mb-30' id='filteri'>
			<h2 className='title mb-30'>{eng ? 'Filters' : 'Filteri'}</h2>
			{eng ? (
				<p>
					For over 30 years we are specialize in design end
					manufacture of high quality replacement filter element for a
					wide variety of industries.{' '}
				</p>
			) : (
				<p>
					Višedeceniskom proizvodnjom filtera projektujemo I
					izradjujemo idealna rešenja za filtraciju u prehrambenoj,
					hemiskoj, farmaceutskoj ili metalnoj industriji.
				</p>
			)}

			<div className='container d-flex'>
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
