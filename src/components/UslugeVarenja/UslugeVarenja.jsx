import React, {useContext} from 'react'

import Context from '../../store/context';

import {products} from '../../assets/products'
import Card from '../Card/Card';

const UslugeVarenja = () => {
  const {eng} = useContext(Context);
  return (
    <div className='d-flex d-flex-col center container mb-50' id='usluge-varenja'>
			<h2 className='title mb-30'>{eng ? 'Welding Services' : 'Usluge Varenja'}</h2>
      <div className='grid'>
				{products.uslugeVarenja.map((filter, index) => <Card key={index} ime={filter.ime} name={filter.name} src={filter.fileName}/>)}
			</div>
		</div>
  )
}

export default UslugeVarenja