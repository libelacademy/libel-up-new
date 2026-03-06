import React, { useState, useMemo } from 'react';
import style from './ImageGallery.module.css';

import gallery from '../../utils/gallery';
import ImageGalleryCard from '../ImageGalleryCard/ImageGalleryCard';
import SimpleModal from '../SimpleModal/SimpleModal';

const IMAGENES_POR_CARGA = 12;

const ImageGallery = () => {
	const [changeGallery, setChangeGallery] = useState(gallery);
	const [imagenesVisibles, setImagenesVisibles] = useState(IMAGENES_POR_CARGA);
	const hayMasImagenes = imagenesVisibles < changeGallery.length;

	const [close, setClose] = useState(true);
	const [url, setUrl] = useState('');
	const [modalInfo, setModalInfo] = useState({});

	const imagenesAMostrar = useMemo(() => {
		return changeGallery.slice(0, imagenesVisibles);
	}, [changeGallery, imagenesVisibles]);

	const loadMoreHandle = () => {
		setImagenesVisibles((prevVisibles) => prevVisibles + IMAGENES_POR_CARGA);
	};

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

	// const changePlanHandler = (e) => {
	// 	let name = e.target.name;

	// 	if (name === 'Junior') setChangeGallery(junior);
	// 	if (name === 'Pro') setChangeGallery(pro);
	// 	if (name === 'Pro Max') setChangeGallery(proMax);
	// 	if (name === 'Infinity') setChangeGallery(infinity);
	// 	setImagenesVisibles(IMAGENES_POR_CARGA);
	// };

	return (
		<section className={style.mainSection}>
			<SimpleModal
				close={close}
				handlerClose={handlerClose}
				handleCloseModal={handleCloseModal}
				url={url}
				modalInfo={modalInfo}
			/>
			<div className={style.mainContainer}>
				<div className={style.bubble}>
					<span>Completa los niveles y gana</span>
				</div>

				<h1>ELIGE TU ÚLTIMO RETO</h1>

				<p>Elige uno de estos entrenamientos y acércate a una formación especializada.</p>
				{/* <div className={style.cardMenuContainer}>
					<div className={style.menuContainer}>
						<div className={changeGallery === junior ? style.menuSelected : style.menuNoSelected}>
							<a name='Junior' onClick={changePlanHandler}>
								Junior
							</a>
						</div>

						<div className={changeGallery === pro ? style.menuSelected : style.menuNoSelected}>
							<a name='Pro' onClick={changePlanHandler}>
								Pro
							</a>
						</div>

						<div className={changeGallery === proMax ? style.menuSelected : style.menuNoSelected}>
							<a name='Pro Max' onClick={changePlanHandler}>
								Pro Max
							</a>
						</div>

						<div className={changeGallery === infinity ? style.menuSelected : style.menuNoSelected}>
							<a name='Infinity' onClick={changePlanHandler}>
								Infinity
							</a>
						</div>
					</div>
					<div className={style.lines2}></div>
					<div className={style.lines}></div>
				</div> */}

				<div className={style.imageContainerGrid}>
					{imagenesAMostrar.map((element, i) => (
						<ImageGalleryCard key={i} content={element} handlerClose={handlerClose} />
					))}

					{/* */}
				</div>

				{hayMasImagenes && (
					<a
						className={style.button1}
						onClick={loadMoreHandle}
						// target='blank_'
					>
						<span>Ver más</span>
					</a>
				)}
			</div>
		</section>
	);
};

export default ImageGallery;
