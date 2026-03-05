import React, { useState } from 'react';
import style from './Especialistas.module.css';
import './Especialistas.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { BsCameraVideoFill, BsArrowRight, BsBadge3DFill } from 'react-icons/bs';
import { FaCheck, FaGraduationCap } from 'react-icons/fa';

import nivel1 from '../../assets/especialistas/nivel1.svg';
import nivel2 from '../../assets/especialistas/nivel2.svg';
import nivel3 from '../../assets/especialistas/nivel3.svg';
import nivel4 from '../../assets/especialistas/nivel4.svg';
import nivel5 from '../../assets/especialistas/nivel5.svg';

const Especialistas = () => {
	const [swiper, setSwiper] = useState();

	const pagination = {
		clickable: false,
		bulletClass: 'swiper-pagination-especialista',
		bulletActiveClass: 'swiper-pagination-especialista-active',
		horizontalClass: 'swiper-pagination-horizontal-especialista',
		renderBullet: function (i, className) {
			return '<div class="' + className + '"> </div>';
		},
	};

	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				{/* <h1>
					Formamos especialistas <br /> para la <span>industria 3D</span>
				</h1> */}
				<div className={style.cardsContainer}>
					{/*  ------------------- Card 1 ------------------- */}
					<div className={style.card}>
						<div className={style.titlesContainer}>
							<div className={style.iconContainer}>
								{/* <BsCameraVideoFill /> */}
								<img src={nivel1} alt='nivel1' />
							</div>
							<h2> 01 </h2>
						</div>
						<h3> INICIACIÓN 3D </h3>
						<p>Modelado y fundamentos. Tu primer activo digital.</p>
						{/* <a href='#form'>
							<BsArrowRight />
						</a> */}
					</div>
					{/*  ------------------- Card 2 ------------------- */}
					<div className={style.card} style={{ alignSelf: 'flex-end' }}>
						<div className={style.titlesContainer}>
							<div className={style.iconContainer}>
								{/* <BsBadge3DFill style={{ fontSize: '25px' }} /> */}
								<img src={nivel2} alt='nivel2' />
							</div>
							<h2> 02 </h2>
						</div>
						<h3> FORMA Y VOLUMEN </h3>
						<p> Esculpido y detalles complejos. </p>
						{/* <a href='#form'>
							<BsArrowRight />	
						</a> */}
					</div>
					{/*  ------------------- Card 3 ------------------- */}
					<div className={style.card}>
						<div className={style.titlesContainer}>
							<div className={style.iconContainer}>
								{/* <FaCheck /> */}
								<img src={nivel3} alt='nivel3' />
							</div>
							<h2> 03 </h2>
						</div>
						<h3> OPTIMIZACIÓN </h3>
						<p> Sigue tu proceso y mejora los detalles. </p>
						{/* <a href='#form'>
							<BsArrowRight />
						</a> */}
					</div>
					{/*  ------------------- Card 4 ------------------- */}
					<div className={style.card} style={{ alignSelf: 'flex-end' }}>
						<div className={style.titlesContainer}>
							<div className={style.iconContainer}>
								{/* <FaGraduationCap style={{ fontSize: '25px' }} /> */}
								<img src={nivel4} alt='nivel4' />
							</div>
							<h2> 04 </h2>
						</div>
						<h3> TEXTURIZADO Y MATERIALES </h3>
						<p> Encuentra tu flujo de trabajo. </p>
						{/* <a href='#form'>
							<BsArrowRight />
						</a> */}
					</div>
					{/*  ------------------- Card 5 ------------------- */}
					<div className={style.card}>
						<div className={style.titlesContainer}>
							<div className={style.iconContainer}>
								{/* <FaGraduationCap style={{ fontSize: '25px' }} /> */}
								<img src={nivel5} alt='nivel5' />
							</div>
							<h2> 05 </h2>
						</div>
						<h3> RENDER Y PRESENTACIÓN </h3>
						<p> Mejoremos los detalles y el render final. </p>
						{/* <a href='#form'>
							<BsArrowRight />
						</a> */}
					</div>
				</div>

				<Swiper
					className={style.sliderMaster}
					slidesPerView={1}
					spaceBetween={20}
					onSwiper={(swiper) => setSwiper(swiper)}
					loopedSlides={4}
					centeredSlides={true}
					pagination={pagination}
					modules={[Pagination]}
					// breakpoints={{
					// 	1131: {
					// 		slidesPerView: 3,
					// 		spaceBetween: 0,
					// 	},
					// 	948: {
					// 		slidesPerView: 2,
					// 		spaceBetween: 0,
					// 	},
					// }}
				>
					{/*  ------------------- Card 1 ------------------- */}
					<SwiperSlide className={style.slide}>
						<div className={style.card}>
							<div className={style.titlesContainer}>
								<div className={style.iconContainer}>
									{/* <BsCameraVideoFill /> */}
									<img src={nivel1} alt='nivel1' />
								</div>
								<h2> 01 </h2>
							</div>
							<h3> INICIACIÓN 3D </h3>
							<p>Modelado y fundamentos. Tu primer activo digital.</p>
						</div>
					</SwiperSlide>
					{/*  ------------------- Card 2 ------------------- */}
					<SwiperSlide className={style.slide}>
						<div className={style.card}>
							<div className={style.titlesContainer}>
								<div className={style.iconContainer}>
									{/* <BsBadge3DFill style={{ fontSize: '25px' }} /> */}
									<img src={nivel2} alt='nivel2' />
								</div>
								<h2> 02 </h2>
							</div>
							<h3> FORMA Y VOLUMEN </h3>
							<p> Esculpido y detalles complejos. </p>
						</div>
					</SwiperSlide>
					{/*  ------------------- Card 3 ------------------- */}
					<SwiperSlide className={style.slide}>
						<div className={style.card}>
							<div className={style.titlesContainer}>
								<div className={style.iconContainer}>
									{/* <FaCheck /> */}
									<img src={nivel3} alt='nivel3' />
								</div>
								<h2> 03 </h2>
							</div>
							<h3> OPTIMIZACIÓN </h3>
							<p> Sigue tu proceso y mejora los detalles. </p>
						</div>
					</SwiperSlide>

					{/*  ------------------- Card 4 ------------------- */}
					<SwiperSlide className={style.slide}>
						<div className={style.card}>
							<div className={style.titlesContainer}>
								<div className={style.iconContainer}>
									{/* <FaGraduationCap style={{ fontSize: '25px' }} /> */}
									<img src={nivel4} alt='nivel4' />
								</div>
								<h2> 04 </h2>
							</div>
							<h3> TEXTURIZADO Y MATERIALES </h3>
							<p> Encuentra tu flujo de trabajo. </p>
							{/* <a href='#form'>
							<BsArrowRight />
						</a> */}
						</div>
					</SwiperSlide>

					{/*  ------------------- Card 5 ------------------- */}
					<SwiperSlide className={style.slide}>
						<div className={style.card}>
							<div className={style.titlesContainer}>
								<div className={style.iconContainer}>
									{/* <FaGraduationCap style={{ fontSize: '25px' }} /> */}
									<img src={nivel5} alt='nivel5' />
								</div>
								<h2> 05 </h2>
							</div>
							<h3> RENDER Y PRESENTACIÓN </h3>
							<p> Mejoremos los detalles y el render final. </p>
							{/* <a href='#form'>
							<BsArrowRight />
						</a> */}
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Especialistas;
