import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from '_components/Navigation/Navigation';
import Landing from '_components/Landing/Landing';
import Compendium from '_components/Compendium/Compendium';
import OurVision from '_components/OurVision/OurVision';
import TheChiao from '_components/TheChiao/TheChiao';

export default function BasicExample() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/compendium' element={<Compendium />} />
				<Route path='/our-vision' element={<OurVision />} />
				<Route path='/the-chiao' element={<TheChiao />} />
			</Routes>
		</Router>
	);
}
