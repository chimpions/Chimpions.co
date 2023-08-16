<script>
    import { spring } from "svelte/motion";
    import { round } from "../Compendium/Cards/lib/helpers/Math.js";
    import '/public/css/global.css';
    import '/public/css/navigation.css';
    import Navigation from "../Navigation/Navigation.svelte";

    let crystalPulse = false;
    let loreOpacity = 0;
    let loreZIndex = -1;
    let buttonZIndex = 10;
    let springGlare = spring({ x: 50, y: 50, o: 0 });
    let windowWidth = window.innerWidth;

    function updateWindowSize() {
        windowWidth = window.innerWidth;
    }

    window.addEventListener('resize', updateWindowSize);

    const interact = (e) => {

        if (e.type === "touchmove") {
        e.clientX = e.touches[0].clientX;
        e.clientY = e.touches[0].clientY;
        } // position of the mouse on the screen
        
        springGlare.set({
        x: round((e.clientX / window.innerWidth) * 100),
        y: round((e.clientY / window.innerHeight) * 100),
        o: 1,
        });
    };


    const interactEnd = (e) => {
        springGlare.set({
            x: $springGlare.x, 
            y: $springGlare.y, 
            o: 0 
        });
    };

    const openLore = (e) => {
        buttonZIndex = -1;
        loreOpacity = 1;
        loreZIndex = 5;
        crystalPulse = false;
    };

    const closeLore = (e) => {
        buttonZIndex = 10;
        loreOpacity = 0;
        loreZIndex = -1;
        crystalPulse = true;
    }
    
    $: styles = `
            --button-z-index: ${buttonZIndex};
            --lore-opacity: ${loreOpacity};
            --lore-z-index: ${loreZIndex};
            --mx: ${$springGlare.x}%;
            --my: ${$springGlare.y}%;
            --o: ${$springGlare.o};
        `;
</script>


<section id="LandingPage"
    on:pointermove={interact}
    on:mouseout={interactEnd}
    on:blur={interactEnd}
>
    <Navigation/>
    <div class:crystalPulse/>
    <button
        class="openLore-btn"
        style={styles} 
        on:click={openLore}
        aria-label="Open the lore."
        tabindex="0"
    />
    <div id="background-image">
        <div class="glare"
             style={styles}
        />
    </div>
    <div class="landing-lore" style={styles}>
        <div class="landing-title">
            There used to be thousands of us...
            <div class="closeLore">
                <button
                    class="closeLore-btn"
                    style={styles} 
                    on:click={closeLore}
                    aria-label="Close the lore."
                    tabindex="0"
                />
            </div>
        </div>
        <p> 
            Our packs used to roam this planet's primordial forests. Slinging
            from branch to branch, peering out across the treetops. It was a
            veritable paradise, and we were its kings and queens.
        </p>
        <p>
            Or so we thought...
        </p>
        <p>
            They appeared as if by magic. From across the vast oceans, they came
            bearing claw and fang. The Triumvirate of Chimpions, acted swiftly
            and decisively. Each tribe put forth their strongest of body and
            keenest of mind.
        </p>
        <p>
            Together we stand.
        </p>


        <a href="./compendium">
            <div class="toCompendium">
                {#if windowWidth > 500}
                <span style="display: flex; align-items: center">See the Chimpions</span>
                {:else}
                <span style="display: flex; align-items: center">Next</span>
                {/if}
                <span  style="display: flex; align-items: center" class="arrow-right">Arrowright</span>
            </div>
        </a>
    </div>
    <div class="theChimpionsLoading">
        <div class="ChimpionGIF">
            <img src="/images/logos/theChimpionsLanding.gif" alt="The Chimpions' logo animation" />
        </div>
    </div>

</section>


<style>
    :root {
        --button-z-index: 10;
        --lore-opacity: 0;
        --lore-z-index: -1;
        --mx: 50%;
        --my: 50%;
        --o: 0;
        --btn-opacity: 0.4;
        --lighting-size: 100px;
    }

    #background-image {
        background: no-repeat url("/images/RGB_Commissioned_Banner-resized.png");
        background-size: cover;
        background-position: center;
        background-color: #1F1531;
        min-height: 100vh;
        transition: background-image 0.2s ease-in-out;
    }

    .glare {
        height: 100vh;
        width: 100vw;
        background: radial-gradient(
			farthest-corner circle at var(--mx) var(--my),
			rgba(255, 255, 255, 0.5) 2.5%,
			rgba(255, 255, 255, 0.15) 10%,
			rgba(0, 0, 0, 0.5) 100%
		);
		mix-blend-mode: overlay;
		opacity: var(--o);
	}

    .openLore-btn {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: var(--button-z-index);
        height: 65%;
        width: 150px;
        background-color: transparent;
        border: 0px;
        text-align: center;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        animation: crystal-glow 1s linear infinite alternate;
    }

    .crystalPulse {
        position: absolute;
        top: 48%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: var(--button-z-index);
        height: 65%;
        width: 150px;
        border: 0px;
        background-color: transparent;
        text-align: center;
        border-radius: 50%;
        animation: crystal-glow 4s ease-in-out infinite alternate;
    }

    .landing-lore {
        opacity: var(--lore-opacity);
        transition: opacity 1s ease;
        color: var(--whiter-purple);
        background-color: rgb(20 20 20 / 0.6);
        border-radius: 2%;
        font-family: 'Alagard';
        letter-spacing: 0.1em;
        text-align: justify;
        margin-left: auto;
        margin-right: auto;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        text-shadow: 1px 1px 0 #222;
        z-index: var(--lore-z-index);
    }

    .landing-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        column-gap: 2rem;
        font-size: 1.875rem;
        line-height: 2.25rem;
        padding: 1em;
        text-align: left;
        color: var(--white-purple);
    }

    .closeLore-btn {
        background-color: rgb(0 0 0 / 0.8);
        width: 25px;
        height: 25px;
        border-radius: 0.25rem;
        background: no-repeat url("/images/logos/white-cross.png");
        background-size: contain;
        cursor: pointer;
    }

    .landing-lore p {
        line-height: 2rem;
        opacity: 1;
        padding: 1em;
        margin: 0px;
    }

    .toCompendium {
        position: absolute;
        display: flex;
        justify-content: center;
        bottom: 1rem;
        right: 1rem;
        padding: 0.5rem 1rem;
        border: 2px white solid;
        border-radius: 0.25rem;
        background-color: rgb(0 0 0 / 0.6);
        box-shadow: 0px 0px 4px transparent;
        font-size: 0.75rem;
        color: white;
        text-align: left;
        animation: glowButton 1s linear infinite alternate;
        transition: all 0.3s ease;
    }

    .toCompendium:hover {
        animation-play-state: paused;
        background-color: rgb(0 0 0 / 1);
        box-shadow: 0px 0px 4px white;
    }

    .arrow-right {
        width: 20px;
        height: 20px;
        margin-left: 0.5rem;
        content: url("/images/arrow-right-white-center.png");
    }

    .theChimpionsLoading {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: hidden;
        background-color: black;
        opacity: 1;
        z-index: 1000;
        animation: opacity0 3s ease-in 5.5s forwards;
    }

    .ChimpionGIF {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: opacity0-zIndex0 0.2s ease 5s forwards
    }

    .ChimpionGIF img {
        width: 50%;
    }


    @keyframes glowButton {
        from { border: 2px rgb(255 255 255 / 0.5) solid }
        to { border: 2px rgb(255 255 255 / 1) solid }
    }

    @keyframes crystal-glow {
        from {
            background-color: rgb(255 255 255 / 0);
            box-shadow: 0px 0px var(--lighting-size) rgb( 255 255 255 / 0);
        }
        to {
            background-color: rgb(255 255 255 / var(--btn-opacity));
            box-shadow: 0px 0px var(--lighting-size) rgb(255 255 255 / 1);
        }
    }

    @keyframes opacity0 {
        from { opacity: 1; }
        to { opacity: 0; z-index: 0; }
    }

    @keyframes opacity0-zIndex0 {
        from { opacity: 1; }
        to { opacity: 0; z-index: 0; }
    }

    @media (max-width: 768px) {
    .ChimpionGIF img {
        width: 80%;
    }

    .landing-lore {
        width: 80%;
    }

    .landing-title {
        font-size: 1.5rem;
        line-height: 1.75rem;
    }

    .landing-lore p {
        font-size: 1rem;
        line-height: 1.5rem;
        opacity: 100%;
        padding: 1em;
        margin:0px;
    }
    }

    @media (max-width: 768px) {
    .landing-lore {
        width: 80%;
    }

    .landing-title {
        font-size: 1.5rem;
        line-height: 1.75rem;
    }

    .landing-lore p {
        font-size: 1rem;
        line-height: 1.5rem;
        opacity: 100%;
        padding: 1em;
        margin:0px;
    }
    }

    @media (max-width: 500px) {
    .landing-lore {
        width: 80%;
    }

    .landing-title {
        font-size: 1.25rem;
        line-height: 1.25rem;
    }

    .landing-lore p {
        font-size: 1rem;
        line-height: 1.5rem;
        opacity: 100%;
        padding: 1em;
        margin:0px;
    }
    }
</style>