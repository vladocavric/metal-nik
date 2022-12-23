import React, {useContext} from 'react';

import background from '../../assets/POZADINA.jpg';

import Context from '../../store/context';

const AboutUs = () => {
	const {eng} = useContext(Context);
	return (
		<div className='d-flex eq-width mb-30' id='about-us'>
			<div className='center d-flex-col p-50'>
				<h1 className='title'>{eng ? 'About Us' : 'O nama'}</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
					molestias at obcaecati nihil veritatis consequuntur, animi
					excepturi hic eaque dolor! Consequuntur vero pariatur velit
					corrupti culpa aliquid, dicta deserunt officia!
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
