import React from 'react';
import Hero from '_components/Landing/Hero';
import About from '_components/Landing/About';

export default function Landing() {
	return (
		<section className='w-full'>
			<Hero />
			<About />
		</section>
	);
}
