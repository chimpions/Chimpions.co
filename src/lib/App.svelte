<!-- <script>
    import { Router, Route } from "svelte-navigator";
    import Landing from "$lib/Landing/Landing.svelte";
    import Compendium from "$lib/Compendium/Compendium.svelte";
    import Holders from "$lib/Holders/Holders.svelte";
    import holders from "$lib/_content/holders.json";
    import HolderPage from "$lib/Holders/HolderPage.svelte";
    import TheChiao from "$lib/TheChiao/TheChiao.svelte";
    import MerchRedemption from "$lib/MerchRedemption/MerchRedemption.svelte";
    import TogetherWeStand from "$lib/TogetherWeStand/TogetherWeStand.svelte";
    import TreeHouse from "$lib/TreeHouse/TreeHouse.svelte";
    // @ts-ignore
    import Artist from "$lib/TogetherWeStand/Artist.svelte";
    import { drops } from "$lib/_content/tws.svelte";
    import Chimpion from "$lib/Compendium/Chimpion.svelte";
    import chimpions from "$lib/_content/chimpions.json";
    import NotFound from "$lib/NotFound.svelte";

</script>


<main>
    <Router>
        <Route path="*" component={NotFound} />
        <Route path="/">
            <Landing />
        </Route>
        <Route path="/compendium">
            <Compendium />
        </Route>
        {#each chimpions as chimpion}
            <Route path={`/compendium/${chimpion.name.split(/(?=[A-Z])/).join('-').toLowerCase()}`}>
                <Chimpion
                    name={chimpion.name.split(/(?=[A-Z])/).join(' ')}
                    index={chimpion.index}
                    art_files={chimpion.paths}
                    holderName={chimpion.holder}
                    lore={chimpion.lore}
                    tribe={chimpion.tribe.split(/(?=[A-Z])/).join(' ')}
                    type={chimpion.type.split(/(?=[A-Z])/).join(' ')}
                />
            </Route>
        {/each}
        <Route path="/the-chiao">
            <TheChiao />
        </Route>
        <Route path="/together-we-stand">
            <TogetherWeStand />
        </Route>
        <Route path="/treehouse">
            <TreeHouse />
        </Route>
        <Route path="/merchRedemption">
            <MerchRedemption />
        </Route>
        <Route path="/holders">
            <Holders />
        </Route>
        {#each Object.keys(holders) as holder_name}
            <Route path={`/holders/${holder_name}`}>
                <HolderPage
                    name={holder_name}
                    holder_data={holders[holder_name]}
            />
            </Route>
        {/each}
        {#each drops as drop}
            <Route path={`/together-we-stand/${drop.artistPath}`}>
                <Artist
                    artist={drop.artist}
                    twitter={drop.twitter}
                    portfolio={drop.portfolio}
                    discord={drop.discord}
                    piecePath={drop.piece.path}
                    pieceTeaserPath={drop.piece.teaserPath}
                    pieceTitle={drop.piece.title}
                    pieceReleased={drop.piece.released}
                    copy={drop.copy}
                    qa={drop.qa}
                />
            </Route>
        {/each}
    </Router>
</main> -->