import React, { useContext } from 'react';

import Context from '../../store/context';

import './Card.scss';

const Card = ({ ime, name, src }) => {
	const { eng, selectingProdHandler, dark } = useContext(Context);
	const onClickHandler = () => {
		selectingProdHandler({ ime, name, src });
	};
	return (
		<div className={`card ${dark ? 'card-dark' : ''}` } onClick={onClickHandler}>
			<div>
				<img src={src} alt={name} loading='lazy' />
			</div>
			<div className='p-15'>
				<h4 className='title mb-10'>{eng ? name : ime}</h4>
				<div className='d-flex d-flex-end'>
					<button className='btn btn-primary'>
						{eng ? 'Zoom' : 'Uvećaj'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
