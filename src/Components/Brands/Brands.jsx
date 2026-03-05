import React from 'react';
import style from './Brands.module.css';

import brand1 from '../../assets/logo-agency.png';

const numbers = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
//
const prueba = numbers.map((number, i) => (
	<div key={i} className={style.bubble}>
		<img src={brand1} alt='libelIcon' />
	</div>
));

const Brands = () => {
	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				<div className={style.leftScroll}>{prueba}</div>
				<div className={style.rightScroll}>{prueba}</div>
			</div>
		</section>
	);
};

export default Brands;
