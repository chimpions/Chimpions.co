import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { Lead, leads } from '_content/leads';

const TheChiao = () => {
	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>The Chiao</h1>
			<h2 className={styles.subsectionHeading}>The Leads</h2>
			<div className={styles.leadsContainer}>
				{leads.map((lead) => (
					<LeadView key={lead.name} lead={lead} />
				))}
			</div>
		</section>
	);
};

export default TheChiao;

const styles = {
	container:
		'max-w-screen-lg w-full mx-auto my-24 md:my-48 px-12 md:px-6 font-display',
	heading: 'text-4xl md:text-6xl mb-8 md:mb-12',
	subsectionHeading: 'text-2xl md:text-4xl mb-6',
	leadsContainer:
		'grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-12',
};

type LeadViewProps = {
	lead: Lead;
};

const LeadView = (props: LeadViewProps) => {
	return (
		<div>
			<div className='mb-2'>
				{props.lead.chimp.animationPath ? (
					<img
						className='rounded'
						src={`images/chimpions/${props.lead.chimp.animationPath}`}
						alt='Chimpion Animation'
					/>
				) : (
					<img
						className='rounded'
						src={`images/chimpions/${props.lead.chimp.path}`}
						alt='Chimpion'
					/>
				)}
			</div>
			<div>
				<div className='text-gray-300 text-center'>{props.lead.name}</div>
				{/* <div className='text-gray-500 text-sm text-center -mt-0.5 mb-0.5'>
					{props.lead.title}
				</div> */}
				<div className='flex justify-center items-center gap-x-1 text-gray-600 text-xs'>
					<AiOutlineTwitter size={14} />
					{props.lead.twitter}
				</div>
				{props.lead.discord && (
					<div className='flex justify-center gap-x-1 text-gray-600 text-xs'>
						<FaDiscord size={14} />
						{props.lead.discord}
					</div>
				)}
			</div>
		</div>
	);
};
