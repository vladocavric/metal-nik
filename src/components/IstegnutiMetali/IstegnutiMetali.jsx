import React, {useContext} from 'react';

import Context from '../../store/context';

import { products } from '../../assets/products';
import Card from '../Card/Card';

const IstegnutiMetali = () => {
	const {eng} = useContext(Context);
	return (
		<div
			className='d-flex d-flex-col center container mb-50'
			id='istegnuti-metali'>
			<h2 className='title mb-10'>{eng ? 'Elongate metal' : 'Istegnuti Metali'}</h2>
			{eng ? (
				<p>
					Elongate metal is obtained by slitting and stretching sheet metal without waste. 
					Due to its good mechanical properties, and especially its cost-effectiveness, 
					it is gaining increasing application.
					The materials used include black sheet metal, galvanized sheet metal, aluminum sheet metal, 
					stainless steel sheet metal, and copper sheet metal.
				</p>
			) : (
				<p>
					Istegnuti metal se dobija prosecanjem i razvlačenjem lima bez otpada. Zbog dobrih
					mehaničkih osobina, a posebno zbog ekonomičnosti, dobija na sve većoj primeni.
					Materijali koji se koriste su crni lim, pocinkovani lim, aluminijumski lim, prohromski lim i
					bakarni lim.{' '}
				</p>
			)}

			<div className='grid'>
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
