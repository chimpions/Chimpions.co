import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from "../../../chunks/ssr.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import { B as BackToTop } from "../../../chunks/BackToTop.js";
import { C as Card } from "../../../chunks/card.js";
import { c as chimpions } from "../../../chunks/chimpions.js";
const Compendium_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--width:1000px}#compendium.svelte-12e2148{overflow-x:hidden}.introduction.svelte-12e2148{margin:0px 10%}.introduction.svelte-12e2148{padding-top:6rem}.card-grid.svelte-12e2148{display:grid;grid-template-columns:305px;transform-style:preserve-3d;height:100%;margin:50px auto;row-gap:50px;position:relative;justify-items:center;align-items:center;justify-content:center}@media screen and (min-width: 700px){.card-grid.svelte-12e2148{grid-template-columns:305px 305px;column-gap:max(30px, calc((var(--width) - 710px)/4))}}@media screen and (min-width: 1100px){.card-grid.svelte-12e2148{grid-template-columns:305px 305px 305px;column-gap:max(30px, calc((var(--width) - 1015px)/4))}}@media screen and (min-width: 1500px){.card-grid.svelte-12e2148{grid-template-columns:305px 305px 305px 305px;column-gap:max(30px, calc((var(--width) - 1410px)/4))}}#query-section.svelte-12e2148{display:flex;flex-wrap:wrap;align-items:center;padding:2% 0}.menu-cont.svelte-12e2148{width:200px;height:40px;display:flex;margin:10px 20px 0 0}select.svelte-12e2148{margin:0;font-size:1rem;border:1px solid white;border-radius:0.25rem;cursor:pointer}.menu.svelte-12e2148{width:100%;padding:0.5rem;background-color:var(--darker-purple);color:white}#search-input-cont.svelte-12e2148{width:200px;height:40px;display:flex;margin:10px 20px 0 0}#search-field.svelte-12e2148{width:100%;font-size:1rem;border:1px solid white;border-radius:0.25rem;background-color:var(--darker-purple);color:white;padding:0.5rem}.no-results-msg.svelte-12e2148{width:70%;padding:3rem;font-size:2rem;text-align:center}",
  map: null
};
const Compendium = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let styles;
  let cardMobility = true;
  let types = [];
  let selectedType = "SelectAType";
  let selectedTribe = "Proletariat";
  let lastSelectedTribe = "";
  let windowWidth = 1e3;
  let filteredChimpions = [];
  const getChimpsByType = () => {
    if (selectedType == "SelectAType")
      return;
    searchTerm = "";
    if (selectedType == "None") {
      selectedType = "SelectAType";
      selectedTribe = lastSelectedTribe;
    } else {
      selectedTribe = "None";
      filteredChimpions = chimpions.filter((chimpion) => chimpion.type === selectedType.replace(/ /g, ""));
    }
  };
  const getChimpsByTribe = () => {
    if (selectedTribe == "None")
      return;
    searchTerm = "";
    selectedType = "SelectAType";
    lastSelectedTribe = selectedTribe;
    filteredChimpions = chimpions.filter((chimpion) => chimpion.tribe === selectedTribe.replace(/ /g, ""));
  };
  let searchTerm = "";
  $$result.css.add(css);
  {
    {
      cardMobility = true;
    }
  }
  {
    if (searchTerm) {
      selectedType = "SelectAType";
      selectedTribe = "None";
    }
  }
  {
    if (selectedType)
      getChimpsByType();
  }
  {
    if (selectedTribe)
      getChimpsByTribe();
  }
  styles = `--width: ${windowWidth}px`;
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <section id="compendium" class="svelte-12e2148"><div class="introduction svelte-12e2148"><h1 class="heading" data-svelte-h="svelte-163fjsw">Compendium</h1> <p class="subsectionParagraph" style="margin-bottom: 0" data-svelte-h="svelte-cdz2wx">You&#39;ve enter the hallowed halls of Chimpianity. Here before you lies the collective history of Chimpions past, present, and future. Tread with care.</p> <p class="subsectionParagraph" style="margin-bottom: 0" data-svelte-h="svelte-1sqfmxz">The lore is visible on the back of the cards. Click on it to find out!<br>You can submit lore for any chimp by filling <a href="https://forms.gle/SZ38C4jKhvY6vP366" style="color: inherit" target="blank_">this form</a>.</p> <p class="subsectionParagraph" data-svelte-h="svelte-18fxquv">You can buy a Chimpion <a href="https://www.tensor.trade/trade/the_chimpions" style="color: inherit" target="blank_">here</a>!</p> <div id="query-section" class="svelte-12e2148"><div class="menu-cont svelte-12e2148"><select class="menu svelte-12e2148" name="menu" id="menu"><option disabled value="None" data-svelte-h="svelte-vfjbs4">No Selected Tribe</option><option selected value="FutureWarPack" data-svelte-h="svelte-p623x">Future War Pack</option><option value="OldWorldCult" data-svelte-h="svelte-19vc0cu">Old World Cult</option><option value="Planeswalkers" data-svelte-h="svelte-1v2hpz2">Planeswalkers</option><option value="Proletariat" data-svelte-h="svelte-9w9fm0">Proletariat</option></select></div> <div class="menu-cont svelte-12e2148"><select class="menu svelte-12e2148" name="menu" id="menu"><option disabled selected value="SelectAType" data-svelte-h="svelte-1ba7yrt">Select a type</option><option value="None" data-svelte-h="svelte-qtemz2">None</option>${each(types, (type) => {
    return `<option${add_attribute("value", type, 0)}>${escape(type)}</option>`;
  })}</select></div> <div id="search-input-cont" class="svelte-12e2148"><input type="text" id="search-field" placeholder="Search" autocomplete="on" class="svelte-12e2148"${add_attribute("value", searchTerm, 0)}></div></div></div> ${searchTerm && filteredChimpions.length === 0 ? `<div class="no-results-msg svelte-12e2148"><p>No results for ${escape(searchTerm)}</p></div>` : `<div class="card-grid svelte-12e2148"${add_attribute("style", styles, 0)}>${each(filteredChimpions, (chimpion) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        active: false,
        dynamic: cardMobility,
        name: chimpion.name.split(/(?=[A-Z])/).join(" "),
        index: chimpion.index,
        tribe: chimpion.tribe,
        type: chimpion.type.split(/(?=[A-Z])/).join(" "),
        art_files: chimpion.paths,
        lore: chimpion.lore,
        holder_name: chimpion.holder
      },
      {},
      {}
    )}`;
  })}</div>`} ${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Compendium, "Compendium").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
