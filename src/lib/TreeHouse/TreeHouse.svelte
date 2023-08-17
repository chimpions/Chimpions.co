<script>
    import BackToTop from '$lib/BackToTop.svelte';
    import Navigation from '$lib/Navigation/Navigation.svelte';
    import Container from "$lib/TreeHouse/Container.svelte";
    import "$lib/css/global.css";
    import { onMount } from 'svelte';

    let innerWidth = 0;

    onMount(() => {
        const doc = document.documentElement;
        doc.setAttribute('tabindex', '-1');
        doc.focus();
        doc.removeAttribute('tabindex');
    });
</script>



<svelte:window bind:innerWidth />
<Navigation/>
<section class="container">
    <div class="intro">
        <h1 class="heading">The Treehouse</h1>
        <h2 class="subsectionHeading">What is The Treehouse?</h2>
        <p class="subsectionParagraph">The Treehouse is a subcommunity of this discord curated by the Chimpions; a place where artists, collectors, and art appreciators come together. Artists can promote their work, vibe with a strong community of art lovers or get feedback on anything and everything art-related. It is a place where collectors get to connect with the top artists in Solana and at the same time discover up & coming artists along with the hottest auctions.</p>
        <h2 class="subsectionHeading">The Treehouse Mission - Why are we here?</h2>
        <p class="subsectionParagraph">We want to create a centralized hub to allow artists and collectors alike to join a community with similar values. We want to develop unique utility for their collections and to bring 1/1 art to the masses.</p>
        <h2 class="subsectionHeading">How to join The Treehouse?</h2>
        <p class="subsectionParagraph">Collect any of the Together We Stand editions to automatically receive the role to join The Treehouse! These are found primarily on Magic Eden under the Chimpions Creator page.</p>
        <h2 class="subsectionHeading">Who are the TreeHouse artists?</h2>
        <p class="subsectionParagraph">Below is the list of the artists of the Treehouse:</p>
    </div>
    <div class="columns">
        {#if innerWidth < 700}
            <Container numberOfColumns = {1} />
        {:else if innerWidth < 1000}
            <Container numberOfColumns = {2} />
        {:else}
            <Container numberOfColumns = {3} />
        {/if}
    </div>
</section>
<BackToTop />

<style>
    .container {
        width: 90%;
        margin: 0rem auto 6rem;
        padding-top: 6rem;
    }

    .intro {
        width: 89%;
        margin: auto;
    }

    .columns {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>