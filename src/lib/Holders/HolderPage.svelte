<script>
// @ts-nocheck

    import Fa from 'svelte-fa/src/fa.svelte';
    import { faDiscord } from "@fortawesome/free-brands-svg-icons";
    import { faTwitter } from "@fortawesome/free-brands-svg-icons";
    import { onMount } from "svelte";
    import chimpions from "../_content/chimpions.json";
    import Navigation from "../Navigation/Navigation.svelte";
    import holders from "../_content/holders.json";
    import matrica_data from "../_content/matrica_data.json";
	import HolderSearch from "./Holder-search.svelte";
	import Card from '$lib/Compendium/Cards/card.svelte';

    export let holderName = "";
    export let pfp = "";
    export let twitter = "";
    export let discord = "";
    export let points = 0;
    export let level = 1;
    export let chimpions_held = [];
    export let TWS = {};
    export let experience = "";
    export let skills = "";
    export let favoriteArt = "";
    let artName = "";
    let artistName = "";
    let nextHolder = "";
    let visibility = "hidden";

    $: experienceToDisplay = toHtml(experience);
    $: skillsToDisplay = toHtml(skills);
    $: getNextHolder(holderName);
    $: getChimpionsData(chimpions_held);
    $: if (holderName) {
        filteredHolders = [];
        chimpions_held_data = [];
        getChimpionsData(chimpions_held);
        getArtNameAndArtistName(favoriteArt);
    };
    $: if (holderName) {
        searchTerm = "";
    }

    const toHtml = (topic) => {
        if (topic != "" && topic != undefined) {
            return topic.replace(/\n/g, '<br/>')
        } else {
            return "";
        }
    }

    let chimpions_held_data = [];
    let windowWidth = 1000;
    let cardMobility = true

    $: if (windowWidth < 500) {cardMobility = false} else {cardMobility = true};

    function updateWindowSize() {
        windowWidth = window.innerWidth;
    }

    onMount(() => {
        loadPfps();
        windowWidth = window.innerWidth;
        window.addEventListener('resize', updateWindowSize);
    });

    const getChimpionsData = (chimpions_held) => {
        let chimpions_held_parsed = chimpions_held.map((chimpion) => chimpion.replace(/ /g, ""));
        for (let chimpion of chimpions) {
            if (chimpions_held_parsed.includes(chimpion.name)) {
                chimpions_held_data = [...chimpions_held_data, chimpion]
            }
        }
    }

    const loadPfps = () => {
        for (let holder_name in holders) {
            const img = new Image();
            img.src = holders[holder_name].pfp;
            img.onload;
        }
    }

    const getProgressBar = (level, points) => {
        let increment = 1000;
        let sum_experience = 0;
        let test_level = 1;
        while (test_level < level) {
            sum_experience += increment;
            increment += 1000;
            test_level += 1;
        }
        let progression = (points - sum_experience) / increment * 100;
        return progression;
    }


    let searchTerm = "";
    let filteredHolders = [];


    const getNextHolder = (holderName) => {
        let keysArray = Object.keys(holders);
        let currentIndex = 0;
        for (let name in holders) {
            if (name.toLowerCase() == holderName.toLowerCase()) {
                currentIndex = keysArray.indexOf(name);
            }
        }
        nextHolder = keysArray[currentIndex + 1]
    }

    const searchHolders = () => {
        filteredHolders = []
        if (searchTerm != "") {
            for (let name in holders) {
                if (name.includes(searchTerm) || name.toLowerCase().includes(searchTerm)) {
                    filteredHolders.push({
                        name: name,
                        pfp: matrica_data[holders[name]["matricaId"]]["pfp"]
                    })
                }
            }
            filteredHolders.sort((a, b) => a.name.localeCompare(b.name));
        }
    }

    const getArtNameAndArtistName = (favoriteArt) => {
        if (favoriteArt != undefined) {
            let favoriteArtArray = favoriteArt.split("/")
            let artNameAndArtistNameArray = favoriteArtArray[favoriteArtArray.length - 1].split(".")[0].split("-");
            artName = artNameAndArtistNameArray[0];
            artistName = artNameAndArtistNameArray[1];
        }
    }



    let isCopied = false;
    
    function copyToClipboard(textToCopy) {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
            isCopied = true;
        } catch (err) {
            console.error("Unable to copy text: ", err);
            isCopied = false;
        }
        document.body.removeChild(textArea);
    }

    $: styles = `--width: ${windowWidth}px;
                 --visibility: ${visibility}`;
</script>


    
<Navigation />
<div class="menu-cont" style={styles}>
    <div id="query-section">
        <div id="search-input-cont">
            <input 
                type="text"
                class={filteredHolders.length > 0 ? "search-field no-border-radius" : "search-field"}
                placeholder="Search for a Holder"
                autocomplete="on"
                bind:value={searchTerm}
                on:input={searchHolders}
                on:focus={() => {visibility = "visible"}}
            />
        </div>
        <div class="results">
        {#if filteredHolders.length > 0}
            <ul>
            {#each filteredHolders as holder}
                <HolderSearch
                    holderName={holder.name}
                    holderPfp={holder.pfp}
                />
            {/each}
            </ul>
        {/if}
        </div>
    </div>
    <div id="box-for-next-chimp">
        <a href="/holders/{nextHolder}">
            <div class="nextChimpion">
                {#if windowWidth < 500}
                    Next
                {:else}
                    See Next Holder
                {/if}
                <span><img class="arrow-right" src="/images/arrow-right-white.png" alt="arrow to the right" /></span>
            </div>
        </a>
    </div>
</div>

<div class="holder-misc">
    <div class="holder-misc-left">
        <img class="pfp" src={pfp} alt="PFP" />
        <span class="name">{holderName}</span>
    </div>
    <div class="holder-misc-right">
        <div class="socials">
            {#if (twitter != "")}
                <div class="icon"><Fa icon={faTwitter} size="sm" /></div>
                <a href="https://twitter.com/{twitter}" target="_blank" rel="noreferrer">{twitter}</a>
            {:else}
                <div class="icon"><Fa icon={faTwitter} size="sm" /></div>
                {twitter}
            {/if}
            <div class="icon"><Fa icon={faDiscord} size="sm" /></div>
            <div class="tooltip">
                <button on:click={copyToClipboard(discord)}>{discord}</button>
            
                {#if isCopied}
                    <span class="tooltiptext bottom">Copied to clipboard</span>
                {:else}
                    <span class="tooltiptext bottom">Copy to clipboard</span>
                {/if}
            </div>
        </div>
        <div class="TWS-section">
            <div class="tooltip">
                <a href="https://www.tensor.trade/trade/tws1" target="_blank">
                    <img class="TWS {TWS["Forest Fellowship"] ? "" : "inactive"}" src="/images/tws/matabolong/forest_fellowship_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS1: Forest Fellowship</span>
            </div>
            <div class="tooltip">
                <a href="https://www.tensor.trade/trade/tws2" target="_blank">
                    <img class="TWS {TWS["Dusk Till Dawn"] ? "" : "inactive"}" src="/images/tws/nyaumon/dusk_till_dawn_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS2: Dusk Till Dawn</span>
            </div>
            <div class="tooltip">
                <a href="https://www.tensor.trade/trade/tws3" target="_blank">
                    <img class="TWS {TWS["The Fall of the Eradicator"] ? "" : "inactive"}" src="/images/tws/rgb/ChimpionXCritters_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS3: The Fall of the Eradicator</span>
            </div>
            <div class="tooltip">
                <a href="https://www.tensor.trade/trade/tws4" target="_blank">
                    <img class="TWS {TWS["Last Bastion"] ? "" : "inactive"}" src="/images/tws/neilvilppu/LastBastion_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS4: Last Bastion</span>
            </div>
            <div class="tooltip">
                <a href="https://magiceden.io/marketplace/tws5" target="_blank">
                    <img class="TWS {TWS["The Uprising"] ? "" : "inactive"}" src="/images/tws/ugslabs/TheUprising_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS5: The Uprising</span>
            </div>
            <div class="tooltip">
                <a href="https://www.tensor.trade/trade/tws6" target="_blank">
                    <img class="TWS {TWS["LaurenceAntonyXChimpions"] ? "" : "inactive"}" src="/images/tws/laurenceantony/Finale_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS6: LaurenceAntony X Chimpions</span>
            </div>
            <div class="tooltip">
                <a href="https://www.tensor.trade/trade/tws7" target="_blank">
                    <img class="TWS {TWS["The Crystal of Unity"] ? "" : "inactive"}" src="/images/tws/knittables/CrystalCompanions_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS7: The Crystal of Unity</span>
            </div>
            <div class="tooltip">
                <a href="https://www.tensor.trade/trade/tws8" target="_blank">
                    <img class="TWS {TWS["Grave Danger"] ? "" : "inactive"}" src="/images/tws/artbynafay/GraveDanger_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS8: Grave Danger</span>
            </div>
            <div class="tooltip">
                <a href="https://magiceden.io/marketplace/tws9" target="_blank">
                    <img class="TWS {TWS["An Unlikely Friendship"] ? "" : "inactive"}" src="/images/tws/tainaker/AnUnlikelyFriendship_square.png" alt="" />
                </a>
                <span class="tooltiptext top">TWS9: An Unlikely Friendship</span>
            </div>
        </div>
        <div class="Experience">
            <div>Level {level}</div>
            <div class="progress-bar">
                <div class="progress" style="width: {getProgressBar(level, points)}%;"></div>
            </div>
        </div>
    </div>
</div>

<div class="main-content">
    <div class="left-side">
        {#if experience}
        <div class="ama-section">
            <span class="title">Web3 Experience</span>
            <div class="answer">
                {@html experienceToDisplay}
            </div>
        </div>
        {/if}
        {#if skills}
        <div class="ama-section">
            <span class="title">Occupation / Professional skills</span>
            <div class="answer">
                {@html skillsToDisplay}
            </div>
        </div>
        {/if}
    </div>
    <div class="right-side">
        {#if favoriteArt}
        <span class="title">Favorite artwork</span>
        <div class="favorite-art">
            <img src={favoriteArt} alt="{holderName}'s favorite artwork" />
            <span style="font-size: 1.25rem; text-decoration: underline">{artName}</span> <i>by {artistName}</i>
        </div>
        {/if}
    </div>
</div>
<div class="chimpions-held">
    <span class="title">Chimpions hodled</span>
    {#if windowWidth < 700}
    <div class="card-grid" style={styles}>
        {#each chimpions_held_data as chimpion}
            <Card
                active={false}
                dynamic={cardMobility}
                name={chimpion.name.split(/(?=[A-Z])/).join(' ')}
                index={chimpion.index}
                tribe={chimpion.tribe}
                type={chimpion.type.split(/(?=[A-Z])/).join(' ')}
                art_files={chimpion.paths}
                lore={chimpion.lore}
                holder_name={chimpion.holder}
            />
        {/each}
    </div>
    {:else if chimpions_held_data.length == 1}
    <div class="center-grid">
        {#each chimpions_held_data as chimpion}
            <Card
                active={false}
                dynamic={cardMobility}
                name={chimpion.name.split(/(?=[A-Z])/).join(' ')}
                index={chimpion.index}
                tribe={chimpion.tribe}
                type={chimpion.type.split(/(?=[A-Z])/).join(' ')}
                art_files={chimpion.paths}
                lore={chimpion.lore}
                holder_name={chimpion.holder}
            />
        {/each}
    </div>
    {:else}
    <div class="card-grid" style={styles}>
        {#each chimpions_held_data as chimpion}
            <Card
                active={false}
                dynamic={cardMobility}
                name={chimpion.name.split(/(?=[A-Z])/).join(' ')}
                index={chimpion.index}
                tribe={chimpion.tribe}
                type={chimpion.type.split(/(?=[A-Z])/).join(' ')}
                art_files={chimpion.paths}
                lore={chimpion.lore}
                holder_name={chimpion.holder}
            />
        {/each}
    </div>
    {/if}

</div>




<style>
    :root {
        --width: 1000px;
        --visibility: hidden;
    }

    .holder-misc {
        width: 85%;
        margin: 100px 5% 1rem 10%;
        display: flex;
        border: 1px var(--white-purple) solid;
        border-radius: 0.25rem;
        background-color: var(--dark-purple);
        padding: 1rem;
        column-gap: 3rem;
        row-gap: 1rem;
    }

    .holder-misc-left {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .holder-misc-right {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .holder-misc .name {
        font-size: 1.5rem;
        color: var(--whiter-purple);
    }

    .socials {
        display: grid;
        grid-template-columns: 20px 1fr;
        column-gap: 5px;
        row-gap: 0.5rem;
        justify-content: center;
        align-items: center;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .TWS-section {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
    }

    button {
        margin: 0;
        padding: 0;
        border: none;
        background: none;
        font: inherit;
        color: inherit;
        cursor: pointer;
        outline: none;
    }

    .TWS {
        height: 20px;
        width: 20px;
        border-radius: 3rem;
    }

    .inactive {
        filter: grayscale(1);
    }

    .tooltip {
        position: relative;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        font-size: 0.875rem;
        z-index: 1;
        left: 50%;
        margin-left: -60px;
    }

    .tooltip .tooltiptext.top {
        bottom: 150%;
    }

    .tooltip .tooltiptext.bottom {
        top: 150%;
    }

    .tooltip .tooltiptext::after {
        content: "";
        position: absolute;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: black transparent transparent transparent;
    }

    .tooltip .tooltiptext.top::after {
        top: 100%;
    }

    .tooltip .tooltiptext.bottom::after {
        bottom: 100%;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
    }

    .Experience {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }

    .progress-bar {
        width: 100px;
        background-color: var(--white-purple);
        height: 14px;
        border: 2px var(--white-purple) solid;
        border-radius: 1rem;
        overflow: hidden;
    }

    .progress {
        height: 10px;
        background-color: var(--purple);
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }

    .main-content {
        display: flex;
        margin: 2rem auto;
    }

    .left-side {
        width: 50%;
        margin-left: 10%;
    }

    .right-side {
        width: 50%;
        margin-left: 10%;
        margin-right: 5%;
    }

    .favorite-art {
        width: 100%;
        text-align: center;
    }

    .favorite-art img {
        width: 100%;
        padding: 1rem;
    }

    span.title {
        font-size: 2rem;
    }

    .answer {
        margin: 2rem;
        margin-top: 1rem;
        text-align: justify;
    }

    .chimpions-held {
        margin-left: 10%;
        margin-right: 10%;
    }

    .center-grid {
        width: 50%;
        margin-top: 50px;
        margin-bottom: 100px;
        display: flex;
        justify-content: center;
    }

    .pfp {
        height: 100px;
        border-radius: 0.25rem;
    }

    a {
        vertical-align: bottom;
        text-decoration: none;
        color: var(--whiter-purple);
    }

    a:hover {
        text-decoration: underline;
    }

    .menu-cont {
        display: flex;
        position: absolute;
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
        visibility: var(--visibility);
        max-height: 200px;
        width: 200px;
        overflow: auto;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
        position: relative;
        z-index: 5;
    }
    
    .results ul {
        margin: 0;
        list-style-type: none;
        padding: 0;
        border: 1px solid var(--purple);
        border-top: 0px;
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

@media screen and (max-width: 900px) {
    .holder-misc {
        margin-left: 5%;
        margin-right: 5%;
    }

    .main-content {
        flex-direction: column;
    }

    .left-side {
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }

    .right-side {
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
    }
}

@media screen and (max-width: 800px) {
    .holder-misc {
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        flex-direction: column;
    }

    .holder-misc-left {
        width: 100%;
        gap: 1rem;
    }

    .holder-misc-right {
        width: 100%;
        gap: 1rem;
    }

    .favorite-art img {
        width: 100%;
        padding: 1rem 2rem 0.5rem 2rem;
    }
}


    .card-grid {
		display: grid;
		margin:  1rem auto;
		grid-template-columns: 305px;
        row-gap: 50px;
        justify-items: center;
        align-items: center;
        justify-content: center;
	}

@media screen and (min-width: 700px) {
	.card-grid {
		grid-template-columns: 305px 305px;
        column-gap: max(30px, calc((var(--width) - 710px)/4));
	}
}

@media screen and (min-width: 1100px) {
	.card-grid {
		grid-template-columns: 305px 305px 305px;
        column-gap: max(30px, calc((var(--width) - 1015px)/4));
	}
}

@media screen and (min-width: 1500px) {
	.card-grid {
		grid-template-columns: 305px 305px 305px 305px;
        column-gap: max(30px, calc((var(--width) - 1410px)/4));
	}
}
</style>