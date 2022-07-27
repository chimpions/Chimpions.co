import React from 'react';
import { FaCircle } from 'react-icons/fa';

const OurVision = () => {
	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Our Vision</h1>

			<h2 className={styles.subsectionHeading}>Overview</h2>
			<p className={styles.subsectionParagraph}>
				The Chimpions are a Web3 community focused on empowering artists, and
				elevating the NFT space. The community aims to support the development
				and advancement of the decentralised web by bringing together skilled
				individuals from across prominent Solana and Ethereum communities.
			</p>

			<h2 className={styles.subsectionHeading}>Vision</h2>
			<p className={styles.subsectionParagraph}>
				To leverage our members and brand to uplift the entire artist community
				and create an NFT Art Syndicate. To bring together the most trusted and
				respected community of builders, curators and collaborators on Solana
				and Ethereum.
			</p>

			<h2 className={styles.subsectionHeading}>Goals</h2>
			<div className={styles.subsectionParagraph}>
				The goal of the Chimpions is to champion artists & their initiatives
				across the NFT space. By bringing together active members from a wide
				range of leading communities across blockchains, we hope to create value
				not easily achieved in siloes. Sharing best practices, ideas,
				initiatives, and a love for Web3 will help guide us into the future by
				creating strategic partnerships where previously not possible.
				<br></br>
				<br></br>
				We strive to create a community where our members are eager to help &
				contribute for the betterment of the NFT space as a whole. The Chimpions
				empower the cornerstones of the space:
				<br></br>
				<br></br>
				{cornerstones.map((elem) => (
					<div className='mb-6 ml-8' key={elem.title}>
						<div>{elem.title}</div>
						<ul className='ml-10 my-2 flex flex-col gap-2'>
							{elem.content.map((contentElem) => (
								<li key={contentElem} className='flex gap-3.5'>
									<div className='mt-[7px]'>
										<FaCircle size={8} />
									</div>
									{contentElem}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<h2 className={styles.subsectionHeading}>Core Values</h2>
			<div className={styles.subsectionParagraph}>
				<ul className='ml-10 mt-4 flex flex-col gap-2'>
					{coreValues.map((elem) => (
						<li key={elem} className='flex gap-3.5'>
							<div className='mt-[7px]'>
								<FaCircle size={8} />
							</div>
							{elem}
						</li>
					))}
				</ul>
			</div>

			<h2 className={styles.subsectionHeading}>Core Activities</h2>
			<div className={styles.subsectionParagraph}>
				The Chimpions vision will be achieved by promoting an ecosystem culture
				that focuses on our core values. The Chimpions shall spearhead the
				following activities:
				<br></br>
				<ul className='ml-10 mt-4 flex flex-col gap-2'>
					{coreActivities.map((elem) => (
						<li key={elem} className='flex gap-3.5'>
							<div className='mt-[7px]'>
								<FaCircle size={8} />
							</div>
							{elem}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default OurVision;

const styles = {
	container: 'max-w-screen-lg w-full mx-auto my-24 md:my-48 px-12 md:px-6',
	heading: 'font-display text-4xl md:text-6xl mb-8 md:mb-12',
	subsectionHeading: 'font-display text-2xl md:text-4xl mb-4',
	subsectionParagraph:
		'tracking-wider font-display w-full opacity-80 mt-2 mb-12 md:mb-12 text-gray-400',
};

const cornerstones = [
	{
		title: 'Builders',
		content: [
			'Those who create innovative products and solutions that generate value for ecosystem participants.',
			'Individuals who get their hands dirty, and take the initiative to jump in and solve problems themselves.',
		],
	},
	{
		title: 'Curators',
		content: [
			"Curators produce value through the collaboration and coordination of the space's top talent. ",
			'Individuals who love to highlight & uplift artists.',
		],
	},
	{
		title: 'Collaborators',
		content: [
			'Collaborators support The Chimpions and the wider community, giving time and energy to execute on this vision to create a better Solana, Ethereum, and Web3 ecosystem.',
			"Individuals who see opportunities and sieve them, fostering relationships & partnerships with leading artists, builders, and projects. They're willing to jump in and help however they can.",
		],
	},
	{
		title: 'Artists',
		content: [
			'Those who creatively express themselves through the creation of art.',
			'Those who consume and enjoy the art that the space has to offer.',
		],
	},
	{
		title: 'Investors',
		content: [
			'Those who share and teach their experience, insights, and knowledge of markets.',
			'Those who invest in high-effort, high-quality projects to incentivise and promote a healthier NFT ecosystem.',
		],
	},
];

const coreValues = [
	'Supporting the creator economy and helping artists get the recognition they deserve.',
	'Fostering a community that leads with honesty, integrity, and open-mindedness.',
	'Innovating across technology, governance, communication, and community building.',
	'Encouraging and celebrating member participation.',
	'Keeping Spirit - Staying positive through trying times.',
];

const coreActivities = [
	'Promoting artistic integrity, and 1/1 Art.',
	'Challenging the ecosystem to build innovative and unique projects that elevate its quality.',
	'Maintaining a professional public presence, championing constructive discussions.',
	'Rejecting advocates of destructive short-term incentive models.',
	'Building the ecosystem with a focus on sustainability, longevity, and organic growth.',
	'Dissolving unjust opportunity-limiting barriers.',
	'Advocating for the bridging and collaboration of like-minded communities.',
	'Promoting the value of being creative, unique and taking risks.',
	'Advising, advocating for, and building projects that align with our Core Values.',
];
