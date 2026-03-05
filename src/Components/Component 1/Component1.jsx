import React, { useState } from 'react';
import style from './Component1.module.css';

import VideoModal from '../VideoModal/VideoModal';
import ReactPlayer from 'react-player';

import ref1 from '../../assets/vikingo.jpeg';
import ref2 from '../../assets/mono.jpeg';
import ref3 from '../../assets/goku.jpeg';
import ref4 from '../../assets/elfa.jpeg';
import play from '../../assets/play.png';

import { BsArrowRight } from 'react-icons/bs';

const Component1 = () => {
	const [openModal, setOpenModal] = useState(false);
	const [url, setUrl] = useState(false);

	const handlerClose = () => {
		setOpenModal(false);
	};

	const handlerOpen = (url) => {
		setUrl(url);
		setOpenModal(true);
	};

	return (
		<section className={style.mainSection}>
			<VideoModal modal={openModal} url={url} handlerClose={handlerClose} />
			<div className={style.titleContainer}>
				<h1>
					Resultados de Alumnos <br />
					<span>
						{' '}
						formamos <b>especialistas 3D.</b>{' '}
						<img
							src='https://writebot-html.themetags.net/assets/img/text-underline-1.svg'
							alt='line'
						/>
					</span>
				</h1>
				<p>
					Atrévete a marcar la diferencia, estás a solo un paso de convertirte en un especialista
					3D. Aquí te mostramos algunos de los resultados de nuestros alumnos.
				</p>
			</div>

			<div className={style.imgContainer}>
				<ReactPlayer
					className='player'
					url='https://www.youtube.com/watch?v=JUj4P3J6T1s'
					playing={false}
					controls={true}
					volume={0}
					width='100%'
					height='100%'
					playsinline
				/>
			</div>

			<div className={style.mainContainer}>
				<div className={style.container1}>
					<div style={{ position: 'relative' }}>
						<img src={ref1} alt='ref1' />

						<div
							className={`${style.playButton} ${style.playButtonPosition1}`}
							onClick={() => handlerOpen('https://www.youtube.com/watch?v=-uPVbSQIYWE')}
						>
							<img src={play} alt='play' />
						</div>
					</div>

					<p>
						Forma parte de la élite 3D en tiempo récord con nuestro método práctico. Domina las
						herramientas más avanzadas y entra con ventaja
						<span> en las industrias del cine, </span> videojuegos y animación.
					</p>
					<div>
						<a
							href='https://calendly.com/libel/charla-informativas-personalizadas'
							// target='blank_'
						>
							Contáctanos <BsArrowRight />{' '}
						</a>
						<h2>
							{' '}
							<span> Aprende 3D </span> de 0 a 100
						</h2>
					</div>
				</div>
				<div className={style.container2}>
					<div>
						<div style={{ position: 'relative', maxWidth: 'calc(50% - 12px);', margin: '0' }}>
							<img src={ref2} alt='ref2' />
							<div
								className={`${style.playButton} ${style.playButtonPosition1}`}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=aDZl5VrPBvw')}
							>
								<img src={play} alt='play' />
							</div>
						</div>

						<div style={{ position: 'relative', maxWidth: 'calc(50% - 12px);', margin: '0' }}>
							<img src={ref3} alt='ref3' />
							<div
								className={`${style.playButton} ${style.playButtonPosition1}`}
								onClick={() => handlerOpen('https://www.youtube.com/watch?v=ubQcdzxIWIY')}
							>
								<img src={play} alt='play' />
							</div>
						</div>
					</div>

					<div style={{ position: 'relative' }}>
						<img src={ref4} alt='ref4' />

						<div
							className={`${style.playButton} ${style.playButtonPosition1}`}
							onClick={() => handlerOpen('https://www.youtube.com/watch?v=xmZPVoRM3cA')}
						>
							<img src={play} alt='play' />
						</div>
					</div>
				</div>
			</div>
			<h2 className={style.lastTitle}>
				Hemos formado más de<span> 25,000 alumnos exitosos</span>{' '}
			</h2>
		</section>
	);
};

export default Component1;
