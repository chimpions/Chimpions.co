<script>
// @ts-nocheck

    import { spring } from "svelte/motion";
    import { activeCard } from "./stores/activeCard.js"; 
    import { resetBaseOrientation } from "./stores/orientation.js";
    import { onMount } from 'svelte';

    export let dynamic = true;
    export let name = "";
    export let index = 0;
    export let tribe = "";
    export let type = "";
    export let art_files = {};
    export let lore = "";
    export let holder_name = "";
    export let level = 1;
    export let twitter = "";



    
    let images = [];
    let currentIndex = 0;
    let displayed_image = "";
    let artist = "";
    let searchTerm = "";
    let bd_color = "transparent";
    let videoPlayer;
    $: images = getImages(art_files);



    function getImages(art_files) {
        searchTerm = "";
        displayed_image = art_files["png"];
        artist = displayed_image.split(".")[0].split("-")[1];
        let imagesArray = [art_files["png"]];
        imagesArray = [...imagesArray, art_files["gif"]];
        for (let alternative_art of art_files["alternative_art"]) {
            imagesArray = [...imagesArray, alternative_art];
        }
        return images = imagesArray;
    };

    onMount(() => {
        displayed_image = art_files["png"];
        artist = displayed_image.split(".")[0].split("-")[1];
    });


    const getPrevious = () => {
        buttonClicked = previous;
        currentIndex = (currentIndex + images.length - 1) % images.length;
        displayed_image = images[currentIndex];
        artist = displayed_image.split(".")[0].split("-")[1];
        if (displayed_image.slice(-3) == "mp4" || displayed_image.slice(-3) == "mov") {
            videoPlayer.load();
            videoPlayer.play();
        }
    };

    const getNext = () => {
        buttonClicked = next;
        currentIndex = (currentIndex + 1) % images.length;
        displayed_image = images[currentIndex];
        artist = displayed_image.split(".")[0].split("-")[1];
        if (displayed_image.slice(-3) == "mp4" || displayed_image.slice(-3) == "mov") {
            videoPlayer.load();
            videoPlayer.play();
        }
    };



    $: loreToDisplay = lore.replace(/\n/g, '<br>');
    $: if (name) currentIndex = 0;


    const getFrontCardBg = () => {
        try {
            return( `background: no-repeat url('/images/chimp-front-card-v2.png'); background-size: cover;` );
        } catch (error) {
            return("");
        }
    }

    let thisCard;
    let rotator;
    let previous;
    let next;
    let buttonClicked;
    let active = false;
    let rotate = false;
    let loading = true;


    const springD = { stiffness: 0.033, damping: 0.45 };
    const springS = { stiffness: 0.05, damping: 0.45, precision: 0.001 };
    let springRotateDelta = spring({ x: 0, y: 0 }, springD);
    let springScale = spring(1, springS);
    let zIndex = 1;

    const mouseover = (e) => {
        bd_color = "white";
    }

    const mouseout = (e) => {
        bd_color = "transparent"
    }

    const activate = (e) => {
        if ($activeCard && $activeCard === thisCard) {
            if (dynamic) {
                deactivate();
            } else {
                rotate = false;
                $activeCard = undefined;
            }
        } else {
            if (buttonClicked == previous || buttonClicked == next) {
                rotate = false
                buttonClicked = undefined;
            } else {
                $activeCard = thisCard;
                if (dynamic) {
                    popover()
                    resetBaseOrientation();
                } else {
                    rotate = true;
                }
            }

        }
    };

    const deactivate = (e) => {
        if ($activeCard) {
                retreat();
                setTimeout(() => {
                    zIndex = 1;
                }, 400);
                $activeCard = undefined;
            }
    };

    const popover = () => {
        springRotateDelta.set({
            x: 180,
            y: 0,
        });
        springScale.set(1.2);
        zIndex = 50;
        setTimeout(() => {
            springScale.set(1 , { soft: true });
        }, 200);
        resetBaseOrientation();
    };

    const retreat = () => {
        if (dynamic) {
            springScale.set(1.2);
            setTimeout(() => {
                springScale.set(1 , { soft: true });
            }, 200);
            springRotateDelta.set({ x: 0, y: 0 }, { soft: true });
        } else {
            rotate = false;
            $activeCard = undefined;
        }
    };



    $: styles = `
            --s: ${$springScale};
            --z: ${zIndex};
            --rx: ${$springRotateDelta.x}deg;
            --ry: ${$springRotateDelta.y}deg;
            --bd-color: ${bd_color};
        `;

    const imageLoader = (e) => {
        loading = false;
    };

</script>



<div
    class="card"
    class:active
    class:rotate
    class:loading
    style={styles}
    bind:this={thisCard}
    >
    <div class="card__translater">
        <button
            class="card__rotator"
            id={index.toString()}
            bind:this={rotator}
            on:click={activate}
            on:mouseover={mouseover}
            on:mouseout={mouseout}
            on:focus={mouseover}
            on:blur={deactivate}
            aria-label="Expand the Card of {name}."
            tabindex="0"
        >
            <div class="dynamic__card">
                <div>
                    <div class="card__front" style={getFrontCardBg}>
                        {#if name.length > 21}
                            <div class="chimpion__name" style="font-size: 0.875rem; top:26px">
                                {name}
                            </div>
                        {:else if name.length > 15}
                            <div class="chimpion__name" style="font-size:1.25rem; top:22px">
                                {name}
                            </div>
                        {:else}
                            <div class="chimpion__name">
                                {name}
                            </div>
                        {/if}
                        <div class="level_box">
                            lvl.<span class="level">{level}</span>
                        </div>
                        <div class="image-container">
                            <button type="button" bind:this={previous} tabindex="0" aria-label="previous slide / item" class="control-arrow-prev" on:click={getPrevious}/>
                            <div class="image">
                                {#if displayed_image.slice(-3) == "mp4" || displayed_image.slice(-3) == "mov"}
                                    <!-- svelte-ignore a11y-media-has-caption -->
                                    <video autoplay width="400" style="image-rendering: auto" bind:this={videoPlayer}>
                                        <source src={displayed_image} type="video/mp4" />
                                    </video>
                                {:else if currentIndex <= 1}
                                    <img src={displayed_image}
                                    on:load={imageLoader}
                                    style="image-rendering: pixelated"
                                    loading="lazy"
                                    alt="Art {currentIndex + 1} of {name}" />
                                {:else}
                                    <img src={displayed_image}
                                    on:load={imageLoader}
                                    style="image-rendering: auto"
                                    loading="lazy"
                                    alt="Art {currentIndex + 1} of {name}" />
                                {/if}
                                <ul class="control-dots">
                                {#each images as image, i}
                                    <li class={i === currentIndex ? "dot selected" : "dot"} value={i} aria-label="slide item {i+1}"/>
                                {/each}
                                </ul>
                            </div>
                            <button type="button" bind:this={next} tabindex="0" aria-label="next slide / item" class="control-arrow-next" on:click={getNext}/>
                        </div>
                        <div class="description__card">
                            <span>Tribe: {tribe.split(/(?=[A-Z])/).join(' ')}</span>
                            <span>Type: {type}</span>
                            {#if holder_name != ""}
                                <span class="holder">Holder:&nbsp;<a href="https://twitter.com/{twitter}" target="_blank">{holder_name}</a></span>
                            {:else}
                                <span>Holder: Unknown</span>
                            {/if}
                            <span>Artist: {artist}</span>
                        </div>
                    </div>
                </div>
                <div class="card__back">
                    <div class="lore">
                        {#if (lore != "")}
                            <p>{@html loreToDisplay}</p>
                        {:else}
                            No lore for this chimpion yet...
                        {/if}
                    </div>
                </div>
            </div>
        </button>
    </div>
</div>



<style>
    :root {
        --s: 1;
        --z: 1;
        --rx: 0deg;
        --ry: 0deg;
        --bd-color: #ffffff;
    }

    .card {
        height: 394px;
        width: 302px;
        margin-bottom: 2vh;
        --radius: 0.75rem;
        border-radius: var(--radius);
        z-index: var(--z);
        transform: translate3d(0, 0, 0.1px);
        -webkit-transform: translate3d(0, 0, 0.1px);
        will-change: transform, visibility;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
    }

    .dynamic__card {
        height: 394px;
        width: 302px;
    }

    .card.active .card__translater,
    .card.active .card__rotator {
        touch-action: none;
    }

    .card__translater,
    .card__rotator {
        display: grid;
        perspective: 600px;
        transform-origin: center;
        -webkit-transform-origin: center;
        will-change: transform;
    }

    .card__translater {
        width: auto;
        position: relative;
        transform: scale(var(--s));
        -webkit-transform: scale(var(--s));
        image-rendering: pixelated;
        display: flex;
        flex-direction: row;
        flex-flow: row nowrap;
    }

    .card__rotator {
        transform: rotateY(var(--rx)) rotateX(var(--ry));
        transform-style: preserve-3d;
        -webkit-transform: rotateY(var(--rx)) rotateX(var(--ry));
        -webkit-transform-style: preserve-3d;
        box-shadow: 0px 10px 20px -5px black;
        border-radius: var(--radius);
        outline: none;
        transition: box-shadow 0.4s ease, outline 0.2s ease;
    }

    button.card__rotator {
        appearance: none;
        -webkit-appearance: none;
        border: none;
        background: top;
        padding: 0;
        box-shadow: 0px 0px 20px var(--bd-color);
    }

    .card__rotator :global(*) {
        width: 100%;
        display: grid;
        grid-area: 1/1;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
    }

    .card__back {
        border-radius: var(--radius);
        transform: rotateY(180deg) translateZ(1px);
        -webkit-transform: rotateY(180deg) translateZ(1px);
        backface-visibility: hidden;
    }

    .rotate .card__back {
        transform: rotateY(0deg) translateZ(1px);
        -webkit-transform: rotateY(0deg) translateZ(1px);
        backface-visibility: hidden;
    }

    .card__front,
    .card__front * {
        backface-visibility: hidden;
    }

    .card__front {
        border-radius: var(--radius);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: no-repeat url("/images/chimp-front-card-v2.png");
        background-size: cover;
        opacity: 1;
        text-shadow: 1px 2px 5px black;
    }

    .card__back {
        background: no-repeat url("/images/chimp-back-card-v2.png");
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: center;
        height: 100%;
        width: 100%;
    }

    .loading .card__front {
        opacity: 0;
    }

    .loading .card__back {
        transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
    }

    .chimpion__name {
        position: absolute;
        top: 19px;
        left: 25px;
        text-align: left;
        font-style: italic;
        font-size: 1.5rem;
        color: white;
        text-shadow: 1px 2px 5px black;
        opacity: 1;
    }

    .level_box {
        display: flex;
        justify-content: end;
        align-items: baseline;
        position: absolute;
        top: 25px;
        right: 26px;
        text-align: right;
        color: white;
        font-size: 0.75rem;
    }

    .level {
        width: fit-content;
        margin-left: 2px;
        font-size: 1rem;
    }

    .description__card {
        position: absolute;
        top: 288px;
        text-align: left;
        width: 240px;
        padding: 8px;
        color: white;
        font-style: italic;
        line-height: 1.25rem;
        font-size: 1rem;
        display: flex;
        flex-direction: column;
    }
    
    .description__card .holder{
        display: flex;
    }

    .card a {
        color: inherit;
        width: fit-content;
    }

    .lore {
        position: absolute;
        width: 100%;
        padding: 2rem;
        font-size: 1rem;
        font-style: italic;
        line-height: 1.25rem;
    }

    .card__rotator .image-container {
        position: absolute;
        top: 50px;
        height: 238px;
        width: 284px;
        display: flex;
    }

    .card__rotator .image {
        height: 238px;
        width: 238px;
        align-items: center;
    }

    .control-dots {
        width: 100%;
        margin: 0px;
        padding: 0;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
    }

    .dot {
        opacity: .3;
        width: 8px;
        height: 8px;
        background: #fff;
        border-radius: 50%;
        margin: 5px;
        transition: opacity .2s ease;
        display: inline-block;
        box-shadow: 1px 1px 2px rgba(0,0,0,.9);
    }

    .dot.selected {
        opacity: 1;
    }

    .control-arrow-prev {
        padding: 5px;
        background: 0 0;
        color: #fff;
        opacity: .4;
        text-align: left;
        cursor: pointer;
        width: 22px;
        align-items: center;
        justify-content: center;
        border: 0;
        transition: all .3s ease;
    }

    .control-arrow-next {
        padding: 5px;
        background: 0 0;
        color: #fff;
        opacity: .4;
        text-align: right;
        cursor: pointer;
        width: 22px;
        align-items: center;
        justify-content: center;
        border: 0;
        transition: all .3s ease;
    }

    .control-arrow-prev:hover {
        opacity: 1;
    }

    .control-arrow-next:hover {
        opacity: 1;
    }

    .control-arrow-prev:before {
        content: "";
        border-top: 10px solid transparent;
        border-right: 10px solid #fff;
        border-bottom: 10px solid transparent;
        margin: 0 5px;
        display: inline-block;
    }

    .control-arrow-next:before {
        content: "";
        border-top: 10px solid transparent;
        border-left: 10px solid #fff;
        border-bottom: 10px solid transparent;
        margin: 0 5px;
        display: inline-block;
    }

</style>
