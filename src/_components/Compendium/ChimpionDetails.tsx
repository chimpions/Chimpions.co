import { useState, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import React from 'react';

type ChimpionDetailsProps = {
	path: string;
	animationPath: string;
	name: string;
	trimmedName: any;
	isModalOpen: any;
	setModalOpen: any;
};

const ChimpionDetails = (props: ChimpionDetailsProps) => {
	const filename = props.name + '.md';
	const [post, setPost] = useState('');
	const [path, setPath] = useState('');

	const checkAnimation = () => {
		if (props.animationPath) {
			setPath(props.animationPath);
		} else {
			setPath(props.path);
		}
	};

	useEffect(() => {
		checkAnimation();

		import(`_content/lore/${filename}`)
			.then((res) => {
				fetch(res.default)
					.then((res) => res.text())
					.then((res) => setPost(res))
					.catch((err) => console.log(err));
			})
			.catch(() =>
				setPost('No lore for this Chimpion yet. Stay tuned for updates!')
			);
	});

	const getTribe = (string: string) => {
		let s = string.split('-')[1];
		s = s.replace(/([A-Z])/g, ' $1').trim();
		return s;
	};

	const getBG = (string: string) => {
		let s = string.split('-')[2];
		s = s.replace(/([A-Z])/g, ' $1').trim();
		return s;
	};

	const getHead = (string: string) => {
		let s = string.split('-')[3];
		s = s.replace(/([A-Z])/g, ' $1').trim();
		return s;
	};

	const getFace = (string: string) => {
		let s = string.split('-')[4];
		s = s.replace(/([A-Z])/g, ' $1').trim();
		return s;
	};

	const getBody = (string: string) => {
		let s = string.split('-')[5].split('.')[0];
		s = s.replace(/([A-Z])/g, ' $1').trim();
		return s;
	};

	return (
		props.isModalOpen && (
			<div
				className='w-full h-full bg-black bg-opacity-75 z-50 top-0 fixed left-0 flex items-end md:items-center justify-center'
				onClick={() => props.setModalOpen(false)}
			>
				<div
					className='overflow-y-scroll w-full rounded-md max-w-screen-md bg-base p-10 text-white h-5/6'
					onClick={(e) => e.stopPropagation()}
				>
					<h1 className='font-display text-3xl md:text-5xl'>
						{props.trimmedName}
					</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 mb-6 mt-8'>
						<img
							src={`/images/chimpions/${path}`}
							className='bg-cover w-full'
							alt='Chimpion'
						/>
						<div className='flex flex-col gap-y-2 mt-4 md:mt-0'>
							<div className='px-6 pt-2 pb-1 w-full h-full bg-white bg-opacity-5 flex flex-col justify-center'>
								<p className='font-body uppercase tracking-widest text-xs -mb-2'>
									Tribe
								</p>
								<p className='font-body tracking-wider text-base mt-2'>
									{getTribe(props.path)}
								</p>
							</div>
							<div className='px-6 pt-2 pb-1 w-full h-full bg-white bg-opacity-5 flex flex-col justify-center'>
								<p className='font-body uppercase tracking-widest text-xs -mb-2'>
									Background
								</p>
								<p className='font-body tracking-wider text-base mt-2'>
									{getBG(props.path)}
								</p>
							</div>
							<div className='px-6 pt-2 pb-1 w-full h-full bg-white bg-opacity-5 flex flex-col justify-center'>
								<p className='font-body uppercase tracking-widest text-xs -mb-2'>
									Head
								</p>
								<p className='font-body tracking-wider text-base mt-2'>
									{getHead(props.path)}
								</p>
							</div>
							<div className='px-6 pt-2 pb-1 w-full h-full bg-white bg-opacity-5 flex flex-col justify-center'>
								<p className='font-body uppercase tracking-widest text-xs -mb-2'>
									Face
								</p>
								<p className='font-body tracking-wider text-base mt-2'>
									{getFace(props.path)}
								</p>
							</div>
							<div className='px-6 pt-2 pb-1 w-full h-full bg-white bg-opacity-5 flex flex-col justify-center'>
								<p className='font-body uppercase tracking-widest text-xs -mb-2'>
									Body
								</p>
								<p className='font-body tracking-wider text-base mt-2'>
									{getBody(props.path)}
								</p>
							</div>
						</div>
					</div>
					<Markdown className='opacity-80 flex flex-col gap-y-4 leading-loose'>
						{post}
					</Markdown>
				</div>
			</div>
		)
	);
};

export default ChimpionDetails;
