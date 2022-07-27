import React, { useState } from 'react';
import chimpions from '_content/chimpions.json';
import ChimpionDetails from '_components/Compendium/ChimpionDetails';

const getName = (string: string) => {
	let s;
	s = string.split('-')[0];
	return s;
};

const getTrimmedName = (string: string) => {
	let s;
	s = string.split('-')[0];
	s = s.replace(/([A-Z])/g, ' $1').trim();
	return s;
};

export default function Compendium() {
	const [isModalOpen, setModalOpen] = useState(false);
	const [name, setName] = useState('');
	const [path, setPath] = useState('');
	const [animationPath, setAnimationPath] = useState('');
	const [tribe, setTribe] = useState('All')

	const handleClick = (name: string, path: string, animationPath?: string) => {
		setModalOpen(true);
		setName(name);
		setPath(path);
		setAnimationPath(animationPath ? animationPath : '');
	};

	const getTribe = (string: string) => {
		let s = string.split('-')[1];
		s = s.replace(/([A-Z])/g, ' $1').trim();
		return s;
	};

	const handleChangeTribe = (event: any) => {
		console.log('event', event.target.value)
		setTribe(event.target.value)
	}

	return (
		<section className='w-full max-w-screen-lg mx-auto my-24 md:my-48 px-6'>
			<h1 className='font-display text-4xl md:text-6xl'>Compendium</h1>
			<h2 className='font-body tracking-wider max-w-screen-sm opacity-80 mt-6'>
				You've enter the hallowed halls of Chimpianity. Here before you lies the
				collective history of Chimpions past, present, and future. Tread with
				care.
			</h2>
			<label className='font-body tracking-wider max-w-screen-sm opacity-80 mt-6 ' htmlFor="tribe">Choose a Tribe: </label>
			<select name="tribe" id="tribe" value={tribe} onChange={handleChangeTribe} className="font-body right-0 mt-3 p-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-700">
				<option value="All">All</option>
				<option value="Old World Cult">Old World Cult</option>
				<option value="Future War Pack">Future War Pack</option>
				<option value="Proletariat">Proletariat</option>
				<option value="Planeswalkers">Planeswalkers</option>
			</select>
			<div className={`w-full grid grid-cols-3 md:grid-cols-8 mt-8 gap-8`}>
				{chimpions.filter(({ path}) => (tribe==='All'?true:getTribe(path)===tribe)).map(({ path, lore, animationPath }) => (
					<div
						className='relative group cursor-pointer border-2 border-transparent hover:rounded-md hover:ring-4 hover:ring-pink-900 transition-all hover:border-2 hover:border-pink-500'
						key={path}
						onClick={() => handleClick(getName(path), path, animationPath)}
					>
						{animationPath ? (
							<img
								className='rounded'
								src={`images/chimpions/${animationPath}`}
								alt='Chimpion Animation'
							/>
						) : (
							<img
								className='rounded'
								src={`images/chimpions/${path}`}
								alt='Chimpion'
							/>
						)}

						{lore && (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h6 w-6 absolute bottom-1 right-1 z-10 bg-base rounded-md text-white text-opacity-90 p-1'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path d='M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' />
							</svg>
						)}
					</div>
				))}
			</div>
			{name && (
				<ChimpionDetails
					path={path}
					animationPath={animationPath}
					name={name}
					trimmedName={getTrimmedName(name)}
					isModalOpen={isModalOpen}
					setModalOpen={setModalOpen}
				/>
			)}
		</section>
	);
}



