import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/global/Navbar.jsx'

import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Navbar />
		<main className='px-[15%] text-gray-700 bg-gray-50 antialiased font-inter leading-[1.5]'>
			<Home />
		</main>
	</StrictMode>,
)
