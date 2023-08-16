<script>
    import Navigation from "../Navigation/Navigation.svelte";
	import { drops } from '../_content/tws.svelte';
    // @ts-ignore
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faPaintBrush, faCalendarAlt } from '@fortawesome/free-solid-svg-icons/index.js';
    import { faTwitter } from '@fortawesome/free-brands-svg-icons/index.js';
    import "/public/css/global.css";
    import BackToTop from '../BackToTop.svelte';

    let windowWidth = window.innerWidth;

    function updateWindowSize() {
        windowWidth = window.innerWidth;
    }

    window.addEventListener('resize', updateWindowSize);
</script>



<Navigation />
<section class="container">
	<h1 class="heading">Treehouse Presents...</h1>
	<div class="tws-grid">
		<div>
			<img class="rounded"
            src='images/tws/tws_banner.png'
            alt="TWS banner" />
		</div>
        <br/><br/>
		<div>
            <p class="subsectionParagraph">
                The Chimpions proudly present ‘Together We Stand’, a partnership with amazing artists to create small supply art editions that will elevate the artist community, empower collectors, and deepen the art / utility connection.
            </p>
            <p class="subsectionParagraph">
                Each edition will be created by an iconic artist or project and will depict Chimpions standing together with allies against dark forces.
            </p>
            <p class="subsectionParagraph">
                <strong style="font-weight: bold">Artists</strong> will be compensated for their work, receive secondary royalties, expand their reach to new audiences, be featured in promotional threads, gain support for future auctions, and gain a new community of supporters in The Treehouse, the Chimpions’ art-focused Discord channels.
            </p>
            <p class="subsectionParagraph">
                <strong style="font-weight: bold">Collectors</strong> will have new opportunities to collect and enjoy art from their favorite artists. Each piece will also serve as an access card with multiple layers of utility which will welcome a wider range of NFT enthusiasts to explore each edition.
            </p>
            <p class="subsectionParagraph">
                Read more about the vision for Together We Stand <a href='https://twitter.com/TheChimpions/status/1549412745719816197?s=20&t=FQ_D4JF10bTHVwFYWy5-Sg' target="_blank" rel="noreferrer" style='color: inherit; text-decoration: underline'>here</a> or explore each edition below.
            </p>
		</div>
	</div>
	<h2 class="subsectionHeading">Editions</h2>
	<div class="dropContainer">
		{#each drops as drop}
            <a href={`/together-we-stand/${drop.artistPath}`}>
                <div class="tws-banner">
                    {#if (drop.piece.revealed===true)}
                        <img
                            class="rounded"
                            src={`images/tws/${drop.piece.teaserPath}`}
                            alt="Together We Stand Piece"
                        />
                    {:else}
                        <img
                            class="rounded unrevealed"
                            src={`images/tws/${drop.piece.teaserPath}`}
                            alt="Together We Stand Piece's Teaser"
                        />
                    {/if}
                    <div class='tws-edition'>
                        <div class='pieceTitleContainer'>
                            <div class="title">{drop.piece.title}</div>
                        </div>
                        <div class="tws-grid">
                            <div class="tws-info">
                                <div>
                                    <Fa icon={faPaintBrush} size="sm" />
                                    {drop.artist}
                                </div>
                            </div>
                            {#if windowWidth > 500}
                            <div class="tws-info">
                                <div>
                                    <Fa icon={faTwitter} size="sm" />
                                    {drop.twitter}
                                </div>
                            </div>
                            {/if}
                            <div class="tws-info">
                                <div>
                                    <Fa icon={faCalendarAlt} size="sm" />
                                    {drop.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
		{/each}
	</div>
</section>
<BackToTop />




<style>
    .tws-banner {
        position: relative;
        width: 100%;
        color: white;
        box-shadow: 1px 5px 10px var(--darker-purple);
        border: 4px transparent solid;
        border-radius: 1rem;
        transition: border 0.2s ease;
    }

    .rounded {
        border-radius: 0.75rem;
        width: 100%;
        vertical-align: bottom;
    }

    .unrevealed {
        opacity: 0.5;
    }

    .tws-banner:hover {
        border-color: rgb(233, 213, 255);
    }

    .tws-edition {
        position: absolute;
        width: 80%;
        height: 80%;
        top: 10%;
        left: 10%;
        background-color: rgb(108 37 179 / 0.3);
        border-radius: 1rem;
        z-index: 1;
    }

    .pieceTitleContainer {
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 1rem;
        background-color: rgb(67 18 115 / 0.6);
        font-size: 1.25rem;
        padding-left: 0.25rem;
        padding-right: 0.25rem;
    }

    .title {
        font-size: 1.5rem;
    }

    .tws-grid {
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .tws-info {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 0.5rem;
    }

    @media (min-width: 900px) {
        .tws-grid {
            height: 60%;
        }

        .tws-edition {
            width: 60%;
            height: 60%;
            top: 20%;
            left: 20%;
        }

        .title {
            font-size: 2rem;
        }
    }

    @media (max-width: 500px) {
        .tws-grid {
            height: 60%;
        }

        .tws-edition {
            width: 80%;
            height: 60%;
            top: 20%;
            left: 10%;
        }

        .title {
            font-size: 1rem;
        }

        .tws-info {
            font-size: 0.75rem;
        }
    }
</style>