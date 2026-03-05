import React, { useState } from 'react';
import './SimpleModal.css';
import { IoClose } from 'react-icons/io5';

function SimpleModal({ close, handlerClose, handleCloseModal, url, modalInfo }) {
	console.log(modalInfo);

	return (
		<div className={`Inscriptions ${close ? 'close' : ''}`} onClick={handleCloseModal}>
			<div className={`Inscriptions-content ${close ? 'close' : ''}`}>
				<button
					className='Inscriptions-close-btn'
					onClick={() => {
						handlerClose();
					}}
				>
					<IoClose />
				</button>

				<div className='container-info'>
					<div className='container-title'>
						<h2>¡Atención!</h2>
					</div>
					{modalInfo?.modalCopy ? (
						<p>{modalInfo?.modalCopy}</p>
					) : (
						<p>
							¡Estás a un paso de comenzar! Da el primer paso con toda la energía y compite por tu
							beca.
						</p>
					)}

					{/* <p>
						Envía el comprobante de pago a
						<b>
							{' '}
							<u>coordinacion@libeluniversity.org</u>{' '}
						</b>
						para recibir el formulario de inscripción. Este paso es esencial para acceder al 3D
						CAMP. <br />
					</p> */}

					{/* <span> Selecciona un asesor para continuar al pago </span> */}
				</div>
				<div className='btn-container'>
					<a
						href={url ? url : null}
						// target='_blank'
						className='btn-camb'
						onClick={() =>
							setTimeout(() => {
								handlerClose();
							}, 1000)
						}
					>
						{modalInfo?.modalButton ? modalInfo?.modalButton : '¡Empieza ahora!'}
					</a>
					{/* <a
						href={'https://wa.link/sarakb'}
						target='_blank'
						className='btn-camb'
						onClick={() =>
							setTimeout(() => {
								handlerClose();
							}, 1000)
						}
					>
						Viviana
					</a>
					<a
						href={'https://wa.link/4vkv45'}
						target='_blank'
						className='btn-camb'
						onClick={() =>
							setTimeout(() => {
								handlerClose();
							}, 1000)
						}
					>
						Andrés
					</a> */}
				</div>

				{/* <div className='container-info'>
					<p style={{ marginBottom: '24px' }}>
						Si tu asesor no aparece en las opciones o no tuviste asesor, selecciona
						<b>"Ninguno".</b>
					</p>
				</div> */}
			</div>
		</div>
	);
}

export default SimpleModal;
