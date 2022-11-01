export type Drop = {
	artist: string;
	twitter?: string;
	portfolio?: string;
	artistPath?: string;
	discord?: string;
	date: string
	piece: { path?: string; teaserPath: string; title?: string; revealed: boolean; released?: boolean; };
	copy?: Array<string>;
	qa?: Array<[string, string]>;
};

export const drops: Drop[] = [
	{
		artist: 'Matasatsu & Matabolong',
		twitter: '@Matabolong',
		portfolio: 'https://linktr.ee/matasatu_matabolong',
		date: '22/07/30',
		artistPath: 'matabolong',
		discord: 'Matasatu & Matabolong#6864',
		piece: {
			path: "matabolong/forest_fellowship.png",
			teaserPath: "matabolong/forest_fellowship_teaser.png",
			title: "Forest Fellowship",
			revealed: true,
			released: true,
		},
		copy: [
			"<h1 class='text-xl text-gray-100'>Holder Benefits</h1><br/><ul class='list-disc ml-8'><li>Access to The Treehouse Discord channels</li><li>Greenlist for Komori</li></ul>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About the Artist</h1>",
			"Matabolong is a very talented artist from Indonesia who is Top 30 on the @formfunction Creator Leaderboard and is best known for their detailed, colorful illustrations depicting the adventures of two creatures - Matasatu and Matabolong.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Read our full <a href='https://twitter.com/TheChimpions/status/1552347499377065990?s=20&t=FQ_D4JF10bTHVwFYWy5-Sg' target='_blank' class='text-gray-100 underline'>artist interview here</a></div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About Komori</h1>",
			"Komori is an exciting upcoming NFT project minting on Solana with ambitions to end the environmental stigma around blockchain technology and mobilize web3 to drive mass-scale environmental change.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Read our <a href='' target='_blank' class='text-gray-100 underline'>project analysis here</a></div>",
		],
		qa: [
			["Tell us more about the piece you created for Together We Stand. What was your vision?", "My idea for the piece was to invite the Chimpions and @komori_nft into Matabolong's world. It depicts their first meeting in a lush green forest."],
			["What is the story behind your main series Matasatu and Matabolong?", "I created Matasatu as a one eyed animal shapeshifter, and Matabolong as a hollow-eyed plant shapeshifter. After creating several pieces I started to add more storytelling through these characters. On Solana, I mainly create artworks that visualize Matabolong's journey around the forest and other places he visits."],
			["Who/what inspires you to create?", "I am mainly inspired by nature and enjoy creating characters based on animals and plants. I've also always enjoyed reading Japanese and Western comic books since I was young which has influenced my art style."],
			["What is your origin story as an artist? How did you get started? How did you end up on Solana?", "I started making drawings more seriously around 5 years ago. It was a way for me to stay productive while having fun in my spare time. In 2019, I started creating the characters Matasatu and Matabolong, and in 2021 I started selling the illustrations as NFTs. I got into Solana from doing a collaboration with @eternalsnft. After the collaboration I started doing more auctions on Solana. On Solana I focus more on the environment and background of the illustrations while on Tezos I focus mainly on the character designs."],
			["What is next for you?", "I have a collaboration upcoming and I'm going to release another 1/1 auction very soon. The artwork is almost finished…"]
		],
	},
	{
		artist: 'Nyaumon',
		twitter: '@nyaumon',
		portfolio: 'https://nyaumon.wixsite.com/website',
		discord: 'Keishinkae#6813',
		date: '22/08/28',
		artistPath: 'nyaumon',
		piece: {
			path: "nyaumon/dusk_till_dawn.png",
			teaserPath: "nyaumon/dusk_till_dawn_teaser.png",
			title: "Dusk Till Dawn",
			revealed: true,
			released: true,
		},
		copy: [
			"<h1 class='text-xl text-gray-100'>Holder Benefits</h1><br/><ul class='list-disc ml-8'><li>Access to The Treehouse Discord channels</li><li>Allowlist for Kitten Coup: Into the Aether</li></ul>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About the Artist</h1>",
			"Nyaumon is the co-founder of Yume Labs and has provided art direction for their various collections, including Kitten Coup and Glitterflies. She has also collaborated with Famous Fox Federation and Just Ape on banners and artwork.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Read our full <a href='https://twitter.com/TheChimpions/status/1563212852474761216?s=20&t=_su4m4PfmlfOX_pLuACQpA' target='_blank' class='text-gray-100 underline'>artist interview here</a></div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About Yume Labs</h1>",
			"Yume Labs is the brainchild of Misty Bayou and NYaUmon: a multi-project umbrella organization dedicated to realizing the potential of Solana NFTs and the decentralized economy that they open up.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Check out their <a href='https://docs.google.com/document/d/1ojrTcNDDWhcAuylcuf2m6nK8J6TeRljijZcPJoFWRg4/edit?usp=sharing' target='_blank' class='text-gray-100 underline'>Vision Document</a> for a broader overview of who they are and what they are building.</div>",
		],
	},
	{
		artist: 'rgb',
		date: '22/09/09',
		discord: 'rgb0x00#5068',
		twitter: '@rgb0x00',
		portfolio: 'https://critterscult.com/',
		artistPath: 'rgb',
		piece: {
			path: "rgb/ChimpionXCritters.png",
			teaserPath: "rgb/ChimpionXCritters_teaser.png",
			title: "The Fall of the Eradicator",
			revealed: true,
			released: true,
		},
		copy: [
			"<h1 class='text-xl text-gray-100'>Holder Benefits</h1><br/><ul class='list-disc ml-8'><li>Access to The Treehouse Discord channels</li><li>Whitelist for Critters Cult</li></ul>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About the Artist</h1>",
			"RGB is the creator of Suns Studio which created @solsunsets and the upcoming @CrittersCult collection. RGB is also a Day 1 Chimpion selected for creating some epic fan art and developed the current Chimpion Twitter banner.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Read our full <a href='https://twitter.com/TheChimpions/status/1567960875012878337?s=20&t=Mimimr4gTRTqcyctKItv6w' target='_blank' class='text-gray-100 underline'>artist interview here</a></div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About Critters Cult</h1>",
			"Critters Cult is an indie experiment developed by Suns Studio under the same standards that drive all @rgb0x00 pixel art creations -- excelling at the craft of pixel art and bringing together people who share the same passion for visual narratives and nostalgic pixel art aesthetics. ",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Check out the <a href='https://critterscult.com/' target='_blank' class='text-gray-100 underline'>Evocative Sci-Fi Mystery here</a>, and make sure to unmute!</div>",
		],
		qa: [
			["The piece you created for Together We Stand takes a darker turn than what we've seen previously. What inspired the edition you created?", "The piece is inspired by The Eradicator and what I imagined about the world where the Future War Pack Chimpion tribe is from."],
			["Who/what inspires you to create?", "The nostalgic video game memories of the 90s are my main source of inspiration. I believe that the lack of definition of those landscapes and the distance from a photographic register would leave room for the childhood imagination to travel across this world and beyond, blurring the lines between fantasy and reality. I'm also inspired by the Solana community: I have received so much love, support, and engagement with people who help imagine stories behind the landscapes which informs my practice in turn."],
			["What is your origin story as an artist? How did you get started? How did you end up on Solana?", "I have a background in architecture and have been working with visualization for quite some time now, which inspired me a lot and always pushed me to imagine places and spaces. Together with my professional practice, I have always kept a multidisciplinary artistic work in parallel, working with different mediums such watercolor, engraving and drawing, which also gave me the basis for my practice. It wasn't until last year that I started merging the digital tools I used professionally with my artistic practice and work with pixel art. I was moved by the challenge of making generative landscapes which culminated in @solsunsets. I shifted to 1/1 art with the Sci-Fi collection and forthcoming Fantasy collection, but I'm also digging back into generative art on two more @solsunsets collections: @CrittersCult and 'Sunset: Saga'."],
			["We are incredibly excited about @critterscultnft. What should people know about this project?", "They should know that, once they enter, there is no way out."]
		],
	},
	{
		artist: 'Neil Vilppu',
		date: '22/10/02',
		discord: 'neilvilppu#9456',
		twitter: '@NeilVilppu',
		portfolio: 'https://www.neilvilppu.com/',
		artistPath: 'neilvilppu',
		piece: {
			path: "neilvilppu/LastBastion.jpg",
			teaserPath: "neilvilppu/LastBastion_teaser.png",
			title: "Last Bastion",
			revealed: true,
			released: true,
		},
		copy: [
			"<h1 class='text-xl text-gray-100'>Holder Benefits</h1><br/><ul class='list-disc ml-8'><li>Access to The Treehouse Discord channels</li><li>Allowlist for Seed of Cain</li></ul>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About the Artist</h1>",
			"Neil was one of the artists on our “wish list” when we originally drew up the Together We Stand initiative. He is a master of detail, brings a distinctive style, and creates art that tells a story. He’s also very selective with his drops, making his work relatively exclusive.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Read our full <a href='https://twitter.com/TheChimpions/status/1575610198093312005?s=20&t=oXvSs0QcW22nZ9DajgDtSQ' target='_blank' class='text-gray-100 underline'>artist highlight here</a>!</div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About Psychopomp Comics</h1>",
			"Psychopomp Comics is a web3 enthusiast group who sees the opportunity of being early as a chance to disrupt legacy business models, especially in things like storytelling and art. This piece is a collaborative drop with PsychopompComix, a web3 comic studio that aims to disrupt the industry through it's digital native, NFT-powered, and artist-centric approach. A perfect partner to deliver on the art + access theme of TWS.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Check out the <a href='https://psychopompcomics.com/' target='_blank' class='text-gray-100 underline'>Seed of Cain here</a>!</div>",
		],
	},
	{
		artist: 'UGS Labs',
		date: '22/10/16',
		twitter: '@UGS_Labs',
		discord: 'undergroundsociety',
		portfolio: 'https://www.undergroundsociety.xyz/',
		artistPath: 'ugslabs',
		piece: {
			path: "ugslabs/TheUprising.png",
			teaserPath: "ugslabs/TheUprising_teaser.png",
			title: "The Uprising",
			revealed: true,
			released: true,
		},
		copy: [
			"<h1 class='text-xl text-gray-100'>Holder Benefits</h1><br/><ul class='list-disc ml-8'><li>Access to The Treehouse Discord channels</li><li>Allowlist for UGS Labs: Core</li></ul>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About UGS Labs: Core</h1>",
			"One of the most exciting innovations they are bringing to Solana is tech they are calling 'Core'. Core allows buyers to purchase NFT's with less liquid capital than needed when buying traditionally. Think of it like Leveraged buying. We are proud that Chimpions is in the first batch of 5 projects to be able to be purchased in this way. ",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Read more about Core <a href='https://twitter.com/TheChimpions/status/1581703796237168640?s=20&t=pO87p4HR4ahLW93gU-YHdA' target='_blank' class='text-gray-100 underline'>here</a>!</div>",
		]
	},
	{
		artist: 'Laurence Antony',
		date: '22/10/27',
		discord: 'LaurenceAntony#4873',
		twitter: '@laurence_antony',
		portfolio: 'https://lynkfire.com/laurenceantony',
		artistPath: 'laurenceantony',
		piece: {
			path: "laurenceantony/Finale.png",
			teaserPath: "laurenceantony/Finale_teaser.png",
			title: "Finale",
			revealed: true,
			released: true,
		},
		copy: [
			"<h1 class='text-xl text-gray-100'>Holder Benefits</h1><br/><ul class='list-disc ml-8'><li>Access to The Treehouse Discord channels</li><li>Allowlist for Story Editions</li></ul>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About the Artist</h1>",
			"An artist that needs no introduction. You've probably already seen the pixel masks all over twitter. Laurence Antony is known as a digital and oil painter, cryptic storyteller, the gang leader of the Masked Warriors.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Checkout the Masked Warriors <a href='https://www.maskedwarriors.xyz/' target='_blank' class='text-gray-100 underline'>here</a>!</div>",
			"<div class='grid grid-cols-1 mb-8'><div><img src='/images/tws/laurenceantony/mwxc.png' /></div></div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>Chapter 1</h1>",
			"Long ago in a land ruled by metal and magic, two clans fought endlessly for reasons long forgotten. The Masked Warriors took their mastery of steel to combat while the Chimpions fought back using spells. This conflict went on under moon and sun for many years.",
			"<div class='grid grid-cols-1 mb-8'><div><img src='/images/tws/laurenceantony/mwxc_ch1.jpg' /></div></div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>Chapter 2</h1>",
			"When an unspeakable evil appeared from another plane and claimed ownership over their dominions, the two clans made a pact to form an alliance. A brutal battle ensued with great devastation to the Warriors and Chimpions.",
			"Combining their masteries of steel and spells, a Magic Sword was forged capable of mortally wounding the beast and allowing it to be trapped using a runic incantation. Victory at last.",
			"<div class='grid grid-cols-1 mb-8'><div><img src='/images/tws/laurenceantony/mwxc_ch2.jpg' /></div></div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>Chapter 3</h1>",
			"The entrapment of the evil ushered in a golden age of discovery for the alliance, living in harmony for many years. Growing ever more curious to know the origins of the beast, the Chimpions constructed a portal allowing them to walk between planes.",
			"The Masks focused their efforts on studying the creature they held captive, but with the Chimpions separated to another plane, the once powerful pact formed between the clans waned causing the incantation to fail and allow the beast to escape.",
			"<div class='grid grid-cols-1 mb-8'><div><img src='/images/tws/laurenceantony/mwxc_ch3.jpg' /></div></div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>Chapter 4</h1>",
			"Fueled by hatred, the Scourge ravaged the land for seemingly decades, dwindling down the Masked Warriors and even tearing apart the very fabric of the plane it had invaded.",
			"The damage to the plane rendered the portal the Chimpions created powerless, leaving them unable to return home. The remaining Warriors continued to fight to preserve any remaining hope for salvation, with annihilation seemingly inevitable, but it was not the end...",
			"<div class='grid grid-cols-1 mb-8'><div><img src='/images/tws/laurenceantony/mwxc_ch4.jpg' /></div></div>",
		]
	},
	{
		artist: 'unrevealed',
		date: 'TBD',
		piece: {
			path: "",
			teaserPath: "tws_banner_teaser.png",
			title: "Edition 7",
			revealed: false,
		},
	},
	{
		artist: 'unrevealed',
		date: 'TBD',
		piece: {
			path: "",
			teaserPath: "tws_banner_teaser.png",
			title: "Edition 8",
			revealed: false,
		},
	},
	{
		artist: 'unrevealed',
		date: 'TBD',
		piece: {
			path: "",
			teaserPath: "tws_banner_teaser.png",
			title: "Edition 9",
			revealed: false,
		},
	},
	{
		artist: 'unrevealed',
		date: 'TBD',
		piece: {
			path: "",
			teaserPath: "tws_banner_teaser.png",
			title: "Edition 10",
			revealed: false,
		},
	},
];
