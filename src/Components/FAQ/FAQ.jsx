import React, { useState } from 'react';
import './FAQ.css';

import questions from '../../utils/questions';
import QuestionCard from '../QuestionCard/QuestionCard';

import { BsArrowRight } from 'react-icons/bs';

// import Image from 'react-image-webp';

// import image from '../../assets/faq-image.png';
// import imageWebp from '../../assets/faq-image.webp';
// import line from '../../assets/line.png';

const FAQ = () => {
	const [questionId, setQuestionId] = useState();
	const [isActive, setIsActive] = useState({
		a1: true,
		a2: false,
		a3: false,
		a4: false,
	});

	const handleQuestion = (id) => {
		setQuestionId(id);
	};

	return (
		<section className='FAQ' id='faq'>
			<div className='faq-container container'>
				<div className='faq-title'>
					<div className='title-top-container'>
						<div className='line2'></div>
						<h3>Preguntas frecuentes</h3>
					</div>
					<h1>
						¿Preguntas? <br />
						Tenemos respuestas.
					</h1>
				</div>
				<div className='faq-content'>
					<div className='faq-imagen'>
						<div className='lateral-container'>
							<div className='line3'></div>
							<ul>
								<li className={isActive.a1 ? 'activeLi' : null}>
									<div className={isActive.a1 ? 'active' : 'disable'}></div>
									<a href='#'>Inicia tu entrenamiento HOY</a>
								</li>

								<li className={isActive.a2 ? 'activeLi' : null}>
									<div className={isActive.a2 ? 'active' : 'disable'}></div>

									<a
										href='https://calendly.com/libel/charla-informativas-personalizadas'
										// target='blank_'
									>
										Agenda tu cita por ZOOM
									</a>
								</li>

								<li className={isActive.a3 ? 'activeLi' : null}>
									<div className={isActive.a3 ? 'active' : 'disable'}></div>

									<a
										href='https://wa.link/c38fo6'
										// target='blank_'
									>
										Escríbenos por WhatsApp
									</a>
								</li>

								{/* <li className={isActive.a4 ? 'activeLi' : null}>
									<div className={isActive.a4 ? 'active' : 'disable'}></div>

									<a href='#home'>Envíanos un mensaje</a>
								</li> */}
							</ul>
						</div>
					</div>
					<div className='faq-questions'>
						<div className='faq-questions-container'>
							{questions?.map((question, i) => (
								<div className='faq-questions-container2' key={i}>
									<hr className='line-questions' />
									<QuestionCard
										id={question.id}
										question={question.question}
										answer={question.answer}
										handleQuestion={handleQuestion}
										active={questionId === question.id ? true : false}
									/>
								</div>
							))}
						</div>
						<a
							href='https://calendly.com/libel/charla-informativas-personalizadas'
							// target='blank_'
							rel='noreferrer'
							className='request-advice'
						>
							Agenda tu cita
							<BsArrowRight />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
