<script>
// @ts-nocheck

    import Navigation from "$lib/Navigation/Navigation.svelte";
    import BackToTop from "$lib/BackToTop.svelte";
    import "$lib/css/global.css";

    import Card from "./Cards/card.svelte";
    import chimpions from "../_content/chimpions.json";
  	import { onMount } from "svelte";

	let cardMobility = true
    let types = [];
	let selectedType = "SelectAType";
    let selectedTribe = "Proletariat";
    let lastSelectedTribe = "";
    let lastSelectedType = "";
    let windowWidth = 1000;



    $: if (windowWidth < 500) {cardMobility = false} else {cardMobility = true};

    function updateWindowSize() {
        windowWidth = window.innerWidth;
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
        getTypes();
        windowWidth = window.innerWidth;
        window.addEventListener('resize', updateWindowSize);
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

    $: styles = `--width: ${windowWidth}px`;

</script>


<Navigation />
<section id="compendium">
    <div class="introduction">
        <h1 class="heading">Compendium</h1>
        <p class="subsectionParagraph" style="margin-bottom: 0">You've enter the hallowed halls of Chimpianity. Here before you lies the collective history of Chimpions past, present, and future. Tread with care.</p>
        <p class="subsectionParagraph" style="margin-bottom: 0">The lore is visible on the back of the cards. Click on it to find out!<br/>You can submit lore for any chimp by filling <a href="https://forms.gle/SZ38C4jKhvY6vP366" style="color: inherit" target="blank_">this form</a>.</p>
        <p class="subsectionParagraph">You can buy a Chimpion <a href="https://www.tensor.trade/trade/the_chimpions" style="color: inherit" target="blank_">here</a>!</p>
        <div id="query-section">
            <div class="menu-cont">
                <select class="menu" name="menu" id="menu" bind:value={selectedTribe}>
                    <option disabled value="None">No Selected Tribe</option>
                    <option selected value="FutureWarPack">Future War Pack</option>
                    <option value="OldWorldCult">Old World Cult</option>
                    <option value="Planeswalkers">Planeswalkers</option>
                    <option value="Proletariat">Proletariat</option>
                </select>
            </div>
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
            <div id="search-input-cont">
                <input  type="text" 
                        id="search-field" 
                        placeholder="Search" 
                        autocomplete="on"
                        bind:value={searchTerm}
                        on:input={searchChimpions} />
            </div>
        </div>
    </div>


    {#if searchTerm && filteredChimpions.length === 0}
        <div class="no-results-msg">
            <p>No results for {searchTerm}</p>
        </div>
    {:else}
        <div class="card-grid" style={styles}>
            {#each filteredChimpions as chimpion}
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
    <BackToTop />
</section>



<style>
    :root {
        --width: 1000px;
    }

    #compendium {
        overflow-x: hidden;
    }

    .introduction {
        margin: 0px 10%;
    }

    .introduction {
        padding-top: 6rem;
    }

    .card-grid {
		display: grid;
		grid-template-columns: 305px;
		transform-style: preserve-3d;
		height: 100%;
		margin:  50px auto;
        row-gap: 50px;
		position: relative;
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