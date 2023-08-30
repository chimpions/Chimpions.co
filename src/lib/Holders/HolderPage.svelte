<script>
    import { onMount } from "svelte";
    import SingleCard from "../Compendium_old/Cards/lib/components/SingleCard.svelte";
    // import Chimpion from "../Compendium/Chimpion.svelte";
    import chimpions from "../_content/chimpions.json"

    export let name = "";
    export let holder_data = {};

    $: pfp = holder_data["pfp"];
    $: twitter = holder_data["twitter"];
    let chimpions_held = holder_data["chimpions"];
    let chimpions_held_data = [];

    onMount(() => getChimpionsData());


    const getChimpionsData = () => {
        for (let chimpion of chimpions) {
            if (chimpions_held.includes(chimpion.name)) {
                chimpions_held_data = [...chimpions_held_data, chimpion]
            }
        }
    }

</script>

tototototot
{#each chimpions_held_data as chimpion}

    <p>{chimpion.name}</p>
    <img src={chimpion.paths.gif} alt={chimpion.name} />
    <br/><br/><br/><br/><br/>

    <!-- <SingleCard 
        name={chimpion.name}
        png={chimpion.paths.png}
        gif={chimpion.paths.gif}
    /> -->
{/each}

<!-- <div class="holder-box">
    <a href="/holders/{name}" class="circle">
        <img class="pfp" src={pfp} alt="Profile picture of {name}"/>
    </a>
    <span class="name">
        {#if (twitter != "")}
            <a href="https://twitter.com/{twitter}" target="_blank" rel="noreferrer">{name}</a>
        {:else}
            {name}
        {/if}
    </span>
</div> -->



<style>
    .holder-box {
        display: flex;
        align-items: center;
        height: 70px;
        width: 200px;
        border: 1px solid var(--purple);
        border-radius: 0.25rem;
        background-color: var(--dark-purple);
        vertical-align: bottom;
    }

    .circle {
        height: 50px;
        width: 50px;
        border-radius: 5rem;
        margin: 10px;
    }

    .pfp {
        height: 50px;
        border-radius: 5rem;
    }

    .name {
        color: var(--whiter-purple);
    }

    a {
        vertical-align: bottom;
        text-decoration: none;
        color: var(--whiter-purple);
    }

    a:hover {
        text-decoration: underline;
    }
</style>