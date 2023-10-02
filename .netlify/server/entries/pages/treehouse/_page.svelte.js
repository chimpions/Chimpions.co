import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../../chunks/ssr.js";
import { B as BackToTop } from "../../../chunks/BackToTop.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faIdCard, faLink } from "@fortawesome/free-solid-svg-icons/index.js";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons/index.js";
const artists = [
  {
    piece: "ChimpionXCritters.png",
    bio: "Founder/artist of Suns, the pixel art studio behind @solsunsets and @critterscult.",
    twitter: "https://twitter.com/rgb0x00",
    misc: "https://critterscult.com/",
    exchangeart: "https://exchange.art/artists/suns/series",
    name: "rgb",
    tws: true
  },
  {
    piece: "Utopia_PFP.jpg",
    bio: "I am a neo-surrealist artist who focuses on dark surrealism and abstract works.\n\n\nThe art I create is from the deepest recesses of my mind, free from the shackles of the world where my Utopia exists. My art represents that part of my mind which I choose to share with you.",
    twitter: "https://twitter.com/Utopia_artist",
    instagram: "https://www.instagram.com/utopia_artist/",
    exchangeart: "https://exchange.art/utopia/nfts",
    name: "Utopia"
  },
  {
    piece: "artistas3 - lucas marculino.png",
    bio: "Hi my name is Marculino and i am an independent and Brazilian artist. I mainly do pixel art and animations.",
    twitter: "https://twitter.com/marculinopng",
    portfolio: "https://t.co/bzVv3ni7aQ",
    exchangeart: "https://exchange.art/artists/marculinopng/nfts",
    marmelade: "https://famousfoxes.com/marmalade/4jKL6AZCUr8xT9dQN4jD7ZkCjJqdWPbtqkkSzNGZoDxX",
    name: "Marculino"
  },
  {
    piece: "57-A64-F31-E49-F-4589-809-B-4-D3-A67-D0-BCF5-odd-skull.gif",
    bio: "An odd artist in an odd world.",
    twitter: "https://twitter.com/OddSkull_",
    misc: "https://magiceden.io/creators/odd_skull",
    marmelade: "https://famousfoxes.com/marmalade/5VrYihmR9bQPpDzjmKuFzjS2fXHW1aTnZreHjdooqREP",
    name: "OddSkull"
  },
  {
    piece: "artifact - Matasatu Matabolong.jpg",
    bio: "I'm an architect/illustrator from Indonesia. I created Matasatu and Matabolong as the main characters fof my artworks. Matasatu is a one-eyed animal shapeshifter, and Matabolong is a hollow-eyed plant shapeshifter. I create artworks based on them, on their journey, and on their character design.",
    twitter: "https://twitter.com/Matabolong",
    misc: "https://objkt.com/profile/matasatumatabolong/created",
    instagram: "https://www.instagram.com/matasatu_matabolong/",
    name: "Matasatu / Matabolong",
    tws: true
  },
  {
    piece: "DeriKei - Carmen Cano.png",
    bio: "I am a cat, that draws! I draw colourful, cute, cool, awesome things, of any and all kinds! I enjoy telling a story through my artwork!",
    twitter: "https://twitter.com/nyaumon",
    portfolio: "https://nyaumon.wixsite.com/website",
    misc: "https://linktr.ee/nyaumon",
    exchangeart: "https://exchange.art/artists/Nyaumon/nfts",
    marmelade: "https://famousfoxes.com/marmalade/D7Rzr6YnbKvHsmvrDbr8bbYecDcAZEeE5sJNMn1XQhDX",
    name: "Nyaumon",
    tws: true
  },
  {
    piece: "231A0845 - kyle danley.jpg",
    bio: 'Wetiko is the creative output of artist Kyle Danley. "Wetiko" was first written on the streets of Detroit around 2003. For the past 6 years, Wetiko has been a full time painter and mural artist, travelling all over the US creating large public and private murals. Within Solana, the most sought after NFTs are the Edith collection. 10% of mural profits are rebated to Edith holders directly. Some clients/collaborators include Jeep Chrylser, the Detroit Pistons, Oculus, Arcteryx',
    twitter: "https://www.twitter.com/wetikos",
    instagram: "https://www.instagram.com/wetiko.work",
    portfolio: "https://www.wetiko.work",
    exchangeart: "https://exchange.art/artists/wetiko/nfts",
    name: "Wetiko",
    chimpion: true
  },
  {
    piece: "cosplayx_me_500x500 - DXC777 デッドキャット.gif",
    bio: "Founder and artist of the @cosplayxio collection and other alternative collections.",
    twitter: "https://twitter.com/DXC7777",
    misc: "https://www.magiceden.io/marketplace/cosplayx",
    instagram: "https://twitter.com/cosplayxio",
    portfolio: "https://cosplayx.io",
    marmelade: "https://famousfoxes.com/marmalade/73RQ9nfbzdp9ZQNnocm3uN51GEKf6YZ7RCWfFWyoVqd6",
    name: "zeroxxx",
    chimpion: true
  },
  {
    piece: "01-lo-rez-720x720 - Zen0 Morph.png",
    bio: "Artist best known for nostalgic lo-rez pixel art. Currently creating Pixel Places, Monster Friends + Zen-ROMs. Launched Zen0verse - 777 generative places in November 2021. Passionate about collecting art as well as creating it. Member of @_ledao and @The_URS_",
    twitter: "https://twitter.com/zen0m",
    portfolio: "https://zen0verse.notion.site/zen0verse/zen0m-3c25fb96ba654022961f58e048b1cadb",
    marmelade: "https://famousfoxes.com/marmalade/zenom3SnXK6k2UJm73jRQ1n8U7KkLPrTypDatKjGxoL",
    name: "Zen0"
  },
  {
    piece: "Bony LOGO_glicht - alirio silva.png",
    bio: "I like to create pixel art, illustrations and creative coding. My art is inspired in Skulls, doodles and retro techie vibes. For me, art is a process of constant exploration where I seek to express everything I imagine and feel about my inner world.",
    twitter: "https://twitter.com/4c3m1t4",
    portfolio: "https://tell.ie/4c3m1t4/ucqTwJWdCL8s",
    marmelade: "https://famousfoxes.com/marmalade/9m8gjreD72K4LcvCwNQaWaAGLcY1kBwSjS37VyWUT5wr",
    name: "4c3m1t4"
  },
  {
    piece: "lahseminit.gif",
    bio: "A fraction of collective opinions, and a struggling web3 artist",
    twitter: "https://instagram.com/lahseminit",
    marmelade: "https://famousfoxes.com/marmalade/EpFbZxEXTcsxSFsrk3SJmYmEid47urqH2vNZrTzU4q5q",
    name: "Faiq"
  },
  {
    piece: "Naut_Orange_001 copy - E Ashenden.jpg",
    bio: "Artist creating storytelling driven collections",
    twitter: "https://twitter.com/ES_Artwork",
    name: "Edgar Ashenden"
  },
  {
    piece: "Untitled-Artwork - 2022-07-27T220336.713 - Eko Goenarto.png",
    bio: "Professional illustrator obsessed with creating cute, colorful, and cool.  Artist behind the Pepita and Friends and the Sol Badguys.",
    twitter: "https://twitter.com/duuurhminic",
    portfolio: "https://lynkfire.com/durhminic",
    marmelade: "https://famousfoxes.com/marmalade/8Yh2YpsPSrPx1Ua5rqncsANHFi3nBLdjU5WWVmruMs6p",
    name: "Durhminic"
  },
  {
    piece: "OWL SKULL [f0000](1) - Agil Prakoso.png",
    bio: "2D animator",
    twitter: "https://twitter.com/agil8/",
    name: "Agil Prakoso"
  },
  {
    piece: "2ADB4226-0797-4B00-B167-7BCEA03B5DD0 - Skye Green.jpeg",
    bio: "Skye Green: Raised in the Deep South on the bayou and swamps of Louisiana, I am an independent creative who broke into the NFT space in August 2021 with my collection Voiids accompanied by branded merch and hand drawn 1/1 art. Eventually to be scouted in Jan 2022 by project management and now currently the head artist of Tombstoned High Society.",
    twitter: "https://twitter.com/SkyeKiing",
    misc: "https://opensea.io/collection/voiids",
    name: "Skye"
  },
  {
    piece: "eyes - Greenview Media.png",
    bio: `Hey there, I'm Greenview! Canadian NFT artist, currently working on telling the interactive story of @ShepardsSol on Solana. Join the story driven journey to save their home and stop the advance of "The Flare".`,
    twitter: "https://twitter.com/GreenviewSol",
    misc: "https://twitter.com/ShepardsSol",
    marmelade: "https://famousfoxes.com/marmalade/5Lowd9vydvRLSdPM89qS2vT6acT6Tpx3AVCaVhNBZrkZ",
    name: "Greenview"
  },
  {
    piece: "Rome colaboracion final - Toronja GB.gif",
    bio: "Pixel art in two colors, pink and blue",
    twitter: "https://twitter.com/Pinkyblu_",
    marmelade: "https://famousfoxes.com/marmalade/26n9sNhZzvX5DJbtfmkXATPucJtAS5Rp7zMw8cWfDY64",
    name: "Pinkyblu"
  },
  {
    piece: "Banner - Filthy Few.png",
    bio: "I'm Jerome a multi-medium artist from Scotland!",
    twitter: "https://twitter.com/JeromeNft",
    exchangeart: "https://exchange.art/artists/Jerome/nfts",
    marmelade: "https://famousfoxes.com/marmalade/DMgPQMC5hDsRMdmtBhFjDF6jNrT2Pgz2Pr9EFZ3eCoe3",
    name: "Jerome"
  },
  {
    piece: "Incantation - Morrvog.jpg",
    bio: " Intricate drawings that highlight uncomfortable truths",
    twitter: "https://twitter.com/RuptureNFT",
    portfolio: "https://www.rupturenft.com/",
    name: "Rupture"
  },
  {
    piece: "joosk pfp - jooski jooski.jpg",
    bio: "Jooski (b. 2001) is a self-taught digital artist from the U.K. He strives to depict the darkest emotions that reside within human nature via the use of raw textures & monochromatic contrast. Using art as a means of self-discovery, he has continued to evolve and explore new techniques in his currently-releasing Untitleds collection.",
    twitter: "https://twitter.com/64jooski",
    instagram: "https://www.instagram.com/64jooski/",
    portfolio: "https://www.jooski.art/",
    exchangeart: "https://exchange.art/artists/Jooski/series",
    name: "Jooski"
  },
  {
    piece: "0B99BF22-5327-4F91-B0AD-028F9A1EE671 - Wilsen Way.jpeg",
    bio: "I'm a street photographer and abstract painter",
    twitter: "https://twitter.com/wilsenway",
    portfolio: "https://linktr.ee/wilsenway",
    name: "Wilsen Way"
  },
  {
    piece: "6EBB3119-35D2-4EAE-B94C-1DAAB9E66DA9 - Tiny Hunter.jpeg",
    bio: "Hi, I'm muimooi, an Artist illustrator.",
    twitter: "https://twitter.com/muimooi",
    portfolio: "https://linktr.ee/muimooi",
    exchangeart: "https://exchange.art/artists/muimooi%20/nfts",
    marmelade: "https://famousfoxes.com/marmalade/4JE8dPnPgdmtuxtyhBECc5Zd8o8haF4tNTdoZZYaPyQJ",
    name: "muimooi"
  },
  {
    piece: "IMG_0343 - Picopops NFT.jpg",
    bio: "Hello! I'm Pipopops, a digital artist from Indonesia, I draw characters & sci-fi stuff wrapped in vibrant colors.",
    twitter: "https://twitter.com/Picopops",
    marmelade: "https://famousfoxes.com/marmalade/2DN6ZDYTfrsvrShCGEB1kfGXwZNWCwSD4Fw6eNNRDAre",
    name: "Picopops"
  },
  {
    piece: "Pimpin Jack 000 low res - Michael Miller.jpg",
    bio: "Hi all! Dark Art of Miller here! A dark artist who works in graphite, oil and digital mediums. My main goals are to make a dark art universe with my traditional based art and to spread good vibes via my Pimpin Jacks. Join me and watch the pieces fall together. I am building something you don't want to miss. ;)",
    twitter: "https://twitter.com/DarkArtofMiller",
    misc: "https://www.facebook.com/DarkArtofMiller",
    instagram: "https://www.instagram.com/michaelmiller1976",
    portfolio: "https://michaelmillerart.bigcartel.com/",
    exchangeart: "https://exchange.art/artists/DarkArtofMiller/series",
    name: "Michael Miller"
  },
  {
    piece: "The chimpions x findante texture low - Beast Media Indonesia.jpg",
    bio: "Hi I'm Dante, I'm UNSTOPPABLE, I convert RAGE energy into strength and passion to create artwork and dope art. Even though my dream will never come true, i'll keep this pain and continue to shine.",
    twitter: "https://www.instagram.com/findante_/",
    portfolio: "https://linktr.ee/beastmediaindonesia",
    name: "Findante"
  },
  {
    piece: "pixel_profile_vibrant_large_solana - mint rain.png",
    bio: "Pixel artist and music producer discovering worlds on the blockchain",
    twitter: "https://twitter.com/mintrainmint",
    instagram: "https://www.instagram.com/mintrainmint",
    portfolio: "https://mintrain.co/art",
    exchangeart: "https://exchange.art/artists/mint%20rain/nfts",
    name: "Mint Rain"
  },
  {
    piece: "IMG_8726 - Vincenzo Pagnotta.JPG",
    bio: "Yo! My name is Vincenzo and I'm an 18 year old art student studying at Parsons School of Design.",
    twitter: "https://twitter.com/VWPNY",
    instagram: "https://www.instagram.com/vwpny/",
    portfolio: "https://www.vincenzopagnotta.com",
    exchangeart: "https://exchange.art/artists/vincenzo/nfts",
    name: "Vincenzo"
  },
  {
    piece: "7F8A3521-F24E-4CBD-AA7C-44B892FBB071 - Lord Art_tech.jpg",
    bio: "A cyber religion digital fine artist. Inspired by the past, creating for the future. A member of Ministry of Art & The URS.",
    twitter: "https://twitter.com/arttech_nft",
    misc: "https://linktr.ee/art_tech",
    instagram: "https://www.instagram.com/art_tech",
    portfolio: "https://www.artistechnology.com",
    exchangeart: "https://exchange.art/artists/ART:TECH",
    name: "ART:TECH"
  },
  {
    piece: "Untitled_Artwork - 2022-07-15T114730.593 - Steve Anderson.png",
    bio: "I've been an NFT artist since early 2021, I have been an artist for around 10 years now and I want to expand my network / friends as much as I can! I hope to see you soon!!\n\nI have a few series on chain,\n\nMxsked, Villains, and a couple others that I continue working on! \n\nI do paint, manga and pixel art",
    twitter: "https://twitter.com/hell_spawns",
    misc: "https://twitter.com/hell_spawns",
    instagram: "https://www.instagram.com/1yamazaki/",
    exchangeart: "https://exchange.art/artists/Villains/nfts",
    name: "M / Hellspxwn"
  },
  {
    piece: "6-wp2iNn_400x400 - W.jpg",
    bio: "I am a self-taught artist with a background in textile and fashion design. I have been focusing on drawings and large-scale site-specific pieces since April 2021. Fashion and surrealism are common themes in my work, which aims to portray women as proud and stylish protagonists.",
    twitter: "https://twitter.com/shadyladyNFT",
    misc: "https://linktr.ee/shadyladyNFT",
    exchangeart: "https://exchange.art/collections/The%20First%20Year",
    name: "Shady Lady"
  },
  {
    piece: "D3B27FCE-1F4C-4DF6-8989-83224B480D2A - Tobias Svenlöv.jpeg",
    bio: "Wordy is an artist that loves to combine all kinds of styles in order to create something truly unique. ",
    twitter: "https://www.twitter.com/imnotwordy",
    misc: "https://lynkfire.com/imnotwordy",
    exchangeart: "https://exchange.art/artists/imnotwordy/nfts",
    marmelade: "https://famousfoxes.com/marmalade/CWrjfccxBYeVfxuAn4U65XAzNVAqFXeQTNcFVYAHTGXk",
    name: "Wordy"
  },
  {
    piece: "56B4E5B0-82B8-445E-9528-AF44F0DF6CCE - Mama_s Boy.jpeg",
    bio: "Time Thief is a 3d artist in the Solana space who had his first introduction into the world of art through creating designer figurines. During this time, he  participated in custom shows nation wide and produced various figurines overseas. Previous to art, he competed in strategic robotics and combat robotics (BattleBots) against people from all around the world. In the NFT scene, Time Thief works to foster a strong community while striving to do what has never been done before in the Solana ecosystem. Each piece is derived from Time Thief's imagination and drive to continue to evolve his artistic style.",
    twitter: "Timethiefnft",
    portfolio: "https://www.timethief.me/",
    exchangeart: "https://exchange.art/artists/Time%20Thief/nfts",
    name: "Time Thief "
  },
  {
    piece: "F30F5EBF-A899-48A5-841B-A0374B7DAD01 - Smoky Head.jpeg",
    bio: "Self-Taught 3D Artist",
    twitter: "https://twitter.com/thesmokyhead",
    misc: "https://nftb.io/user/0x11562b84dc5d8f711b1d67e0ffe7a7322f34a9c7/",
    instagram: "https://instagram.com/thesmokyhead",
    exchangeart: "https://exchange.art/artists/SmokyHead/nfts",
    name: "Alexander "
  },
  {
    piece: "pfp - septadenata darmahyto.png",
    bio: 'SDNT is a Visual artist who tries to depict the two sides of every story. Life & Death, Order & Chaos, and the balance between that fascinating to explore. and now continue his journey to grow his visual voice through a new collection called "Explorativism',
    twitter: "https://twitter.com/septadenata",
    instagram: "https://www.instagram.com/septadenata/",
    portfolio: "https://linktr.ee/SDNT",
    exchangeart: "https://exchange.art/artists/SDNT/nfts",
    marmelade: "https://famousfoxes.com/marmalade/2sqQ9ipqs8hvFgm9ez34RGHBaadmay6H7p87H65bGpnJ",
    name: "SDNT"
  },
  {
    piece: "deergirlcommission-pfp-Arc-Jamie.png",
    bio: "Game Designer and Pixel Artist",
    twitter: "https://twitter.com/AstraArc",
    portfolio: "https://linktr.ee/worldofastria",
    name: "AstraArc"
  },
  {
    piece: "4nl-G-vy0766-Bm4-TWy4-Zo-VSiko-YIM4-Sf-Gw-Mr9-EWA-Neuromind.png",
    bio: "I'm Neuromind and I've been making digital paintings since 2010 utilizing programs such as Photoshop, Fractal, AI tools and various 3d programs. I'm also an aspiring game developer and hope to start making my own small game as well. I was drawn to Solana because of the Art and I've stayed because of the people.",
    twitter: "https://twitter.com/NeuromindArt",
    misc: "https://twitter.com/sol9lives",
    marmelade: "https://famousfoxes.com/marmalade/HVmwvpRsDUAmT8p1yaiTvaQm2oGAZFuuABFVxK19xHvT",
    name: "Neuromind"
  }
];
const TreehouseArtists_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ":root{--bg-artist:var(--purple)}.artistBox.svelte-1p61pbg{background-color:var(--dark-purple);border-radius:0.25rem;margin-bottom:4vw;padding:1rem;border-width:4px;border-color:transparent}.artistBox.svelte-1p61pbg:hover{background-color:var(--purple);--bg-artist:var(--light-purple)}.artistBox.svelte-1p61pbg{transform:translateY(300px);-webkit-transform:translateY(300px);opacity:0;transition:opacity 0.5s ease, transform 0.5s ease-out}.artistBox.active.svelte-1p61pbg{transform:translateY(0px);-webkit-transform:translateY(0px);opacity:1}.artist.svelte-1p61pbg{text-align:center;border-radius:0.25rem;background-color:var(--bg-artist);font-size:2.25rem;line-height:2.5rem;padding:1rem}.artistBio.svelte-1p61pbg{display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));margin-top:1.25rem;text-align:justify}.socialLinks.svelte-1p61pbg{font-size:1.25rem;line-height:1.75rem;margin-top:1.5rem;margin-bottom:0.5rem;color:#fff}.bioContainer.svelte-1p61pbg{display:flex;align-items:center;column-gap:0.5rem;margin-left:1rem;color:rgb(209 213 219);text-decoration-line:underline}.artLinks.svelte-1p61pbg{font-size:1.25rem;line-height:1.75rem;padding-top:0.5rem;margin-top:0.5rem;margin-bottom:0.5rem;color:#fff}a.svelte-1p61pbg{overflow:hidden;margin-bottom:0.25rem}a.svelte-1p61pbg:hover{color:rgb(255 255 255)}",
  map: null
};
const Treehouse_artists = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let thisBox;
  let { piece = "" } = $$props;
  let { name = "" } = $$props;
  let { bio = "" } = $$props;
  let { twitter = "" } = $$props;
  let { instagram = "" } = $$props;
  let { portfolio = "" } = $$props;
  let { marmelade = "" } = $$props;
  let { exchangeart = "" } = $$props;
  let { misc = "" } = $$props;
  if ($$props.piece === void 0 && $$bindings.piece && piece !== void 0)
    $$bindings.piece(piece);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.bio === void 0 && $$bindings.bio && bio !== void 0)
    $$bindings.bio(bio);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.instagram === void 0 && $$bindings.instagram && instagram !== void 0)
    $$bindings.instagram(instagram);
  if ($$props.portfolio === void 0 && $$bindings.portfolio && portfolio !== void 0)
    $$bindings.portfolio(portfolio);
  if ($$props.marmelade === void 0 && $$bindings.marmelade && marmelade !== void 0)
    $$bindings.marmelade(marmelade);
  if ($$props.exchangeart === void 0 && $$bindings.exchangeart && exchangeart !== void 0)
    $$bindings.exchangeart(exchangeart);
  if ($$props.misc === void 0 && $$bindings.misc && misc !== void 0)
    $$bindings.misc(misc);
  $$result.css.add(css$2);
  return ` <div class="${["artistBox svelte-1p61pbg", ""].join(" ").trim()}"${add_attribute("this", thisBox, 0)}><div class="artist svelte-1p61pbg"><div><img style="border-radius: 0.25rem; width: 100%"${add_attribute("src", `images/artist/${piece}`, 0)} alt="Artist's piece"></div> <h2 style="font-size: 2.5rem; margin: 0.5rem 0 0 0">${escape(name)}</h2></div> <div class="artistBio svelte-1p61pbg">${escape(bio)}</div> <div><h2 class="socialLinks svelte-1p61pbg" data-svelte-h="svelte-1pbc20z">Social Links</h2> ${twitter ? `<a class="bioContainer svelte-1p61pbg"${add_attribute("href", twitter, 0)}>${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "sm" }, {}, {})}Twitter</a>` : ``} ${instagram ? `<a class="bioContainer svelte-1p61pbg"${add_attribute("href", instagram, 0)}>${validate_component(Fa, "Fa").$$render($$result, { icon: faInstagram, size: "sm" }, {}, {})}Instagram</a>` : ``} <h2 class="artLinks svelte-1p61pbg" data-svelte-h="svelte-j7cz27">Art Links</h2> ${portfolio ? `<a class="bioContainer svelte-1p61pbg"${add_attribute("href", portfolio, 0)}>${validate_component(Fa, "Fa").$$render($$result, { icon: faIdCard, size: "sm" }, {}, {})}Portfolio</a>` : ``} ${marmelade ? `<a class="bioContainer svelte-1p61pbg"${add_attribute("href", marmelade, 0)}>${validate_component(Fa, "Fa").$$render($$result, { icon: faLink, size: "sm" }, {}, {})}Marmelade</a>` : ``} ${exchangeart ? `<a class="bioContainer svelte-1p61pbg"${add_attribute("href", exchangeart, 0)}>${validate_component(Fa, "Fa").$$render($$result, { icon: faLink, size: "sm" }, {}, {})}Exchange Art</a>` : ``} ${misc ? `<a class="bioContainer svelte-1p61pbg"${add_attribute("href", misc, 0)}>${validate_component(Fa, "Fa").$$render($$result, { icon: faLink, size: "sm" }, {}, {})} ${misc.length > 30 ? `${escape(misc.slice(0, 30))}` : `${escape(misc)}`}</a>` : ``}</div> </div>`;
});
const Container_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".dropsContainer1.svelte-10c42d8{width:100%;padding:0% 2% 0% 2%}.dropsContainer2.svelte-10c42d8{width:50%;padding:0% 2% 0% 2%}.dropsContainer3.svelte-10c42d8{width:33.3333334%;padding:0% 2% 0% 2%}",
  map: null
};
const Container = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { numberOfColumns = 1 } = $$props;
  let numberOfArtists = artists.length;
  let columnOne = [];
  let columnTwo = [];
  let columnThree = [];
  if (numberOfColumns === 1) {
    columnOne = [...artists];
  } else if (numberOfColumns === 2) {
    for (let i = 0; i < numberOfArtists; i++) {
      if (i % 2 === 0) {
        columnOne.push(artists[i]);
      } else {
        columnTwo.push(artists[i]);
      }
    }
  } else {
    for (let i = 0; i < numberOfArtists; i++) {
      if (i % 3 === 0) {
        columnOne.push(artists[i]);
      } else if (i % 3 === 1) {
        columnTwo.push(artists[i]);
      } else {
        columnThree.push(artists[i]);
      }
    }
  }
  if ($$props.numberOfColumns === void 0 && $$bindings.numberOfColumns && numberOfColumns !== void 0)
    $$bindings.numberOfColumns(numberOfColumns);
  $$result.css.add(css$1);
  return `${numberOfColumns === 1 ? `<div class="dropsContainer1 svelte-10c42d8">${each(columnOne, (artist) => {
    return `${validate_component(Treehouse_artists, "TreehouseArtists").$$render(
      $$result,
      {
        piece: artist.piece,
        name: artist.name,
        bio: artist.bio,
        twitter: artist.twitter,
        instagram: artist.instagram,
        portfolio: artist.portfolio,
        marmelade: artist.marmelade,
        exchangeart: artist.exchangeart,
        misc: artist.misc
      },
      {},
      {}
    )}`;
  })}</div>` : `${numberOfColumns === 2 ? `<div class="dropsContainer2 svelte-10c42d8">${each(columnOne, (artist) => {
    return `${validate_component(Treehouse_artists, "TreehouseArtists").$$render(
      $$result,
      {
        piece: artist.piece,
        name: artist.name,
        bio: artist.bio,
        twitter: artist.twitter,
        instagram: artist.instagram,
        portfolio: artist.portfolio,
        marmelade: artist.marmelade,
        exchangeart: artist.exchangeart,
        misc: artist.misc
      },
      {},
      {}
    )}`;
  })}</div> <div class="dropsContainer2 svelte-10c42d8">${each(columnTwo, (artist) => {
    return `${validate_component(Treehouse_artists, "TreehouseArtists").$$render(
      $$result,
      {
        piece: artist.piece,
        name: artist.name,
        bio: artist.bio,
        twitter: artist.twitter,
        instagram: artist.instagram,
        portfolio: artist.portfolio,
        marmelade: artist.marmelade,
        exchangeart: artist.exchangeart,
        misc: artist.misc
      },
      {},
      {}
    )}`;
  })}</div>` : `<div class="dropsContainer3 svelte-10c42d8">${each(columnOne, (artist) => {
    return `${validate_component(Treehouse_artists, "TreehouseArtists").$$render(
      $$result,
      {
        piece: artist.piece,
        name: artist.name,
        bio: artist.bio,
        twitter: artist.twitter,
        instagram: artist.instagram,
        portfolio: artist.portfolio,
        marmelade: artist.marmelade,
        exchangeart: artist.exchangeart,
        misc: artist.misc
      },
      {},
      {}
    )}`;
  })}</div> <div class="dropsContainer3 svelte-10c42d8">${each(columnTwo, (artist) => {
    return `${validate_component(Treehouse_artists, "TreehouseArtists").$$render(
      $$result,
      {
        piece: artist.piece,
        name: artist.name,
        bio: artist.bio,
        twitter: artist.twitter,
        instagram: artist.instagram,
        portfolio: artist.portfolio,
        marmelade: artist.marmelade,
        exchangeart: artist.exchangeart,
        misc: artist.misc
      },
      {},
      {}
    )}`;
  })}</div> <div class="dropsContainer3 svelte-10c42d8">${each(columnThree, (artist) => {
    return `${validate_component(Treehouse_artists, "TreehouseArtists").$$render(
      $$result,
      {
        piece: artist.piece,
        name: artist.name,
        bio: artist.bio,
        twitter: artist.twitter,
        instagram: artist.instagram,
        portfolio: artist.portfolio,
        marmelade: artist.marmelade,
        exchangeart: artist.exchangeart,
        misc: artist.misc
      },
      {},
      {}
    )}`;
  })}</div>`}`}`;
});
const TreeHouse_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1jxl2ai{width:90%;margin:0rem auto 6rem;padding-top:6rem}.intro.svelte-1jxl2ai{width:89%;margin:auto}.columns.svelte-1jxl2ai{display:flex;flex-direction:row;justify-content:space-around}",
  map: null
};
const TreeHouse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return ` ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <section class="container svelte-1jxl2ai"><div class="intro svelte-1jxl2ai" data-svelte-h="svelte-1e3pog2"><h1 class="heading">The Treehouse</h1> <h2 class="subsectionHeading">What is The Treehouse?</h2> <p class="subsectionParagraph">The Treehouse is a subcommunity of this discord curated by the Chimpions; a place where artists, collectors, and art appreciators come together. Artists can promote their work, vibe with a strong community of art lovers or get feedback on anything and everything art-related. It is a place where collectors get to connect with the top artists in Solana and at the same time discover up &amp; coming artists along with the hottest auctions.</p> <h2 class="subsectionHeading">The Treehouse Mission - Why are we here?</h2> <p class="subsectionParagraph">We want to create a centralized hub to allow artists and collectors alike to join a community with similar values. We want to develop unique utility for their collections and to bring 1/1 art to the masses.</p> <h2 class="subsectionHeading">How to join The Treehouse?</h2> <p class="subsectionParagraph">Collect any of the Together We Stand editions to automatically receive the role to join The Treehouse! These are found primarily on Magic Eden under the Chimpions Creator page.</p> <h2 class="subsectionHeading">Who are the TreeHouse artists?</h2> <p class="subsectionParagraph">Below is the list of the artists of the Treehouse:</p></div> <div class="columns svelte-1jxl2ai">${`${validate_component(Container, "Container").$$render($$result, { numberOfColumns: 1 }, {}, {})}`}</div></section> ${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TreeHouse, "TreeHouse").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
