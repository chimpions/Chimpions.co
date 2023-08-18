import { c as create_ssr_component, v as validate_component, e as escape, n as null_to_empty, b as add_attribute, d as each, a as subscribe } from "../../../../chunks/ssr.js";
import { c as chimpions } from "../../../../chunks/chimpions.js";
import { p as page } from "../../../../chunks/stores.js";
import { N as NotFound } from "../../../../chunks/NotFound.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const Chimpion_svelte_svelte_type_style_lang = "";
const css = {
  code: '.full-window.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{padding-top:100px;width:100vw;height:100vh;outline:none}.menu-cont.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{display:flex;position:fixed;z-index:5;top:0px;right:0px;margin:0;padding:30px}#query-section.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{display:flex;flex-direction:column}#search-input-cont.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{width:200px}.search-field.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{position:relative;width:100%;font-size:1rem;border:2px solid white;border-radius:0.25rem;background-color:var(--darker-purple);color:white;padding:0.5rem;outline:none}.no-border-radius.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{border-bottom-left-radius:0;border-bottom-right-radius:0}.results.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{max-height:200px;width:200px;overflow:auto;border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem}.results.svelte-aa1cr2 ul.svelte-aa1cr2.svelte-aa1cr2{margin:0;list-style-type:none;padding:0;border:1px solid var(--purple);border-top:0px}.results.svelte-aa1cr2 ul.svelte-aa1cr2 li.svelte-aa1cr2{cursor:pointer;padding:5px;border-top:1px solid var(--purple);background-color:var(--darker-purple);transition:background-color 0.2s ease}.results.svelte-aa1cr2 ul.svelte-aa1cr2 li.svelte-aa1cr2:hover{background-color:var(--purple)}#box-for-next-chimp.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{height:36px;margin-left:30px}.nextChimpion.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{background-color:var(--dark-purple);border-radius:0.25rem;border:2px var(--purple) solid;padding:0.5rem 1rem;white-space:nowrap;transition:all 0.2s ease}.nextChimpion.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2:hover{background-color:var(--purple);border:2px var(--white-purple) solid}.arrow-right.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{height:0.75rem}.image-container.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{position:relative;width:400px;height:400px;margin-right:1rem}.image-container.svelte-aa1cr2 img.svelte-aa1cr2.svelte-aa1cr2{width:400px;object-fit:contain;border-radius:0.25rem}.control-dots.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{text-align:center;width:100%;margin:0px;padding:0;position:absolute;bottom:10px}.dot.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{opacity:.3;width:8px;height:8px;cursor:pointer;background:#fff;border-radius:50%;margin:0 8px;transition:opacity .2s ease;display:inline-block;box-shadow:1px 1px 2px rgba(0,0,0,.9)}.dot.selected.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2,.dot.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2:hover{opacity:1}.control-arrow-prev.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{position:absolute;top:0;left:0;bottom:0;padding:5px;background:0 0;color:#fff;opacity:.4;text-align:left;cursor:pointer;width:50%;border:0;transition:all .3s ease}.control-arrow-next.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{position:absolute;top:0;right:0;bottom:0;padding:5px;background:0 0;color:#fff;opacity:.4;text-align:right;cursor:pointer;width:50%;border:0;transition:all .3s ease}.control-arrow-prev.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2:before{content:"";border-top:10px solid transparent;border-right:10px solid #fff;border-bottom:10px solid transparent;margin:0 5px;display:inline-block}.control-arrow-next.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2:before{content:"";border-top:10px solid transparent;border-left:10px solid #fff;border-bottom:10px solid transparent;margin:0 5px;display:inline-block}.chimp-line.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{width:80%;max-width:850px;margin:1rem auto;padding:1rem;border-radius:0.25rem}.chimp-name.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{font-size:1.5rem}.chimp-info.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{display:flex;margin-top:0.5rem}.description.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{width:300px}p.svelte-aa1cr2 span.svelte-aa1cr2.svelte-aa1cr2{color:var(--whiter-purple)}a.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{text-decoration:none;color:inherit}.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2::-webkit-scrollbar{width:8px}.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2::-webkit-scrollbar-track{background:var(--dark-purple)}.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2::-webkit-scrollbar-thumb{background:var(--light-purple);border-radius:0.25rem}.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2::-webkit-scrollbar-thumb:hover{background:var(--lighter-purple)}@media screen and (max-width: 800px){.chimp-info.svelte-aa1cr2.svelte-aa1cr2.svelte-aa1cr2{flex-direction:column}.chimp-info.svelte-aa1cr2 p.svelte-aa1cr2.svelte-aa1cr2{margin:0.25rem 0}}',
  map: null
};
const Chimpion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [];
  let currentIndex = 0;
  let displayed_image = "";
  let artist = "";
  let searchTerm = "";
  let filteredChimpions = [];
  let { name = "" } = $$props;
  let { index = 0 } = $$props;
  let { art_files = {} } = $$props;
  let { tribe = "" } = $$props;
  let { holderName = "" } = $$props;
  let { lore = "" } = $$props;
  let { type = "" } = $$props;
  let { level = 1 } = $$props;
  function getImages(art_files2) {
    searchTerm = "";
    filteredChimpions = [];
    console.log("inGetImages");
    displayed_image = art_files2["png"];
    artist = displayed_image.split(".")[0].split("-")[1];
    let imagesArray = [art_files2["png"]];
    imagesArray = [...imagesArray, art_files2["gif"]];
    for (let alternative_art of art_files2["alternative_art"]) {
      imagesArray = [...imagesArray, alternative_art];
    }
    console.log(imagesArray);
    return images = imagesArray;
  }
  const linkNextChimpion = (index2) => {
    let nextChimpionsName;
    if (index2 < 221) {
      nextChimpionsName = chimpions[Number(index2) + 1].name.split(/(?=[A-Z])/).join("-").toLowerCase();
    } else {
      nextChimpionsName = chimpions[0].name.split(/(?=[A-Z])/).join("-").toLowerCase();
    }
    return `./${nextChimpionsName}`;
  };
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.art_files === void 0 && $$bindings.art_files && art_files !== void 0)
    $$bindings.art_files(art_files);
  if ($$props.tribe === void 0 && $$bindings.tribe && tribe !== void 0)
    $$bindings.tribe(tribe);
  if ($$props.holderName === void 0 && $$bindings.holderName && holderName !== void 0)
    $$bindings.holderName(holderName);
  if ($$props.lore === void 0 && $$bindings.lore && lore !== void 0)
    $$bindings.lore(lore);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  $$result.css.add(css);
  images = getImages(art_files);
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <div class="menu-cont svelte-aa1cr2"><div id="query-section" class="svelte-aa1cr2"><div id="search-input-cont" class="svelte-aa1cr2"><input type="text" class="${escape(
    null_to_empty(filteredChimpions.length > 0 ? "search-field no-border-radius" : "search-field"),
    true
  ) + " svelte-aa1cr2"}" placeholder="Search for a Chimpion" autocomplete="on"${add_attribute("value", searchTerm, 0)}></div> <div class="results svelte-aa1cr2">${filteredChimpions.length > 0 ? `<ul class="svelte-aa1cr2">${each(filteredChimpions, (chimpion) => {
    return `<a${add_attribute("href", `/compendium/${chimpion.name.split(/(?=[A-Z])/).join("-").toLowerCase()}`, 0)} class="svelte-aa1cr2"><li class="svelte-aa1cr2">${escape(chimpion.name.split(/(?=[A-Z])/).join(" "))}</li></a>`;
  })}</ul>` : ``}</div></div> <div id="box-for-next-chimp" class="svelte-aa1cr2"><a${add_attribute("href", linkNextChimpion(index), 0)} class="svelte-aa1cr2"><div class="nextChimpion svelte-aa1cr2" data-svelte-h="svelte-sgish1">See Next Chimpion<span class="svelte-aa1cr2"><img class="arrow-right svelte-aa1cr2" src="/images/arrow-right-white.png" alt="arrow to the right"></span></div></a></div></div> <div class="full-window svelte-aa1cr2" tabindex="-1" role="presentation"><div class="chimp-line svelte-aa1cr2"><span class="chimp-name svelte-aa1cr2">${escape(name)}</span> <div class="chimp-info svelte-aa1cr2"><div class="image-container svelte-aa1cr2">${displayed_image.slice(-3) == "mp4" || displayed_image.slice(-3) == "mov" ? ` <video autoplay width="400" class="svelte-aa1cr2"><source${add_attribute("src", displayed_image, 0)} type="video/mp4" class="svelte-aa1cr2"></video>` : `<img${add_attribute("src", displayed_image, 0)} alt="${"Art " + escape(currentIndex + 1, true) + " of " + escape(name, true)}" class="svelte-aa1cr2">`} <ul class="control-dots svelte-aa1cr2">${each(images, (image, i) => {
    return `<li class="${escape(null_to_empty(i === currentIndex ? "dot selected" : "dot"), true) + " svelte-aa1cr2"}"${add_attribute("value", i, 0)} aria-label="${"slide item " + escape(i + 1, true)}"></li>`;
  })}</ul> <button type="button" tabindex="0" aria-label="previous slide / item" class="control-arrow-prev svelte-aa1cr2"></button> <button type="button" tabindex="0" aria-label="next slide / item" class="control-arrow-next svelte-aa1cr2"></button></div> <div class="description svelte-aa1cr2"><p class="svelte-aa1cr2">Tribe: <span class="svelte-aa1cr2">${escape(tribe)}</span></p> <p class="svelte-aa1cr2">Type: <span class="svelte-aa1cr2">${escape(type)}</span></p> ${lore == "" ? `<p class="svelte-aa1cr2" data-svelte-h="svelte-bmbu0z">Lore: <span class="svelte-aa1cr2">No lore for this Chimpion yet...</span></p>` : `<p class="svelte-aa1cr2">Lore: <span class="svelte-aa1cr2">${escape(lore)}</span></p>`} <p class="svelte-aa1cr2">Artist: <span class="svelte-aa1cr2">${escape(artist)}</span></p> <p class="svelte-aa1cr2">Holder: <span class="svelte-aa1cr2"><a${add_attribute("href", `/holders/${holderName.split(" ").join("")}`, 0)} class="svelte-aa1cr2">${escape(holderName)}</a></span></p> <p class="svelte-aa1cr2">Level: <span class="svelte-aa1cr2">${escape(level)}</span></p></div></div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let chimpion_data;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let chimpionName = "";
  function getChimpData(params) {
    try {
      let chimpionNameArray = params.split("-");
      chimpionName = chimpionNameArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join("");
      if (chimpions.some((chimpion) => chimpion.name === chimpionName)) {
        let xchimpion_data = chimpions.find((chimpion) => chimpion.name === chimpionName);
        console.log(xchimpion_data);
        return chimpion_data = chimpions.find((chimpion) => chimpion.name === chimpionName);
      }
    } catch (error) {
      console.log("ChimpionNotFoundError");
      return chimpion_data = null;
    }
  }
  chimpion_data = getChimpData($page.params.chimpionName);
  $$unsubscribe_page();
  return `${chimpion_data ? `${validate_component(Chimpion, "Chimpion").$$render(
    $$result,
    {
      name: chimpion_data.name.split(/(?=[A-Z])/).join(" "),
      index: chimpion_data.index,
      art_files: chimpion_data.paths,
      holderName: chimpion_data.holder,
      lore: chimpion_data.lore,
      tribe: chimpion_data.tribe.split(/(?=[A-Z])/).join(" "),
      type: chimpion_data.type.split(/(?=[A-Z])/).join(" ")
    },
    {},
    {}
  )}` : `${validate_component(NotFound, "NotFound").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
