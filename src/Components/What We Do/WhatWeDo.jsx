import React, { useState, useEffect } from 'react';
import style from './WhatWeDo.module.css';

import { BsArrowRight } from 'react-icons/bs';

import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.png';
import arrow from '../../assets/arrow1.png';

const WhatWeDo = () => {
	const [isActive, setIsActive] = useState({
		a1: false,
		a2: false,
		a3: false,
		a4: false,
		a5: false,
		a6: false,
	});

	useEffect(() => {
		let scrollY = 0;

		const handleScroll = () => {
			if (window.scrollY < 2893) {
				setIsActive({
					a1: false,
				});
			}
			if (window.scrollY > 2893) {
				setIsActive({
					a1: true,
				});
			}
			if (window.scrollY > 4093) {
				setIsActive({
					a2: true,
				});
			}
			if (window.scrollY > 5153) {
				setIsActive({
					a3: true,
				});
			}
			if (window.scrollY > 6153) {
				setIsActive({
					a4: true,
				});
			}
			if (window.scrollY > 7213) {
				setIsActive({
					a5: true,
				});
			}
			if (window.scrollY > 8213) {
				setIsActive({
					a6: true,
				});
			}
			scrollY = window.scrollY;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				<div className={style.titleContainer}>
					<div>
						<div className={style.line}></div>
						<h2>What We Do</h2>
					</div>
					<h1>
						Explore the power of AI <span> Development</span> tools Crafted with Brilliance, Style
						Quality and Creativity.
					</h1>
				</div>

				<div className={style.infoContainer}>
					<div className={style.generateImageContainer}>
						<div className={style.title1}>
							<div className={style.line}></div>
							<h2>What We Do</h2>
						</div>
						<div id='img1' className={style.imagesContainer1}>
							<h1>Generate Images</h1>
							<p>
								We are constantly rethinking the future by creating the next generation of products,
								brands and services from a hybrid perspective.
							</p>
							<a href='#'>
								Try Text to Image <BsArrowRight />
							</a>
							<div className={style.imageContainer}>
								<img src={img1} alt='img1' />
								<img className={style.imageArrow} src={arrow} alt='arrow' />
								<img className={style.imageAux} src={img2} alt='img2' />
							</div>
						</div>

						<div id='img2' className={style.imagesContainer1}>
							<h1>Generate Images</h1>
							<p>
								We are constantly rethinking the future by creating the next generation of products,
								brands and services from a hybrid perspective.
							</p>
							<a>
								Try Text to Image <BsArrowRight />
							</a>
							<div className={style.imageContainer}>
								<img src={img1} alt='img1' />
								<img className={style.imageArrow} src={arrow} alt='arrow' />
								<img className={style.imageAux} src={img2} alt='img2' />
							</div>
						</div>

						<div id='img3' className={style.imagesContainer1}>
							<h1>Generate Images</h1>
							<p>
								We are constantly rethinking the future by creating the next generation of products,
								brands and services from a hybrid perspective.
							</p>
							<a>
								Try Text to Image <BsArrowRight />
							</a>
							<div className={style.imageContainer}>
								<img src={img1} alt='img1' />
								<img className={style.imageArrow} src={arrow} alt='arrow' />
								<img className={style.imageAux} src={img2} alt='img2' />
							</div>
						</div>

						<div id='img4' className={style.imagesContainer1}>
							<h1>Generate Images</h1>
							<p>
								We are constantly rethinking the future by creating the next generation of products,
								brands and services from a hybrid perspective.
							</p>
							<a>
								Try Text to Image <BsArrowRight />
							</a>
							<div className={style.imageContainer}>
								<img src={img1} alt='img1' />
								<img className={style.imageArrow} src={arrow} alt='arrow' />
								<img className={style.imageAux} src={img2} alt='img2' />
							</div>
						</div>

						<div id='img5' className={style.imagesContainer1}>
							<h1>Generate Images</h1>
							<p>
								We are constantly rethinking the future by creating the next generation of products,
								brands and services from a hybrid perspective.
							</p>
							<a>
								Try Text to Image <BsArrowRight />
							</a>
							<div className={style.imageContainer}>
								<img src={img1} alt='img1' />
								<img className={style.imageArrow} src={arrow} alt='arrow' />
								<img className={style.imageAux} src={img2} alt='img2' />
							</div>
						</div>

						<div id='img6' className={style.imagesContainer1}>
							<h1>Generate Images</h1>
							<p>
								We are constantly rethinking the future by creating the next generation of products,
								brands and services from a hybrid perspective.
							</p>
							<a>
								Try Text to Image <BsArrowRight />
							</a>
							<div className={style.imageContainer}>
								<img src={img1} alt='img1' />
								<img className={style.imageArrow} src={arrow} alt='arrow' />
								<img className={style.imageAux} src={img2} alt='img2' />
							</div>
						</div>
					</div>
					<div className={style.lateralContainerMain}>
						<h1>
							Explore the power of AI <span> Development</span> tools Crafted with Brilliance, Style
							Quality and Creativity.
						</h1>
						<div className={style.lateralContainer}>
							<div className={style.line2}></div>
							<ul>
								<li className={isActive.a1 ? style.activeLi : null}>
									<div className={isActive.a1 ? style.active : style.disable}></div>
									<a href='#img1'>AI Image Generator</a>
								</li>

								<li className={isActive.a2 ? style.activeLi : null}>
									<div className={isActive.a2 ? style.active : style.disable}></div>

									<a href='#img2'>Customizable Image Styles</a>
								</li>

								<li className={isActive.a3 ? style.activeLi : null}>
									<div className={isActive.a3 ? style.active : style.disable}></div>

									<a href='#img3'>Generate Videos</a>
								</li>

								<li className={isActive.a4 ? style.activeLi : null}>
									<div className={isActive.a4 ? style.active : style.disable}></div>

									<a href='#img4'>Removed any Background</a>
								</li>

								<li className={isActive.a5 ? style.activeLi : null}>
									<div className={isActive.a5 ? style.active : style.disable}></div>

									<a href='#img5'>Train Custom</a>
								</li>

								<li className={isActive.a6 ? style.activeLi : null}>
									<div className={isActive.a6 ? style.active : style.disable}></div>

									<a href='#img6'>Image Clean</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhatWeDo;
