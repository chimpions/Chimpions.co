<script>
    import Fa from 'svelte-fa/src/fa.svelte';
    import { faDollar } from '@fortawesome/free-solid-svg-icons/index.js';
    import { faTwitter } from '@fortawesome/free-brands-svg-icons/index.js';
    import LoadingSquare from './LoadingSquare.svelte';

    export let website = "";
    export let image = "";
    export let name = "";
    export let numberOfThisCollection = 0;
    export let twitter = "";
    export let marketplace = "";

    $: styles = `
                --numberOfThisCollection: ${numberOfThisCollection};`;
</script>



<div class="collectionContainer">
    <LoadingSquare
        website={website}
        image={image}
    />
    <div class="numberOf">
        <div class="increment" style={styles}></div>
        <div class="collectionName">
            {name}
        </div>
    </div>
    <a href={twitter} class="links" target="_blank" rel="noreferrer">
        <Fa icon={faTwitter} size="sm" />Twitter
    </a>
    <a href={marketplace} class="links" target="_blank" rel="noreferrer">
        <Fa icon={faDollar} size="sm" />Tensor
    </a>
</div>



<style>
    :root {
        --numberOfThisCollection: 0;
    }

    .collectionContainer {
        background: var(--dark-purple);
        border: 4px var(--purple) solid;
        border-radius: 0.25rem;
        box-shadow: 5px 5px 5px var(--dark-purple);
        height: 350px;
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all 0.2s;
    }

    .collectionContainer:hover {
        background: var(--purple);
        border: 4px var(--white-purple) solid;
        --border-color: var(--purple-white);
    }

    .numberOf {
        display: flex;
        justify-content: end;
        width: 200px;
        column-gap: 0.5rem;
        font-size: 2rem;
        padding: 0.5rem;
        color: white;
    }

    @property --num {
        syntax: "<integer>";
        initial-value: 0;
        inherits: false;
    }

    .increment {
        width: 70px;
        text-align: end;
        animation: counter 4.20s ease-out forwards;
        counter-set: num var(--num);
    }

    .increment::after {
        content: counter(num);
    }

    @keyframes counter {
        0% { --num: 0; }
        100% { --num: var(--numberOfThisCollection); }
    }

    .collectionName {
        width: 65%;
    }

    .links {
        display: flex;
        margin-bottom: 0.25rem;
        column-gap: 0.25rem;
        color: rgb(209 213 219);
        text-decoration-line: underline;
    }

    .links:hover {
        color: white;
    }
</style>