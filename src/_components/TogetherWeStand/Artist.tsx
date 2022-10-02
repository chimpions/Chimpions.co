import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaPaintBrush, FaCalendarAlt, FaDiscord } from 'react-icons/fa';
import { Drop, drops } from '_content/tws';

const Artist = (props: ArtistProps) => {
	const images: any = [
		{
			src: "/images/tws/" + props.drop.piece.path,
			title: props.drop.piece.title,
			content: ""
		}
	]
	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>{props.drop.artist}</h1>
			<h2 className={`text-center ${styles.subsectionHeading}`}>"{props.drop.piece.title}"</h2>
			<div className='grid grid-cols-1 mb-8'>
			<div>
				{props.drop.piece.released ? 
					(
						<img src={`/images/tws/${props.drop.piece.path}`} />
					)
					:
					(
						<img src={`/images/tws/${props.drop.piece.teaserPath}`} />
					)
				}
				</div>
				<div className='grid grid-cols-1 md:grid-cols-3 mb-8'>
					<div className='flex justify-center items-center text-gray-500 gap-x-2'>
						<FaPaintBrush size={14} />
						<a href={props.drop.portfolio}>Portfolio</a>
					</div>
					{props.drop.twitter && (
						<div className='flex justify-center items-center text-gray-500 gap-x-2'>
							<AiOutlineTwitter size={14} />
							<a href={`https://twitter.com/${props.drop.twitter}`}>{props.drop.twitter}</a>
						</div>
					)}
					{props.drop.discord && (
						<div className='flex justify-center items-center text-gray-500 gap-x-2'>
							<FaDiscord size={14} />
							{props.drop.discord}
						</div>
					)}
				</div>
				<div>
				{props.drop.copy && props.drop.copy.map((copy: string) => (
					<p className={styles.subsectionParagraph} dangerouslySetInnerHTML={{__html: (copy)}}></p>
				))}
				</div>
			</div>
			{props.drop.qa && (
				<h2 className={styles.subsectionHeading}>Q &amp; A</h2>
			)}
			{props.drop.qa && props.drop.qa.map((qa: [string, string]) => (
				<div>
					<div className="rounded bg-pink-500 bg-opacity-10 p-4 my-4">
						<p className={styles.subsectionQuestion}>{qa[0]}</p>
						<p className={`${styles.subsectionAnswer} mb-0`}>"{qa[1]}"</p>
					</div>
				</div>
			))}
		</section>
	);
};

type ArtistProps = {
	drop: Drop;
};

export default Artist;

const styles = {
	container:
		'max-w-screen-lg w-full mx-auto my-24 md:my-48 px-12 md:px-6 font-display',
	heading: 'text-4xl md:text-6xl text-center',
	subsectionHeading: 'text-2xl md:text-4xl mb-6',
	subsectionParagraph:
	'tracking-wider font-display w-full opacity-80 mt-4 mb-4 md:mb-8 text-gray-300',
	subsectionQuestion:
	'tracking-wider font-display w-full',
	subsectionAnswer:
	'tracking-wider font-display w-full opacity-80 my-4 text-gray-300 pl-4 border-l-2',
	dropsContainer:
		'grid grid-cols-1 mb-4',
};
