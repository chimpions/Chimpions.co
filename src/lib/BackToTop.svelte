<script> 
    import "$lib/css/global.css";

    export let showOnPx = 500;
    let hidden = true;

    function goTop() {
        document.body.scrollIntoView();
    }

    function scrollContainer() {
        return document.documentElement || document.body;
    }

    function handleOnScroll() {
        if (!scrollContainer()) {
            return;
        }

        if (scrollContainer().scrollTop > showOnPx) {
            hidden = false;
        } else {
            hidden = true;
        }
    }
</script>


<svelte:window on:scroll={handleOnScroll} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="button-zone" class:hidden>
    <div class="back-to-top" role="presentation" on:click={goTop}>
        Back to top
    </div>
</div>



<style>
    .button-zone {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        transition: all 0.3s ease;
    }

    .back-to-top {
        position: relative;
        padding: 0.5rem 0.75rem;
        cursor: pointer;
        color: white;
        background-color: black;
        border-radius: 0.25rem;
        border: 1px white solid;
        opacity: 1;
        transition: opacity 0.3s ease;  
    }

    .back-to-top:after {
        position: absolute;
        content: "";
        background: #fff;
        width: 104%;
        height: 112%;
        left: -2%;
        top: -6%;
        border-radius: 0.25rem;
        transform: scaleY(0);
        z-index: -1;
        transition: transform 0.2s ease;
        transform-origin: top;
    }

    .button-zone .back-to-top:hover:after {
        transform: scaleY(1);
        transform-origin: bottom;
    }

    .hidden {
        z-index: -1;
        opacity: 0;
        transition: all 0.3s ease;
    }
</style>