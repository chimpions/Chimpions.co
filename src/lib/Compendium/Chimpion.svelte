<script>
// @ts-nocheck

    import { onMount } from 'svelte';
    import Navigation from "../Navigation/Navigation.svelte";
    import chimpions from "../_content/chimpions.json";

    let images = [];
    let currentIndex = 0;
    let displayed_image = "";
    let artist = "";
    let searchTerm = "";
    let filteredChimpions = [];

    export let name = "";
    export let index = 0;
    export let art_files = {};
    export let tribe = "";
    export let holderName = "";
    export let lore = "";
    export let type = "";
    export let level = 1;


    onMount(() => {
        console.log('in');
        displayed_image = art_files["png"];
        artist = displayed_image.split(".")[0].split("-")[1];
        images = [...images, art_files["png"]];
        images = [...images, art_files["gif"]];
        for (let alternative_art of art_files["alternative_art"]) {
            images = [...images, alternative_art];
        }
        console.log(images);
    });


    const getPrevious = () => {
        currentIndex = (currentIndex + images.length - 1) % images.length;
        displayed_image = images[currentIndex];
        artist = displayed_image.split(".")[0].split("-")[1];
        console.log(artist);
    };

    const getNext = () => {
        currentIndex = (currentIndex + 1) % images.length;
        console.log(artist);
        displayed_image = images[currentIndex];
        artist = displayed_image.split(".")[0].split("-")[1];
        console.log(artist);
    };

    const linkNextChimpion = (index) => {
        let nextChimpionsName;
        if (index < 221) {
            nextChimpionsName = chimpions[Number(index) + 1].name;
        } else {
            nextChimpionsName = chimpions[0].name;
        }
        return(`./${nextChimpionsName}`);
    }

    function handleKeyDown(event) {
        if (event.key === 'ArrowLeft') {
            getPrevious();
        } else if (event.key === 'ArrowRight') {
            getNext();
        }
    }

    const searchChimpions = () => {	
        if (searchTerm == "") {
            filteredChimpions = [];
        } else {
            filteredChimpions = chimpions.filter(chimpion => (chimpion.name.toLowerCase()).includes(searchTerm.replace(/ /g,'').toLowerCase()))
        }
	}

</script>


<Navigation />

<div class="menu-cont">
    <div id="query-section">
        <div id="search-input-cont">
            <input 
                type="text"
                class={filteredChimpions.length > 0 ? "search-field no-border-radius" : "search-field"}
                placeholder="Search for a Chimpion"
                autocomplete="on"
                bind:value={searchTerm}
                on:input={searchChimpions}
            />
        </div>
        <div class="results">
        {#if filteredChimpions.length > 0}
            <ul>
            {#each filteredChimpions as chimpion}
            <a href={`/compendium/${chimpion.name.split(/(?=[A-Z])/).join('-').toLowerCase()}`}><li>{chimpion.name.split(/(?=[A-Z])/).join(' ')}</li></a>
            {/each}
            </ul>
        {/if}
        </div>
    </div>
    <div id="box-for-next-chimp">
    <a href={linkNextChimpion(index)}>
    <div class="nextChimpion">
        
        See Next Chimpion<span><img class="arrow-right" src="/images/arrow-right-white.png" alt="arrow to the right" /></span>
        
    </div>
</a>
</div>
    <!-- <div class="nextChimpion">
        <a href={linkNextChimpion(index)}>
        See Next Chimpion<span><img class="arrow-right" src="/images/arrow-right-white.png" alt="arrow to the right" /></span>
        </a>
    </div> -->
</div>


<div class="full-window" tabindex="-1" role="presentation" on:keydown={handleKeyDown}>
    <div class="chimp-line">
        <span class="chimp-name">{name}</span>        
        <div class="chimp-info">
            <div class="image-container">
                {#if displayed_image.slice(-3) == "mp4" || displayed_image.slice(-3) == "mov"}
                    <!-- svelte-ignore a11y-media-has-caption -->
                    <video autoplay width="400">
                        <source src={displayed_image} type="video/mp4" />
                    </video>
                {:else}
                    <img src={displayed_image} alt="Art {currentIndex + 1} of {name}" />
                {/if}
                <ul class="control-dots">
                {#each images as image, i}
                    <li class={i === currentIndex ? "dot selected" : "dot"} value={i} aria-label="slide item {i+1}"/>
                {/each}
                </ul>
                <button type="button" tabindex="0" aria-label="previous slide / item" class="control-arrow-prev" on:click={getPrevious}/>
                <button type="button" tabindex="0" aria-label="next slide / item" class="control-arrow-next" on:click={getNext}/>
            </div>
            <div class="description">
                <p>Tribe:&ensp;<span>{tribe}</span></p>
                <p>Type:&ensp;<span>{type}</span></p>
                {#if lore == ""}
                <p>Lore:&ensp;<span>No lore for this Chimpion yet...</span></p>
                {:else}
                <p>Lore:&ensp;<span>{lore}</span></p>
                {/if}
                <p>Artist:&ensp;<span>{artist}</span></p>
                <p>Holder:&ensp;<span><a href={`/holders/${holderName.split(' ').join('')}`}>{holderName}</a></span></p>
                <p>Level:&ensp;<span>{level}</span></p>
            </div>
        </div>
    </div>
</div>




<style>
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
        cursor: pointer;
        padding: 5px;
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