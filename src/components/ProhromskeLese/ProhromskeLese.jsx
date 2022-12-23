import React, {useContext} from 'react'

import Context from '../../store/context';

import {products} from '../../assets/products'
import Card from '../Card/Card';

const ProhromskeLese = () => {
	const {eng} = useContext(Context);
	return (
		<div className='d-flex d-flex-col center container mb-50' id='prohromske-lese'>
			<h2 className='title mb-30'>{eng ? 'Prokhrom Lese' : 'Prohromske Lese'}</h2>
            <div className='grid'>
				{products.prohromskeLese.map((filter, index) => <Card key={index} ime={filter.ime} name={filter.name} src={filter.fileName}/>)}
			</div>
		</div>
	);
};

export default ProhromskeLese;
