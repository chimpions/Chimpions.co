<script>
    export let website = "";
    export let image = "";
</script>

<div class="square">
    <a href={website} target="_blank" rel="noreferrer">
        <img src={image} alt="Logo of the collection">
    </a>
    <div class="rectangle top-start"></div>
    <div class="rectangle right"></div>
    <div class="rectangle bottom"></div>
    <div class="rectangle left"></div>
    <div class="rectangle top-end"></div>
</div>

<style>
    :root {
        --border-color: var(--white-purple);
    }

    a { /* to prevent the clickable link from being misplaced */
        position: absolute;
        top: 0px;
        height: 0px;
    }

    img {
        width: 100%;
        border: 4px transparent solid;
    }

    .square {
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 0.25rem;
    }

    .rectangle {
        position: absolute;
        background-color: var(--border-color);
        transition: background-color 0.2s;
    }

    .top-start {
        top: 0px;
        left: 100px;
        border-top-right-radius: 0.25rem;
        height: 4px;
        width: 100px;
        transform: scaleX(0);
        animation: top-start linear 0.5s forwards;
        transform-origin: left center;
    }

    .right {
        top: 4px;
        left: 196px;
        border-bottom-right-radius: 0.25rem;
        height: 196px;
        width: 4px;
        transform: scaleY(0);
        animation: right linear 0.9s forwards 0.5s;
        transform-origin: center top;
    }

    .bottom {
        top: 196px;
        left: 0px;
        border-bottom-left-radius: 0.25rem;
        height: 4px;
        width: 196px;
        transform: scaleX(0);
        animation: bottom linear 0.9s forwards 1.4s;
        transform-origin: right center;
    }

    .left {
        top: 0px;
        left: 0px;
        border-top-left-radius: 0.25rem;
        height: 196px;
        width: 4px;
        transform: scaleY(0);
        animation: right linear 0.9s forwards 2.3s;
        transform-origin: center bottom;
    }

    .top-end {
        top: 0px;
        left: 4px;
        height: 4px;
        width: 96px;
        transform: scaleX(0);
        animation: top-end ease-out 1s forwards 3.2s;
        transform-origin: left center;
    }



    @keyframes top-start {
        0% { transform: scaleX(0); }
        100% { transform: scaleX(1); }
    }
    @keyframes right {
        0% { transform: scaleY(0); }
        100% { transform: scaleY(1); }
    }
    @keyframes bottom {
        0% { transform: scaleX(0); }
        100% { transform: scaleX(1); }
    }
    @keyframes left {
        0% { transform: scaleY(0); }
        100% { transform: scaleY(1); }
    }
    @keyframes top-end {
        0% { transform: scaleX(0); }
        100% { transform: scaleX(1); }
    }

</style>