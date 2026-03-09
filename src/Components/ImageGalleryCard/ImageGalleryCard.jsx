import React from 'react';
import style from './ImageGalleryCard.module.css';

const ImageGalleryCard = ({ content, handlerClose }) => {
	return (
		<div className={style.mainContainer} onClick={() => handlerClose(content.url, content.modal)}>
			<div className={style.imgContainer}>
				<img loading='lazy' src={content.img} alt={content.title} />
				<div className={style.textContainer}>
					<h1> {content.title} </h1>

					<div className={style.prices}>
						<h2> {content.price}</h2>
						<span> {content.priceBefore}</span>
					</div>

					{/* <h2> {content.technology} </h2> */}
				</div>
			</div>
		</div>
	);
};

export default ImageGalleryCard;
