import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import { s as spring } from "../../../chunks/spring.js";
import { w as writable, r as readable } from "../../../chunks/index.js";
import { c as chimpions } from "../../../chunks/chimpions.js";
import { B as BackToTop } from "../../../chunks/BackToTop.js";
const round = (num, fix = 3) => parseFloat(num.toFixed(fix));
const clamp = (num, min = -20, max = 20) => Math.min(Math.max(num, min), max);
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
  code: ':root{--mx:50%;--my:50%;--s:1;--z:1;--o:0;--tx:0px;--ty:0px;--rx:0deg;--ry:0deg;--pos:50% 50%;--posx:50%;--posy:50%;--hyp:0;--bd-color:#ffffff}.card.svelte-1kfh204.svelte-1kfh204{height:420px;width:300px;margin-bottom:2vh;--radius:0.75rem;z-index:var(--z);transform:translate3d(0, 0, 0.1px);-webkit-transform:translate3d(0, 0, 0.1px);will-change:transform, visibility;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.dynamic__card.svelte-1kfh204.svelte-1kfh204{height:420px;width:300px}.card.interacting.svelte-1kfh204.svelte-1kfh204{z-index:var(--z)}.card.active.svelte-1kfh204 .card__translater.svelte-1kfh204,.card.active.svelte-1kfh204 .card__rotator.svelte-1kfh204{touch-action:none}.card__translater.svelte-1kfh204.svelte-1kfh204,.card__rotator.svelte-1kfh204.svelte-1kfh204{display:grid;perspective:600px;transform-origin:center;-webkit-transform-origin:center;will-change:transform}.card__translater.svelte-1kfh204.svelte-1kfh204{width:auto;position:relative;transform:translate3d(var(--tx), var(--ty), 0) scale(var(--s));-webkit-transform:translate3d(var(--tx), var(--ty), 0) scale(var(--s));image-rendering:pixelated;display:flex;flex-direction:row;flex-flow:row nowrap}.card__rotator.svelte-1kfh204.svelte-1kfh204{transform:rotateY(var(--rx)) rotateX(var(--ry));transform-style:preserve-3d;-webkit-transform:rotateY(var(--rx)) rotateX(var(--ry));-webkit-transform-style:preserve-3d;box-shadow:0px 10px 20px -5px black;border-radius:var(--radius);outline:none;transition:box-shadow 0.4s ease, outline 0.2s ease}button.card__rotator.svelte-1kfh204.svelte-1kfh204{appearance:none;-webkit-appearance:none;border:none;background:top;padding:0}.card.active.svelte-1kfh204 .card__rotator.svelte-1kfh204:focus{box-shadow:0px 0px 20px var(--bd-color)}.card__rotator.svelte-1kfh204 *{width:100%;display:grid;grid-area:1/1;border-radius:var(--radius);image-rendering:optimizeQuality;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.card__rotator.svelte-1kfh204 img.svelte-1kfh204{position:absolute;top:53px;border-radius:0px;height:226px;width:226px}.card__back.svelte-1kfh204.svelte-1kfh204{transform:rotateY(180deg) translateZ(1px);-webkit-transform:rotateY(180deg) translateZ(1px);backface-visibility:visible}.card__front.svelte-1kfh204.svelte-1kfh204,.card__front.svelte-1kfh204 .svelte-1kfh204{backface-visibility:hidden}.card__front.svelte-1kfh204.svelte-1kfh204{display:flex;flex-direction:column;justify-content:center;align-items:center;border:4px white solid;background:no-repeat url("/images/chimp-front-card.png");background-size:cover;opacity:1;text-shadow:1px 2px 5px black}.card__back.svelte-1kfh204.svelte-1kfh204{border:4px white solid;background:no-repeat url("/images/Chimp-back-card.png");background-size:cover}.loading.svelte-1kfh204 .card__front.svelte-1kfh204{opacity:0}.loading.svelte-1kfh204 .card__back.svelte-1kfh204{transform:rotateY(0deg);-webkit-transform:rotateY(0deg)}a.svelte-1kfh204.svelte-1kfh204{text-decoration:none;cursor:pointer;color:white}.chimpion__name.svelte-1kfh204.svelte-1kfh204{position:absolute;top:16px;left:25px;text-align:left;font-style:italic;font-size:1.5rem;text-shadow:1px 2px 5px black;opacity:1}.level_box.svelte-1kfh204.svelte-1kfh204{display:flex;justify-content:end;align-items:baseline;position:absolute;top:22px;right:26px;text-align:right;color:white;font-size:0.75rem}.level.svelte-1kfh204.svelte-1kfh204{width:fit-content;margin-left:2px;font-size:1rem}.description__card.svelte-1kfh204.svelte-1kfh204{position:absolute;top:286px;text-align:left;width:240px;padding:10px;border-radius:0rem;color:white;font-style:italic}.lore.svelte-1kfh204.svelte-1kfh204{position:absolute;width:97%;top:45px;padding-top:0.25rem;border-top:1px white solid;border-radius:0px;font-size:0.5rem}.artist.svelte-1kfh204.svelte-1kfh204{position:absolute;padding:0.125rem;padding-left:0.5rem;width:40%;top:94px;left:-25px;background:rgb(0 0 0 / 0.4);border-top-right-radius:0.375rem;border-bottom-left-radius:0.375rem;font-size:0.5rem}.number.svelte-1kfh204.svelte-1kfh204{position:absolute;bottom:10px;right:12px;color:white;font-size:0.5rem;text-align:right}',
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let front_img;
  let displayed_artist;
  let styles;
  let $activeCard, $$unsubscribe_activeCard;
  let $springGlare, $$unsubscribe_springGlare;
  let $springBackground, $$unsubscribe_springBackground;
  let $springRotateDelta, $$unsubscribe_springRotateDelta;
  let $springRotate, $$unsubscribe_springRotate;
  let $springScale, $$unsubscribe_springScale;
  let $springTranslate, $$unsubscribe_springTranslate;
  $$unsubscribe_activeCard = subscribe(activeCard, (value) => $activeCard = value);
  let { dynamic = true } = $$props;
  let { png_by_default = true } = $$props;
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
      return `background: no-repeat url('/images/chimp-front-card-${bg_color2}.png'); background-size: cover;`;
    } catch (error) {
      return "";
    }
  };
  let thisCard;
  let rotator;
  let active = false;
  let interacting = false;
  const springR = { stiffness: 0.066, damping: 0.25 };
  const springD = { stiffness: 0.033, damping: 0.45 };
  let springRotate = spring({ x: 0, y: 0 }, springR);
  $$unsubscribe_springRotate = subscribe(springRotate, (value) => $springRotate = value);
  let springGlare = spring({ x: 50, y: 50, o: 0 }, springR);
  $$unsubscribe_springGlare = subscribe(springGlare, (value) => $springGlare = value);
  let springBackground = spring({ x: 50, y: 50 }, springR);
  $$unsubscribe_springBackground = subscribe(springBackground, (value) => $springBackground = value);
  let springRotateDelta = spring({ x: 0, y: 0 }, springD);
  $$unsubscribe_springRotateDelta = subscribe(springRotateDelta, (value) => $springRotateDelta = value);
  let springTranslate = spring({ x: 0, y: 0 }, springD);
  $$unsubscribe_springTranslate = subscribe(springTranslate, (value) => $springTranslate = value);
  let springScale = spring(1, springD);
  $$unsubscribe_springScale = subscribe(springScale, (value) => $springScale = value);
  let zIndex = 1;
  const interactEnd = (e, delay = 0) => {
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
  const setCenter = () => {
    const rect = thisCard.getBoundingClientRect();
    const view = document.documentElement;
    const delta = {
      x: round(view.clientWidth / 2 - rect.x - rect.width / 2),
      y: round(view.clientHeight / 2 - rect.y - rect.height / 2)
    };
    springTranslate.set({ x: delta.x, y: delta.y });
  };
  const popover = () => {
    setCenter();
    springRotateDelta.set({ x: 360, y: 0 });
    springScale.set(1.1);
    zIndex = 50;
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
  front_img = png;
  displayed_artist = png_artist;
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
            --tx: ${$springTranslate.x}px;
            --ty: ${$springTranslate.y}px;
            --s: ${$springScale};
            --z: ${zIndex};
            --o: ${$springGlare.o};
            --rx: ${$springRotate.x + $springRotateDelta.x}deg;
            --ry: ${$springRotate.y + $springRotateDelta.y}deg;
            --pos: ${$springBackground.x}% ${$springBackground.y}%;
            --posx: ${$springBackground.x}%;
            --posy: ${$springBackground.y}%;
            --hyp: ${clamp(Math.sqrt(($springGlare.y - 50) * ($springGlare.y - 50) + ($springGlare.x - 50) * ($springGlare.x - 50)) / 50, 0, 1)};
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
  $$unsubscribe_springGlare();
  $$unsubscribe_springBackground();
  $$unsubscribe_springRotateDelta();
  $$unsubscribe_springRotate();
  $$unsubscribe_springScale();
  $$unsubscribe_springTranslate();
  return ` <div class="${[
    "card svelte-1kfh204",
    (active ? "active" : "") + " " + (interacting ? "interacting" : "") + " loading"
  ].join(" ").trim()}"${add_attribute("style", styles, 0)}${add_attribute("this", thisCard, 0)}><div class="card__translater svelte-1kfh204"><button class="card__rotator svelte-1kfh204"${add_attribute("id", index.toString(), 0)} aria-label="${"Expand the Card of " + escape(name, true) + "."}" tabindex="0"${add_attribute("this", rotator, 0)}><div class="dynamic__card svelte-1kfh204"><div><div class="card__front svelte-1kfh204"${add_attribute("style", getFrontCardBg(bg_color), 0)}>${name.length > 21 ? `<div class="chimpion__name svelte-1kfh204" style="font-size: 0.875rem; top:23px"><a${add_attribute("href", `/compendium/${name.split(" ").join("")}`, 0)} class="svelte-1kfh204">${escape(name)}</a></div>` : `${name.length > 15 ? `<div class="chimpion__name svelte-1kfh204" style="font-size:1.25rem; top:18px"><a${add_attribute("href", `/compendium/${name.split(" ").join("")}`, 0)} class="svelte-1kfh204">${escape(name)}</a></div>` : `<div class="chimpion__name svelte-1kfh204"><a${add_attribute("href", `/compendium/${name.split(" ").join("")}`, 0)} class="svelte-1kfh204">${escape(name)}</a></div>`}`} <div class="level_box svelte-1kfh204">lvl.<span class="level svelte-1kfh204">${escape(level)}</span></div> ${png_by_default ? `<img${add_attribute("src", front_img, 0)} alt="${"Front design of " + escape(name, true) + " Card"}" loading="lazy" class="svelte-1kfh204">` : `<img${add_attribute("src", gif, 0)} alt="${"Front design of " + escape(name, true) + " Card"}" loading="lazy" class="svelte-1kfh204">`} <div class="description__card svelte-1kfh204"><div class="top__description svelte-1kfh204">Tribe: ${escape(tribe.split(/(?=[A-Z])/).join(" "))}<br class="svelte-1kfh204">
                                Type: ${escape(type)}<br class="svelte-1kfh204"> ${holder_name != "" ? `Holder: ${escape(holder_name)}<br class="svelte-1kfh204">` : `Holder: Unknown`}</div> ${png_by_default ? `<div class="artist svelte-1kfh204">By ${escape(displayed_artist)}</div>` : `<div class="artist svelte-1kfh204">By ${escape(gif_artist)}</div>`} <div class="lore svelte-1kfh204">${lore != "" ? `${escape(lore)}` : `No lore for this chimpion yet...`}</div></div> <div class="number svelte-1kfh204">${escape(Number(index) + 1)}/222</div></div> ${validate_component(Card_glare, "Glare").$$render($$result, {}, {}, {})}</div> <div class="card__back svelte-1kfh204"></div></div></button></div> </div>`;
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
const ThunderBear = {
  pfp: "https://pbs.twimg.com/profile_images/1597446929520132096/r69DxNCA_400x400.jpg",
  twitter: "NFT_TB_Crypto",
  level: 1,
  chimpions: [
    "TheLightInShadow",
    "TheTimeworn",
    "TheShieldBearer",
    "TheCommodore",
    "TheEmaciated",
    "TheMilitant",
    "TheRemnant",
    "TheCursed",
    "TheAureate",
    "TheSquire",
    "TheHardwired",
    "ThePlumber",
    "TheTestSubject",
    "TheSummoner",
    "TheGolem",
    "TheOrdained",
    "TheAberration",
    "TheYouthful",
    "TheSpiritKeeper",
    "TheCybernetic"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": true,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Doudou = {
  pfp: "https://nft.matrica.io/nft/FUoc5Nvgp6A8Ava2dyzf2q24NVK8HJ44ivhFTBQGWDP4.png",
  twitter: "notdoudou_sol",
  level: 9,
  chimpions: [
    "TheGhastly",
    "TheEvaluator",
    "TheDecorated",
    "TheFirewatch",
    "TheColorful",
    "TheBeacon",
    "ThePaladin",
    "TheKnightCompanion",
    "TheAchromatic",
    "TheJudge",
    "ThePackLeader",
    "TheJovian",
    "TheEdgy",
    "TheHunter"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": true,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const SolBigBrain = {
  pfp: "https://pbs.twimg.com/profile_images/1653077175287914496/qESpHuGx_400x400.jpg",
  twitter: "SOLBigBrain",
  level: 1,
  chimpions: [
    "TheFrozen",
    "TheOathkeeper",
    "TheWithered",
    "TheDoctor"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const SKUX = {
  pfp: "/images/chimpions/ThePtolemaic/ThePtolemaic-badluckzulp.png",
  twitter: "_SKUX_",
  level: 1,
  chimpions: [
    "ThePtolemaic",
    "TheReversed",
    "TheCelestial"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const An0rak7 = {
  pfp: "/images/chimpions/TheFuturist/TheFuturist-_rabbels_.png",
  twitter: "an0rak7",
  level: 1,
  chimpions: [
    "TheFuturist",
    "TheTrained"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const unskilledfather = {
  pfp: "https://www.arweave.net/NRSwbTvbMZIPL0NIrW2P5DqwPDxYqkNAE1aucDaSjrw?ext=jpg",
  twitter: "unskilledfather",
  level: 1,
  chimpions: [
    "TheRebel",
    "TheElated"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Utopia = {
  pfp: "/images/chimpions/TheSinged/TheSinged-zen0m.png",
  twitter: "utopia_artist",
  level: 14,
  chimpions: [
    "TheSinged",
    "TheFirstborn"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const CMC81 = {
  pfp: "/images/chimpions/ThePatrolman/ThePatrolman-_rabbels_.png",
  twitter: "cmc816",
  level: 3,
  chimpions: [
    "ThePatrolman",
    "TheEradicator"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const HeisenThug = {
  pfp: "/images/chimpions/TheGangster/TheGangster-_rabbels_.png",
  twitter: "",
  level: 2,
  chimpions: [
    "TheGangster",
    "TheStreetFighter"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Raves = {
  pfp: "https://pbs.twimg.com/profile_images/1659520035835072516/3QUnbWCw_400x400.jpg",
  twitter: "Ravers",
  level: 1,
  chimpions: [
    "TheMartialArtist",
    "TheDigital"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const sidvicious843 = {
  pfp: "https://nft.matrica.io/nft/8jHZGee6bBYqX51r5rVgpqyFsmBCPn15h7X16y7g7qFw.png",
  twitter: "Sidvicious843",
  level: 7,
  chimpions: [
    "TheTrickster",
    "TheFreelancer"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const palmora = {
  pfp: "/images/chimpions/TheBubbly/TheBubbly-_rabbels_.png",
  twitter: "palmora09",
  level: 1,
  chimpions: [
    "TheBubbly"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Visery = {
  pfp: "/images/chimpions/TheHellion/TheHellion-badluckzulp.png",
  twitter: "VizeryNFTs",
  level: 1,
  chimpions: [
    "TheHellion"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Pwenguin = {
  pfp: "/images/chimpions/TheRancher/TheRancher-_rabbels_.png",
  twitter: "Pwenguin_16",
  level: 1,
  chimpions: [
    "TheRancher"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const rene = {
  pfp: "/images/chimpions/TheStubborn/TheStubborn-badluckzulp.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheStubborn"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Soledge = {
  pfp: "/images/chimpions/TheBlazing/TheBlazing-zen0m.png",
  twitter: "Themultipool",
  level: 1,
  chimpions: [
    "TheBlazing"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": true,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const zachary = {
  pfp: "/images/chimpions/TheMessenger/TheMessenger-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheMessenger"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const murath = {
  pfp: "https://nft.matrica.io/nft/CzbSTMx3CJbp6wHfpQc91uHuRfz3rfmYrQke6aCPFMGT.png",
  twitter: "murathsol",
  level: 1,
  chimpions: [
    "TheVassal"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const dabums = {
  pfp: "/images/chimpions/TheWatchman/TheWatchman-_rabbels_.png",
  twitter: "dabums1",
  level: 2,
  chimpions: [
    "TheWatchman"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Vell = {
  pfp: "https://ipfs.io/ipfs/QmPmbQdAsDccz6GYFtyGdg7CuTa44KkJUN8LdZ6T92Uwhz",
  twitter: "vell_sol",
  level: 1,
  chimpions: [
    "TheTattered"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const bip = {
  pfp: "/images/chimpions/TheJuror/TheJuror-_rabbels_.png",
  twitter: "bipkoyn",
  level: 1,
  chimpions: [
    "TheJuror"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Grooovy = {
  pfp: "https://pbs.twimg.com/profile_images/1561547292431228929/orzVdkma_400x400.jpg",
  twitter: "GroovyNFTs",
  level: 1,
  chimpions: [
    "TheCeremonial"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Simba = {
  pfp: "https://pbs.twimg.com/profile_images/1676904981859893248/YXUIR7lo_400x400.jpg",
  twitter: "simba_sol",
  level: 2,
  chimpions: [
    "TheRitualist"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const futuristic = {
  pfp: "/images/chimpions/TheKnightCommander/TheKnightCommander-_rabbels_.png",
  twitter: "futuristicS0L",
  level: 1,
  chimpions: [
    "TheKnightCommander"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const MrCamel = {
  pfp: "/images/chimpions/TheSocial/TheSocial-_rabbels_.png",
  twitter: "MrCamel__",
  level: 3,
  chimpions: [
    "TheSocial"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Dutch = {
  pfp: "https://pbs.twimg.com/profile_images/1684031699481681921/RlUGKzHv_400x400.jpg",
  twitter: "0xDutch",
  level: 1,
  chimpions: [
    "TheScorched"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Aspen = {
  pfp: "/images/chimpions/TheLover/TheLover-_rabbels_.png",
  twitter: "aspen_ow",
  level: 1,
  chimpions: [
    "TheLover"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Dasein = {
  pfp: "https://nft.matrica.io/nft/5x9dj2ynju9zq5iBPZhvBxbAKgjJBT7dPDs5ABsYb2Kg.png",
  twitter: "daseinillusion",
  level: 12,
  chimpions: [
    "TheStatic"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Marculino = {
  pfp: "https://arweave.net/taaE-YW9nUpy7rnOaBl54c8nJ6tW1jZiIxG-ra4iaXE?ext=png",
  twitter: "marculinopng",
  level: 1,
  chimpions: [
    "TheCultist"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const NickSayWhat = {
  pfp: "https://nft.matrica.io/nft/5bKZmaav5uX8Hs3c2DFs7o198bhpytF35cqUVYz2BTdV.png",
  twitter: "",
  level: 2,
  chimpions: [
    "TheJoyful"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Akaba = {
  pfp: "/images/chimpions/TheHeroic/TheHeroic-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheHeroic"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Katsu = {
  pfp: "https://nft.matrica.io/nft/5GbTChPtHL16oJzrJAjqg29GGTmeFrRJifYzLeUNyvkU.png",
  twitter: "katsudon_sol",
  level: 6,
  chimpions: [
    "TheRocker"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Johners = {
  pfp: "/images/chimpions/TheRoyal/TheRoyal-_rabbels_.png",
  twitter: "j0hners",
  level: 1,
  chimpions: [
    "TheRoyal"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": false
  }
};
const mebbs = {
  pfp: "https://nft.matrica.io/nft/6vgSXedvo4vaJbkkEsHYKmp6t66cuYRQfRSK68JVL2pb.png",
  twitter: "xmebbs",
  level: 1,
  chimpions: [
    "TheSpelunker"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const DMX = {
  pfp: "/images/chimpions/TheBranded/TheBranded-zen0m.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheBranded"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Wald = {
  pfp: "https://www.arweave.net/wlFrAOb0sOLnU9MEZrPPo7s5hjWv0wk3BecR7fM1xWE?ext=jpeg",
  twitter: "YoSoyWald",
  level: 1,
  chimpions: [
    "TheOmniscient"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Rheld = {
  pfp: "/images/chimpions/TheOfficer/TheOfficer-badluckzulp.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheOfficer"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Tellias = {
  pfp: "/images/chimpions/TheProfessional/TheProfessional-badluckzulp.png",
  twitter: "TelNFT",
  level: 2,
  chimpions: [
    "TheProfessional"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const EarlthePearl = {
  pfp: "/images/chimpions/TheRightHand/TheRightHand-_rabbels_.png",
  twitter: "_EARL_the_pEARL",
  level: 4,
  chimpions: [
    "TheRightHand"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Terrora = {
  pfp: "/images/chimpions/TheShogun/TheShogun-badluckzulp.png",
  twitter: "terroraonsol",
  level: 1,
  chimpions: [
    "TheShogun"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Outcast = {
  pfp: "https://nft.matrica.io/nft/9kuEixvzfP4Ei7v5X6wMuf2b3TBwd5g7j4qYQr1Nj7qt.png",
  twitter: "OutkastNFTs",
  level: 1,
  chimpions: [
    "TheIndecisive"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const meddler = {
  pfp: "/images/chimpions/TheConcealed/TheConcealed-_rabbels_.png",
  twitter: "0x_meddler",
  level: 1,
  chimpions: [
    "TheConcealed"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Puggl3 = {
  pfp: "https://pbs.twimg.com/profile_images/1511896770585890819/VDXsVRTf_400x400.jpg",
  twitter: "puggl3",
  level: 2,
  chimpions: [
    "TheAviator"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const HFP = {
  pfp: "https://pbs.twimg.com/profile_images/1654838683646713856/NH4Pkc_b_400x400.jpg",
  twitter: "degenHFP",
  level: 1,
  chimpions: [
    "TheHollow"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Faddy = {
  pfp: "/images/chimpions/TheMercenary/TheMercenary-_rabbels_.png",
  twitter: "faddybaton",
  level: 1,
  chimpions: [
    "TheMercenary"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Jota = {
  pfp: "/images/chimpions/TheFriendly/TheFriendly-smallfroggi.png",
  twitter: "Jotadotsol",
  level: 6,
  chimpions: [
    "TheFriendly"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const heleemelon = {
  pfp: "/images/chimpions/TheUnknowable/TheUnknowable-Brink_Brinker.png",
  twitter: "heleemelon",
  level: 1,
  chimpions: [
    "TheUnknowable"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const iamlaurael = {
  pfp: "https://pbs.twimg.com/profile_images/1625855847619502081/FdTPOTSW_400x400.jpg",
  twitter: "iamlaurael",
  level: 1,
  chimpions: [
    "TheGilded"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Jreff = {
  pfp: "https://www.arweave.net/P3f6FpynxbtyrmPFcaF_2-S95222VQMOLxC6MyzjVFI?ext=png",
  twitter: "MyNamesJreff",
  level: 3,
  chimpions: [
    "TheIllustrator"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": false
  }
};
const konstantina = {
  pfp: "https://arweave.net/oe0bDRlJd0ZCYRD3zy1VakCPng8hWtsxcTJa1tGjuhs",
  twitter: "0xkonstantina",
  level: 3,
  chimpions: [
    "TheEphemeral"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Draco = {
  pfp: "/images/chimpions/TheWartorn/TheWartorn-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheWartorn"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const phant0m = {
  pfp: "https://nft.matrica.io/nft/7y1y5WJxietWfvYfmvZwMWsDu2dFjwe1qr9si4Nuys5p.png",
  twitter: "sad_phant0m",
  level: 3,
  chimpions: [
    "TheWitchDoctor"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const birb = {
  pfp: "https://nft.matrica.io/nft/4FNxKQt3aAeV8bgW5iz6FM8zJPkx42RAkZDVi1HAzTkj.png",
  twitter: "mulletmusketeer",
  level: 14,
  chimpions: [
    "TheOffworlder"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Mamon = {
  pfp: "https://www.arweave.net/1X0f8rLvzpc_jHHXiomY9ARSUD_Hzdb7spB-IZnpz7o?ext=png",
  twitter: "mamonbtc",
  level: 7,
  chimpions: [
    "TheEnforcer"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Alkine = {
  pfp: "https://ipfs.io/ipfs/QmNXGqqJnGuXLsaKbqxWQ3GMdpJWDRifdBxb4tqqZUPe5x",
  twitter: "alkineee",
  level: 6,
  chimpions: [
    "TheOverflowing"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const DEON = {
  pfp: "/images/chimpions/TheAdolescent/TheAdolescent-_rabbels_.png",
  twitter: "0x_deon",
  level: 1,
  chimpions: [
    "TheAdolescent"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const wronguser = {
  pfp: "https://pbs.twimg.com/profile_images/1611364759340720132/Vpn9l_SD_400x400.jpg",
  twitter: "wronguser000",
  level: 5,
  chimpions: [
    "TheDreamer"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const SOLNoob = {
  pfp: "https://pbs.twimg.com/profile_images/1635437803042492416/MYA01QFW_400x400.jpg",
  twitter: "SolanaNoob",
  level: 1,
  chimpions: [
    "TheDormant"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const FakerIsDead = {
  pfp: "https://arweave.net/cs43ijunzx0uiQxZ3lGIENfK5wUoGBoqggjzXKBEP2k?ext=gif",
  twitter: "FakerIsDad",
  level: 1,
  chimpions: [
    "TheBored"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const CryptoDriller = {
  pfp: "https://bafybeifrvg3yvo4uehfgaoryh36dt5nm4blwgz4h3ivjxhpv7xlyd7lyma.ipfs.nftstorage.link/13.png",
  twitter: "CryptoDriller",
  level: 1,
  chimpions: [
    "TheBeholder"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Hyblinxx = {
  pfp: "/images/chimpions/TheMainCharacter/TheMainCharacter-_rabbels_.png",
  twitter: "hyblinxx",
  level: 1,
  chimpions: [
    "TheMainCharacter"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const gl00m = {
  pfp: "https://pbs.twimg.com/profile_images/1626096224330821633/MJtI7tnO_400x400.jpg",
  twitter: "gloom_sol",
  level: 1,
  chimpions: [
    "TheEnvoy"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const SCUM = {
  pfp: "https://pbs.twimg.com/profile_images/1652464345681637376/WJ7-o4JM_400x400.jpg",
  twitter: "SCUMSOL",
  level: 1,
  chimpions: [
    "TheProgrammed"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Polkjia = {
  pfp: "/images/chimpions/TheEnraged/TheEnraged-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheEnraged"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Case = {
  pfp: "/images/chimpions/TheImperial/TheImperial-badluckzulp.png",
  twitter: "case_fud",
  level: 4,
  chimpions: [
    "TheImperial"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const genuinearticles = {
  pfp: "https://www.arweave.net/5JsWCSqgSLP9-tpAypZui6BoC_YkJs5MLc5H_9APZ9Q?ext=jpeg",
  twitter: "genuinearticles",
  level: 2,
  chimpions: [
    "TheWondrous"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const purp = {
  pfp: "/images/chimpions/TheInsomniac/TheInsomniac-badluckzulp.png",
  twitter: "purpgorillaglue",
  level: 1,
  chimpions: [
    "TheInsomniac"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const OneEngineer = {
  pfp: "https://arweave.net/Qxnd0HxBbU2LlTqD84R9JBd_AfosjuDFi9HzZfw-O8c?ext=png",
  twitter: "chart_garden",
  level: 1,
  chimpions: [
    "TheAutomaton"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Gentlemonke = {
  pfp: "/images/chimpions/TheComrade/TheComrade-_rabbels_.png",
  twitter: "TheGentlemonke",
  level: 1,
  chimpions: [
    "TheComrade"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const DreLaSol = {
  pfp: "https://famousfoxes.com/hd/2761.png",
  twitter: "DreLaSOL",
  level: 1,
  chimpions: [
    "TheOtherworldly"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const ExpliciT = {
  pfp: "/images/chimpions/TheSultan/TheSultan-_rabbels_.png",
  twitter: "",
  level: 2,
  chimpions: [
    "TheSultan"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const minne_ape_olis = {
  pfp: "/images/chimpions/ThePensive/ThePensive-_rabbels_.png",
  twitter: "minne_ape_olis",
  level: 5,
  chimpions: [
    "ThePensive"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const huatrabbit = {
  pfp: "https://www.arweave.net/3RIsvstu8iU9SPLVuTDn3mb1l1YsN4OGS5FW_CLrFbo?ext=png",
  twitter: "huatrabbit",
  level: 2,
  chimpions: [
    "TheOneWhoRocksHard"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const PNP = {
  pfp: "/images/chimpions/TheAncestral/TheAncestral-_rabbels_.png",
  twitter: "papernprotein",
  level: 5,
  chimpions: [
    "TheAncestral"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const citineuqua = {
  pfp: "/images/chimpions/TheStudious/TheStudious-badluckzulp.png",
  twitter: "InfinityDeFi",
  level: 1,
  chimpions: [
    "TheStudious"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const J0hanna = {
  pfp: "/images/chimpions/TheOrnamented/TheOrnamented-_rabbels_.png",
  twitter: "WeStillEarly",
  level: 3,
  chimpions: [
    "TheOrnamented"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const hamster = {
  pfp: "/images/chimpions/TheWarlike/TheWarlike-_rabbels_.png",
  twitter: "hamster_labs",
  level: 6,
  chimpions: [
    "TheWarlike"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const dreilord = {
  pfp: "/images/chimpions/TheFirethrower/TheFirethrower-_rabbels_.png",
  twitter: "dreilord_sol",
  level: 1,
  chimpions: [
    "TheFirethrower"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Faint = {
  pfp: "/images/chimpions/TheScientist/TheScientist-badluckzulp.png",
  twitter: "faintdotwav",
  level: 2,
  chimpions: [
    "TheScientist"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const MoonLights = {
  pfp: "/images/chimpions/TheExecutioner/TheExecutioner-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheExecutioner"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Whydee = {
  pfp: "https://pbs.twimg.com/profile_images/1628832458547372037/qM0xKLRa_400x400.jpg",
  twitter: "Why_De2",
  level: 2,
  chimpions: [
    "TheExpressive"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Thesis = {
  pfp: "/images/chimpions/TheComedian/TheComedian-_rabbels_.png",
  twitter: "ThesisInvestor",
  level: 8,
  chimpions: [
    "TheComedian"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Aure64 = {
  pfp: "https://arweave.net/lZbCZA3g_UfsT1IzTDkvodEIbvV0DYrKV9mkWeRbclw?ext=png",
  twitter: "Aure_0405",
  level: 2,
  chimpions: [
    "TheTechnophile"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const WallStreet = {
  pfp: "https://arweave.net/SBiplbGlZk057Ej-cUCQ-0f2siNqZxrvn3NIOMLAJHM?ext=png",
  twitter: "WallStreetCorp",
  level: 1,
  chimpions: [
    "TheChevalier"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Froggie = {
  pfp: "https://www.arweave.net/3HUWhbcjRRnQf879XheOF6UkWfQeZFJKRY4u9MXB6os?ext=png",
  twitter: "smallfroggi",
  level: 1,
  chimpions: [
    "TheAntipaladin"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const cripped = {
  pfp: "https://arweave.net/3rPiUsCf0fVcXCunbufKPuP05vvJVT56GFKMZfT4jI8",
  twitter: "cripped_0",
  level: 1,
  chimpions: [
    "TheStarbound"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Confusername = {
  pfp: "/images/chimpions/TheFractured/TheFractured-_rabbels_.png",
  twitter: "Confusername1",
  level: 1,
  chimpions: [
    "TheFractured"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const RAZR = {
  pfp: "/images/chimpions/TheErroneous/TheErroneous-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheErroneous"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Mundz = {
  pfp: "https://arweave.net/AShwA3x177WQ5TccLBV5W-BYZDrDBYrwMnyXnys_n10?ext=png",
  twitter: "fox_mundz",
  level: 2,
  chimpions: [
    "TheTechnician"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const counter = {
  pfp: "/images/chimpions/TheRegal/TheRegal-_rabbels_.png",
  twitter: "0xcounter",
  level: 5,
  chimpions: [
    "TheRegal"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const oxo = {
  pfp: "/images/chimpions/TheInverted/TheInverted-_rabbels_.png",
  twitter: "oxonomye",
  level: 1,
  chimpions: [
    "TheInverted"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const zeroSol = {
  pfp: "/images/chimpions/TheApologetic/TheApologetic-_rabbels_.png",
  twitter: "zeroatasehir",
  level: 1,
  chimpions: [
    "TheApologetic"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Plexoo = {
  pfp: "https://arweave.net/KIt3wxjr7W5-hLY77-hhhBUOWEogbnV4DKAKo8zgwvg",
  twitter: "Plexoooo",
  level: 1,
  chimpions: [
    "TheChromatic"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Nargar = {
  pfp: "/images/chimpions/TheMischievous/TheMischievous-badluckzulp.png",
  twitter: "Nargar6",
  level: 1,
  chimpions: [
    "TheMischievous"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const xmancxd = {
  pfp: "/images/chimpions/TheCyborg/TheCyborg-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheCyborg"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const MPRTI = {
  pfp: "/images/chimpions/TheCountryman/TheCountryman-_rabbels_.png",
  twitter: "MPRTI",
  level: 1,
  chimpions: [
    "TheCountryman"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Shark = {
  pfp: "https://nft.matrica.io/nft/B9EJtuxPb63FqAdBhUgTL6N7EGFJMpfRvJWHbHpnBPJv.png",
  twitter: "0xShark_",
  level: 1,
  chimpions: [
    "TheExperiment"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const papits = {
  pfp: "/images/chimpions/TheFirestarter/TheFirestarter-badluckzulp.png",
  twitter: "papits_sol",
  level: 1,
  chimpions: [
    "TheFirestarter"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const SirBertoli = {
  pfp: "/images/chimpions/TheGrunt/TheGrunt-badluckzulp.png",
  twitter: "SirBertoli",
  level: 6,
  chimpions: [
    "TheGrunt"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Hatse = {
  pfp: "/images/chimpions/TheWastelander/TheWastelander-zen0m.png",
  twitter: "HatseHatse",
  level: 3,
  chimpions: [
    "TheWastelander"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const minz = {
  pfp: "https://nft.matrica.io/nft/7s3XXscm2QaSthfMeSDCSeyvEmhw4iriuuSX5uW97Usu.png",
  twitter: "minnieZ23",
  level: 1,
  chimpions: [
    "ThePowderMonkey"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Maxbrs = {
  pfp: "https://arweave.net/Mk6dC3IVoz5HA-Hg4-CJzdAd575DgTBvMk98sBAUR9E?ext=png",
  twitter: "MaxBrsNFT",
  level: 9,
  chimpions: [
    "TheOriginal"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Kyufei = {
  pfp: "/images/chimpions/TheHidden/TheHidden-_rabbels_.png",
  twitter: "NFTKid2",
  level: 1,
  chimpions: [
    "TheHidden"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const genwei = {
  pfp: "/images/chimpions/TheFlamescarred/TheFlamescarred-badluckzulp.png",
  twitter: "genweii",
  level: 1,
  chimpions: [
    "TheFlamescarred"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const ArtFanNFT = {
  pfp: "https://arweave.net/bX-bzyXtfUQT2If2OC-ODlexoVXv0ik02Pjyl9R9gg4",
  twitter: "ArtFanNFT",
  level: 2,
  chimpions: [
    "TheAgitator"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Damasta = {
  pfp: "/images/chimpions/TheNightstalker/TheNightstalker-zen0m.png",
  twitter: "Damasta_",
  level: 1,
  chimpions: [
    "TheNightstalker"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Uranium = {
  pfp: "https://pbs.twimg.com/profile_images/1570550023615651847/Z9p-UDK0_400x400.jpg",
  twitter: "uraniumSOL",
  level: 1,
  chimpions: [
    "TheFaded"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Meattyy = {
  pfp: "/images/chimpions/TheGhostHunter/TheGhostHunter-_rabbels_.png",
  twitter: "Meattyyy",
  level: 1,
  chimpions: [
    "TheGhostHunter"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Nepenthe = {
  pfp: "https://nft.matrica.io/nft/3sB186FseuG5Uurq41kUjD7gPpZrxnBUakCiYmg4jAmK.png",
  twitter: "nepenthe_sol",
  level: 1,
  chimpions: [
    "TheArmsman"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Becca = {
  pfp: "https://pbs.twimg.com/profile_images/1447355806970785793/b7tHSo6I_400x400.jpg",
  twitter: "rebeccagund",
  level: 1,
  chimpions: [
    "TheBosun"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const mork = {
  pfp: "/images/chimpions/ThePocketMonkey/ThePocketMonkey-_rabbels_.png",
  twitter: "0xMork",
  level: 1,
  chimpions: [
    "ThePocketMonkey"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Kuse = {
  pfp: "/images/chimpions/TheDrowsy/TheDrowsy-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheDrowsy"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Thomass = {
  pfp: "/images/chimpions/TheTotemic/TheTotemic-_rabbels_.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheTotemic"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Tainaker = {
  pfp: "https://nft.matrica.io/nft/Et2rtRD9pKwzFWdtkMqNFH74DJqVpUkB86aFHHyEmYVC.png",
  twitter: "tainaker",
  level: 1,
  chimpions: [
    "TheDeepdweller"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Zionatlas = {
  pfp: "https://arweave.net/tEcStZqJRq2BAzNknNkQ3UMPjR3fupHBDumk15XW7Vo?ext=png",
  twitter: "zionatlas",
  level: 4,
  chimpions: [
    "TheFaulty"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const DanielB = {
  pfp: "/images/chimpions/TheLeisurely/TheLeisurely-badluckzulp.png",
  twitter: "0xDanielB",
  level: 2,
  chimpions: [
    "TheLeisurely"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Ninozimo = {
  pfp: "https://arweave.net/dHB-KZLFBqKST0sus5C3IKFrn-35MU6-EdCG8K9WdZg?ext=png",
  twitter: "ninozimo",
  level: 1,
  chimpions: [
    "TheBinary"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const CryptoSazerac = {
  pfp: "/images/chimpions/TheEnameled/TheEnameled-_rabbels_.png",
  twitter: "Cryptosazerac81",
  level: 1,
  chimpions: [
    "TheEnameled"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const SomdotSol = {
  pfp: "https://arweave.net/Wn5OWRCLkv5CbhAec9Q9f764LarFUaN77wShW-Sm3hU",
  twitter: "SomdotSol",
  level: 1,
  chimpions: [
    "TheAngsty"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const RGB = {
  pfp: "https://pbs.twimg.com/profile_images/1576568371453231104/ULguoO6b_400x400.jpg",
  twitter: "rgb0x00",
  level: 1,
  chimpions: [
    "TheAmalgamation"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Nights = {
  pfp: "https://nft.matrica.io/nft/Gw5hjhuLx8UfSXu6w9FxnAzX6o7aRbC5QCg5EJiJ5WNA.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheArisen"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const b0k = {
  pfp: "https://nft.matrica.io/nft/HFDMEVrh8PP7xmw36t2jJ59qEaJAdSLkf2SpAsWA4wYE.png",
  twitter: "",
  level: 1,
  chimpions: [
    "TheChief"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const shades = {
  pfp: "https://nft.matrica.io/nft/RytCw4Wbo1htcif15ZkvgNgY6cUz8o7e2yEHGgjpibX.png",
  twitter: "shades_sol",
  level: 5,
  chimpions: [
    "TheDeckhand"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const thirty = {
  pfp: "https://pbs.twimg.com/media/FDeNIrxUUAQStXz?format=png&name=small",
  twitter: "thirtyNFT",
  level: 1,
  chimpions: [
    "TheYeoman"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const LFK = {
  pfp: "/images/chimpions/TheAnalyst/TheAnalyst-badluckzulp.png",
  twitter: "LFKOnChain",
  level: 1,
  chimpions: [
    "TheAnalyst"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Brink = {
  pfp: "https://www.arweave.net/rINOXYzKE1mjO9pO_L-ExzYnMqzGUSwsU7Cjtb-B0Gw?ext=PNG",
  twitter: "Brink_Brinker",
  level: 7,
  chimpions: [
    "TheNeuromancer"
  ],
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const tuxr = {
  pfp: "https://nft.matrica.io/nft/BQhwLWns9aDKW8P6sVyP8wpRYWg41CodABYFioY9xbZ.png",
  twitter: "tuxr228",
  level: 7,
  chimpions: [
    "TheBionic"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const zuzuzuzuzuzuzu = {
  pfp: "/images/chimpions/ThePainter/ThePainter-_rabbels_.png",
  twitter: "Zuzu_ww",
  level: 1,
  chimpions: [
    "ThePainter"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Sterrling = {
  pfp: "https://www.arweave.net/EdC2utS2ULGvrNP6ibriH8TKn5kevZQ4CmMxSuusImg?ext=jpeg",
  twitter: "MSterrling",
  level: 1,
  chimpions: [
    "TheCaptain"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Lex = {
  pfp: "/images/chimpions/TheRapscallion/TheRapscallion-_rabbels_.png",
  twitter: "Alex_R_J_Swann",
  level: 2,
  chimpions: [
    "TheRapscallion"
  ],
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const holders = {
  ThunderBear,
  Doudou,
  SolBigBrain,
  SKUX,
  An0rak7,
  unskilledfather,
  Utopia,
  CMC81,
  HeisenThug,
  Raves,
  sidvicious843,
  palmora,
  Visery,
  Pwenguin,
  rene,
  Soledge,
  zachary,
  "Gwei Stefani": {
    pfp: "/images/chimpions/TheGreeter/TheGreeter-_rabbels_.png",
    twitter: "gweistefani_",
    level: 1,
    chimpions: [
      "TheGreeter"
    ],
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": true,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  murath,
  dabums,
  Vell,
  bip,
  Grooovy,
  Simba,
  futuristic,
  MrCamel,
  Dutch,
  Aspen,
  Dasein,
  Marculino,
  NickSayWhat,
  Akaba,
  Katsu,
  Johners,
  mebbs,
  "Punk Monke": {
    pfp: "/images/chimpions/ThePunk/ThePunk-_rabbels_.png",
    twitter: "Punk_Monke",
    level: 10,
    chimpions: [
      "ThePunk"
    ],
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": true,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  DMX,
  Wald,
  Rheld,
  Tellias,
  EarlthePearl,
  Terrora,
  Outcast,
  meddler,
  Puggl3,
  "Eddie Rebel": {
    pfp: "/images/chimpions/TheHip/TheHip-badluckzulp.png",
    twitter: "0xEddieRebel",
    level: 1,
    chimpions: [
      "TheHip"
    ],
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  "Ken Goh": {
    pfp: "https://nft.matrica.io/nft/FTikYeiaghi9ds2NUFv499zZyKfHPbNs7rFn7u2TWxe9.png",
    twitter: "Ken_Goh_",
    level: 8,
    chimpions: [
      "TheHighPriest"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": true,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  HFP,
  Faddy,
  Jota,
  heleemelon,
  iamlaurael,
  Jreff,
  konstantina,
  Draco,
  phant0m,
  birb,
  Mamon,
  Alkine,
  "Jelly beans": {
    pfp: "/images/chimpions/TheEncased/TheEncased-_rabbels_.png",
    twitter: "Jeshness",
    level: 1,
    chimpions: [
      "TheEncased"
    ],
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  DEON,
  wronguser,
  SOLNoob,
  FakerIsDead,
  CryptoDriller,
  Hyblinxx,
  gl00m,
  "trucker.sol": {
    pfp: "/images/chimpions/TheAttendant/TheAttendant-badluckzulp.png",
    twitter: "",
    level: 2,
    chimpions: [
      "TheAttendant"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": true,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  SCUM,
  Polkjia,
  Case,
  genuinearticles,
  "R!ck": {
    pfp: "/images/chimpions/ThePreeminent/ThePreeminent-badluckzulp.png",
    twitter: "",
    level: 5,
    chimpions: [
      "ThePreeminent"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": true,
      "An Unlikely Friendship": true
    }
  },
  purp,
  OneEngineer,
  Gentlemonke,
  DreLaSol,
  ExpliciT,
  minne_ape_olis,
  huatrabbit,
  PNP,
  citineuqua,
  J0hanna,
  hamster,
  dreilord,
  Faint,
  MoonLights,
  Whydee,
  Thesis,
  Aure64,
  WallStreet,
  Froggie,
  "Tom B.": {
    pfp: "/images/chimpions/TheMasked/TheMasked-_rabbels_.png",
    twitter: "tomboutin_",
    level: 1,
    chimpions: [
      "TheMasked"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  cripped,
  Confusername,
  RAZR,
  Mundz,
  counter,
  oxo,
  "Mo Betta": {
    pfp: "/images/chimpions/TheSpectral/TheSpectral-meltytanti.png",
    twitter: "",
    level: 1,
    chimpions: [
      "TheSpectral"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  zeroSol,
  Plexoo,
  Nargar,
  xmancxd,
  MPRTI,
  Shark,
  papits,
  SirBertoli,
  Hatse,
  minz,
  Maxbrs,
  "Odd Skull": {
    pfp: "https://arweave.net/g6XZywzIZgfwzt2yO-ngV6Y5OyoH1VYNWZQU-DVHHs4?ext=gif",
    twitter: "OddSkull_",
    level: 1,
    chimpions: [
      "TheReincarnated"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  Kyufei,
  genwei,
  ArtFanNFT,
  Damasta,
  "0x4P3": {
    pfp: "/images/chimpions/TheDemon/TheDemon-_rabbels_.png",
    twitter: "cryptoretard69",
    level: 3,
    chimpions: [
      "TheDemon"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  Uranium,
  Meattyy,
  Nepenthe,
  Becca,
  mork,
  Kuse,
  Thomass,
  Tainaker,
  Zionatlas,
  DanielB,
  Ninozimo,
  "endy.sol": {
    pfp: "/images/chimpions/TheJockey/TheJockey-_rabbels_.png",
    twitter: "",
    level: 1,
    chimpions: [
      "TheJockey"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": true,
      "An Unlikely Friendship": true
    }
  },
  CryptoSazerac,
  SomdotSol,
  RGB,
  Nights,
  b0k,
  shades,
  thirty,
  LFK,
  Brink,
  tuxr,
  zuzuzuzuzuzuzu,
  Sterrling,
  "0xnasa": {
    pfp: "/images/chimpions/ThePainted/ThePainted-_rabbels_.png",
    twitter: "",
    level: 1,
    chimpions: [
      "ThePainted"
    ],
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  Lex
};
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
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <section><div class="introduction svelte-x2a8cv" data-svelte-h="svelte-hh59t7"><h1 class="heading">Compendium</h1> <p class="subsectionParagraph" style="margin-bottom: 0">You&#39;ve enter the hallowed halls of Chimpianity. Here before you lies the collective history of Chimpions past, present, and future. Tread with care.</p> <p class="subsectionParagraph">You can submit lore for any chimp by filling <a href="https://forms.gle/SZ38C4jKhvY6vP366" style="color: inherit" target="blank_">this form.</a></p></div> <div class="Cards svelte-x2a8cv">${validate_component(Cards, "Cards").$$render($$result, {}, {}, {})}</div> ${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Compendium, "Compendium").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
