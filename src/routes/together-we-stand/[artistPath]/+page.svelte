<script>
// @ts-nocheck
    import Artist from "$lib/TogetherWeStand/Artist.svelte";
    import { drops } from "$lib/_content/tws.svelte";
    import { page } from '$app/stores';
	import NotFound from "$lib/NotFound.svelte";
    
    const artistPath = $page.params.artistPath;
    let TWS_data = null;

    if (drops.some(item => item.artistPath === artistPath)) {
        TWS_data = drops.find(item => item.artistPath === artistPath)
    }

</script>

{#if (TWS_data)}
    <Artist
        artist={TWS_data.artist}
        twitter={TWS_data.twitter}
        portfolio={TWS_data.portfolio}
        discord={TWS_data.discord}
        piecePath={TWS_data.piece.path}
        pieceTeaserPath={TWS_data.piece.teaserPath}
        pieceTitle={TWS_data.piece.title}
        pieceReleased={TWS_data.piece.released}
        copy={TWS_data.copy}
        qa={TWS_data.qa}
    />
{:else}
    <NotFound />
{/if}