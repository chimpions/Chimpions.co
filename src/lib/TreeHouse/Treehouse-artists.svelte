<script>
// @ts-nocheck


    import Fa from 'svelte-fa/src/fa.svelte';
    import { faLink, faIdCard } from '@fortawesome/free-solid-svg-icons/index.js';
    import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons/index.js';
    import "$lib/css/global.css";
    import { onMount } from 'svelte';

    let active = false;
    let thisBox;
    export let piece = "";
    export let name = "";
    export let bio = "";
    export let twitter = "";
    export let instagram = "";
    export let portfolio = "";
    export let marmelade = "";
    export let exchangeart = "";
    export let misc = "";



    function handleScroll() {
        const rect = thisBox.getBoundingClientRect();
        if (!active) {
            if (rect.top <= window.innerHeight) {
                active = true;
            }
        }
    }

    onMount(() => {
        handleScroll();
    });

</script>


<svelte:window on:scroll={handleScroll} />
<div class="artistBox" class:active bind:this={thisBox}>
    <div class="artist">
        <div>
            <img
                style="border-radius: 0.25rem; width: 100%"
                src={`images/artist/${piece}`}
                alt="Artist's piece"
            />
        </div>
        <h2 style="font-size: 2.5rem; margin: 0.5rem 0 0 0">{name}</h2>
    </div>
    <div class="artistBio">
        {bio}
    </div>
    <div>
        <h2 class="socialLinks">Social Links</h2>
        {#if twitter}
            <a class="bioContainer" href={twitter}>
                <Fa icon={faTwitter} size="sm" />Twitter
            </a>
        {/if}
        {#if instagram}
            <a class="bioContainer" href={instagram}>
                <Fa icon={faInstagram} size="sm" />Instagram
            </a>
        {/if}

        <h2 class="artLinks">Art Links</h2>
        {#if portfolio}
            <a class="bioContainer" href={portfolio}>
                <Fa icon={faIdCard} size="sm" />Portfolio
            </a>
        {/if}
        {#if marmelade}
            <a class="bioContainer" href={marmelade}>
                <Fa icon={faLink} size="sm" />Marmelade
            </a>
        {/if}
        {#if exchangeart}
            <a class="bioContainer" href={exchangeart}>
                <Fa icon={faLink} size="sm" />Exchange Art
            </a>
        {/if}
        {#if misc} 
            <a class="bioContainer" href={misc}>
                <Fa icon={faLink} size="sm" />
                {#if misc.length > 30}
                    {misc.slice(0, 30)}
                {:else}
                    {misc}
                {/if}
            </a>
        {/if}
    </div>
</div>




<style>
    :root {
        --bg-artist: var(--purple);
    }

    .artistBox {
        background-color: var(--dark-purple);
        border-radius: 0.25rem;
        margin-bottom: 4vw;
        padding: 1rem;
        border-width: 4px;
        border-color: transparent;
    }

    .artistBox:hover {
        background-color: var(--purple);
        --bg-artist: var(--light-purple);
    }

    .artistBox {
        transform: translateY(300px);
        -webkit-transform: translateY(300px);
        opacity: 0;
        transition: opacity 0.5s ease, transform 0.5s ease-out;
    }

    .artistBox.active {
        transform: translateY(0px);
        -webkit-transform: translateY(0px);
        opacity: 1;
    }
    
    .artist {
        text-align: center;
        border-radius: 0.25rem;
        background-color: var(--bg-artist);
        font-size: 2.25rem;
        line-height: 2.5rem;
        padding: 1rem;
    }

    .artistBio {
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        margin-top: 1.25rem;
        text-align: justify;
    }

    .socialLinks {
        font-size: 1.25rem;
        line-height: 1.75rem;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        color: #fff;
    }

    .bioContainer {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        margin-left: 1rem;
        color: rgb(209 213 219);
        text-decoration-line: underline;
    }

    .artLinks {
        font-size: 1.25rem;
        line-height: 1.75rem;
        padding-top: 0.5rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        color: #fff;
    }

    a {
        overflow: hidden;
        margin-bottom: 0.25rem;
    }

    a:hover {
        color: rgb(255 255 255);
    }
</style>
