<script>
    export let holderName = "";
    export let holderPfp = "";

    function handleImageError() {
        holderPfp = '/images/unrevealed.png'
    }
</script>



<a href={`/holders/${holderName}`}>
    <li><img class="search-pfp" src={holderPfp} alt="" on:error={handleImageError}/>{holderName}</li>
</a>



<style>
    a {
        vertical-align: bottom;
        text-decoration: none;
        color: var(--whiter-purple);
    }

    a:hover {
        text-decoration: underline;
    }

    li {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0px;
        border-top: 1px solid var(--purple);
        background-color: var(--darker-purple);
        transition: background-color 0.2s ease;
    }

    li:hover {
        background-color: var(--purple);
    }

    .search-pfp {
        width: 30px;
        margin-right: 5px;
        vertical-align: bottom;
    }
</style>