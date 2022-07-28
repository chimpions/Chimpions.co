import React from 'react';

export default function Navigation() {
	return (
		<nav className='fixed top-0 left-0 w-full z-20 bg-opacity-25 border-b border-white border-opacity-10 backdrop-blur-md'>
			<div className='w-full max-w-screen-lg mx-auto flex flex-row justify-between items-center px-4 py-3 md:py-6'>
				<a href='/' className='block cursor-pointer hover:opacity-70'>
					<img
						src='/images/logos/Logo_Base.png'
						className='h-5 md:h-8'
						alt='Chimpions Navigation Logo'
					/>
				</a>
				<div className='font-display flex items-center gap-x-4'>
					<a
						href='/treehouse'
						className='p-2 hover:rounded-md hover:text-pink-500 hover:bg-pink-500 hover:bg-opacity-10'
					>
						TreeHouse
					</a>
					<a
						href='/compendium'
						className='p-2 hover:rounded-md hover:text-pink-500 hover:bg-pink-500 hover:bg-opacity-10'
					>
						Compendium
					</a>
					<a
						href='/our-vision'
						className='p-2 hover:rounded-md hover:text-pink-500 hover:bg-pink-500 hover:bg-opacity-10'
					>
						Our Vision
					</a>
					<a
						href='/the-chiao'
						className='p-2 hover:rounded-md hover:text-pink-500 hover:bg-pink-500 hover:bg-opacity-10'
					>
						The Chiao
					</a>
				</div>
			</div>
		</nav>
	);
}
