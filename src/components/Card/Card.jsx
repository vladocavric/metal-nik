import React, {useContext} from 'react';

import Context from '../../store/context';

const Card = ({ime, name, src}) => {
    const {eng} = useContext(Context);
	return <div className='card' style={{width: '300px'}}>
        <div>
            <img src={src} alt={name} />
        </div>
        <div>
            <h4 className='title'>{eng ? name : ime}</h4>
            <button>{eng ? 'Zoom' : 'Uvećaj'}</button>
        </div>
    </div>;
};

export default Card;
