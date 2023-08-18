<script>
// @ts-nocheck

    import { spring } from "svelte/motion";
    import { activeCard } from "../stores/activeCard.js"; 
    import { resetBaseOrientation } from "../stores/orientation.js";
    import { round } from "../helpers/Math.js";

    import Glare from "./card-glare.svelte";
	import { onMount } from "svelte";

    export let dynamic = true;
    export let png_by_default = false;
    export let name = "";
    export let index = 0;
    export let tribe = "";
    export let type = "";
    export let bg_color = "";
    export let bd_color = "";
    export let lore = "";
    export let png_artist = "";
    export let gif_artist = "";
    export let png = "";
    export let gif = "";
    export let holder_name = "";
    export let level = 1;


    $: loreToDisplay = lore.replace(/\n/g, '<br>');
    $: front_img = gif;
    $: displayed_artist = png_artist;

    const getFrontCardBg = (bg_color) => {
        try {
            bd_color = "white";
            // return( `background: no-repeat url('/images/chimp-front-card-${bg_color}.png'); background-size: cover;` );
            return( `background: no-repeat url('/images/chimp-front-card-v2.png'); background-size: cover;` );
        } catch (error) {
            return("");
        }
    }

    let thisCard;
    let rotator;
    let active = false;
    let interacting = false;
    let loading = true;
    let isVisible = true;

    onMount(() => {
        isVisible = document.visibilityState === "visible";
        document.addEventListener("visibilitychange", (e) => {
            isVisible = document.visibilityState === "visible";
            if (!isVisible) {
                reset();
            }
        });
    });

    const springR = { stiffness: 0.066, damping: 0.45 };
    const springD = { stiffness: 0.033, damping: 0.45 };
    const springS = { stiffness: 0.066, damping: 0.45, precision: 0.001 };
    let springRotate = spring({ x: 0, y: 0 }, springR);
    let springGlare = spring({ x: 50, y: 50, o: 0 }, springR);
    let springBackground = spring({ x: 50, y: 50 }, springR);
    let springRotateDelta = spring({ x: 0, y: 0 }, springD);
    let springTranslate = spring({ x: 0, y: 0 }, springD);
    let springScale = spring(1, springS);
    let zIndex = 1;

    const interact = (e) => {
        if (dynamic) {
            bd_color = "white";
            if (!(active)) {
                if (isVisible && $activeCard && $activeCard !== thisCard) {
                    return (interacting = false);
                }

                interacting = true;

                if (e.type === "touchmove") {
                    e.clientX = e.touches[0].clientX;
                    e.clientY = e.touches[0].clientY;
                } // position of the mouse on the screen

                const $card = document.getElementById(index.toString()); // position of the card
                // const $element = e.target;
                const rect = $card.getBoundingClientRect(); // get card's current size/position
                const absolute = {
                    x: e.clientX - rect.left, // get mouse position from left
                    y: e.clientY - rect.top, // get mouse position from right
                };

                const percent = {
                    x: round((absolute.x / rect.width) * 100),
                    y: round((absolute.y / rect.height) * 100),
                }; 
                const center = {
                    x: percent.x - 50,
                    y: percent.y - 50,
                };
                
                springBackground.stiffness = springR.stiffness;
                springBackground.damping = springR.damping;
                springBackground.set({
                    x: round(50 + percent.x / 4 - 12.5),
                    y: round(50 + percent.y / 3 - 16.67),
                });
                springRotate.stiffness = springR.stiffness;
                springRotate.damping = springR.damping;
                springRotate.set({
                    x: round(-(center.x / 6)),
                    y: round(center.y / 4),
                });
                springGlare.stiffness = springR.stiffness;
                springGlare.damping = springR.damping;
                springGlare.set({
                    x: percent.x,
                    y: percent.y,
                    o: 1,
                });
            }
        }
    };

    const interactEnd = (e, delay = 0) => {
        bd_color = "transparent";
        setTimeout(function () {
        const snapStiff = 0.01;
        const snapDamp = 0.06;
        interacting = false;

        springRotate.stiffness = snapStiff;
        springRotate.damping = snapDamp;
        springRotate.set({ x: 0, y: 0 }, { soft: 1 });

        springGlare.stiffness = snapStiff;
        springGlare.damping = snapDamp;
        springGlare.set({ x: 50, y: 50, o: 0 }, { soft: 1 });

        springBackground.stiffness = snapStiff;
        springBackground.damping = snapDamp;
        springBackground.set({ x: 50, y: 50 }, { soft: 1 });
        }, delay);
    };

    const activate = (e) => {
        if (dynamic) {
            if ($activeCard && $activeCard === thisCard) {
            deactivate();
            } else {
            $activeCard = thisCard;
            setTimeout(() => {
                front_img = gif;
                displayed_artist = gif_artist;
            }, 350);
            resetBaseOrientation();
            }
        }
    };

    const deactivate = (e) => {
        interactEnd();
        setTimeout(() => {
            zIndex = 1;
        }, 400);
        $activeCard = undefined;
    };

    const popover = () => {
        springRotateDelta.set({
            x: 180,
            y: 0,
        });
        springScale.set(1.2);
        zIndex = 50;
        $activeCard = thisCard;
        setTimeout(() => {
            springScale.set(1 , { soft: true });
        }, 150);
        setTimeout(() => {
            front_img = gif;
            displayed_artist = gif_artist;
        }, 350);
        resetBaseOrientation();
    };

    const retreat = () => {
        springScale.set(1, { soft: true });
        springTranslate.set({ x: 0, y: 0 }, { soft: true });
        springRotateDelta.set({ x: 0, y: 0 }, { soft: true });
        interactEnd();
    };

    const reset = () => {
        interactEnd();
        springScale.set(1, { hard: true });
        springTranslate.set({ x: 0, y: 0 }, { hard: true });
        springRotateDelta.set({ x: 0, y: 0 }, { hard: true });
        springRotate.set({ x: 0, y: 0 }, { hard: true });
    };

    $: {
        if ($activeCard && $activeCard === thisCard) {
            popover();
            active = true;
        } else {
            retreat();
            active = false;
        }
    }

    $: styles = `
            --mx: ${$springGlare.x}%;
            --my: ${$springGlare.y}%;
            --s: ${$springScale};
            --z: ${zIndex};
            --o: ${$springGlare.o};
            --rx: ${$springRotate.x + $springRotateDelta.x}deg;
            --ry: ${$springRotate.y + $springRotateDelta.y}deg;
            --pos: ${$springBackground.x}% ${$springBackground.y}%;
            --posx: ${$springBackground.x}%;
            --posy: ${$springBackground.y}%;
            --bd-color: ${bd_color};
        `;

    const imageLoader = (e) => {
        loading = false;
    };

    $: {
        if ($activeCard && $activeCard === thisCard) {
            interacting = true;
        }
    }


</script>




<div
    class="card"
    class:active
    class:interacting
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
            on:pointermove={interact}
            on:mouseout={interactEnd}
            on:blur={deactivate}
            aria-label="Expand the Card of {name}."
            tabindex="0"
        >
            <div class="dynamic__card">
                <div>
                    <div class="card__front" style={getFrontCardBg(bg_color)}>
                        {#if name.length > 21}
                            <div class="chimpion__name" style="font-size: 0.875rem; top:23px">
                                {name}
                            </div>
                        {:else if name.length > 15}
                            <div class="chimpion__name" style="font-size:1.25rem; top:18px">
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
                        {#if (png_by_default)}
                            <img
                                src={front_img}
                                alt="Front design of {name} Card"
                                on:load={imageLoader}
                                loading="lazy"
                            />
                        {:else}
                            <img
                                src={gif}
                                alt="Front design of {name} Card"
                                on:load={imageLoader}
                                loading="lazy"
                            />
                        {/if}
                        <div class="description__card">
                            <div class="top__description">
                                Tribe: {tribe.split(/(?=[A-Z])/).join(' ')}<br/>
                                Type: {type}<br/>
                                {#if holder_name != ""}
                                    Holder: {holder_name}<br/>
                                {:else}
                                    Holder: Unknown<br/>
                                {/if}
                                Artist: {png_artist}
                            </div>
                        </div>
                    </div>
                    <Glare/>
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
        --mx: 50%;
        --my: 50%;
        --s: 1;
        --z: 1;
        --o: 0;
        --rx: 0deg;
        --ry: 0deg;
        --pos: 50% 50%;
        --posx: 50%;
        --posy: 50%;
        --bd-color: #ffffff;
    }

    .card {
        height: 394px;
        width: 302px;
        margin-bottom: 2vh;
        --radius: 0.75rem;
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

    .card.interacting {
        z-index: var(--z);
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
        border-radius: var(--radius);
        image-rendering: optimizeQuality;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
    }

    .card__rotator img {
        position: absolute;
        top: 50px;
        border-radius: 0px;
        height: 238px;
        width: 238px;
    }

    .card__back {
        transform: rotateY(180deg) translateZ(1px);
        -webkit-transform: rotateY(180deg) translateZ(1px);
        backface-visibility: hidden;
    }

    .card__front,
    .card__front * {
        backface-visibility: hidden;
    }

    .card__front {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: no-repeat url("/images/chimp-front-card.png");
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

    a {
        text-decoration: none;
        cursor: pointer;
        color: white;
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
        top: 287px;
        text-align: left;
        width: 240px;
        padding: 8px;
        border-radius: 0rem;
        color: white;
        font-style: italic;
    }

    .top__description {
        line-height: 1.125rem;
        padding-left: 3px;
    }

    .lore {
        position: absolute;
        top: 80px;
        width: 100%;
        padding: 2rem;
        font-size: 0.75rem;
        font-style: italic;
        line-height: 1.25rem;
    }

    .artist {
        position: absolute;
        padding: 0.125rem;
        padding-left: 0.5rem;
        width: 40%;
        top: 101px;
        left: -25px;
        background: rgb(0 0 0 / 0.4);
        border-top-right-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        font-size: 0.5rem;
    }

    .number {
        position: absolute;
        bottom: 10px;
        right: 12px;
        color: white;
        font-size: 0.5rem;
        text-align: right;
    }
</style>
