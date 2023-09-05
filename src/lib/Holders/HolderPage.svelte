<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import chimpions from "../_content/chimpions.json"
    import Navigation from "../Navigation/Navigation.svelte";
    import holders from "../_content/holders.json"

    export let holderName = "";
    export let pfp = "";
    export let twitter = "";
    export let level = 1;
    export let chimpions_held = [];
    export let TWS = {};

    // $: pfp = holder_data["pfp"];
    // $: twitter = holder_data["twitter"];
    // let chimpions_held = holder_data["chimpions"];
    let chimpions_held_data = [];

    onMount(() => getChimpionsData());


    const getChimpionsData = () => {
        for (let chimpion of chimpions) {
            if (chimpions_held.includes(chimpion.name)) {
                chimpions_held_data = [...chimpions_held_data, chimpion]
            }
        }
    }



    let searchTerm = "";
    let filteredHolders = [];



    onMount(() => {
        console.log('in');

    });

    const linkNextHolder = (holderName) => {
        let keysArray = Object.keys(holders);
        let currentIndex = 0;
        for (let name in holders) {
            if (name.toLowerCase() == holderName) {
                currentIndex = keysArray.indexOf(name);
            }
        }
        return(`./${keysArray[currentIndex + 1]}`);
    }

    const searchHolders = () => {
        filteredHolders = []
        if (searchTerm != "") {
            for (let name in holders) {
                if (name.includes(searchTerm)) {
                    filteredHolders.push({
                        name: name,
                        pfp: holders[name]["pfp"]
                    })
                }
            }
            filteredHolders.sort((a, b) => a.name.localeCompare(b.name));
            console.log(filteredHolders);
        }
    }






</script>

tototototot
{#each chimpions_held_data as chimpion}

    <p>{chimpion.name}</p>
    <img src={chimpion.paths.gif} alt={chimpion.name} />
    <br/><br/><br/><br/><br/>
{/each}

<div class="holder-box">
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
</div>




    
    
<Navigation />
    
<div class="menu-cont">
    <div id="query-section">
        <div id="search-input-cont">
            <input 
                type="text"
                class={filteredHolders.length > 0 ? "search-field no-border-radius" : "search-field"}
                placeholder="Search for a Holder"
                autocomplete="on"
                bind:value={searchTerm}
                on:input={searchHolders}
            />
        </div>
        <div class="results">
        {#if filteredHolders.length > 0}
            <ul>
            {#each filteredHolders as holder}
            <a href={`/compendium/${holder.name}`}><li><img class="search-pfp" src={holder.pfp} alt="pfp of {holder.name}"/>{holder.name}</li></a>
            {/each}
            </ul>
        {/if}
        </div>
    </div>
    <div id="box-for-next-chimp">
    <a href={linkNextHolder(holderName)}>
    <div class="nextChimpion">
        
        See Next Holder<span><img class="arrow-right" src="/images/arrow-right-white.png" alt="arrow to the right" /></span>
        
    </div>
</a>
</div>
</div>





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


    .search-pfp {
        width: 30px;
        margin-right: 5px;
        vertical-align: bottom;
    }



    .full-window {
        padding-top: 100px;
        width: 100vw;
        height: 100vh;
        outline: none;
    }

    .menu-cont {
        display: flex;
        position: fixed;
        z-index: 5;
        top: 0px;
        right: 0px;
        margin: 0;
        padding: 30px;
    }

    #query-section {
        display: flex;
        flex-direction: column;
    }

    #search-input-cont {
        width: 200px;
    }

    .search-field {
        position: relative;
        width: 100%;
        font-size: 1rem;
        border: 2px solid white;
        border-radius: 0.25rem;
        background-color: var(--darker-purple);
        color: white;
        padding: 0.5rem;
        outline: none;
    }

    .no-border-radius {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .results {
        /* position: absolute; */
        /* top: 55px; */
        max-height: 200px;
        width: 200px;
        overflow: auto;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
    
    .results ul {
        margin: 0;
        list-style-type: none;
        padding: 0;
        border: 1px solid var(--purple);
        border-top: 0px;
    }
    
    .results ul li {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0px;
        border-top: 1px solid var(--purple);
        background-color: var(--darker-purple);
        transition: background-color 0.2s ease;
    }
    
    .results ul li:hover {
        background-color: var(--purple);
    }

    #box-for-next-chimp {
        height: 36px;
        margin-left: 30px;
    }

    .nextChimpion {
        background-color: var(--dark-purple);
        border-radius: 0.25rem;
        border: 2px var(--purple) solid;
        padding: 0.5rem 1rem;
        white-space: nowrap;
        transition: all 0.2s ease;
    }

    .nextChimpion:hover {
        background-color: var(--purple);
        border: 2px var(--white-purple) solid;
    }

    .arrow-right {
        height: 0.75rem;
    }

    .image-container {
        position: relative;
        width: 400px;
        height: 400px;
        margin-right: 1rem;
    }

    .image-container img {
        width: 400px;
        object-fit: contain;
        border-radius: 0.25rem;
    }

    .control-dots {
        text-align: center;
        width: 100%;
        margin: 0px;
        padding: 0;
        position: absolute;
        bottom: 10px;
    }

    .dot {
        opacity: .3;
        width: 8px;
        height: 8px;
        cursor: pointer;
        background: #fff;
        border-radius: 50%;
        margin: 0 8px;
        transition: opacity .2s ease;
        display: inline-block;
        box-shadow: 1px 1px 2px rgba(0,0,0,.9);
    }

    .dot.selected, .dot:hover {
        opacity: 1;
    }

    .control-arrow-prev {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 5px;
        background: 0 0;
        color: #fff;
        opacity: .4;
        text-align: left;
        cursor: pointer;
        width: 50%;
        border: 0;
        transition: all .3s ease;
    }

    .control-arrow-next {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 5px;
        background: 0 0;
        color: #fff;
        opacity: .4;
        text-align: right;
        cursor: pointer;
        width: 50%;
        border: 0;
        transition: all .3s ease;
    }

    /* .control-arrow-prev:hover {
        opacity: 1;
    }

    .control-arrow-next:hover {
        opacity: 1;
    } */

    .control-arrow-prev:before {
        content: "";
        border-top: 10px solid transparent;
        border-right: 10px solid #fff;
        border-bottom: 10px solid transparent;
        margin: 0 5px;
        display: inline-block;
    }

    .control-arrow-next:before {
        content: "";
        border-top: 10px solid transparent;
        border-left: 10px solid #fff;
        border-bottom: 10px solid transparent;
        margin: 0 5px;
        display: inline-block;
    }

    .chimp-line {
        width: 80%;
        max-width: 850px;
        margin: 1rem auto;
        padding: 1rem;
        border-radius: 0.25rem;
    }

    .chimp-name {
        font-size: 1.5rem;
    }

    .chimp-info {
        display: flex;
        margin-top: 0.5rem;
    }

    .description {
        width: 300px;
    }

    p span {
        color: var(--whiter-purple);
    }

    a {
        text-decoration: none;
        color: inherit;
    }



    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: var(--dark-purple); 
    }

    ::-webkit-scrollbar-thumb {
        background: var(--light-purple);
        border-radius: 0.25rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--lighter-purple); 
    }
    
@media screen and (max-width: 800px) {
    .chimp-info {
        flex-direction: column;
    }

    .chimp-info p {
        margin: 0.25rem 0;
    }
}
</style>