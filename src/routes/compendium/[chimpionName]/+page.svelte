<script>
// @ts-nocheck
    import chimpions from "$lib/_content/chimpions.json";
    import { page } from '$app/stores';
    import NotFound from "$lib/NotFound.svelte";
	import Chimpion from "$lib/Compendium/Chimpion.svelte";
    

    let chimpionName = ""
    let chimpion_data = null;


    try {
        let chimpionNameArray = $page.params.chimpionName.split('-');
        chimpionName = chimpionNameArray
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join('');
        if (chimpions.some(chimpion => chimpion.name === chimpionName)) {
            chimpion_data = chimpions.find(chimpion => chimpion.name === chimpionName)
        }
    } catch (error) {
        chimpionName = "ChimpionNotFoundError";
        console.log('ChimpionNotFoundError');
    }



</script>



{#if (chimpion_data)}
    <Chimpion
        name={chimpion_data.name.split(/(?=[A-Z])/).join(' ')}
        index={chimpion_data.index}
        art_files={chimpion_data.paths}
        holderName={chimpion_data.holder}
        lore={chimpion_data.lore}
        tribe={chimpion_data.tribe.split(/(?=[A-Z])/).join(' ')}
        type={chimpion_data.type.split(/(?=[A-Z])/).join(' ')}
    />
{:else}
    <NotFound />
{/if}