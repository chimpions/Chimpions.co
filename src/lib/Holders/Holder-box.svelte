<script>
// @ts-nocheck

    export let name = "";
    export let matrica_data = {};

    $: pfp = matrica_data["pfp"];

    function handleImageError() {
        pfp = '/images/unrevealed.png';
    }

</script>



<div class="holder-box">
    <a class="align-items" href="./holders/{name}" rel="noreferrer">
        <img class="pfp" src={pfp} alt="" on:error={handleImageError} />
        <span class="name">
            {#each name.split(" ") as namepart, i}
            {#if (i < name.split(" ").length-1)}
                {namepart}&nbsp
            {:else}
                {namepart}
            {/if}
            {/each}
        </span>
    </a>
</div>



<style>
    .holder-box {
        margin: 20px;
        height: 70px;
        border: 1px solid var(--purple);
        border-radius: 0.25rem;
        background-color: var(--dark-purple);
        transition: all 0.2s ease;
    }

    .holder-box:hover {
        border: 1px solid var(--white-purple);
        background-color: var(--purple);
    }

    .align-items {
        display: flex;
        align-items: center;
    }

    .pfp {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin: 10px;
    }

    .name {
        margin-right: 10px;
        color: var(--whiter-purple);
    }

    a {
        color: var(--whiter-purple);
        text-decoration: none;
    }

@media (max-width: 500px) {
    .holder-box {
        margin: 10px;
        height: 50px;
        font-size: 0.75rem;
    }

    .pfp {
        height: 40px;
        width: 40px;
        margin: 5px;
    }

    .name {
        margin-right: 5px;
    }
}

</style>