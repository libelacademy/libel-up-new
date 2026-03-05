import React, { useEffect } from 'react';
import './CloseInscriptions.css';
import { IoClose } from 'react-icons/io5';

import imgPopUp from '../../assets/modal.webp';
import { useState } from 'react';
import { getRemainingTimeUntilMsTimestamp } from '../../utils/countdown';

const CloseInscriptions = () => {
	const [close, setClose] = useState(false);

	const handleCloseModal = (event) => {
		if (event.target.className === 'Inscriptions ') {
			setClose(true);
		}
	};

	const countdownTimestampMs = 'Mon, 5 Oct 2026 23:59:59 GMT-5';

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
		<div className={`Inscriptions1 ${close ? 'close1' : ''}`} onClick={handleCloseModal}>
			<div className={`Inscriptions-content1 ${close ? 'close1' : ''}`}>
				<a
					href='https://www.libel.academy/'
					className='Inscriptions-close-btn1'
					// onClick={() => {
					// 	setClose(true);
					// }}
				>
					<IoClose />
				</a>
				<a
					href='https://www.libel.academy/'
					id='pop-up-home'
					// onClick={() => {
					// 	setClose(true);
					// }}
					style={{ height: '100%', cursor: 'pointer' }}
				>
					<img src={imgPopUp} alt='close-inscriptions' />
				</a>

				<div className='cnt-countdown'>
					<div className='membership-countdown'>
						<h5 className='membership-countdown-title'>Fecha de inicio: 5 de octubre</h5>
						<div className='membership-countdown-counter'>
							<div className='membership-countdown-counter-item'>
								<span>Días</span>
								<p>{remainingTime.days}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Horas</span>
								<p>{remainingTime.hours}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Minutos</span>
								<p>{remainingTime.minutes}</p>
							</div>
							<div className='membership-countdown-counter-item'>
								<span>Segundos</span>
								<p>{remainingTime.seconds}</p>
							</div>
						</div>
					</div>
					<a id='pop-up-home' className='btn-inicio' href='https://www.libel.academy'>
						Volver al inicio
					</a>
				</div>
			</div>
		</div>
	);
};

export default CloseInscriptions;
