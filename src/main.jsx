import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import Navbar from './components/global/Navbar.jsx';
import Footer from "./components/global/Footer.jsx";

import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/ServicesPage.jsx';
import Team from './pages/Team.jsx';
import Contact from './pages/Contact.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Navbar />
		<main className='flex flex-col place-content-center w-[100%] text-gray-700 bg-gray-50 antialiased font-inter leading-[1.5]'>
			<Router>
				<Routes>
					<Route exact path="*" element={<NotFound />} />
					<Route exact path="/" element={<Home />} />
					<Route exact path="/services" element={<Services />} />
					<Route exact path="/team" element={<Team />} />
					<Route exact path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</main>
		<Footer />
	</StrictMode>,
)
