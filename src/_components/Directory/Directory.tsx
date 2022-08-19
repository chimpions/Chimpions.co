import React from 'react';
import { AiOutlineTwitter, AiOutlineInstagram, AiOutlineFolderOpen, AiOutlineLink, AiOutlineIdcard } from 'react-icons/ai';
import { Artist, artists } from '_content/artists';

const Directory = () => {
	return (
		<section className={styles.container}>
			<h1 className={styles.heading}>Treehouse Directory</h1>
			<div className={styles.dropsContainer}>
				{artists.map((Artist) => (
					<ArtistView key={Artist.name} Artist={Artist} />
				))}
			</div>
		</section>
	);
};

export default Directory;

const styles = {
	container:
		'max-w-screen-lg w-full mx-auto my-24 md:my-48 px-12 md:px-6 font-display',
	heading: 'text-4xl md:text-6xl mb-4 md:mb-8',
	subsectionHeading: 'text-2xl md:text-4xl mb-6',
	subsectionParagraph:
	'tracking-wider font-display w-full opacity-80 mt-4 mb-4 md:mb-8 text-gray-300',
	dropsContainer: 'grid md:grid-cols-2 mb-4 grid-cols-1',
  bioContainer: 'flex items-center gap-x-2 ml-4 text-gray-300 underline',
};

type ArtistViewProps = {
	Artist: Artist;
};

const ArtistView = (props: ArtistViewProps) => {
	return (
    <div className="m-4 md:m-2">
      <div className='bg-pink-500 bg-opacity-10 rounded p-4 border-4 border-transparent hover:bg-opacity-30 hover:border-pink-500'>
        <div className='text-center rounded bg-pink-500 bg-opacity-20 text-4xl p-4 hover:bg-opacity:50'>
          <div className='fill'>
            <img
              className="rounded"
              src={`images/artist/${props.Artist.piece}`}
              alt='Together We Stand Teaser'
            />
          </div>
          <h2 className='mt-2'>{props.Artist.name}</h2>
        </div>
        <div className='grid grid-cols-1 mt-1 mt-5 text-justify'>
            {props.Artist.bio}
          </div>
        <div className='grid grid-cols-1 mt-1 mt-5'>

        <h2 className='text-xl my-4 text-gray-100'>Social Links</h2>
          {props.Artist.twitter && (
            <a className={styles.bioContainer} href={props.Artist.twitter}>
              <AiOutlineTwitter size={14} /> Twitter
            </a>
          )}
          {props.Artist.instagram && (
            <a className={styles.bioContainer} href={props.Artist.instagram}>
              <AiOutlineInstagram size={14} /> Instagram              
            </a>
          )}

        <h2 className='text-xl my-4 text-xl my-4 text-gray-100'>Art Links</h2>
          {props.Artist.portfolio && (
            <a className={styles.bioContainer} href={props.Artist.portfolio}>
              <AiOutlineIdcard size={14} /> Portfolio
            </a>
          )}
          {props.Artist.formfunction && (
            <a className={styles.bioContainer} href={props.Artist.formfunction}>
              <AiOutlineLink size={14} /> Form Function
            </a>
          )}
          {props.Artist.exchangeart && (
            <a className={styles.bioContainer} href={props.Artist.exchangeart}>
              <AiOutlineLink size={14} /> Exchange Art
            </a>
          )}
          {props.Artist.misc && (
            <a className={styles.bioContainer} href={props.Artist.misc}>
              <AiOutlineLink size={14} /> {props.Artist.misc.length > 30 ?`${props.Artist.misc.substring(0, 30)}...` : props.Artist.misc}
            </a>
          )}
        </div>

      </div>
    </div>
	);
};
