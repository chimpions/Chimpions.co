    <script>
    import { spring } from "svelte/motion";
    import { clamp, round } from "../helpers/Math.js";

    import Glare from "./card-glare.svelte";

    export let name = "";
    export let png = "";
    export let gif = "";

    let front_img = gif;

    let thisCard;
    let rotator;

    const springR = { stiffness: 0.066, damping: 0.25 };
    const springD = { stiffness: 0.033, damping: 0.45 };
    let springRotate = spring({ x: 0, y: 0 }, springR);
    let springGlare = spring({ x: 50, y: 50, o: 0 }, springR);
    let springBackground = spring({ x: 50, y: 50 }, springR);
    let springRotateDelta = spring({ x: 0, y: 0 }, springD);
    let showcaseRunning = true;

    const interact = (e) => {
        if (showcaseRunning) {
        showcaseRunning = false;
        }

        if (e.type === "touchmove") {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
        }

        const $element = e.target;
        const rect = $element.getBoundingClientRect(); // get element's current size/position
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
        x: round(-(center.x / 7)),
        y: round(center.y / 4),
        });
        springGlare.stiffness = springR.stiffness;
        springGlare.damping = springR.damping;
        springGlare.set({
        x: percent.x,
        y: percent.y,
        o: 1,
        });
    };

    const interactEnd = (e, delay = 0) => {
        setTimeout(function () {
        const snapStiff = 0.01;
        const snapDamp = 0.06;

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

    $: styles = `
            --mx: ${$springGlare.x}%;
            --my: ${$springGlare.y}%;
            --o: ${$springGlare.o};
            --rx: ${$springRotate.x + $springRotateDelta.x}deg;
            --ry: ${$springRotate.y + $springRotateDelta.y}deg;
            --pos: ${$springBackground.x}% ${$springBackground.y}%;
            --posx: ${$springBackground.x}%;
            --posy: ${$springBackground.y}%;
            --hyp: ${
        clamp( Math.sqrt(
            ($springGlare.y - 50) * ($springGlare.y - 50) +
            ($springGlare.x - 50) * ($springGlare.x - 50)
        ) / 50, 0, 1)
        };
        `;

</script>


<div
    class="card"
    style={styles}
    bind:this={thisCard}
    >
    <div class="card__translater">
        <div
            class="card__rotator"
            bind:this={rotator}
            on:pointermove={interact}
            on:mouseout={interactEnd}
            on:blur={interactEnd}
            aria-label="Expand the Card of {name}."
        >
            <div class="card__front">
                <img
                    src={front_img}
                    alt="Front design of {name} Card"
                    loading="lazy"
                    width="680"
                    height="680"
                />
                <Glare/>
            </div>
        </div>
    </div>
</div>

<style>
    :root {
        --mx: 50%;
        --my: 50%;
        --o: 0;
        --rx: 0deg;
        --ry: 0deg;
        --pos: 50% 50%;
        --posx: 50%;
        --posy: 50%;
        --hyp: 0;
    }

    .card {
        --radius: 3.5% / 3.5%;
        z-index: 1;
        transform: translate3d(0, 0, 0.1px);
        -webkit-transform: translate3d(0, 0, 0.1px);
        will-change: transform, visibility;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
    }

    .card__translater {
        display: grid;
        perspective: 600px;
        transform-origin: center;
        -webkit-transform-origin: center;
        will-change: transform;
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
        appearance: none;
        -webkit-appearance: none;
        border: none;
        background: top;
        padding: 0;
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
        outline: 1px solid transparent;
        aspect-ratio: 1;
        height: auto;
    }

    .card__front {
        backface-visibility: hidden;
        opacity: 1;
    }
</style>
