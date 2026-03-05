import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import sideMenuReducer from './features/menu';
import bannerReducer from './features/banner';

import Inicio from './Routes/Inicio';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import WhatsappMobile from './Components/WhatsappMobile/WhatsappMobile';
import CloseInscriptions from './Components/CloseInscriptions/CloseInscriptions';

const store = configureStore({
	reducer: {
		sideMenu: sideMenuReducer,
		banner: bannerReducer,
	},
});

const router = createBrowserRouter([
	{
		path: '/libel-up',
		element: <Inicio />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
			<Whatsapp />
			<WhatsappMobile />
			{/* <CloseInscriptions /> */}
		</Provider>
	</React.StrictMode>
);
