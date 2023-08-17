<script>
// @ts-nocheck

    export let button_name = "";
    export let button_id = "";
    export let mouseX = 0;
    export let mouseY = 0;
    let originX = 0;
    let originY = 0;
    let size = 0;
    let opacity = 0;
    let loop1;
    let loop2;

    function handleMouseOver() {
        const element = document.getElementById(button_id);
        const rect = element.getBoundingClientRect();
        originX = Math.abs(mouseX - rect.left) / rect.width * 100;
        originY = Math.abs(mouseY - rect.top) / rect.height * 100;
        increaseSize();
    };

    function increaseSize() {
        clearInterval(loop2);
        loop1 = setInterval(() => {
            size++;
            opacity += 0.05;
            if (size > 19 || opacity > 0.95) {
                size = 19;
                opacity = 1;
                clearInterval(loop1);
            };
        }, 10);
    }

    function decreaseSize() {
        clearInterval(loop1);
        loop2 = setInterval(() => {
            size--;
            opacity -= 0.05;
            if (size < 1 || opacity < 0.05) {
                size = 0;
                opacity = 0;
                clearInterval(loop2);
            }
        }, 10);
    }

    function handleMouseOut() {
        const element = document.getElementById(button_id);
        const rect = element.getBoundingClientRect();
        originX = Math.abs(mouseX - rect.left) / rect.width * 100;
        originY = Math.abs(mouseY - rect.top) / rect.height * 100;
        decreaseSize();
    };

    $: styles = `
            --originX: ${originX}%;
            --originY: ${originY}%;
            --size: ${size}%;
            --opacity: ${opacity}`;
</script>


<li style={styles}>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <a id={button_id}
    on:mouseover={handleMouseOver}
    on:mouseout={handleMouseOut}
    href="/{button_id}">{button_name}</a>
</li>




<style>
    :root {
        --originX: 0%;
        --originY: 0%;
        --size: 0%;
        --bg-color: rgb(8, 1, 15);
        --opacity: 0;
    }

    li {
        padding: 0px;
    }

    li a {
        text-decoration: none;
        padding: 10px;
        color: #fff;
        background-color: var(--bg-color);
        position: relative;
        white-space: nowrap;
    }

    li a:after {
        position: absolute;
        content: "";
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        left: -3px;
        top: -3px;
        z-index: -1;
        transition: color 0.2s ease;
        border-radius: 0.25rem;
        background: radial-gradient(
            farthest-corner circle at var(--originX) var(--originY),
            rgb(255 255 255 / var(--opacity)) calc(5 * var(--size)),
            var(--bg-color) calc(5 * var(--size) + 50%));
        ;
        transition: color 0.2s ease;
    }

    li a:hover:after {
        color: var(--bg-color);
        transition: color 0.2s ease;
    }

@media (max-width: 768px) {
    :root {
        --bg-color: black;
    }
}
</style>