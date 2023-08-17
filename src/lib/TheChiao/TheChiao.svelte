<script>
    import Navigation from "$lib/Navigation/Navigation.svelte";
	import OurVision from './OurVision/OurVision.svelte';
    import BackToTop from '$lib/BackToTop.svelte';
    import "$lib/css/global.css";
    import Structure from "./Structure/Structure.svelte";
    import TreeHollow from "./TreeHollow/TreeHollow.svelte";
    import TheGallery from "./Gallery/TheGallery.svelte";

    let selected = "Structure";

</script>



<Navigation />
<section class="container">
	<h1 class="heading">The Chiao</h1>

    <div class="toShow">
        <button class="button {selected === 'Structure' ? 'selected' : ''}" on:click={() => selected = "Structure"}>Structure</button>
        <button class="button {selected === 'OurVision' ? 'selected' : ''}" on:click={() => selected = "OurVision"}>Our Vision</button>
        <button class="button {selected === 'TheGallery' ? 'selected' : ''}" on:click={() => selected = "TheGallery"}>The Gallery</button>
        <button class="button {selected === 'TreeHollow' ? 'selected' : ''}" on:click={() => selected = "TreeHollow"}>The Tree&nbsp;Hollow</button>
    </div>
    {#if selected === "Structure"}
        <Structure />
    {:else if selected === "OurVision"}
        <OurVision />
    {:else if selected === "TheGallery"}
        <TheGallery />
    {:else if selected === "TreeHollow"}
        <TreeHollow />
    {/if}	
    <BackToTop />
</section>


<style>
    .toShow {
        display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .button {
        padding: 0.5rem 1rem;
        margin: 1rem;
        border: 2px white solid;
        border-radius: 0.25rem;
        background-color: inherit;
        color: white;
        box-shadow: 1px 1px 5px rgb(255 255 255 / 0.3);
        transition: all 0.5s ease;
    }

    .button:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }

    .selected {
        background-color: white;
        color: black;
    }

@media screen and (max-width: 768px) {
	.toShow {
		grid-template-columns: 1fr 1fr;
	}

    button {
        margin: 0.5rem;
    }
}

@media screen and (max-width: 400px) {
	.toShow {
		grid-template-columns: 1fr;
	}
}
</style>