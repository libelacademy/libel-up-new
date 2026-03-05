import React, { useEffect, useState } from 'react';
import './VideoModal.css';

import { IoClose } from 'react-icons/io5';
import ReactPlayer from 'react-player';

function VideoModal({ vertical, modal, url, handlerClose }) {
	const [visibility, setVisibility] = useState('hidden');
	const [container, setContainer] = useState('video-closed');

	useEffect(() => {
		if (modal) {
			setVisibility('visible');
			setTimeout(() => {
				setContainer('');
			}, 100);
		}
	}, [modal]);

	const handleCloseModal = (event) => {
		if (event.target.className === 'Video') {
			setContainer('video-closed');
			handlerClose();
			setVisibility('hidden');
		}
	};

	return (
		<div className='Video' style={{ visibility: `${visibility}` }} onClick={handleCloseModal}>
			<div className={`video-content ${container}`}>
				<button
					className={`video-closer ${vertical ? 'video-closer-vertical' : null}`}
					onClick={() => {
						setContainer('video-closed');
						handlerClose();
						setVisibility('hidden');
					}}
				>
					<IoClose />
				</button>
				<div className={`video-container ${container} ${vertical ? 'video-vertical' : null}`}>
					{modal ? (
						<ReactPlayer
							style={{ borderRadius: '20' }}
							className={`react-player ${vertical ? 'react-player-vertical' : null}`}
							url={url}
							playing={true}
							width='100%'
							height='100%'
							controls={true}
							playsinline
						/>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default VideoModal;
