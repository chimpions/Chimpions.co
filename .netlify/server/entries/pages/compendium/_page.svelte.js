import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, n as null_to_empty, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import { B as BackToTop } from "../../../chunks/BackToTop.js";
import { s as spring } from "../../../chunks/spring.js";
import { w as writable, r as readable } from "../../../chunks/index.js";
import { h as holders } from "../../../chunks/holders.js";
import { c as chimpions } from "../../../chunks/chimpions.js";
const activeCard = writable(void 0);
const getRawOrientation = function(e) {
  if (!e) {
    return { alpha: 0, beta: 0, gamma: 0 };
  } else {
    return { alpha: e.alpha, beta: e.beta, gamma: e.gamma };
  }
};
const getOrientationObject = (e) => {
  const orientation = getRawOrientation(e);
  return {
    absolute: orientation,
    relative: {
      alpha: orientation.alpha - baseOrientation.alpha,
      beta: orientation.beta - baseOrientation.beta,
      gamma: orientation.gamma - baseOrientation.gamma
    }
  };
};
let firstReading = true;
let baseOrientation = getRawOrientation();
readable(getOrientationObject(), function start(set) {
  const handleOrientation = function(e) {
    if (firstReading) {
      firstReading = false;
      baseOrientation = getRawOrientation(e);
    }
    const o = getOrientationObject(e);
    set(o);
  };
  window.addEventListener("deviceorientation", handleOrientation, true);
  return function stop() {
    window.removeEventListener("deviceorientation", handleOrientation, true);
  };
});
const card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ':root{--s:1;--z:1;--rx:0deg;--ry:0deg;--bd-color:#ffffff}.card.svelte-ha0s6d.svelte-ha0s6d{height:394px;width:302px;margin-bottom:2vh;--radius:0.75rem;border-radius:var(--radius);z-index:var(--z);transform:translate3d(0, 0, 0.1px);-webkit-transform:translate3d(0, 0, 0.1px);will-change:transform, visibility;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.card.svelte-ha0s6d.svelte-ha0s6d{transform:translateY(20px);-webkit-transform:translateY(20px);opacity:0;transition:opacity 0.5s ease, transform 0.5s ease-out}.dynamic__card.svelte-ha0s6d.svelte-ha0s6d{height:394px;width:302px}.card.active.svelte-ha0s6d.svelte-ha0s6d{transform:translateY(0px);-webkit-transform:translateY(0px);opacity:1}.card__translater.svelte-ha0s6d.svelte-ha0s6d,.card__rotator.svelte-ha0s6d.svelte-ha0s6d{display:grid;perspective:600px;transform-origin:center;-webkit-transform-origin:center;will-change:transform}.card__translater.svelte-ha0s6d.svelte-ha0s6d{width:auto;position:relative;transform:scale(var(--s));-webkit-transform:scale(var(--s));image-rendering:pixelated;display:flex;flex-direction:row;flex-flow:row nowrap}.card__rotator.svelte-ha0s6d.svelte-ha0s6d{transform:rotateY(var(--rx)) rotateX(var(--ry));transform-style:preserve-3d;-webkit-transform:rotateY(var(--rx)) rotateX(var(--ry));-webkit-transform-style:preserve-3d;box-shadow:0px 10px 20px -5px black;border-radius:var(--radius);outline:none;transition:box-shadow 0.4s ease, outline 0.2s ease}button.card__rotator.svelte-ha0s6d.svelte-ha0s6d{appearance:none;-webkit-appearance:none;border:none;background:top;padding:0;box-shadow:0px 0px 20px var(--bd-color)}.card__rotator.svelte-ha0s6d *{width:100%;display:grid;grid-area:1/1;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.card__back.svelte-ha0s6d.svelte-ha0s6d{border-radius:var(--radius);transform:rotateY(180deg) translateZ(1px);-webkit-transform:rotateY(180deg) translateZ(1px);backface-visibility:hidden}.rotate.svelte-ha0s6d .card__back.svelte-ha0s6d{transform:rotateY(0deg) translateZ(1px);-webkit-transform:rotateY(0deg) translateZ(1px);backface-visibility:hidden}.card__front.svelte-ha0s6d.svelte-ha0s6d,.card__front.svelte-ha0s6d .svelte-ha0s6d{backface-visibility:hidden}.card__front.svelte-ha0s6d.svelte-ha0s6d{border-radius:var(--radius);display:flex;flex-direction:column;justify-content:center;align-items:center;background:no-repeat url("/images/chimp-front-card-v2.png");background-size:cover;opacity:1;text-shadow:1px 2px 5px black}.card__back.svelte-ha0s6d.svelte-ha0s6d{background:no-repeat url("/images/chimp-back-card-v2.png");background-size:cover;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;text-align:center;height:100%;width:100%}.loading.svelte-ha0s6d .card__front.svelte-ha0s6d{opacity:0}.loading.svelte-ha0s6d .card__back.svelte-ha0s6d{transform:rotateY(0deg);-webkit-transform:rotateY(0deg)}.chimpion__name.svelte-ha0s6d.svelte-ha0s6d{position:absolute;top:19px;left:25px;text-align:left;font-style:italic;font-size:1.5rem;color:white;text-shadow:1px 2px 5px black;opacity:1}.level_box.svelte-ha0s6d.svelte-ha0s6d{display:flex;justify-content:end;align-items:baseline;position:absolute;top:25px;right:26px;text-align:right;color:white;font-size:0.75rem}.level.svelte-ha0s6d.svelte-ha0s6d{width:fit-content;margin-left:2px;font-size:1rem}.description__card.svelte-ha0s6d.svelte-ha0s6d{position:absolute;top:288px;text-align:left;width:240px;padding:8px;color:white;font-style:italic;line-height:1.25rem;font-size:1rem;display:flex;flex-direction:column}.description__card.svelte-ha0s6d .holder.svelte-ha0s6d{display:flex}.card.svelte-ha0s6d a.svelte-ha0s6d{color:inherit;width:fit-content}.lore.svelte-ha0s6d.svelte-ha0s6d{position:absolute;width:100%;padding:2rem;font-size:1rem;font-style:italic;line-height:1.25rem}.card__rotator.svelte-ha0s6d .image-container.svelte-ha0s6d{position:absolute;top:50px;height:238px;width:284px;display:flex}.card__rotator.svelte-ha0s6d .image.svelte-ha0s6d{height:238px;width:238px;align-items:center}.control-dots.svelte-ha0s6d.svelte-ha0s6d{width:100%;margin:0px;padding:0;position:absolute;bottom:0;display:flex;justify-content:center}.dot.svelte-ha0s6d.svelte-ha0s6d{opacity:.3;width:8px;height:8px;background:#fff;border-radius:50%;margin:5px;transition:opacity .2s ease;display:inline-block;box-shadow:1px 1px 2px rgba(0,0,0,.9)}.dot.selected.svelte-ha0s6d.svelte-ha0s6d{opacity:1}.control-arrow-prev.svelte-ha0s6d.svelte-ha0s6d{padding:5px;background:0 0;color:#fff;opacity:.4;text-align:left;cursor:pointer;width:22px;align-items:center;justify-content:center;border:0;transition:all .3s ease}.control-arrow-next.svelte-ha0s6d.svelte-ha0s6d{padding:5px;background:0 0;color:#fff;opacity:.4;text-align:right;cursor:pointer;width:22px;align-items:center;justify-content:center;border:0;transition:all .3s ease}.control-arrow-prev.svelte-ha0s6d.svelte-ha0s6d:hover{opacity:1}.control-arrow-next.svelte-ha0s6d.svelte-ha0s6d:hover{opacity:1}.control-arrow-prev.svelte-ha0s6d.svelte-ha0s6d:before{content:"";border-top:10px solid transparent;border-right:10px solid #fff;border-bottom:10px solid transparent;margin:0 5px;display:inline-block}.control-arrow-next.svelte-ha0s6d.svelte-ha0s6d:before{content:"";border-top:10px solid transparent;border-left:10px solid #fff;border-bottom:10px solid transparent;margin:0 5px;display:inline-block}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loreToDisplay;
  let styles;
  let $springRotateDelta, $$unsubscribe_springRotateDelta;
  let $springScale, $$unsubscribe_springScale;
  let $$unsubscribe_activeCard;
  $$unsubscribe_activeCard = subscribe(activeCard, (value) => value);
  let { active = false } = $$props;
  let { dynamic = true } = $$props;
  let { name = "" } = $$props;
  let { index = 0 } = $$props;
  let { tribe = "" } = $$props;
  let { type = "" } = $$props;
  let { art_files = {} } = $$props;
  let { lore = "" } = $$props;
  let { holder_name = "" } = $$props;
  let { level = 1 } = $$props;
  let { twitter = "" } = $$props;
  let images = [];
  let currentIndex = 0;
  let displayed_image = "";
  let artist = "";
  let bd_color = "transparent";
  let videoPlayer;
  function getImages(art_files2) {
    displayed_image = art_files2["png"];
    artist = displayed_image.split(".")[0].split("-")[1];
    let imagesArray = [art_files2["png"]];
    imagesArray = [...imagesArray, art_files2["gif"]];
    for (let alternative_art of art_files2["alternative_art"]) {
      imagesArray = [...imagesArray, alternative_art];
    }
    return images = imagesArray;
  }
  const getFrontCardBg = () => {
    try {
      return `background: no-repeat url('/images/chimp-front-card-v2.png'); background-size: cover;`;
    } catch (error) {
      return "";
    }
  };
  let thisCard;
  let rotator;
  let previous;
  let next;
  const springD = { stiffness: 0.033, damping: 0.45 };
  const springS = {
    stiffness: 0.05,
    damping: 0.45,
    precision: 1e-3
  };
  let springRotateDelta = spring({ x: 0, y: 0 }, springD);
  $$unsubscribe_springRotateDelta = subscribe(springRotateDelta, (value) => $springRotateDelta = value);
  let springScale = spring(1, springS);
  $$unsubscribe_springScale = subscribe(springScale, (value) => $springScale = value);
  let zIndex = 1;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.dynamic === void 0 && $$bindings.dynamic && dynamic !== void 0)
    $$bindings.dynamic(dynamic);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.tribe === void 0 && $$bindings.tribe && tribe !== void 0)
    $$bindings.tribe(tribe);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.art_files === void 0 && $$bindings.art_files && art_files !== void 0)
    $$bindings.art_files(art_files);
  if ($$props.lore === void 0 && $$bindings.lore && lore !== void 0)
    $$bindings.lore(lore);
  if ($$props.holder_name === void 0 && $$bindings.holder_name && holder_name !== void 0)
    $$bindings.holder_name(holder_name);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  $$result.css.add(css$1);
  images = getImages(art_files);
  loreToDisplay = lore.replace(/\n/g, "<br>");
  {
    if (name)
      currentIndex = 0;
  }
  styles = `
            --s: ${$springScale};
            --z: ${zIndex};
            --rx: ${$springRotateDelta.x}deg;
            --ry: ${$springRotateDelta.y}deg;
            --bd-color: ${bd_color};
        `;
  $$unsubscribe_springRotateDelta();
  $$unsubscribe_springScale();
  $$unsubscribe_activeCard();
  return ` <div class="${[
    "card svelte-ha0s6d",
    (active ? "active" : "") + "  loading"
  ].join(" ").trim()}"${add_attribute("style", styles, 0)}${add_attribute("this", thisCard, 0)}><div class="card__translater svelte-ha0s6d"><button class="card__rotator svelte-ha0s6d"${add_attribute("id", index.toString(), 0)} aria-label="${"Expand the Card of " + escape(name, true) + "."}" tabindex="0"${add_attribute("this", rotator, 0)}><div class="dynamic__card svelte-ha0s6d"><div><div class="card__front svelte-ha0s6d"${add_attribute("style", getFrontCardBg, 0)}>${name.length > 21 ? `<div class="chimpion__name svelte-ha0s6d" style="font-size: 0.875rem; top:26px">${escape(name)}</div>` : `${name.length > 15 ? `<div class="chimpion__name svelte-ha0s6d" style="font-size:1.25rem; top:22px">${escape(name)}</div>` : `<div class="chimpion__name svelte-ha0s6d">${escape(name)}</div>`}`} <div class="level_box svelte-ha0s6d">lvl.<span class="level svelte-ha0s6d">${escape(level)}</span></div> <div class="image-container svelte-ha0s6d"><button type="button" tabindex="0" aria-label="previous slide / item" class="control-arrow-prev svelte-ha0s6d"${add_attribute("this", previous, 0)}></button> <div class="image svelte-ha0s6d">${displayed_image.slice(-3) == "mp4" || displayed_image.slice(-3) == "mov" ? ` <video autoplay width="400" style="image-rendering: auto" class="svelte-ha0s6d"${add_attribute("this", videoPlayer, 0)}><source${add_attribute("src", displayed_image, 0)} type="video/mp4" class="svelte-ha0s6d"></video>` : `${currentIndex <= 1 ? `<img${add_attribute("src", displayed_image, 0)} style="image-rendering: pixelated" loading="lazy" alt="${"Art " + escape(currentIndex + 1, true) + " of " + escape(name, true)}" class="svelte-ha0s6d">` : `<img${add_attribute("src", displayed_image, 0)} style="image-rendering: auto" loading="lazy" alt="${"Art " + escape(currentIndex + 1, true) + " of " + escape(name, true)}" class="svelte-ha0s6d">`}`} <ul class="control-dots svelte-ha0s6d">${each(images, (image, i) => {
    return `<li class="${escape(null_to_empty(i === currentIndex ? "dot selected" : "dot"), true) + " svelte-ha0s6d"}"${add_attribute("value", i, 0)} aria-label="${"slide item " + escape(i + 1, true)}"></li>`;
  })}</ul></div> <button type="button" tabindex="0" aria-label="next slide / item" class="control-arrow-next svelte-ha0s6d"${add_attribute("this", next, 0)}></button></div> <div class="description__card svelte-ha0s6d"><span class="svelte-ha0s6d">Tribe: ${escape(tribe.split(/(?=[A-Z])/).join(" "))}</span> <span class="svelte-ha0s6d">Type: ${escape(type)}</span> ${holder_name != "" ? `<span class="holder svelte-ha0s6d">Holder: <a href="${"https://twitter.com/" + escape(twitter, true)}" target="_blank" class="svelte-ha0s6d">${escape(holder_name)}</a></span>` : `<span class="svelte-ha0s6d" data-svelte-h="svelte-ikipug">Holder: Unknown</span>`} <span class="svelte-ha0s6d">Artist: ${escape(artist)}</span></div></div></div> <div class="card__back svelte-ha0s6d"><div class="lore svelte-ha0s6d">${lore != "" ? `<p><!-- HTML_TAG_START -->${loreToDisplay}<!-- HTML_TAG_END --></p>` : `No lore for this chimpion yet...`}</div></div></div></button></div> </div>`;
});
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
  const getLevel = (holder_name) => {
    if (holders[holder_name])
      return holders[holder_name]["level"];
    else {
      return 1;
    }
  };
  const getTwitter = (holder_name) => {
    if (holders[holder_name])
      return holders[holder_name]["twitter"];
    else {
      return "";
    }
  };
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
        holder_name: chimpion.holder,
        level: getLevel(chimpion.holder),
        twitter: getTwitter(chimpion.holder)
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
