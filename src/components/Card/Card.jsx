import React from 'react';

const Card = ({ime, name, src}) => {
	return <div className='card' style={{width: '300px'}}>
        <div>
            <img src={src} alt={name} />
        </div>
        <div>
            <p>{ime}</p>
            <button>Uvećaj</button>
        </div>
    </div>;
};

export default Card;
