/** @format */

import React, { useState, useEffect } from 'react';
import './MaterItem.css';

import { IoCheckmarkCircle, IoChevronDown, IoPlay } from 'react-icons/io5';
import { BiDownload } from 'react-icons/bi';

// import Image from 'react-image-webp';
import flecha from '../../assets/flecha-derecha.png';
import candado from '../../assets/candado.png';

// import { openVideo } from '../../features/video';
// import { useDispatch } from 'react-redux';
import { AiFillQuestionCircle } from 'react-icons/ai';
// import { openTrainingMore } from '../../features/training';

const MasterItem = ({ content, handlerClose }) => {
	// const dispatch = useDispatch();
	const [select, setSelect] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState({ paypal: null, card: null });
	// const [value, setValue] = useState({
	// 	paypal: content.options[2].urls.paypal,
	// 	card: content.options[2].urls.card,
	// });

	const [access, setAccess] = useState('');
	let headerClass = content.video ? 'item-header' : 'item-header nopointer';

	// const handleChange = (option) => {
	//   const item = content.options.find(
	//     (e) => e.title === option.target.value
	//   );
	//   setValue(item.urls);
	// };

	const handleChangeUrl = (val, modalInfo) => {
		setValue(val);
		handlerClose(val, modalInfo);
	};

	return (
		<div className='MasterItem'>
			<div className='ribbon2'>
				<span>{content.level}</span>
			</div>

			<div
				className={headerClass}
				style={{ cursor: 'pointer', position: 'relative' }}
				// onClick={() => {
				// 	if (content.video) {
				// 		dispatch(
				// 			openVideo({
				// 				modal: true,
				// 				url: '',
				// 				type: 'common',
				// 				img: content.image,
				// 			})
				// 		);
				// 	}
				// }}
			>
				{/* {content.video !== '' && (
					<div className='item-play'>
						<IoPlay />
					</div>
				)} */}
				<div className='item-filter'></div>
				<img src={content.image} alt={content.title} />

				{content?.button ? null : (
					<div className='off'>
						<img src={candado} alt='candado' />
						{/* <span>50%</span> */}
					</div>
				)}
			</div>
			<div className='item-content'>
				<div className='item-information'>
					<h2 className='item-title'>{content.title}</h2>
					{/* <a href={content.temario} target='_blank' className='button-temario'>
						Descargar temario <BiDownload style={{ fontSize: '20px' }} />
					</a> */}
					{/* <div className='flechas-container'>
						<h3 className='item-price'>Inscríbete</h3>
						<img className='flecha-izq' src={flecha} alt='flecha' />
						<img className='flecha-der' src={flecha} alt='flecha' />
					</div> */}

					<div className='item-option'>
						<h1>{content.options[2].title}</h1>
						<span> {content.options[2].price ? content.options[2].price : null}</span>
						{/* <select onChange={handleChange}>
								{content.options.map((opt, i) => (
									<option key={i} value={opt.title}>
									{opt.title}
									</option>
								))}
						</select> */}

						{/* <div
							className='item-select-custom'
							style={isOpen ? { backgroundColor: '#6000de', color: 'white' } : {}}
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						>
							<p className='item-select-custom-selected'>
								<span>{content.options.find((opt) => opt.id === select).title}</span>
								<IoChevronDown />
							</p>
							<ul
								className='item-select-custom-options'
								style={isOpen ? { display: 'block' } : { display: 'none' }}
							>
								{content.options.map((opt) =>
									opt.title === 'Ver Oferta' ? null : opt.active ? (
										<li
											className='item-select-custom-options-button'
											style={{ listStyle: 'none' }}
											onClick={() => {
												setSelect(opt.id);
												setValue(opt.urls);
												setAccess(opt.item ? opt.item : '');
												// setIsOpen(false);
											}}
										>
											{opt.title}
										</li>
									) : (
										<li
											className='item-select-custom-options-button-disable'
											style={
												opt.line
													? {
															listStyle: 'none',
															textDecoration: 'line-through',
															backgroundColor: '#ff2020',
													  }
													: { listStyle: 'none' }
											}
										>
											{opt.title}
										</li>
									)
								)}
							</ul>
						</div> */}
					</div>
					{/* <p className="item-desc">{content.description}</p> */}
					{content?.items != 0 ? (
						<ul className='item-card-items'>
							{access ? (
								<li>
									<IoCheckmarkCircle
										style={{
											fontSize: 20,
										}}
									/>
									<span>{access}</span>
								</li>
							) : null}
							{content.items.map((e, i) => (
								<li key={i}>
									<IoCheckmarkCircle
										style={{
											fontSize: 20,
										}}
									/>
									<span>{e.item}</span>
								</li>
							))}
						</ul>
					) : null}
					<div className='item-button'>
						{/* {content.temario !== '' && (
							<a href={content.temario} target='_blank' rel='noreferrer' className='paypal'>
								Temario
							</a>
						)} */}
						{/* {value.paypal ? (
							<a
								onClick={() => handleChangeUrl(value.paypal, 'Pagar ahora')}
								// href={value.paypal}
								target='_blank'
								rel='noreferrer'
								className='card'
								style={{ margin: '10px 0px' }}
							>
								Pagos Internacionales
							</a>
						) : (
							<div
								style={{ cursor: 'not-allowed', margin: '10px 0px' }}
								target='_blank'
								rel='noreferrer'
								className='disable'
							>
								Pagos Internacionales
							</div>
						)}
						{value.card ? (
							<a
								onClick={() => handleChangeUrl(value.card, 'Pagar ahora')}
								// href={value.card}
								target='_blank'
								rel='noreferrer'
								className='card'
							>
								Pagos Colombia
							</a>
						) : (
							<div
								style={{ cursor: 'not-allowed' }}
								target='_blank'
								rel='noreferrer'
								className='disable'
							>
								Pagos Colombia
							</div>
						)} */}
						<a
							onClick={
								content.button
									? () => handleChangeUrl(content.options[2].urls.paypal, content.modal)
									: null
							}
							// href={value.paypal}
							target='_blank'
							rel='noreferrer'
							className={content.button ? 'card' : 'disable'}
							style={{ margin: '10px 0px' }}
						>
							{content.buttonName}
						</a>
						{/* <a
							onClick={() => handleChangeUrl(content.options[2].urls.card, 'Pagar ahora')}
							// href={value.card}
							target='_blank'
							rel='noreferrer'
							className='card'
						>
							Pagos Colombia
						</a> */}
					</div>
				</div>
				{content.tech !== '' && (
					<div className='item-blender'>
						{content.tech.map((image, index) => (
							<img key={index} src={image} alt='Blender' height={35} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default MasterItem;
