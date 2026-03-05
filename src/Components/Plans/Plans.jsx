import React from 'react';
import style from './Plans.module.css';

import { IoCheckmark } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';

function Plans() {
	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				<div className={style.topContainer}>
					<div>
						<div className={style.titleTopContainer}>
							<div className={style.line}></div>
							<h3>Simple and Affordable</h3>
						</div>
					</div>
					<h1>
						Unleash creativity with <span> AI image</span> generation pricing. Find the perfect plan
						for your visual projects.
					</h1>
				</div>
				<div className={style.plansContainer}>
					<div className={style.cardContainer}>
						<div style={{ marginBottom: '24px' }}>
							<h2> Free Plan</h2>
							<p> Get started with our startup package</p>
						</div>
						<h1> Free Plan</h1>
						<a href='#'>
							Join this Plan <BsArrowRight />
						</a>
						<ul>
							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								ChatGPT 3.5Open AI Model
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								37 AI Templates
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								5000 Words per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								10 Images per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								2 Speech to Text per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								2 MB Audio file size limit
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Stable Diffusion Images
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								AI Blog Wizard
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Speech to Text
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Custom Templates
							</li>
						</ul>
					</div>

					<div className={`${style.cardContainer} ${style.cardCenter}`}>
						<div className={style.banda}>
							<h3> Save 40% </h3>
						</div>
						<div style={{ marginBottom: '24px' }}>
							<h2> Standard Plan</h2>
							<p> Get started with our startup package</p>
						</div>
						<h1> $ 20.00</h1>
						<a href='#'>
							Join this Plan <BsArrowRight />
						</a>
						<ul>
							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								ChatGPT 3.5Open AI Model
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								37 AI Templates
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								5000 Words per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								10 Images per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								2 Speech to Text per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								2 MB Audio file size limit
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Stable Diffusion Images
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								AI Blog Wizard
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Speech to Text
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Custom Templates
							</li>
						</ul>
					</div>

					<div className={style.cardContainer}>
						<div style={{ marginBottom: '24px' }}>
							<h2> Premium Plan</h2>
							<p> Get started with our startup package</p>
						</div>
						<h1> $ 39.99</h1>
						<a href='#'>
							Join this Plan <BsArrowRight />
						</a>
						<ul>
							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								ChatGPT 3.5Open AI Model
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								37 AI Templates
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								5000 Words per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								10 Images per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								2 Speech to Text per month
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								2 MB Audio file size limit
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Stable Diffusion Images
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								AI Blog Wizard
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Speech to Text
							</li>

							<li>
								<div className={style.check}>
									<IoCheckmark />
								</div>
								Custom Templates
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Plans;
