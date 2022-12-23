import React from 'react';

import {products} from '../../assets/products'
import Card from '../Card/Card';

const ProhromskeLese = () => {
	return (
		<div className='d-flex d-flex-col center container mb-30' id='prohromske-lese'>
			<h2 className='title mb-30'>Prohromske lese</h2>
            <div className='container d-flex'>
				{products.prohromskeLese.map((filter, index) => <Card key={index} ime={filter.ime} name={filter.name} src={filter.fileName}/>)}
			</div>
		</div>
	);
};

export default ProhromskeLese;
