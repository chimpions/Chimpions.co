import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaExternalLinkSquareAlt, FaPaintBrush, FaCalendarAlt } from 'react-icons/fa';
import { Drop, drops } from '_content/tws';

const TogetherWeStand = () => {
	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Treehouse Presents...</h1>
			<div className='grid grid-cols-1 mb-8'>
				<div>
					<img className='rounded mb-4 md:mb-8' src='images/tws/tws_banner.png' />
				</div>
				<div>
					<p className={styles.subsectionParagraph}>The Chimpions proudly present ‘Together We Stand’, a partnership with amazing artists to create small supply art editions that will elevate the artist community, empower collectors, and deepen the art / utility connection.</p>
					<p className={styles.subsectionParagraph}>Each edition will be created by an iconic artist or project and will depict Chimpions standing together with allies against dark forces.</p>
					<p className={styles.subsectionParagraph}><b className='text-gray-100 text-lg'>Artists</b> will be compensated for their work, receive secondary royalties, expand their reach to new audiences, be featured in promotional threads, gain support for future auctions, and gain a new community of supporters in The Treehouse, the Chimpions’ art-focused Discord channels.</p>
					<p className={styles.subsectionParagraph}><b className='text-gray-100 text-lg'>Collectors </b> will have new opportunities to collect and enjoy art from their favorite artists. Each piece will also serve as an access card with multiple layers of utility which will welcome a wider range of NFT enthusiasts to explore each edition.</p>
					<p className={styles.subsectionParagraph}>Read more about the vision for Together We Stand <a href='https://twitter.com/TheChimpions/status/1549412745719816197?s=20&t=FQ_D4JF10bTHVwFYWy5-Sg' target="_blank" className='text-gray-100 underline'>here</a> or explore each edition below. </p>
				</div>
			</div>
			<h2 className={styles.subsectionHeading}>Editions</h2>
			<div className={styles.dropsContainer}>
				{drops.map((Drop) => (
					<DropView key={Drop.artist} Drop={Drop} />
				))}
			</div>
		</section>
	);
};

export default TogetherWeStand;

const styles = {
	container:
		'max-w-screen-lg w-full mx-auto my-24 md:my-48 px-12 md:px-6 font-display',
	heading: 'text-4xl md:text-6xl mb-4 md:mb-8',
	subsectionHeading: 'text-2xl md:text-4xl mb-6',
	subsectionParagraph:
	'tracking-wider font-display w-full opacity-80 mt-4 mb-4 md:mb-8 text-gray-300',
	dropsContainer:
		'grid grid-cols-1 mb-4',
};

type DropViewProps = {
	Drop: Drop;
};

const DropView = (props: DropViewProps) => {
	return (
		<a href={`/treehouse/${props.Drop.artistPath}`}>
			<div className={styles.dropsContainer}>
				<div className='mb-2 tws-banner border-4 border-transparent hover:border-pink-500'>
					<img
						className={ props.Drop.piece.revealed ? 'rounded' : 'rounded opacity-50' }
						src={`images/tws/${props.Drop.piece.teaserPath}`}
						alt='Together We Stand Teaser'
					/>
				</div>
				<div className='tws-banner md:m-0 mb-8 bg-pink-500 bg-opacity-50 rounded md:p-4'>
					<div className='text-center rounded bg-pink-500 bg-opacity-70 text-4xl px-4 md:py-2'><h2>{props.Drop.piece.title}</h2></div>

					<div className='grid grid-cols-1 mt-1 md:mt-5'>
						<div className='flex justify-center items-center gap-x-2'>
							<FaPaintBrush size={14} />
							{props.Drop.artist}
						</div>
						{props.Drop.twitter && (
							<div className='flex justify-center items-center gap-x-2'>
								<AiOutlineTwitter size={14} />
								{props.Drop.twitter}
							</div>
						)}
						<div className='flex justify-center items-center gap-x-2'>
							<FaCalendarAlt size={14} />
							{props.Drop.date}
						</div>
					</div>

				</div>
			</div>
		</a>
	);
};
