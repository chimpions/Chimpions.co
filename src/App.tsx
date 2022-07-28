import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from '_components/Navigation/Navigation';
import Landing from '_components/Landing/Landing';
import Compendium from '_components/Compendium/Compendium';
import OurVision from '_components/OurVision/OurVision';
import TheChiao from '_components/TheChiao/TheChiao';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import TogetherWeStand from '_components/TogetherWeStand/TogetherWeStand';
import Artist from '_components/TogetherWeStand/Artist';
import { Drop, drops } from '_content/tws';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmRkq7cQdmnhaPIhy4wmXf6JIQyOiLIFI",
  authDomain: "chimpions-web.firebaseapp.com",
  projectId: "chimpions-web",
  storageBucket: "chimpions-web.appspot.com",
  messagingSenderId: "415236253475",
  appId: "1:415236253475:web:fc262073dcdad293c00e96",
  measurementId: "G-Q65VSKGTC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default function ChimpionsWeb() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path='/' element={<Landing />} />

				<Route path='/compendium' element={<Compendium />} />
				<Route path='/our-vision' element={<OurVision />} />
				<Route path='/the-chiao' element={<TheChiao />} />
				<Route path='/treehouse' element={<TogetherWeStand />} />
				{drops.map((Drop) => (
					<Route path={`/treehouse/${Drop.artistPath}`} element={<Artist drop={Drop}/>} />
				))}
			</Routes>
		</Router>
	);
}
