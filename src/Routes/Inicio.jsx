import React, { useState } from 'react';

import Navbar from '../Components/Navbar/Navbar';
import BottomBar from '../Components/BottomBar/BottomBar';
import Header from '../Components/Header/Header';
import Form from '../Components/Form/Form';
import Supercharge from '../Components/Supercharge/Supercharge';
import MovedTitle2 from '../Components/MovedTitle2/MovedTitle2';
import Master from '../Components/Master/Master';
import Component1 from '../Components/Component 1/Component1';
import Brands from '../Components/Brands/Brands';
import Powerful from '../Components/Powerful/Powerful';
import MovedTitle from '../Components/MovedTitle/MovedTitle';
import WhatWeDo from '../Components/What We Do/WhatWeDo';
import Plans from '../Components/Plans/Plans';
import FAQ from '../Components/FAQ/FAQ';
import FooterNew from '../Components/FooterNew/FooterNew';

import Especialistas from '../Components/Especialistas/Especialistas';
import Gallery from '../Components/Gallery/Gallery';

const Inicio = () => {
	// const [banner, setBanner] = useState(true);

	// const handlerClose = () => {
	// 	setBanner(false);
	// };

	return (
		<>
			<Navbar />
			{/* <BottomBar /> */}
			<Header />
			{/* <Form /> */}
			<Supercharge />
			<Especialistas />
			{/* <MovedTitle2 /> */}
			<Master />
			{/* <Component1 /> */}
			<Gallery />
			<Powerful />
			<Brands />
			{/* <MovedTitle /> */}
			{/* <WhatWeDo /> */}
			{/* <Plans /> */}
			<FAQ />
			<FooterNew />
		</>
	);
};

export default Inicio;
