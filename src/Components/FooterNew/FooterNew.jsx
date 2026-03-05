import React from 'react';
import style from './FooterNew.module.css';

import logo from '../../assets/footer/logo_libel_morado.png';

import facebook from '../../assets/footer/facebook.png';
import youtube from '../../assets/footer/youtube.png';
import whatsApp from '../../assets/footer/whatsApp.png';
import instagram from '../../assets/footer/instagram.png';
import discord from '../../assets/footer/discord.png';
import linkedin from '../../assets/footer/linkedin.png';
import tiktok from '../../assets/footer/tiktok.png';

const FooterNew = () => {
	return (
		<section className={style.mainSection}>
			<div className={style.mainContainer}>
				<div className={style.container1}>
					<div className={style.imgContainer}>
						<img loading='lazy' src={logo} alt='logo libel' />
					</div>

					<div className={style.followUs}>
						<h2>Síguenos en:</h2>

						<div className={style.iconsContainer}>
							<div className={style.iconSocial}>
								<a href='https://www.facebook.com/libelacademy'>
									<img loading='lazy' src={facebook} alt='facebook' />
								</a>
							</div>

							<div className={style.iconSocial}>
								<a href='https://www.youtube.com/@libelacademy8968'>
									<img loading='lazy' src={youtube} alt='youtube' />
								</a>
							</div>

							<div className={style.iconSocial}>
								<a href='https://api.whatsapp.com/send?phone=573228638257&text=Hola%2C%20Viviana%20%F0%9F%91%8B%20%C2%A1Me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa'>
									<img loading='lazy' src={whatsApp} alt='whatsApp' />
								</a>
							</div>

							<div className={style.iconSocial}>
								<a href='https://www.instagram.com/libelacademy?igsh=MXU5MXoybzB2MnVmNQ=='>
									<img loading='lazy' src={instagram} alt='instagram' />
								</a>
							</div>

							<div className={style.iconSocial}>
								<a href='https://discord.com/invite/r6UHQEtGrQ'>
									<img loading='lazy' src={discord} alt='discord' />
								</a>
							</div>

							<div className={style.iconSocial}>
								<a href='https://www.linkedin.com/company/libelstudios/'>
									<img loading='lazy' src={linkedin} alt='linkedin' />
								</a>
							</div>

							<div className={style.iconSocial}>
								<a href='https://www.tiktok.com/@libelacademyoficial?_r=1&_t=ZS-91I7W8R6mos'>
									<img loading='lazy' src={tiktok} alt='tiktok' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={style.container2}>
					<h1>Másters</h1>
					<ul className={style.listMenus}>
						<li>
							<a href='https://www.libel.academy/master-blender/'>Blender para videojuegos</a>
						</li>
						<li>
							<a href='https://www.libel.academy/master-escultura-en-zbrush/'>
								ZBrush para impresión 3D
							</a>
						</li>
						<li>
							<a href='https://www.libel.academy/concept-art-ia/'>Arte conceptual</a>
						</li>
						<li>
							<a href='https://www.libel.academy/master-personajes-para-videojuegos/'>
								Personajes para videojuegos AAA
							</a>
						</li>
						<li>
							<a href='https://www.libel.academy/personajes-para-cine/'>
								Personaje para cine (ZBrush)
							</a>
						</li>
						<li>
							<a href='https://www.libel.academy/master-personajes-estilizados/'>
								Personaje para videojuego CC5
							</a>
						</li>
						<li>
							<a href='https://www.libel.academy/master-rigging/'>Rigging y Animación</a>
						</li>
					</ul>
				</div>
				<div className={style.container2}>
					<h1>Entrenamientos</h1>
					<ul className={style.listMenus}>
						<li>
							<a href='https://www.libel.academy/3d-camp/'>3D Camp</a>
						</li>
						<li>
							<a href='https://www.libel.academy/membresia/'>Membresías</a>
						</li>
						<li>
							<a href='https://www.libel.academy/blender-para-jovenes/'>3D Para Jóvenes</a>
							<span className={style.bubbleNew}>Nuevo</span>
						</li>
						<li>
							<a href='https://www.libel.academy/hub/'>LIBEL HUB</a>
							<span className={style.bubbleNew}>Nuevo</span>
						</li>
						<li>
							<a href='https://www.libel.academy/impresion-3d-con-blender/'>
								Blender para impresión 3D
							</a>
						</li>
						<li>
							<a href='https://www.libel.academy/blender-junior-pro/'>Blender Junior</a>
						</li>
						<li>
							<a href='https://www.libel.academy/personajes-para-videojuegos/'>ZBrush+Unreal</a>
						</li>
					</ul>
				</div>
				<div className={style.container2}>
					<h1>Licencias</h1>
					<ul className={style.listMenus}>
						<li>
							<a href='https://www.libel.academy/licencias-character-creator-iclone/'>
								Character creator 5{' '}
							</a>
						</li>
						<li>
							<a href='https://www.libel.academy/licencias-character-creator-iclone/'>Iclone</a>
						</li>
					</ul>

					<div className={style.button}>
						<a href='https://api.whatsapp.com/send?phone=573105868543&text=%F0%9F%94%A5Hola%20Libel%F0%9F%91%8D%2C%20deseo%20informaci%C3%B3n%20de%20los%20entrenamientos%E2%9C%8B'>
							{' '}
							Habla con nosotros
						</a>
					</div>

					<span className={style.workUs}>
						<a href='https://api.whatsapp.com/send?phone=573105868543&text=%F0%9F%94%A5Hola%20Libel%F0%9F%91%8D%2C%20deseo%20informaci%C3%B3n%20de%20los%20entrenamientos%E2%9C%8B'>
							{' '}
							Trabaja con nosotros
						</a>
						<a href='https://api.whatsapp.com/send?phone=573228638257&text=Hola%2C%20Viviana%20%F0%9F%91%8B%20%C2%A1Me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa'>
							{' '}
							o solicita ayuda
						</a>
					</span>
				</div>
			</div>

			<div className={style.botContainer}>
				<span>
					<a href='https://www.libel.academy/politicas-de-privacidad/'>Política de Privacidad</a>
				</span>

				<span>© Copyright 2026</span>

				<span>
					<a href='https://www.libel.academy/terminos-y-condiciones/'> Términos y Condiciones</a>
				</span>
			</div>
		</section>
	);
};

export default FooterNew;
