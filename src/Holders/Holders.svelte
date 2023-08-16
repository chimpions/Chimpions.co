<script>
    import Navigation from "../Navigation/Navigation.svelte";
    import BackToTop from "../BackToTop.svelte";
    import holders from "../_content/holders.json";
    import "/public/css/global.css"
    import HolderBox from "./Holder-box.svelte";
    import { onMount } from "svelte";
    

    let screenWidth = window.innerWidth;
    let lastScreenWidth = window.innerWidth;
    let holderLines = [];

    onMount(() => {getHolderLines()})

    function handleResize() {
        screenWidth = window.innerWidth;
        if ((screenWidth - lastScreenWidth > 100) || (screenWidth - lastScreenWidth < 100)) {
            getHolderLines();
            lastScreenWidth = window.innerWidth;
        }
    }

    const getHolderLines = () => {
        if (screenWidth > 500) {
            holderLines = [];
            let holderLine = {};
            let maxLength = 0.85 * screenWidth;
            let margin = 100;
            let currentLength = 0;
            for (let holderName in holders) {
                if (currentLength + holderName.length * 10 + margin < maxLength) {
                    holderLine[holderName] = holders[holderName];
                    currentLength += (holderName.length * 10 + margin)
                } else {
                    holderLines.push(holderLine);
                    holderLine = {};
                    holderLine[holderName] = holders[holderName];
                    currentLength = (holderName.length * 10 + margin);
                }
            };
        } else {
            holderLines = [];
            let holderLine = {};
            let maxLength = 0.85 * screenWidth;
            let margin = 60;
            let currentLength = 0;
            for (let holderName in holders) {
                if (currentLength + holderName.length * 8 + margin < maxLength) {
                    holderLine[holderName] = holders[holderName];
                    currentLength += (holderName.length * 8 + margin)
                } else {
                    holderLines.push(holderLine);
                    holderLine = {};
                    holderLine[holderName] = holders[holderName];
                    currentLength = (holderName.length * 8 + margin);
                }
            };
        }
    }

</script>





<Navigation />
<svelte:window on:resize={handleResize}/>
<section id="the-holders">
    <div class="introduction">
        <h1 class="heading">The Holders</h1>
        <p>The holders of this exceptional collection stand as guardians of history, artistry, and passion converging within its carefully curated confines.</p>
    </div>

    <div class="holders-tab">
        {#each holderLines as holderLine}
            <div class="holderLine">
                {#each Object.keys(holderLine) as holderName}
                    <HolderBox
                        name={holderName}
                        holder_data={holderLine[holderName]}
                    />
                {/each}
            </div>
        {/each}
    </div>
    <BackToTop />
</section>

<style>
    #the-holders {
        padding-top: 6rem;
        margin-bottom: 6rem;
    }

    .introduction {
        margin: auto 10%;
        font-size: large;
        font-weight: normal;
        line-height: 1.5em;
    }

    .introduction h1 {
        font-weight: normal;
        color: #fff;
    }
    
    .introduction p {
        opacity: 0.8;
    }

    .holders-tab {
        width: 80%;
        margin: 2rem auto;
    }

    .holderLine {
        display: flex;
        justify-content: center;
    }
</style>