import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component, f as set_store_value, d as each } from "../../../chunks/ssr.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import { s as spring } from "../../../chunks/spring.js";
import { w as writable, r as readable } from "../../../chunks/index.js";
import { h as holders } from "../../../chunks/holders.js";
import { c as chimpions } from "../../../chunks/chimpions.js";
import { B as BackToTop } from "../../../chunks/BackToTop.js";
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
const resetBaseOrientation = () => {
  firstReading = true;
  baseOrientation = getRawOrientation();
};
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
const cardGlare_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".card__glare.svelte-hkjatj{transform:translateZ(1.4px);background:radial-gradient(\n			farthest-corner circle at var(--mx) var(--my),\n			rgba(255, 255, 255, 0.4) 10%,\n			rgba(255, 255, 255, 0.35) 20%,\n			rgba(0, 0, 0, 0.5) 90%\n		);mix-blend-mode:overlay;opacity:var(--o)}",
  map: null
};
const Card_glare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="card__glare svelte-hkjatj"></div>`;
});
const card_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ':root{--mx:50%;--my:50%;--s:1;--z:1;--o:0;--rx:0deg;--ry:0deg;--pos:50% 50%;--posx:50%;--posy:50%;--bd-color:#ffffff}.card.svelte-1ny3ozy.svelte-1ny3ozy{height:394px;width:302px;margin-bottom:2vh;--radius:0.75rem;z-index:var(--z);transform:translate3d(0, 0, 0.1px);-webkit-transform:translate3d(0, 0, 0.1px);will-change:transform, visibility;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.dynamic__card.svelte-1ny3ozy.svelte-1ny3ozy{height:394px;width:302px}.card.interacting.svelte-1ny3ozy.svelte-1ny3ozy{z-index:var(--z)}.card.active.svelte-1ny3ozy .card__translater.svelte-1ny3ozy,.card.active.svelte-1ny3ozy .card__rotator.svelte-1ny3ozy{touch-action:none}.card__translater.svelte-1ny3ozy.svelte-1ny3ozy,.card__rotator.svelte-1ny3ozy.svelte-1ny3ozy{display:grid;perspective:600px;transform-origin:center;-webkit-transform-origin:center;will-change:transform}.card__translater.svelte-1ny3ozy.svelte-1ny3ozy{width:auto;position:relative;transform:scale(var(--s));-webkit-transform:scale(var(--s));image-rendering:pixelated;display:flex;flex-direction:row;flex-flow:row nowrap}.card__rotator.svelte-1ny3ozy.svelte-1ny3ozy{transform:rotateY(var(--rx)) rotateX(var(--ry));transform-style:preserve-3d;-webkit-transform:rotateY(var(--rx)) rotateX(var(--ry));-webkit-transform-style:preserve-3d;box-shadow:0px 10px 20px -5px black;border-radius:var(--radius);outline:none;transition:box-shadow 0.4s ease, outline 0.2s ease}button.card__rotator.svelte-1ny3ozy.svelte-1ny3ozy{appearance:none;-webkit-appearance:none;border:none;background:top;padding:0;box-shadow:0px 0px 20px var(--bd-color)}.card__rotator.svelte-1ny3ozy *{width:100%;display:grid;grid-area:1/1;border-radius:var(--radius);image-rendering:optimizeQuality;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.card__rotator.svelte-1ny3ozy img.svelte-1ny3ozy{position:absolute;top:50px;border-radius:0px;height:238px;width:238px}.card__back.svelte-1ny3ozy.svelte-1ny3ozy{transform:rotateY(180deg) translateZ(1px);-webkit-transform:rotateY(180deg) translateZ(1px);backface-visibility:hidden}.card__front.svelte-1ny3ozy.svelte-1ny3ozy,.card__front.svelte-1ny3ozy .svelte-1ny3ozy{backface-visibility:hidden}.card__front.svelte-1ny3ozy.svelte-1ny3ozy{display:flex;flex-direction:column;justify-content:center;align-items:center;background:no-repeat url("/images/chimp-front-card.png");background-size:cover;opacity:1;text-shadow:1px 2px 5px black}.card__back.svelte-1ny3ozy.svelte-1ny3ozy{background:no-repeat url("/images/chimp-back-card-v2.png");background-size:cover;display:flex;flex-direction:column;justify-content:center;color:white;text-align:center;height:100%;width:100%}.loading.svelte-1ny3ozy .card__front.svelte-1ny3ozy{opacity:0}.loading.svelte-1ny3ozy .card__back.svelte-1ny3ozy{transform:rotateY(0deg);-webkit-transform:rotateY(0deg)}.chimpion__name.svelte-1ny3ozy.svelte-1ny3ozy{position:absolute;top:19px;left:25px;text-align:left;font-style:italic;font-size:1.5rem;color:white;text-shadow:1px 2px 5px black;opacity:1}.level_box.svelte-1ny3ozy.svelte-1ny3ozy{display:flex;justify-content:end;align-items:baseline;position:absolute;top:25px;right:26px;text-align:right;color:white;font-size:0.75rem}.level.svelte-1ny3ozy.svelte-1ny3ozy{width:fit-content;margin-left:2px;font-size:1rem}.description__card.svelte-1ny3ozy.svelte-1ny3ozy{position:absolute;top:287px;text-align:left;width:240px;padding:8px;border-radius:0rem;color:white;font-style:italic}.top__description.svelte-1ny3ozy.svelte-1ny3ozy{line-height:1.125rem;padding-left:3px}.lore.svelte-1ny3ozy.svelte-1ny3ozy{position:absolute;top:80px;width:100%;padding:2rem;font-size:0.75rem;font-style:italic;line-height:1.25rem}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loreToDisplay;
  let front_img;
  let styles;
  let $activeCard, $$unsubscribe_activeCard;
  let $springBackground, $$unsubscribe_springBackground;
  let $springRotateDelta, $$unsubscribe_springRotateDelta;
  let $springRotate, $$unsubscribe_springRotate;
  let $springGlare, $$unsubscribe_springGlare;
  let $springScale, $$unsubscribe_springScale;
  $$unsubscribe_activeCard = subscribe(activeCard, (value) => $activeCard = value);
  let { dynamic = true } = $$props;
  let { png_by_default = false } = $$props;
  let { name = "" } = $$props;
  let { index = 0 } = $$props;
  let { tribe = "" } = $$props;
  let { type = "" } = $$props;
  let { bg_color = "" } = $$props;
  let { bd_color = "" } = $$props;
  let { lore = "" } = $$props;
  let { png_artist = "" } = $$props;
  let { gif_artist = "" } = $$props;
  let { png = "" } = $$props;
  let { gif = "" } = $$props;
  let { holder_name = "" } = $$props;
  let { level = 1 } = $$props;
  const getFrontCardBg = (bg_color2) => {
    try {
      bd_color = "white";
      return `background: no-repeat url('/images/chimp-front-card-v2.png'); background-size: cover;`;
    } catch (error) {
      return "";
    }
  };
  let thisCard;
  let rotator;
  let active = false;
  let interacting = false;
  const springR = { stiffness: 0.066, damping: 0.45 };
  const springD = { stiffness: 0.033, damping: 0.45 };
  const springS = {
    stiffness: 0.066,
    damping: 0.45,
    precision: 1e-3
  };
  let springRotate = spring({ x: 0, y: 0 }, springR);
  $$unsubscribe_springRotate = subscribe(springRotate, (value) => $springRotate = value);
  let springGlare = spring({ x: 50, y: 50, o: 0 }, springR);
  $$unsubscribe_springGlare = subscribe(springGlare, (value) => $springGlare = value);
  let springBackground = spring({ x: 50, y: 50 }, springR);
  $$unsubscribe_springBackground = subscribe(springBackground, (value) => $springBackground = value);
  let springRotateDelta = spring({ x: 0, y: 0 }, springD);
  $$unsubscribe_springRotateDelta = subscribe(springRotateDelta, (value) => $springRotateDelta = value);
  let springTranslate = spring({ x: 0, y: 0 }, springD);
  let springScale = spring(1, springS);
  $$unsubscribe_springScale = subscribe(springScale, (value) => $springScale = value);
  let zIndex = 1;
  const interactEnd = (e, delay = 0) => {
    bd_color = "transparent";
    setTimeout(
      function() {
        const snapStiff = 0.01;
        const snapDamp = 0.06;
        interacting = false;
        springRotate.stiffness = snapStiff;
        springRotate.damping = snapDamp;
        springRotate.set({ x: 0, y: 0 }, { soft: 1 });
        springGlare.stiffness = snapStiff;
        springGlare.damping = snapDamp;
        springGlare.set({ x: 50, y: 50, o: 0 }, { soft: 1 });
        springBackground.stiffness = snapStiff;
        springBackground.damping = snapDamp;
        springBackground.set({ x: 50, y: 50 }, { soft: 1 });
      },
      delay
    );
  };
  const popover = () => {
    springRotateDelta.set({ x: 180, y: 0 });
    springScale.set(1.2);
    zIndex = 50;
    set_store_value(activeCard, $activeCard = thisCard, $activeCard);
    setTimeout(
      () => {
        springScale.set(1, { soft: true });
      },
      150
    );
    setTimeout(
      () => {
        front_img = gif;
      },
      350
    );
    resetBaseOrientation();
  };
  const retreat = () => {
    springScale.set(1, { soft: true });
    springTranslate.set({ x: 0, y: 0 }, { soft: true });
    springRotateDelta.set({ x: 0, y: 0 }, { soft: true });
    interactEnd();
  };
  if ($$props.dynamic === void 0 && $$bindings.dynamic && dynamic !== void 0)
    $$bindings.dynamic(dynamic);
  if ($$props.png_by_default === void 0 && $$bindings.png_by_default && png_by_default !== void 0)
    $$bindings.png_by_default(png_by_default);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.tribe === void 0 && $$bindings.tribe && tribe !== void 0)
    $$bindings.tribe(tribe);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.bg_color === void 0 && $$bindings.bg_color && bg_color !== void 0)
    $$bindings.bg_color(bg_color);
  if ($$props.bd_color === void 0 && $$bindings.bd_color && bd_color !== void 0)
    $$bindings.bd_color(bd_color);
  if ($$props.lore === void 0 && $$bindings.lore && lore !== void 0)
    $$bindings.lore(lore);
  if ($$props.png_artist === void 0 && $$bindings.png_artist && png_artist !== void 0)
    $$bindings.png_artist(png_artist);
  if ($$props.gif_artist === void 0 && $$bindings.gif_artist && gif_artist !== void 0)
    $$bindings.gif_artist(gif_artist);
  if ($$props.png === void 0 && $$bindings.png && png !== void 0)
    $$bindings.png(png);
  if ($$props.gif === void 0 && $$bindings.gif && gif !== void 0)
    $$bindings.gif(gif);
  if ($$props.holder_name === void 0 && $$bindings.holder_name && holder_name !== void 0)
    $$bindings.holder_name(holder_name);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  $$result.css.add(css$3);
  loreToDisplay = lore.replace(/\n/g, "<br>");
  front_img = gif;
  {
    {
      if ($activeCard && $activeCard === thisCard) {
        popover();
        active = true;
      } else {
        retreat();
        active = false;
      }
    }
  }
  styles = `
            --mx: ${$springGlare.x}%;
            --my: ${$springGlare.y}%;
            --s: ${$springScale};
            --z: ${zIndex};
            --o: ${$springGlare.o};
            --rx: ${$springRotate.x + $springRotateDelta.x}deg;
            --ry: ${$springRotate.y + $springRotateDelta.y}deg;
            --pos: ${$springBackground.x}% ${$springBackground.y}%;
            --posx: ${$springBackground.x}%;
            --posy: ${$springBackground.y}%;
            --bd-color: ${bd_color};
        `;
  {
    {
      if ($activeCard && $activeCard === thisCard) {
        interacting = true;
      }
    }
  }
  $$unsubscribe_activeCard();
  $$unsubscribe_springBackground();
  $$unsubscribe_springRotateDelta();
  $$unsubscribe_springRotate();
  $$unsubscribe_springGlare();
  $$unsubscribe_springScale();
  return `<div class="${[
    "card svelte-1ny3ozy",
    (active ? "active" : "") + " " + (interacting ? "interacting" : "") + " loading"
  ].join(" ").trim()}"${add_attribute("style", styles, 0)}${add_attribute("this", thisCard, 0)}><div class="card__translater svelte-1ny3ozy"><button class="card__rotator svelte-1ny3ozy"${add_attribute("id", index.toString(), 0)} aria-label="${"Expand the Card of " + escape(name, true) + "."}" tabindex="0"${add_attribute("this", rotator, 0)}><div class="dynamic__card svelte-1ny3ozy"><div><div class="card__front svelte-1ny3ozy"${add_attribute("style", getFrontCardBg(), 0)}>${name.length > 21 ? `<div class="chimpion__name svelte-1ny3ozy" style="font-size: 0.875rem; top:23px">${escape(name)}</div>` : `${name.length > 15 ? `<div class="chimpion__name svelte-1ny3ozy" style="font-size:1.25rem; top:18px">${escape(name)}</div>` : `<div class="chimpion__name svelte-1ny3ozy">${escape(name)}</div>`}`} <div class="level_box svelte-1ny3ozy">lvl.<span class="level svelte-1ny3ozy">${escape(level)}</span></div> ${png_by_default ? `<img${add_attribute("src", front_img, 0)} alt="${"Front design of " + escape(name, true) + " Card"}" loading="lazy" class="svelte-1ny3ozy">` : `<img${add_attribute("src", gif, 0)} alt="${"Front design of " + escape(name, true) + " Card"}" loading="lazy" class="svelte-1ny3ozy">`} <div class="description__card svelte-1ny3ozy"><div class="top__description svelte-1ny3ozy">Tribe: ${escape(tribe.split(/(?=[A-Z])/).join(" "))}<br class="svelte-1ny3ozy">
                                Type: ${escape(type)}<br class="svelte-1ny3ozy"> ${holder_name != "" ? `Holder: ${escape(holder_name)}<br class="svelte-1ny3ozy">` : `Holder: Unknown<br class="svelte-1ny3ozy">`}
                                Artist: ${escape(png_artist)}</div></div></div> ${validate_component(Card_glare, "Glare").$$render($$result, {}, {}, {})}</div> <div class="card__back svelte-1ny3ozy"><div class="lore svelte-1ny3ozy">${lore != "" ? `<p><!-- HTML_TAG_START -->${loreToDisplay}<!-- HTML_TAG_END --></p>` : `No lore for this chimpion yet...`}</div></div></div></button></div> </div>`;
});
const Switch_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".s--inner.svelte-6m2l2c.svelte-6m2l2c{width:200px;height:40px;display:flex;align-items:center;justify-content:space-between;border:1px solid white;border-radius:0.25rem;padding:0.5rem;font-size:1rem;margin:10px 20px 0 0}.s--inner.svelte-6m2l2c button.svelte-6m2l2c{display:flex;padding:0 0.5rem;background-color:inherit;border:0px;color:white}.s--inner.svelte-6m2l2c button span.svelte-6m2l2c{user-select:none;pointer-events:none;padding:0.25rem 0.5rem}[role='switch'][aria-checked='true'].svelte-6m2l2c .svelte-6m2l2c:first-child,[role='switch'][aria-checked='false'].svelte-6m2l2c .svelte-6m2l2c:last-child{border-radius:0.25em;background:var(--purple);display:inline-block}.s--slider.svelte-6m2l2c.svelte-6m2l2c{width:200px;height:40px;display:flex;align-items:center;justify-content:space-between;border:1px solid white;border-radius:0.25rem;padding:0.5rem;font-size:1rem;margin:10px 20px 0 0}.s--slider.svelte-6m2l2c button.svelte-6m2l2c{width:3em;height:1.6em;position:relative;margin:0 0 0 0.5em;background:var(--whiter-purple);border:1px var(--whiter-purple) solid;border-radius:0.25em}.s--slider.svelte-6m2l2c button.svelte-6m2l2c::before{content:'';position:absolute;width:1rem;height:1rem;background:#fff;top:0.10rem;right:1.25rem;border-radius:0.25rem;transition:transform 0.4s}.s--slider.svelte-6m2l2c button[aria-checked='true'].svelte-6m2l2c{background-color:var(--purple)\r\n    }.s--slider.svelte-6m2l2c button[aria-checked='true'].svelte-6m2l2c::before{transform:translateX(1.15rem)}",
  map: null
};
const Switch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { label } = $$props;
  let { design = "inner" } = $$props;
  let { pngByDefault = true } = $$props;
  let { cardMobility = true } = $$props;
  let checked = true;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.design === void 0 && $$bindings.design && design !== void 0)
    $$bindings.design(design);
  if ($$props.pngByDefault === void 0 && $$bindings.pngByDefault && pngByDefault !== void 0)
    $$bindings.pngByDefault(pngByDefault);
  if ($$props.cardMobility === void 0 && $$bindings.cardMobility && cardMobility !== void 0)
    $$bindings.cardMobility(cardMobility);
  $$result.css.add(css$2);
  return `${design == "inner" ? `<div class="s--inner svelte-6m2l2c"><span class="svelte-6m2l2c">${escape(label)}</span> <button role="switch"${add_attribute("aria-checked", checked, 0)} class="svelte-6m2l2c"><span class="svelte-6m2l2c" data-svelte-h="svelte-16tawr0">static</span> <span class="svelte-6m2l2c" data-svelte-h="svelte-1frh85b">animated</span></button></div>` : `${design == "slider" ? `<div class="s--slider svelte-6m2l2c"><span>${escape(label)}</span> <button role="switch"${add_attribute("aria-checked", checked, 0)} class="svelte-6m2l2c"></button></div>` : ``}`}`;
});
const cards_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card-grid.svelte-1nxf9pl{display:grid;grid-template-columns:1fr;grid-gap:3vw;transform-style:preserve-3d;height:100%;max-width:1200px;margin:50px auto;position:relative;justify-items:center}@media screen and (min-width: 800px){.card-grid.svelte-1nxf9pl{grid-template-columns:1fr 1fr}}@media screen and (min-width: 1100px){.card-grid.svelte-1nxf9pl{grid-template-columns:1fr 1fr 1fr}}#query-section.svelte-1nxf9pl{display:flex;flex-wrap:wrap;align-items:center;padding:2% 0}.menu-cont.svelte-1nxf9pl{width:200px;height:40px;display:flex;margin:10px 20px 0 0}select.svelte-1nxf9pl{margin:0;font-size:1rem;border:1px solid white;border-radius:0.25rem;cursor:pointer}.menu.svelte-1nxf9pl{width:100%;padding:0.5rem;background-color:var(--darker-purple);color:white}#search-input-cont.svelte-1nxf9pl{width:200px;height:40px;display:flex;margin:10px 20px 0 0}#search-field.svelte-1nxf9pl{width:100%;font-size:1rem;border:1px solid white;border-radius:0.25rem;background-color:var(--darker-purple);color:white;padding:0.5rem}.no-results-msg.svelte-1nxf9pl{width:70%;padding:3rem;font-size:2rem;text-align:center}",
  map: null
};
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let png;
  let cardMobility;
  let types = [];
  let selectedType = "SelectAType";
  let selectedTribe = "Proletariat";
  let lastSelectedTribe = "";
  const getLevel = (holder_name) => {
    if (holders[holder_name])
      return holders[holder_name]["level"];
    else {
      return 1;
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
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
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
    $$rendered = `<div id="query-section" class="svelte-1nxf9pl">${validate_component(Switch, "Switch").$$render(
      $$result,
      {
        label: "Dynamic cards:",
        design: "slider",
        cardMobility
      },
      {
        cardMobility: ($$value) => {
          cardMobility = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Switch, "Switch").$$render(
      $$result,
      {
        label: "Art:",
        design: "inner",
        pngByDefault: png
      },
      {
        pngByDefault: ($$value) => {
          png = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="menu-cont svelte-1nxf9pl"><select class="menu svelte-1nxf9pl" name="menu" id="menu"><option disabled selected value="SelectAType" data-svelte-h="svelte-1ba7yrt">Select a type</option><option value="None" data-svelte-h="svelte-qtemz2">None</option>${each(types, (type) => {
      return `<option${add_attribute("value", type, 0)}>${escape(type)}</option>`;
    })}</select></div> <div class="menu-cont svelte-1nxf9pl"><select class="menu svelte-1nxf9pl" name="menu" id="menu"><option disabled value="None" data-svelte-h="svelte-vfjbs4">No Selected Tribe</option><option selected value="FutureWarPack" data-svelte-h="svelte-p623x">Future War Pack</option><option value="OldWorldCult" data-svelte-h="svelte-19vc0cu">Old World Cult</option><option value="Planeswalkers" data-svelte-h="svelte-1v2hpz2">Planeswalkers</option><option value="Proletariat" data-svelte-h="svelte-9w9fm0">Proletariat</option></select></div> <div id="search-input-cont" class="svelte-1nxf9pl"><input type="text" id="search-field" placeholder="Search" autocomplete="on" class="svelte-1nxf9pl"${add_attribute("value", searchTerm, 0)}></div></div> ${searchTerm && filteredChimpions.length === 0 ? `<div class="no-results-msg svelte-1nxf9pl"><p>No results for ${escape(searchTerm)}</p></div>` : `<div class="card-grid svelte-1nxf9pl">${each(filteredChimpions, (chimpion) => {
      return `${validate_component(Card, "Card").$$render(
        $$result,
        {
          dynamic: cardMobility,
          png_by_default: png,
          name: chimpion.name.split(/(?=[A-Z])/).join(" "),
          index: chimpion.index,
          tribe: chimpion.tribe,
          type: chimpion.type.split(/(?=[A-Z])/).join(" "),
          bg_color: chimpion.bg_color,
          bd_color: chimpion.bd_color,
          lore: chimpion.lore,
          png_artist: chimpion.png_artist,
          gif_artist: chimpion.gif_artist,
          png: chimpion.paths.png,
          gif: chimpion.paths.gif,
          holder_name: chimpion.holder,
          level: getLevel(chimpion.holder)
        },
        {},
        {}
      )}`;
    })}</div>`}`;
  } while (!$$settled);
  return $$rendered;
});
const Compendium_svelte_svelte_type_style_lang = "";
const css = {
  code: ".introduction.svelte-x2a8cv,.Cards.svelte-x2a8cv{margin:0px 10%}.introduction.svelte-x2a8cv{padding-top:6rem}",
  map: null
};
const Compendium = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <section><div class="introduction svelte-x2a8cv" data-svelte-h="svelte-6pjv19"><h1 class="heading">Compendium_v3</h1> <p class="subsectionParagraph" style="margin-bottom: 0">You&#39;ve enter the hallowed halls of Chimpianity. Here before you lies the collective history of Chimpions past, present, and future. Tread with care.</p> <p class="subsectionParagraph">You can submit lore for any chimp by filling <a href="https://forms.gle/SZ38C4jKhvY6vP366" style="color: inherit" target="blank_">this form.</a></p></div> <div class="Cards svelte-x2a8cv">${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})}</div> ${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Compendium, "Compendium").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
