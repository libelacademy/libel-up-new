/** @format */

import React, { useEffect, useState } from 'react';
// import './Master.css';
import MasterItem from '../MaterItem/MaterItem';
import style from './Master.module.css';

import decoration1 from '../../assets/decorations/02.png';
import decoration2 from '../../assets/decorations/04.png';
import logoUtpl from '../../assets/UTPL fondo oscuro.png';
import linea from '../../assets/linea.svg';
import fondo from '../../assets/fondo.png';

import { getRemainingTimeUntilMsTimestamp } from '../../utils/countdown';
import contentMaster, { contentMaster2 } from '../../utils/contentMaster';
import contentMasterYear, { contentMasterYear2 } from '../../utils/contentMasterYear';
import SimpleModal from '../SimpleModal/SimpleModal';

import dayjs from 'dayjs';

import line from '../../assets/underline.png';

const defaultRemainingTime = {
	seconds: '00',
	minutes: '00',
	hours: '00',
	days: '00',
};

const Master = () => {
	const [close, setClose] = useState(true);
	const [url, setUrl] = useState('');
	const [modalInfo, setModalInfo] = useState({});
	const [changeMaster, setChangemaster] = useState(contentMasterYear);

	const handlerClose = (url, modal) => {
		close ? setClose(false) : setClose(true);
		setUrl(url);
		setModalInfo(modal);
	};

	const handleCloseModal = (event) => {
		if (event.target.className === 'Inscriptions ') {
			setClose(true);
		}
	};

	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
	const countdownTimestampMs = 'Sat, 22 Nov 2025 10:00:00 GMT-5';

	const nowDay = dayjs();

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs]);

	function updateRemainingTime(countdown) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}

	const changePlanHandler = (e) => {
		let name = e.target.name;

		if (name === 'contentMaster') setChangemaster(contentMaster);
		if (name === 'contentMasterYear') setChangemaster(contentMasterYear);
	};

	return (
		<section className={style.Master} id='contenido'>
			<SimpleModal
				close={close}
				handlerClose={handlerClose}
				handleCloseModal={handleCloseModal}
				url={url}
				modalInfo={modalInfo}
			/>
			<div className={style.masterContainer}>
				{/* <img src={decoration1} alt='Master Decoration' className={style.decoration1} />
				<img src={decoration2} alt='Master Decoration' className={style.decoration2} /> */}

				{/* <div className={style.masterHeader}>
					<h1 className={style.masterTitle} style={{ marginTop: '24px' }}>
						CERTIFICACIÓN
						<br />
						<span>
							<b>
								<img src={line} alt='header-underline' className={style.headerUnderlineMaster} />
								UNIVERSITARIA
							</b>
						</span>
					</h1>

					<img src={logoUtpl} alt='logo utpl' className={style.logoUtpl} />

					<h1 className={style.masterTitle} style={{ marginTop: '24px' }}>
						ENTRENAMIENTOS
						<br />
						<span>
							DEL{' '}
							<b>
								<img src={line} alt='header-underline' className={style.headerUnderlineMaster} />
								3DCAMP
							</b>
						</span>
					</h1>
					<p className={style.headerParagraph}>
						Sumérgete en una experiencia tridimensional única, donde tendrás la oportunidad de
						participar y ganar becas para nuestros másteres <br /> ¡Y lo mejor de todo es que
						cuentan con certificación universitaria!
					</p>

					{ <h1 className={style.masterTitle} style={{ marginTop: '24px' }}>
						<span>
							OFERTA <br />
							<b style={{ fontWeight: '800' }}>
								<img src={line} alt='header-underline' className={style.headerUnderlineMaster} />
								40% Dto
							</b>
						</span>
					</h1> }
				</div> */}

				{/* <div className={style.offContainer}>
					<div className={style.bubble}> No te lo pierdas</div>
					<h1>Etapas de descuento</h1>

					<div className={style.etapasContainer}>
						<div className={style.etapa}>
							<span>Etapa 2</span>
							<h2> 60%</h2>
						</div>
						<div className={style.etapaActive}>
							<span>Etapa 3</span>
							<h2> 50%</h2>
						</div>
					</div>

					<img className={style.linea} src={linea} alt='linea' />
					<img className={style.linea2} src={linea} alt='linea' />
				</div> */}

				{/* <div className={style.cntCountdown}>
					<div className={style.membershipCountdown}>
						<h5 className={style.membershipCountdownTitle}>Oferta válida 22 de Nov</h5>
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

				{/* <div className={style.menuContainer}>
					<div
						className={changeMaster === contentMaster ? style.menuSelected : style.menuNoSelected}
					>
						<a name='contentMaster' onClick={changePlanHandler}>
							Acceso 60 días
						</a>
					</div>

					<div
						className={
							changeMaster === contentMasterYear ? style.menuSelected : style.menuNoSelected
						}
					>
						<a name='contentMasterYear' onClick={changePlanHandler}>
							Acceso 1 año
						</a>
					</div>

					<img className={style.linea3} src={linea} alt='linea' />
					<img className={style.linea4} src={linea} alt='linea' />
				</div> */}

				{changeMaster === contentMaster ? (
					<>
						<div className={style.masterBody2} id='master-items2'>
							{contentMaster2.map((item, index) => (
								<MasterItem key={index} content={item} handlerClose={handlerClose} />
							))}
						</div>

						<div className={style.masterBody} id='master-items1'>
							{contentMaster.map((item, index) => (
								<MasterItem key={index} content={item} handlerClose={handlerClose} />
							))}
						</div>
					</>
				) : (
					<>
						{/* <div className={style.masterBody2} id='master-items2'>
							{contentMasterYear2.map((item, index) => (
								<MasterItem key={index} content={item} handlerClose={handlerClose} />
							))}
						</div> */}

						<div className={style.masterBody} id='master-items1'>
							{contentMasterYear.map((item, index) => (
								<MasterItem key={index} content={item} handlerClose={handlerClose} />
							))}
						</div>
					</>
				)}

				<div className={style.buttonAsesoriaContainer}>
					<h2>¿Tienes preguntas?</h2>
					<a
						href='https://calendly.com/libel/charla-informativas-personalizadas'
						// target='_blank'
						rel='noreferrer'
						className={style.btnAccesototal}
					>
						Agenda una asesoría
					</a>
				</div>
			</div>
		</section>
	);
};

export default Master;
