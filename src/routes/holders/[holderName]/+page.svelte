<script>
// @ts-nocheck
    import holders from "$lib/_content/holders.json";
    import { page } from '$app/stores';
    import NotFound from "$lib/NotFound.svelte";
	import HolderPage from "$lib/Holders/HolderPage.svelte";
    // import Chimpion from "$lib/Compendium/Chimpion.svelte";
    

    let holderName = ""
    $: holder_data = getHolderData($page.params.holderName);

    function getHolderData(params) {
        try {
            let holderNameArray = params.toLowerCase();
            holderName = holderNameArray;
            // holderName = holderNameArray
            //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            //     .join('');
            console.log(holderName)
            for (let key in holders) {
                if (key.toLowerCase() == holderName) {
                    console.log("found");
                    let xholder_data = holders[key];
                    console.log(xholder_data);
                    return holder_data = holders[key];
                }
            }
            
        } catch (error) {
            console.log('HolderNotFoundError');
            return holder_data = null;
        }
    }
    
</script>



{#if (holder_data)}
    <HolderPage
        holderName={holderName}
        pfp={holder_data.pfp}
        twitter={holder_data.twitter}
        level={holder_data.level}
        chimpions={holder_data.chimpions}
        TWS={holder_data.TWS}
    />
{:else}
    <NotFound />
{/if}