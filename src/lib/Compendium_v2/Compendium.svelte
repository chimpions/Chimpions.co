<script>
    import Navigation from "$lib/Navigation/Navigation.svelte";
	import Cards from "$lib/Compendium_v2/Cards/cards.svelte";
    import BackToTop from "$lib/BackToTop.svelte";
    import "$lib/css/global.css";

</script>


<Navigation />
<section>
    <div class="introduction">
        <h1 class="heading">Compendium_v2</h1>
        <p class="subsectionParagraph" style="margin-bottom: 0">You've enter the hallowed halls of Chimpianity. Here before you lies the collective history of Chimpions past, present, and future. Tread with care.</p>
        <p class="subsectionParagraph">You can submit lore for any chimp by filling <a href="https://forms.gle/SZ38C4jKhvY6vP366" style="color: inherit" target="blank_">this form.</a></p>
    </div>
    <div class="Cards">
        <Cards />
    </div>
    <BackToTop />
</section>



<style>
    .introduction, .Cards {
        margin: 0px 10%;
    }

    .introduction {
        padding-top: 6rem;
    }
</style>