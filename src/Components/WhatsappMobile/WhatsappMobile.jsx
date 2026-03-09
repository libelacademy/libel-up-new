/** @format */

import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import './WhatsappMobile.css';

const WhatsappMobile = () => {
	return (
		<a
			href='https://api.whatsapp.com/send?phone=573105868543&text=Hola%2C%20estoy%20interesad%40%20en%20LIBEL%20UP'
			target='_blank'
			rel='noreferrer'
			className='WhatsappMobile'
		>
			<IoLogoWhatsapp size={32} style={{ marginRight: 10 }} />
			<span>¡Hola! 👋 Resolvemos todas tus dudas.</span>
		</a>
	);
};

export default WhatsappMobile;
