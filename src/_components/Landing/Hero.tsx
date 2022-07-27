import React from 'react';

export default function Hero() {
	return (
		<section className='relative w-full max-w-screen-lg mx-auto min-h-screen flex flex-col items-center justify-center'>
			<img
				className='w-80'
				src={'images/Logo@2x.png'}
				alt='The Chimpions logo. The word Chimpions, a portmanteau of chimpanzee and champion, is displayed in a pixelated font.'
			/>
			<img
				src={'images/arrow_down.png'}
				alt='A downward pointing arrow, bouncing up and down.'
				className='absolute bottom-20 mx-auto transform origin-bottom animate-bounce'
			/>
		</section>
	);
}
