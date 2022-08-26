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
			["Tell us more about the piece you created for Together We Stand. What was your vision?", "My idea for the piece was to invite the Chimpions and @komori_nft into Matabolong’s world. It depicts their first meeting in a lush green forest."],
			["What is the story behind your main series Matasatu and Matabolong?", "I created Matasatu as a one eyed animal shapeshifter, and Matabolong as a hollow-eyed plant shapeshifter. After creating several pieces I started to add more storytelling through these characters. On Solana, I mainly create artworks that visualize Matabolong’s journey around the forest and other places he visits."],
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
			"Nyaumon is the co-founder of Yume Labs and has provided art direction for their various collections, including Kitten Coup and Glitterflies. She has also collaborated with Famous Fox Federation and Just Ape on banners and artwork. ",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Read our full <a href='https://twitter.com/TheChimpions/status/1563212852474761216?s=20&t=_su4m4PfmlfOX_pLuACQpA' target='_blank' class='text-gray-100 underline'>artist interview here</a></div>",
			"<h1 class='text-xl text-gray-100 pt-4 md:pt-8'>About Yume Labs</h1>",
			"Yume Labs is the brainchild of Misty Bayou and NYaUmon: a multi-project umbrella organization dedicated to realizing the potential of Solana NFTs and the decentralized economy that they open up.",
			"<div class='border-l-2 bg-pink-500 bg-opacity-10 p-2 pl-4 rounded'>Check out their <a href='https://docs.google.com/document/d/1ojrTcNDDWhcAuylcuf2m6nK8J6TeRljijZcPJoFWRg4/edit?usp=sharing' target='_blank' class='text-gray-100 underline'>Vision Document</a> for a broader overview of who they are and what they are building.</div>",
		],
	},
	{
		artist: 'unrevealed',
		date: 'TBD',
		piece: {
			path: "",
			teaserPath: "tws_banner_teaser.png",
			title: "Edition 3",
			revealed: false,
		},
	},
	{
		artist: 'unrevealed',
		date: 'TBD',
		piece: {
			path: "",
			teaserPath: "tws_banner_teaser.png",
			title: "Edition 4",
			revealed: false,
		},
	},
	{
		artist: 'unrevealed',
		date: 'TBD',
		piece: {
			path: "",
			teaserPath: "tws_banner_teaser.png",
			title: "Edition 5",
			revealed: false,
		},
	},
	{
		artist: 'unrevealed',
		date: 'TBD',
		piece: {
			path: "",
			teaserPath: "tws_banner_teaser.png",
			title: "Edition 6",
			revealed: false,
		},
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
