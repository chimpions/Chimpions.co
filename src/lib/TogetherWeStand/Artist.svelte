<script>
// @ts-nocheck

    import Navigation from "$lib/Navigation/Navigation.svelte";
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faPaintBrush } from '@fortawesome/free-solid-svg-icons/index.js';
    import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons/index.js';
    import "$lib/css/global.css";
    import BackToTop from '$lib/BackToTop.svelte';

    export let artist = "";
    export let twitter = "";
    export let portfolio = "";
    export let discord = "";
    export let piecePath = "";
    export let pieceTeaserPath = "";
    export let pieceTitle = "";
    export let pieceReleased = false;
    export let copy = [];
    export let qa = [];

</script>


<Navigation />
<section class="container">
    <h1 class="heading" style="text-align: center">{artist}</h1>
    <h2 class="subsectionHeading" style="text-align: center;">"{pieceTitle}"</h2>
    <div class="dropContainer" style="gap: 0.5rem;">
        <div>
            {#if pieceReleased}
                <img style="max-width: 100%" src={`/images/tws/${piecePath}`} alt="TWS art piece"/>
            {:else}
                <img style="max-width: 100%" src={`/images/tws/${pieceTeaserPath}`} alt="TWS art piece teaser"/>
            {/if}
        </div>
        <div class="tws-info">
            <div>
                <Fa icon={faPaintBrush} size="sm" />
                <a href={portfolio}>Portfolio</a>
            </div>
            <div>
                <Fa icon={faTwitter} size="sm" />
                <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
            </div>
            <div>
                <Fa icon={faDiscord} size="sm" />
                {discord}
            </div>
        </div>
        <div class="infos">
            {#if copy.length != 0}
                {#each copy as copyElem}
                    {#if copyElem[0] == "readMore"}
                        <p class="readMore">{@html copyElem[1]}</p>
                    {:else if copyElem[0] == "h1"}
                        <p class="title">{@html copyElem[1]}</p>
                    {:else}
                        <p class="subsectionParagraph">{@html copyElem[0]}</p>
                    {/if}
                {/each}
            {/if}
        </div>
        {#if qa.length != 0}
            <h2 class="subsectionHeading">Q &amp; A</h2>
            {#each qa as qaElem}
                <div>
                    <div class="qa">
                        <p class="subsectionQuestion">{qaElem[0]}</p>
                        <p class="subsectionAnswer" style="margin-bottom: 0px;">{qaElem[1]}</p>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</section>
<BackToTop />



<style>
    a {
        color: inherit;
    }

    .infos {
        margin-top: 3rem;
    }

    .tws-info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: var(--purple-white);
    }

    .subsectionParagraph {
        text-align: justify;
        line-height: 1.5rem;
        letter-spacing: 0.05rem;
        width: 100%;
        opacity: 0.8;
        margin-top: 0.5rem;
        color: var(--purple-white);
    }

    .title {
        color: var(--white-purple);
    }

    .readMore {
        border-left: 2px var(--whiter-purple) solid;
        background-color: rgb(31 6 56 / 1);
        padding: 0.5rem;
        padding-left: 1rem;
        border-radius: 0.25rem;
        margin-bottom: 4rem;
        color: var(--whiter-purple);
    }

    .subsectionQuestion {
        width: 100%;
        margin-top: 0rem;
        letter-spacing: 0.05em;
        color: var(--whiter-purple);
    }

	.subsectionAnswer {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
        letter-spacing: 0.05rem;
        color: var(--purple-white);
        padding-left: 1rem;
        border-left: 2px currentColor solid;
    }

    .qa {
        border-radius: 0.25rem;
        background-color: rgb(31 6 56 / 1);
        padding: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

@media (max-width: 500px) {
    .tws-info {
        font-size: 0.5rem;
    }
}
</style>