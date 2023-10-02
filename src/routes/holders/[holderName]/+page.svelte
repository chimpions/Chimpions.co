<script>
// @ts-nocheck
    import holders from "$lib/_content/holders.json";
    import matrica_data from "$lib/_content/matrica_data.json";
    import discord_data from "$lib/_content/discord_data.json";
    import { page } from '$app/stores';
    import NotFound from "$lib/NotFound.svelte";
	import HolderPage from "$lib/Holders/HolderPage.svelte";


    $: holderName = getHolderName($page.params.holderName);
    $: MatricaKey = holders[holderName].matricaId;
    $: DiscordKey = holders[holderName].discordId;


    function getHolderName(params) {
        try {
            let holderName = params.toLowerCase();
            for (let key in holders) {
                if (key.toLowerCase() == holderName) {
                    return holderName = key;
                }
            }
        } catch (error) {
            console.log('HolderNotFoundError');
            return holderName = null;
        }
    }
    
</script>



{#if (MatricaKey && DiscordKey)}
    <HolderPage
        holderName={holderName}
        pfp={matrica_data[MatricaKey].pfp}
        twitter={discord_data[DiscordKey].twitterHandle}
        discord={discord_data[DiscordKey].discordHandle}
        points={discord_data[DiscordKey].points}
        level={discord_data[DiscordKey].level}
        chimpions_held={matrica_data[MatricaKey].chimpions}
        TWS={matrica_data[MatricaKey].TWS}
        experience={holders[holderName].experience}
        skills={holders[holderName].skills}
        favoriteArt={holders[holderName].favoriteArt}
    />
{:else}
    <NotFound />
{/if}