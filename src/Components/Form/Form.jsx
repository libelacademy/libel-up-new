import React, { useState } from 'react';
import './Form.css';

import paises from '../../utils/paises';

const Form = () => {
	const [formularioEnviado, setFormularioEnviado] = useState(false);
	const [templateParams, setTemplateParams] = useState({
		FIRSTNAME: '',
		Email: '',
		Country: '',
		Phone: '',
		LEADCF4: '',
	});

	const handlerChange = (event) => {
		const nameProp = event.target.name;
		let valueProp = event.target.value;
		setTemplateParams({
			...templateParams,
			[nameProp]: valueProp,
		});
	};

	const handlerCountrySelect = (event) => {
		const valueProp = event.target.value;
		const paisActual = paises.find((e) => e.nombre === valueProp);

		if (paisActual) {
			setTemplateParams({
				...templateParams,
				Country: paisActual.nombre,
				Phone: paisActual.ind,
			});
		}
	};

	return (
		<section className='Header' id='home'>
			<div className='container-main'>
				<div className='container-form' id='form'>
					<h1>
						¿Más <span>información?</span>
					</h1>
					<h2>déjanos tus datos y te contactaremos</h2>
					<form
						id='webform4793673000074523107'
						action='https://crm.zoho.com/crm/WebToLeadForm'
						name='WebToLeads4793673000074523107'
						method='POST'
						accept-charset='UTF-8'
					>
						{' '}
						<input
							type='text'
							style={{ display: 'none' }}
							name='xnQsjsdp'
							value='3a683b91b21899941523ad0c066e519356577479519f0b8691c8c2b566cca05a'
						/>
						<input type='hidden' name='zc_gad' id='zc_gad' value='' />
						<input
							type='text'
							style={{ display: 'none' }}
							name='xmIwtLD'
							value='c5318978d516c876184b00a6531887f36ab9da741be60feef51c87fb9fcf198c65720cb0cf3e36d25f2474e031afd04d'
						/>
						<input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' />
						<input
							type='text'
							style={{ display: 'none' }}
							name='returnURL'
							value='https&#x3a;&#x2f;&#x2f;libel.academy&#x2f;mensaje-enviado&#x2f;'
						/>
						{/* Campos del form */}
						<div className='container-input-main'>
							<div className='title-input'>
								<label for='Last_Name'>
									Nombre Completo<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className='input-container'>
								<input
									type='text'
									id='Last_Name'
									name='Last Name'
									// onChange={handlerChange}
									// value={templateParams.FIRSTNAME}
									placeholder='Tu nombre completo'
									autoComplete='off'
									maxLength='30'
									required
								></input>
							</div>
						</div>
						<div className='container-input-main'>
							<div className='title-input'>
								<label for='Email'>
									Correo electrónico<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className='input-container'>
								<input
									onChange={handlerChange}
									value={templateParams.Email}
									type='text'
									ftype='email'
									autocomplete='false'
									id='Email'
									name='Email'
									crmlabel=''
									maxlength='100'
								></input>
							</div>
						</div>
						<div className='container-input-main'>
							<div className='title-input'>
								<label for='Country'>
									País<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className='input-container'>
								{/* <input type='text' id='Country' name='Country' maxlength='100'></input> */}
								<select
									id='Country'
									className={templateParams.Country ? 'selected' : 'no-selected'}
									onChange={handlerCountrySelect}
									value={templateParams.Country ? templateParams.Country : ''}
									changeitem='SIGNUP_FORM_FIELD'
									name='Country'
									type='text'
									required
								>
									<option hidden={true} value=''>
										Selecciona el país
									</option>

									{paises.map((pais, i) => (
										<option key={i} value={pais.nombre}>
											{pais.nombre}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='container-input-main'>
							<div className='title-input'>
								<label for='Phone'>
									Celular<span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className='input-container'>
								<input
									type='text'
									id='Phone'
									name='Phone'
									maxlength='30'
									onChange={handlerChange}
									value={templateParams.Phone}
									autoComplete='off'
									maxLength='20'
									required
								></input>
							</div>
						</div>
						<div className='container-text-area-main'>
							<div className='title-text-area'>
								<label for='LEADCF4'>
									Escribe tu Inquietud <span style={{ color: 'red' }}>*</span>
								</label>
							</div>
							<div className='text-area-container'>
								<textarea
									id='LEADCF4'
									name='LEADCF4'
									type='text'
									maxlength='100'
									onChange={handlerChange}
									value={templateParams.LEADCF4}
									autoComplete='off'
									required
								></textarea>
							</div>
						</div>
						<div class='zcwf_row wfrm_fld_dpNn' style={{ display: 'none' }}>
							<div class='zcwf_col_lab'>
								<label for='LEADCF12'>Formulario de Ads</label>
							</div>
							<div class='zcwf_col_fld'>
								<input
									type='text'
									id='LEADCF12'
									aria-required='false'
									aria-label='LEADCF12'
									name='LEADCF12'
									aria-valuemax='255'
									maxlength='255'
									value='Home&#x20;-&#x20;Especialistas&#x20;3D'
								></input>
								<div class='zcwf_col_help'></div>
							</div>
						</div>
						<div class='zcwf_row wfrm_fld_dpNn' style={{ display: 'none' }}>
							<div class='zcwf_col_lab'>
								<label for='Lead_Source'>Fuente de Posible cliente</label>
							</div>
							<div class='zcwf_col_fld'>
								<select
									class='zcwf_col_fld_slt'
									role='combobox'
									aria-expanded='false'
									aria-haspopup='listbox'
									id='Lead_Source'
									aria-required='false'
									aria-label='Lead Source'
									name='Lead Source'
								>
									<option value='-None-'>-None-</option>
									<option value='WhatsApp'>WhatsApp</option>
									<option value='Facebook'>Facebook</option>
									<option value='Instagram'>Instagram</option>
									<option value='Calendly'>Calendly</option>
									<option value='Formulario&#x20;web&#x20;home'>Formulario web home</option>
									<option value='Formulario&#x20;web&#x20;m&aacute;ster'>
										Formulario web m&aacute;ster
									</option>
									<option value='Correo'>Correo</option>
									<option value='Importaci&oacute;n'>Importaci&oacute;n</option>
									<option value='Feria&#x20;del&#x20;Libro'>Feria del Libro</option>
									<option value='Curso&#x20;gratuito'>Curso gratuito</option>
									<option selected value='Formulario&#x20;Web'>
										Formulario Web
									</option>
									<option value='Evento&#x20;Presencial&#x20;24&#x20;agosto'>
										Evento Presencial 24 agosto
									</option>
								</select>
								<div class='zcwf_col_help'></div>
							</div>
						</div>
						<div class='zcwf_row wfrm_fld_dpNn' style={{ display: 'none' }}>
							<div class='zcwf_col_lab'>
								<label for='LEADCF10'>Asesor</label>
							</div>
							<div class='zcwf_col_fld'>
								<select
									class='zcwf_col_fld_slt'
									role='combobox'
									aria-expanded='false'
									aria-haspopup='listbox'
									id='LEADCF10'
									aria-required='false'
									aria-label='LEADCF10'
									name='LEADCF10'
								>
									<option value='-None-'>-None-</option>
									<option value='Gilberto'>Gilberto</option>
									<option value='Juieth'>Juieth</option>
									<option value='Julian'>Julian</option>
									<option selected value='Otro'>
										Otro
									</option>
									<option value='Sebastian'>Sebastian</option>
									<option value='Sonia'>Sonia</option>
									<option value='Viviana'>Viviana</option>
									<option value='Yiced'>Yiced</option>
								</select>
								<div class='zcwf_col_help'></div>
							</div>
						</div>
						<div class='zcwf_col_fld'>
							<div className='reCaptcha-container'>
								<label className='check-box'>
									<input type='checkbox' id='cbox1' value='first_checkbox' required /> Acepto
									las&nbsp;
									<a href='https://libel.academy/politicas-de-privacidad/' target={'_blank'}>
										políticas de privacidad
									</a>
								</label>
							</div>
							<input
								className={formularioEnviado ? 'button-submit-disable' : 'button-submit'}
								disabled={formularioEnviado}
								type='submit'
								id='formsubmit'
								value='Enviar Solicitud'
								title='Enviar'
							/>
						</div>
						<script
							id='wf_anal'
							src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=dfa1eb3a940a43513b645a2a610775a5450c30dba396b15fefef1598bc3dd670159fb266347ad3d878e935e82fdaee5egid37d6a006e80a572c802d1787c9e60720297a1513cd72555b1572e98888e7e43cgidad5e79a35ca397fc7aa9b72ad25c6a338c4a462ec27989e2e90b2d00b7f7d358gidc7521f03e25b18272ac56e1fcd5443abc2c78324252b43c6e5db30885d44618c&tw=f839893c7c972efd65f3aea1fa94ffce4393ce59d5bf5a0f3b54e3a804ed3aed'
						></script>
					</form>
				</div>
			</div>
			{/* <VideoModal
				modal={openModal}
				url='https://www.youtube.com/watch?v=mRYjBoIwVOQ'
				handlerClose={handlerClose}
			/> */}
			{/* <ModalForm closeModal={handlerCloseModal} modal={formModal} /> */}
		</section>
	);
};

export default Form;
