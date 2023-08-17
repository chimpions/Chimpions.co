<script>
    import "$lib/css/global.css"
    import Navigation from "./Navigation/Navigation.svelte";
</script>

<Navigation />
<div class="full-page">
    <img src="/images/chimpions/ThePerplexed/ThePerplexed-_rabbels_.png" alt="Surprised Chimp"/>
    <h1>The page you requested does not exist...</h1>
</div>

<style>
    .full-page {
        position: fixed;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .full-page img {
        width: 20%;
        margin: 2rem;
    }

    .full-page h1 {
        font-size: 2rem;
        margin-right: 2rem;
    }

@media (max-width: 800px) {
    .full-page h1 {
        font-size: 1.5rem;
    }
}

@media (max-width: 500px) {
    .full-page img {
        margin-right: 1rem;
    }
    
    .full-page h1 {
        font-size: 1rem;
        margin: 1rem;
    }
}
</style>