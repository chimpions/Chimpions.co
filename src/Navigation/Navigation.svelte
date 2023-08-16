<script>
    import Button from "./button.svelte";
    import "/public/css/global.css";
    import "/public/css/navigation.css";

    let mouseX = 0;
    let mouseY = 0;

    function handleMouseMove(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    };
</script>

<nav>
    <div class="preload"></div>
    <input type="checkbox" id="active" class="main-navigation-toggle"/>
    <label for="active" class="menu-btn"></label>
    <div class="wrapper" on:mousemove={handleMouseMove}>
        <ul>
            <Button
                button_name={"Compendium"}
                button_id={"compendium"}
                mouseX={mouseX}
                mouseY={mouseY}
            />
            <Button
                button_name={"The CHIAO"}
                button_id={"the-chiao"}
                mouseX={mouseX}
                mouseY={mouseY}
            />
            <Button
                button_name={"The TreeHouse"}
                button_id={"treehouse"}
                mouseX={mouseX}
                mouseY={mouseY}
            />
            <Button
                button_name={"Together We Stand"}
                button_id={"together-we-stand"}
                mouseX={mouseX}
                mouseY={mouseY}
            />
            <Button
                button_name={"The Holders"}
                button_id={"holders"}
                mouseX={mouseX}
                mouseY={mouseY}
            />
        </ul>
    </div>
</nav>