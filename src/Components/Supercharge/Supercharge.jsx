import React from 'react';
import style from './Supercharge.module.css';

import { BsArrowRight } from 'react-icons/bs';

const Supercharge = () => {
	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				<div className={style.topContainer}>
					<h1> RUTA DE APRENDIZAJE</h1>
					<div>
						{/* <div className={style.titleTopContainer}>
							<div className={style.line}></div>
							<h3>Certificación Universitaria</h3>
						</div> */}
						<p>
							Cada nivel suma una nueva habilidad a tu arsenal en Blender. Al finalizar, tendrás 5
							proyectos sólidos en tu portafolio.
						</p>
					</div>
				</div>
			</div>

			<hr className={style.line2} />
			{/* <div className={style.mainContainer2}>
				<div className={style.cardContainer}>
					<h1>NIVEL 1</h1>

					<h2>INICIACIÓN 3D</h2>
					<p>Modelado y fundamentos. Tu primer activo digital.</p>
				</div>

				<hr className={style.line3} />
				<div className={style.cardContainer}>
					<h1>NIVEL 2</h1>

					<h2>FORMA Y VOLUMEN</h2>
					<p>Esculpido y detalles complejos.</p>
				</div>

				<hr className={style.line3} />
				<div className={style.cardContainer}>
					<h1>NIVEL 3</h1>

					<h2>OPTIMIZACIÓN</h2>
					<p>Retopología y UVs (Preparación para industria).</p>
				</div>

				<hr className={style.line3} />
				<div className={style.cardContainer}>
					<h1>NIVEL 4</h1>

					<h2>TEXTURIZADO Y MATERIALES</h2>
					<p>Dar vida y realismo a tus modelos.</p>
				</div>

				<hr className={style.line3} />
				<div className={style.cardContainer}>
					<h1>NIVEL 5</h1>

					<h2>RENDER Y PRESENTACIÓN</h2>
					<p>Iluminación cinematográfica y composición final.</p>
				</div>
			</div> */}

			{/* Iconos que iban debajo de cada nivel (H1) */}
			{/* <img src='https://writebot-html.themetags.net/assets/img/ca-icon-1.png' alt='icon1' /> */}
			{/* <img src='https://writebot-html.themetags.net/assets/img/ca-icon-2.png' alt='icon2' /> */}
			{/* <img src='https://writebot-html.themetags.net/assets/img/ca-icon-3.png' alt='icon3' /> */}
			{/* <img src='https://writebot-html.themetags.net/assets/img/ca-icon-4.png' alt='icon4' /> */}

			{/* <div className={style.buttonsContainer} style={{ marginBottom: '12px' }}>
				<a
					className={style.button1}
					href='#master-items2'
					// target='blank_'
				>
					<span>Adquiere tu curso ahora</span>
					<BsArrowRight />
				</a>
			</div> */}
		</section>
	);
};

export default Supercharge;
