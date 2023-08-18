<script>
// @ts-nocheck


    import { onMount } from "svelte";
    export let label;
    export let design = 'inner'
    export let pngByDefault = true;
    export let cardMobility = true;

    let checked = true;

    let windowWidth = 1000;

    onMount(() => {
        windowWidth = window.innerWidth;
        window.addEventListener('resize', updateWindowSize);
    })

    $: if (windowWidth < 500)  {cardMobility = false; checked = false};

    function updateWindowSize() {
        windowWidth = window.innerWidth;
    }

    function handleClickImageFormat(event) {
        const target = event.target;
        const state = target.getAttribute('aria-checked');
        checked = state === 'true' ? false : true;
        pngByDefault = checked;
    }

    function handleClickCardMobility(event) {
        const target = event.target;
        const state = target.getAttribute('aria-checked');
        if (state === 'false' && windowWidth < 500) {
            checked = false;
            alert("Your screen is too small to activate this feature");
        } else if (state === 'false' && windowWidth > 500) {
            checked = true;
        } else {
            checked = false;
        };
        cardMobility = checked;
    }
</script>



{#if design == 'inner'}
	<div class="s--inner">
	    <span>{label}</span>
	    <button
	        role="switch"
	        aria-checked={checked}
	        on:click={handleClickImageFormat}>
	            <span>static</span>
	            <span>animated</span>
	    </button>
	</div>
{:else if design == 'slider'}
	<div class="s--slider">
	    <span>{label}</span>
	    <button
	        role="switch"
	        aria-checked={checked}
	        on:click={handleClickCardMobility}>
	    </button>
	</div>
{/if}



<style>
    .s--inner {
        width: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid white;
        border-radius: 0.25rem;
        padding: 0.5rem;
        font-size: 1rem;
        margin: 10px 20px 0 0;
    }

    .s--inner button {
        display: flex;
        padding: 0 0.5rem;
        background-color: inherit;
        border: 0px;
        color: white;
    }

    .s--inner button span {
        user-select: none;
        pointer-events: none;
        padding: 0.25rem 0.5rem;
    }

    [role='switch'][aria-checked='true'] :first-child,
    [role='switch'][aria-checked='false'] :last-child {
        border-radius: 0.25em;
        background: var(--purple);
        display: inline-block;
    }



    .s--slider {
        width: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid white;
        border-radius: 0.25rem;
        padding: 0.5rem;
        font-size: 1rem;
        margin: 10px 20px 0 0;
    }

    .s--slider button {
        width: 3em;
        height: 1.6em;
        position: relative;
        margin: 0 0 0 0.5em;
        background: var(--whiter-purple);
        border: 1px var(--whiter-purple) solid;
        border-radius: 0.25em;
    }

    .s--slider button::before {
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        background: #fff;
        top: 0.10rem;
        right: 1.25rem;
        border-radius: 0.25rem;
        transition: transform 0.4s;
    }

    .s--slider button[aria-checked='true']{
        background-color: var(--purple)
    }

    .s--slider button[aria-checked='true']::before{
        transform: translateX(1.15rem);
    }
</style>