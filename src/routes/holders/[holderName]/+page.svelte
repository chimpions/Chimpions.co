<script>
// @ts-nocheck
    import holders from "$lib/_content/holders.json";
    import discord_data from "$lib/_content/discord_data.json";
    import { page } from '$app/stores';
    import NotFound from "$lib/NotFound.svelte";
	import HolderPage from "$lib/Holders/HolderPage.svelte";
    

    let holderName = ""
    $: holder_data = getHolderData($page.params.holderName);

    function getHolderData(params) {
        try {
            let holderNameArray = params.toLowerCase();
            holderName = holderNameArray;
            for (let key in holders) {
                if (key.toLowerCase() == holderName) {
                    holderName = key;
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
        twitter={discord_data[holder_data["discordId"]]["twitterHandle"]}
        discord={discord_data[holder_data["discordId"]]["discordHandle"]}
        points={discord_data[holder_data["discordId"]]["points"]}
        level={discord_data[holder_data["discordId"]]["level"]}
        chimpions_held={holder_data.chimpions}
        TWS={holder_data.TWS}
        experience={holder_data.experience}
        skills={holder_data.skills}
    />
{:else}
    <NotFound />
{/if}