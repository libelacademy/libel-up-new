import React from 'react';
import style from './Gallery.module.css';

import img1 from '../../assets/gallery/img1.png';
import img2 from '../../assets/gallery/img2.png';
import video1 from '../../assets/gallery/video1.mp4';
import video2 from '../../assets/gallery/video2.mp4';

import videoVertical from '../../assets/gallery/video_vertical.mp4';

const Gallery = () => {
	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				<div className={style.bubble}>
					<span>Se parte de la comunidad LIBEL</span>
				</div>

				<h1>RESULTADOS DE ALUMNOS</h1>
				<div className={style.grid}>
					<div className={style.gallery1}>
						{/* <img src={img1} alt='1' /> */}
						<video src={video1} autoPlay loop muted playsInline alt='1'></video>
						<div className={style.alumno1}>
							<h1>Alumn@: Ricardo Diaz.</h1>
						</div>
					</div>
					<div className={style.gallery2}>
						<img src={img1} alt='2' />
						<div className={style.alumno2}>
							<h1>Alumn@: Jorge Lama.</h1>
						</div>
					</div>
					<div className={style.gallery3}>
						<video src={videoVertical} autoPlay loop muted playsInline alt='vertical'></video>
						<div className={style.alumno3}>
							<h1>Alumn@: Jorge Lama y Ricardo Diaz.</h1>
						</div>
					</div>
					<div className={style.gallery4}>
						<img src={img2} alt='3' />
						<div className={style.alumno4}>
							<h1>Alumn@: Ricardo Diaz.</h1>
						</div>
					</div>
					<div className={style.gallery5}>
						{/* <img src={img4} alt='4' /> */}
						<video src={video2} autoPlay loop muted playsInline alt='2'></video>
						<div className={style.alumno5}>
							<h1>Alumn@: Ricardo Diaz.</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
