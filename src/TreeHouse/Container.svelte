<script>
    import { artists } from '../_content/artists.svelte';
    import TreehouseArtists from './Treehouse-artists.svelte';
    import "/public/css/global.css";

    export let numberOfColumns = 1;

    let numberOfArtists = artists.length;
    let columnOne = [];
    let columnTwo = [];
    let columnThree = [];

    if (numberOfColumns === 1) {
        columnOne = [...artists];
    } else if (numberOfColumns === 2) {
        for (let i = 0; i < numberOfArtists; i++) {
            if (i % 2 === 0) {
                columnOne.push(artists[i]);
            } else {
                columnTwo.push(artists[i]);
            }
        }
    } else {
        for (let i = 0; i < numberOfArtists; i++) {
            if (i % 3 === 0) {
                columnOne.push(artists[i]);
            } else if(i % 3 === 1) {
                columnTwo.push(artists[i]);
            } else {
                columnThree.push(artists[i]);
            }
        }
    }
</script>



{#if numberOfColumns === 1}
    <div class="dropsContainer1">
        {#each columnOne as artist}
            <TreehouseArtists 
                piece = {artist.piece}
                name = {artist.name}
                bio = {artist.bio}
                twitter = {artist.twitter}
                instagram = {artist.instagram}
                portfolio = {artist.portfolio}
                marmelade = {artist.marmelade}
                exchangeart = {artist.exchangeart}
                misc = {artist.misc}
            />
        {/each}
    </div>
{:else if numberOfColumns === 2}
    <div class="dropsContainer2">
        {#each columnOne as artist}
            <TreehouseArtists 
                piece = {artist.piece}
                name = {artist.name}
                bio = {artist.bio}
                twitter = {artist.twitter}
                instagram = {artist.instagram}
                portfolio = {artist.portfolio}
                marmelade = {artist.marmelade}
                exchangeart = {artist.exchangeart}
                misc = {artist.misc}
            />
        {/each}
    </div>
    <div class="dropsContainer2">
        {#each columnTwo as artist}
            <TreehouseArtists 
                piece = {artist.piece}
                name = {artist.name}
                bio = {artist.bio}
                twitter = {artist.twitter}
                instagram = {artist.instagram}
                portfolio = {artist.portfolio}
                marmelade = {artist.marmelade}
                exchangeart = {artist.exchangeart}
                misc = {artist.misc}
            />
        {/each}
    </div>
{:else}
    <div class="dropsContainer3">
        {#each columnOne as artist}
            <TreehouseArtists 
                piece = {artist.piece}
                name = {artist.name}
                bio = {artist.bio}
                twitter = {artist.twitter}
                instagram = {artist.instagram}
                portfolio = {artist.portfolio}
                marmelade = {artist.marmelade}
                exchangeart = {artist.exchangeart}
                misc = {artist.misc}
            />
        {/each}
    </div>
    <div class="dropsContainer3">
        {#each columnTwo as artist}
            <TreehouseArtists 
                piece = {artist.piece}
                name = {artist.name}
                bio = {artist.bio}
                twitter = {artist.twitter}
                instagram = {artist.instagram}
                portfolio = {artist.portfolio}
                marmelade = {artist.marmelade}
                exchangeart = {artist.exchangeart}
                misc = {artist.misc}
            />
        {/each}
    </div>
    <div class="dropsContainer3">
        {#each columnThree as artist}
            <TreehouseArtists 
                piece = {artist.piece}
                name = {artist.name}
                bio = {artist.bio}
                twitter = {artist.twitter}
                instagram = {artist.instagram}
                portfolio = {artist.portfolio}
                marmelade = {artist.marmelade}
                exchangeart = {artist.exchangeart}
                misc = {artist.misc}
            />
        {/each}
    </div>
{/if}



<style>
    .dropsContainer1 {
        width: 100%;
        padding: 0% 2% 0% 2%;
    }

    .dropsContainer2 {
        width: 50%;
        padding: 0% 2% 0% 2%;
    }

    .dropsContainer3 {
        width: 33.3333334%;
        padding: 0% 2% 0% 2%;
    }
</style>