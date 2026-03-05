import React, { useState, useEffect } from 'react';
import style from './BottomBar.module.css';
import whatsapp from '../../assets/whatsapp.png';
import calendario from '../../assets/calendario.png';

const BottomBar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isScrolledDown, setIsScrolledDown] = useState(0);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		let scrollY = 0;
		let breakpoint = 0;
		console.log(breakpoint);

		if (windowWidth <= 500) {
			breakpoint = 522;
		} else {
			breakpoint = 427;
		}

		const handleScroll = () => {
			setIsScrolledDown(window.scrollY);

			if (window.scrollY >= breakpoint) {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<section className={`${style.mainSection} ${isActive ? style.showBar : null}`}>
			<a
				className={style.button1}
				href='https://calendly.com/d/cmnr-68p-fsw/asesoria-en-formacion-para-especialistas-3d'
				// target='blank_'
			>
				Reserva tu cita
				<img src={calendario} alt='calendario' style={{ maxWidth: '25px', marginLeft: '6px' }} />
			</a>
			<a
				className={style.button2}
				href='https://wa.link/9c8oe2'
				// target='blank_'
			>
				Escríbenos
				<img src={whatsapp} alt='whatsapp' style={{ maxWidth: '20px', marginLeft: '6px' }} />
			</a>
		</section>
	);
};

export default BottomBar;
