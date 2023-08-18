<script>
// @ts-nocheck

	import Card from "./lib/components/card.svelte";
    import Switch from '../Switch.svelte'
    import holders from "../../_content/holders.json";
    import chimpions from "../../_content/chimpions.json";
  	import { onMount } from "svelte";

    let png;
	let cardMobility;
    let types = [];
	let selectedType = "SelectAType";
    let selectedTribe = "Proletariat";
    let lastSelectedTribe = "";
    let lastSelectedType = "";



    const getLevel = (holder_name) => {
        if (holders[holder_name])
            return holders[holder_name]["level"];
        else {
            return 1;
        }
	}
	
	const getTypes = () => {
		for (let chimpion of chimpions) {
            let type = chimpion.type.split(/(?=[A-Z])/).join(' ');
			if (!types.includes(type)) {
				types = [...types, type]
			}
		}
        types = types.sort();
	}
	onMount(() => {
        getTypes()
    });
	
	// Query results
	let filteredChimpions = [];
	
	// For Select Menu
	$: if (selectedType) getChimpsByType();
    $: if (selectedTribe) getChimpsByTribe();
	
	const getChimpsByType = () => {
		// resets search input if menu is being used
        if (selectedType == "SelectAType") return;
		searchTerm = "";
		if (selectedType == "None") {
            selectedType = "SelectAType";
            selectedTribe = lastSelectedTribe;
		} else {
            selectedTribe = "None";
            lastSelectedType = selectedType;
            filteredChimpions = chimpions.filter(chimpion => chimpion.type === selectedType.replace(/ /g,''));
        }
	}

    const getChimpsByTribe = () => {
		// resets search input if menu is being used
        if (selectedTribe == "None") return;
		searchTerm = "";
        selectedType = "SelectAType";
        lastSelectedTribe = selectedTribe;
		filteredChimpions = chimpions.filter(chimpion => chimpion.tribe === selectedTribe.replace(/ /g,''));
	}
	
	// For Search Input
	let searchTerm = "";
	// resets language menu if search input is used
	$: if (searchTerm) {
        selectedType = "SelectAType";
        selectedTribe = "None";
    }
         
	
	const searchChimpions = () => {	
        if (searchTerm == "") {
            selectedType = lastSelectedType;
            selectedTribe = lastSelectedTribe;
        } else {
            let filteredChimpionsBeforeEvaluation = chimpions.filter(chimpion => {
                let searchTermToLook = searchTerm.replace(/ /g,'').toLowerCase()
                let chimpionName = chimpion.name.toLowerCase();
                let chimpionTribe = chimpion.tribe.toLowerCase();
                let chimpionType = chimpion.type.toLowerCase();
                let chimpionHolderName = chimpion.holder.toLowerCase();
                let chimpionPNGArtist = chimpion.png_artist.toLowerCase();
                let chimpionGIFArtist = chimpion.gif_artist.toLowerCase();
                if ((chimpionName.includes(searchTermToLook)) || (chimpionTribe.includes(searchTermToLook)) || (chimpionType.includes(searchTermToLook))|| (chimpionHolderName.includes(searchTermToLook)) || (chimpionPNGArtist.includes(searchTermToLook)) || (chimpionGIFArtist.includes(searchTermToLook))) {
                    return true;
                } else {
                    return false;
                }
            });
            if ((filteredChimpionsBeforeEvaluation.length < 50) || (searchTerm.length > 2 && (("badluckzulp".includes(searchTerm)) || ("_rabbels_".includes(searchTerm))))) return filteredChimpions = filteredChimpionsBeforeEvaluation;
        }
	}
</script>






<div id="query-section">
    <Switch bind:cardMobility={cardMobility} label="Dynamic cards:" design="slider" />
    <Switch bind:pngByDefault={png} label="Art:" design="inner" />
    <div class="menu-cont">
        <select class="menu" name="menu" id="menu" bind:value={selectedType}>
            <option disabled selected value="SelectAType">Select a type</option>
            <option value="None">None</option>
            <!-- <option value="None">No Selected Type</option> -->
            {#each types as type}
                <option value={type}>{type}</option>
            {/each}
        </select>
    </div>
    <div class="menu-cont">
        <select class="menu" name="menu" id="menu" bind:value={selectedTribe}>
            <option disabled value="None">No Selected Tribe</option>
            <option selected value="FutureWarPack">Future War Pack</option>
            <option value="OldWorldCult">Old World Cult</option>
            <option value="Planeswalkers">Planeswalkers</option>
            <option value="Proletariat">Proletariat</option>
        </select>
    </div>
    <div id="search-input-cont">
        <input  type="text" 
                id="search-field" 
                placeholder="Search" 
                autocomplete="on"
                bind:value={searchTerm}
                on:input={searchChimpions} />
    </div>
</div>


{#if searchTerm && filteredChimpions.length === 0}
    <div class="no-results-msg">
        <p>No results for {searchTerm}</p>
    </div>
{:else}
    <div class="card-grid">
        {#each filteredChimpions as chimpion}
            <Card 
                dynamic={cardMobility}
                png_by_default={png}
                name={chimpion.name.split(/(?=[A-Z])/).join(' ')}
                index={chimpion.index}
                tribe={chimpion.tribe}
                type={chimpion.type.split(/(?=[A-Z])/).join(' ')}
                bg_color={chimpion.bg_color}
                bd_color={chimpion.bd_color}
                lore={chimpion.lore}
                png_artist={chimpion.png_artist}
                gif_artist={chimpion.gif_artist}
                png={chimpion.paths.png}
                gif={chimpion.paths.gif}
                holder_name={chimpion.holder}
                level={getLevel(chimpion.holder)}
            />
        {/each}
    </div>
{/if}



<style>
	.card-grid {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 3vw;
		transform-style: preserve-3d;
		height: 100%;
		max-width: 1200px;
		margin:  50px auto;
		position: relative;
        justify-items: center;
	}

@media screen and (min-width: 800px) {
	.card-grid {
		grid-template-columns: 1fr 1fr;
	}
}

@media screen and (min-width: 1100px) {
	.card-grid {
		grid-template-columns: 1fr 1fr 1fr;
	}
}



    #query-section {
		display: flex;
        flex-wrap: wrap;
		align-items: center;
		padding: 2% 0;
	}

    .menu-cont {
        width: 200px;
        height: 40px;
        display: flex;
        margin: 10px 20px 0 0;
    }
    
    select {
        margin: 0;
        font-size: 1rem;
        border: 1px solid white;
        border-radius: 0.25rem;
        cursor: pointer;
    }
    
    .menu {
        width: 100%;
        padding: 0.5rem;
        background-color: var(--darker-purple);
        color: white;
    }

    #search-input-cont {
		width: 200px;
        height: 40px;
        display: flex;
        margin: 10px 20px 0 0;
	}

	#search-field {
		width: 100%;
		font-size: 1rem;
		border: 1px solid white;
		border-radius: 0.25rem;
        background-color: var(--darker-purple);
        color: white;
		padding: 0.5rem;
	}

    .no-results-msg {
		width: 70%;
		padding: 3rem;
		font-size: 2rem;
		text-align: center;
	}

</style>
