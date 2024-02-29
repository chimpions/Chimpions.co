<script>
    import { merchStatus } from "./MerchStatus.svelte";
    import Navigation from "../Navigation/Navigation.svelte";
    import BackToTop from "../BackToTop.svelte";

    // Query results
    let filteredChimpions = [];
	
	// For Search Input
	let searchTerm = "";
	
	const searchChimpions = () => {
        if (searchTerm == "") {
            return filteredChimpions = [];
        } else {
            return filteredChimpions = merchStatus.filter(chimpion => {
                let name = chimpion.chimpionName.toLowerCase();
                return name.includes(searchTerm.replace(/ /g,'').toLowerCase())
            });
        }
	}

</script>


<Navigation />
<section class="container">
    <h1 class="heading">Merch Redemption List</h1>
    <div id="query-section">
        <div class="introduction">
            Search by Chimpion Name:&nbsp;<br/>(<span style="margin: 1rem 0rem; color: red">Red </span> names have been claimed)
        </div>
        <div id="search-input-cont">
            <input  type="text" 
                    id="search-field" 
                    placeholder="Enter Chimpion Name" 
                    autocomplete="on"
                    bind:value={searchTerm}
                    on:input={searchChimpions} />
        </div>
    </div>
    <div class="chimps">
        <ul>
            {#if searchTerm && filteredChimpions.length === 0}
                <div class="no-results-msg">
                    <p>No results for {searchTerm}.</p>
                </div>
            {:else if filteredChimpions.length > 0}
                {#each filteredChimpions as chimpion}
                    <li class:claimed={chimpion.claimed.toLowerCase() === "y"}>
                        {chimpion.chimpionName}
                    </li>
                {/each}
            {:else}
                {#each merchStatus as chimpion}
                    <li class:claimed={chimpion.claimed.toLowerCase() === "y"}>
                        {chimpion.chimpionName}
                    </li>
                {/each}
            {/if}
        </ul>
    </div>
    <BackToTop />
</section>



<style>
    .introduction {
        min-width: 250px;
        line-height: 1.25rem;
    }

    #query-section {
		width: 100%;
		display: flex;
        justify-content: left;
		align-items: center;
        margin: 2rem;
		padding: 2% 0;
	}

    #search-input-cont {
		width: 300px;
		margin-left: 20px;
	}

	#search-field {
		width: 100%;
		font-size: 1.25rem;
		border: 1px solid white;
		border-radius: 0.25rem;
        background-color: var(--darker-purple);
        color: white;
		padding: 0.5rem;
	}

    .no-results-msg {
		width: 100%;
		padding: 3rem;
		font-size: 2rem;
		text-align: center;
	}

    .chimps {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    .chimps ul li {
        text-align: center;
        list-style: none;
        margin: 0.5rem;
        font-size: 1.5rem;;
    }

    .claimed {
        color: red;
    }
</style>