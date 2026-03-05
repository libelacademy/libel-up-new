import React from 'react';
import style from './Powerful.module.css';

import blender from '../../assets/blender.png';
import impresion from '../../assets/impresion3d.png';

import { IoCheckmark } from 'react-icons/io5';
import { FaArrowDownLong } from 'react-icons/fa6';

const Powerful = () => {
	return (
		<section className={style.mainSection}>
			<img
				className={style.lateral}
				src='https://writebot-html.themetags.net/assets/img/welcome-section-shape.webp'
				alt='lateral'
			/>
			{/* <div className={style.circleInfo}>
				<img src='https://writebot-html.themetags.net/assets/img/long-arrow-down.png' alt='arrow' />

				<svg viewBox='0 0 144.48 144.48' width='150' height='150'>
					<path
						id='ct-banner-curve-pxl_banner_carousel-d3a9627-5863'
						d='M242.93,123A71.74,71.74,0,1,1,171.2,51.22,71.73,71.73,0,0,1,242.93,123Z'
						transform='translate(-98.96 -50.72)'
					></path>
					<text x='50' y='50' textAnchor='middle' dy='.3em'>
						<textPath href='#ct-banner-curve-pxl_banner_carousel-d3a9627-5863'>
							{'--------------------'}
							APRENDE 3D DESDE CERO HOY
						</textPath>
					</text>
				</svg>
			</div> */}
			<div className={style.mainContainer}>
				<div className={style.containerImage}>
					<img src={blender} alt='blender' />

					<h1>
						Aquí el talento <span> se&nbsp;potencia </span> en comunidad
					</h1>

					<p>
						En la industria real, los grandes artistas no compiten, colaboran. Durante el challenge
						podrás ayudar activamente a tus compañeros en Discord, aportando feedback y compartiendo
						procesos. Cuando haces crecer a la comunidad, tu oportunidad de ganar, también crece.
					</p>

					<a href='https://www.libel.academy/impresion-3d-con-blender/'>Máster en impresión 3D</a>
				</div>
				<div className={style.containerInfo}>
					<div className={style.welcome}>
						<hr /> <h3>Completa el reto con excelencia</h3>
					</div>
					<h1>
						EL GRAN <span> PREMIO</span>{' '}
					</h1>
					<div className={style.lineContainer}>
						<hr />
						<div className={style.list}>
							<p>
								Si tu proyecto final es aprobado, podrás ganar una BECA TOTAL o PARCIAL para
								especializarte en nuestros Másters de Blender o Impresión 3D. Este challenge no es
								solo una experiencia creativa, es una oportunidad real para dar el salto al nivel
								profesional y acercarte a lo que exige la industria.
							</p>

							{/* <ul>
								<li style={{ marginTop: '0' }}>
									<div className={style.check}>
										<IoCheckmark />
									</div>
									Recibe acompañamiento personalizado en cada etapa.
								</li>
								<li>
									<div className={style.check}>
										<IoCheckmark />
									</div>
									Acelera tu curva de aprendizaje.
								</li>
								<li>
									<div className={style.check}>
										<IoCheckmark />
									</div>
									Desata tu talento y conviértete en especialista 3D.
								</li>
							</ul> */}

							<a href='https://www.libel.academy/master-blender/'>Máster en blender</a>

							<img src={impresion} alt='impresion' />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Powerful;
