import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import style from './Header.module.css';
import './Header.css';

import VideoModal from '../VideoModal/VideoModal';

import ReactPlayer from 'react-player';
import libel from '../../assets/3d-camp-logo.png';
import whatsapp from '../../assets/whatsapp.png';
import calendario from '../../assets/calendario.png';
import play from '../../assets/play.png';
import video from '../../assets/video.mp4';
import { BsArrowRight } from 'react-icons/bs';
import { getRemainingTimeUntilMsTimestamp } from '../../utils/countdown';

const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	const [url, setUrl] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const bannerTop = useSelector((state) => state.banner.value.banner);

	const handlerClose = () => {
		setOpenModal(false);
	};

	const handlerOpen = () => {
		if (windowWidth <= 500) setUrl('https://www.youtube.com/watch?v=5YGychOCnRU');
		if (windowWidth > 500) setUrl('https://www.youtube.com/watch?v=5YGychOCnRU');

		setOpenModal(true);
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const countdownTimestampMs = 'Sat, 22 Nov 2025 10:00:00 GMT-5';

	const defaultRemainingTime = {
		seconds: '00',
		minutes: '00',
		hours: '00',
		days: '00',
	};

	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

	function updateRemainingTime(countdown) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs]);

	return (
		<section className={`${style.mainSection} ${bannerTop ? style.paddinSection : null} `}>
			<VideoModal vertical={false} modal={openModal} url={url} handlerClose={handlerClose} />

			<div className={style.mainContainer}>
				<div className={style.cicleBackground}></div>
				<div className={style.titleContainer}>
					{/* <img style={{ maxWidth: '150px', marginBottom: '12px' }} src={libel} alt='logo' /> */}

					{/* <div className={style.titleTopContainer} style={{ marginTop: '12px' }}>
						<div className={style.line}></div>
						<h3>LIBEL UP</h3>
						<div className={style.line}></div>
					</div> */}

					<h1>
						{/* Hazte un crack 3D <br /> */}
						<span>
							<b> LIBEL UP</b> <br /> Tu talento paga tu educación
							{/* <img
								src='https://writebot-html.themetags.net/assets/img/text-underline-1.svg'
								alt='line'
							/> */}
						</span>
					</h1>

					<div className={style.titleTopContainer} style={{ marginTop: '12px' }}>
						<div className={style.line}></div>
						<h3>Empieza ahora</h3>
						<div className={style.line}></div>
					</div>

					{/* <p>El reto donde tu esfuerzo paga tu educación</p> */}

					{/* <div className={style.cntCountdown}>
						<div className={style.membershipCountdown}>
							<h5 className={style.membershipCountdownTitle}>Inicio de Clases 22 de Nov.</h5>
							<div className={style.membershipCountdownCounter}>
								<div className={style.membershipCountdownCounterItem}>
									<span>Día(s)</span>
									<p>{remainingTime.days}</p>
								</div>
								<div className={style.membershipCountdownCounterItem}>
									<span>Hora(s)</span>
									<p>{remainingTime.hours}</p>
								</div>
								<div className={style.membershipCountdownCounterItem}>
									<span>Minuto(s)</span>
									<p>{remainingTime.minutes}</p>
								</div>
								<div className={style.membershipCountdownCounterItem}>
									<span>Segundo(s)</span>
									<p>{remainingTime.seconds}</p>
								</div>
							</div>
						</div>
					</div> */}

					<div className={style.buttonsContainer}>
						<a
							className={style.button1}
							href='https://drive.google.com/file/d/1dumm0aWh3dYRajhxXzfUU2bvx0cgYLbo/view?usp=sharing'
							// target='blank_'
						>
							<span>Temario</span>
							<BsArrowRight />
						</a>
					</div>
				</div>

				<div className={style.imgContainer}>
					<ReactPlayer
						className='player'
						url='https://youtu.be/L3747icAAfQ'
						playing={false}
						controls={true}
						volume={0}
						width='100%'
						height='100%'
						playsinline
					/>
				</div>

				{/* <div className={style.buttonsContainer} style={{ marginBottom: '12px' }}>
					<a
						className={style.button1}
						href='https://calendly.com/d/cmnr-68p-fsw/asesoria-en-formacion-para-especialistas-3d'
						// target='blank_'
					>
						Reserva tu cita
						<BsArrowRight />
					</a>
				</div> */}
			</div>
			<svg width='0' height='0'>
				<filter id='grainy' x='0' y='0' width='100%' height='100%'>
					<feTurbulence type='fractalNoise' baseFrequency='.537'></feTurbulence>
					<feColorMatrix type='saturate' values='0'></feColorMatrix>
					<feBlend mode='multiply' in='SourceGraphic' in2='floodFill'></feBlend>
				</filter>
			</svg>
		</section>
	);
};

export default Header;
