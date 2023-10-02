import { c as create_ssr_component, a as subscribe, b as add_attribute, d as escape, e as each, n as null_to_empty } from "./ssr.js";
import { s as spring } from "./spring.js";
import { w as writable, r as readable } from "./index.js";
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
const css = {
  code: ':root{--s:1;--z:1;--rx:0deg;--ry:0deg;--bd-color:#ffffff}.card.svelte-1f15zaj.svelte-1f15zaj{height:394px;width:302px;margin-bottom:2vh;--radius:0.75rem;border-radius:var(--radius);z-index:var(--z);transform:translate3d(0, 0, 0.1px);-webkit-transform:translate3d(0, 0, 0.1px);will-change:transform, visibility;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.card.svelte-1f15zaj.svelte-1f15zaj{transform:translateY(20px);-webkit-transform:translateY(20px);opacity:0;transition:opacity 0.5s ease, transform 0.5s ease-out}.dynamic__card.svelte-1f15zaj.svelte-1f15zaj{height:394px;width:302px}.card.active.svelte-1f15zaj.svelte-1f15zaj{transform:translateY(0px);-webkit-transform:translateY(0px);opacity:1}.card__translater.svelte-1f15zaj.svelte-1f15zaj,.card__rotator.svelte-1f15zaj.svelte-1f15zaj{display:grid;perspective:600px;transform-origin:center;-webkit-transform-origin:center;will-change:transform}.card__translater.svelte-1f15zaj.svelte-1f15zaj{width:auto;position:relative;transform:scale(var(--s));-webkit-transform:scale(var(--s));image-rendering:pixelated;display:flex;flex-direction:row;flex-flow:row nowrap}.card__rotator.svelte-1f15zaj.svelte-1f15zaj{transform:rotateY(var(--rx)) rotateX(var(--ry));transform-style:preserve-3d;-webkit-transform:rotateY(var(--rx)) rotateX(var(--ry));-webkit-transform-style:preserve-3d;box-shadow:0px 10px 20px -5px black;border-radius:var(--radius);outline:none;transition:box-shadow 0.4s ease, outline 0.2s ease}button.card__rotator.svelte-1f15zaj.svelte-1f15zaj{appearance:none;-webkit-appearance:none;border:none;background:top;padding:0;box-shadow:0px 0px 20px var(--bd-color)}.card__rotator.svelte-1f15zaj *{width:100%;display:grid;grid-area:1/1;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.card__back.svelte-1f15zaj.svelte-1f15zaj{border-radius:var(--radius);transform:rotateY(180deg) translateZ(1px);-webkit-transform:rotateY(180deg) translateZ(1px);backface-visibility:hidden}.rotate.svelte-1f15zaj .card__back.svelte-1f15zaj{transform:rotateY(0deg) translateZ(1px);-webkit-transform:rotateY(0deg) translateZ(1px);backface-visibility:hidden}.card__front.svelte-1f15zaj.svelte-1f15zaj,.card__front.svelte-1f15zaj .svelte-1f15zaj{backface-visibility:hidden}.card__front.svelte-1f15zaj.svelte-1f15zaj{border-radius:var(--radius);display:flex;flex-direction:column;justify-content:center;align-items:center;background:no-repeat url("/images/chimp-front-card-v2.png");background-size:cover;opacity:1;text-shadow:1px 2px 5px black}.card__back.svelte-1f15zaj.svelte-1f15zaj{background:no-repeat url("/images/chimp-back-card-v2.png");background-size:cover;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;text-align:center;height:100%;width:100%}.loading.svelte-1f15zaj .card__front.svelte-1f15zaj{opacity:0}.loading.svelte-1f15zaj .card__back.svelte-1f15zaj{transform:rotateY(0deg);-webkit-transform:rotateY(0deg)}.chimpion__name.svelte-1f15zaj.svelte-1f15zaj{position:absolute;top:19px;left:25px;text-align:left;font-style:italic;font-size:1.5rem;color:white;text-shadow:1px 2px 5px black;opacity:1}.description__card.svelte-1f15zaj.svelte-1f15zaj{position:absolute;top:288px;text-align:left;width:240px;padding:8px;color:white;font-style:italic;line-height:1.25rem;font-size:1rem;display:flex;flex-direction:column}.description__card.svelte-1f15zaj .holder.svelte-1f15zaj{display:flex}.card.svelte-1f15zaj a.svelte-1f15zaj{color:inherit;width:fit-content}.lore.svelte-1f15zaj.svelte-1f15zaj{position:absolute;width:100%;padding:2rem;font-size:1rem;font-style:italic;line-height:1.25rem}.card__rotator.svelte-1f15zaj .image-container.svelte-1f15zaj{position:absolute;top:50px;height:238px;width:284px;display:flex}.card__rotator.svelte-1f15zaj .image.svelte-1f15zaj{height:238px;width:238px;align-items:center}.control-dots.svelte-1f15zaj.svelte-1f15zaj{width:100%;margin:0px;padding:0;position:absolute;bottom:0;display:flex;justify-content:center}.dot.svelte-1f15zaj.svelte-1f15zaj{opacity:.3;width:8px;height:8px;background:#fff;border-radius:50%;margin:5px;transition:opacity .2s ease;display:inline-block;box-shadow:1px 1px 2px rgba(0,0,0,.9)}.dot.selected.svelte-1f15zaj.svelte-1f15zaj{opacity:1}.control-arrow-prev.svelte-1f15zaj.svelte-1f15zaj{padding:5px;background:0 0;color:#fff;opacity:.4;text-align:left;cursor:pointer;width:22px;align-items:center;justify-content:center;border:0;transition:all .3s ease}.control-arrow-next.svelte-1f15zaj.svelte-1f15zaj{padding:5px;background:0 0;color:#fff;opacity:.4;text-align:right;cursor:pointer;width:22px;align-items:center;justify-content:center;border:0;transition:all .3s ease}.control-arrow-prev.svelte-1f15zaj.svelte-1f15zaj:hover{opacity:1}.control-arrow-next.svelte-1f15zaj.svelte-1f15zaj:hover{opacity:1}.control-arrow-prev.svelte-1f15zaj.svelte-1f15zaj:before{content:"";border-top:10px solid transparent;border-right:10px solid #fff;border-bottom:10px solid transparent;margin:0 5px;display:inline-block}.control-arrow-next.svelte-1f15zaj.svelte-1f15zaj:before{content:"";border-top:10px solid transparent;border-left:10px solid #fff;border-bottom:10px solid transparent;margin:0 5px;display:inline-block}',
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
  $$result.css.add(css);
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
    "card svelte-1f15zaj",
    (active ? "active" : "") + "  loading"
  ].join(" ").trim()}"${add_attribute("style", styles, 0)}${add_attribute("this", thisCard, 0)}><div class="card__translater svelte-1f15zaj"><button class="card__rotator svelte-1f15zaj"${add_attribute("id", index.toString(), 0)} aria-label="${"Expand the Card of " + escape(name, true) + "."}" tabindex="0"${add_attribute("this", rotator, 0)}><div class="dynamic__card svelte-1f15zaj"><div><div class="card__front svelte-1f15zaj"${add_attribute("style", getFrontCardBg, 0)}>${name.length > 21 ? `<div class="chimpion__name svelte-1f15zaj" style="font-size: 0.875rem; top:26px">${escape(name)}</div>` : `${name.length > 15 ? `<div class="chimpion__name svelte-1f15zaj" style="font-size:1.25rem; top:22px">${escape(name)}</div>` : `<div class="chimpion__name svelte-1f15zaj">${escape(name)}</div>`}`} <div class="image-container svelte-1f15zaj"><button type="button" tabindex="0" aria-label="previous slide / item" class="control-arrow-prev svelte-1f15zaj"${add_attribute("this", previous, 0)}></button> <div class="image svelte-1f15zaj">${displayed_image.slice(-3) == "mp4" || displayed_image.slice(-3) == "mov" ? ` <video autoplay width="400" style="image-rendering: auto" class="svelte-1f15zaj"${add_attribute("this", videoPlayer, 0)}><source${add_attribute("src", displayed_image, 0)} type="video/mp4" class="svelte-1f15zaj"></video>` : `${currentIndex <= 1 ? `<img${add_attribute("src", displayed_image, 0)} style="image-rendering: pixelated" loading="lazy" alt="${"Art " + escape(currentIndex + 1, true) + " of " + escape(name, true)}" class="svelte-1f15zaj">` : `<img${add_attribute("src", displayed_image, 0)} style="image-rendering: auto" loading="lazy" alt="${"Art " + escape(currentIndex + 1, true) + " of " + escape(name, true)}" class="svelte-1f15zaj">`}`} <ul class="control-dots svelte-1f15zaj">${each(images, (image, i) => {
    return `<li class="${escape(null_to_empty(i === currentIndex ? "dot selected" : "dot"), true) + " svelte-1f15zaj"}"${add_attribute("value", i, 0)} aria-label="${"slide item " + escape(i + 1, true)}"></li>`;
  })}</ul></div> <button type="button" tabindex="0" aria-label="next slide / item" class="control-arrow-next svelte-1f15zaj"${add_attribute("this", next, 0)}></button></div> <div class="description__card svelte-1f15zaj"><span class="svelte-1f15zaj">Tribe: ${escape(tribe.split(/(?=[A-Z])/).join(" "))}</span> <span class="svelte-1f15zaj">Type: ${escape(type)}</span> ${holder_name != "" ? `<span class="holder svelte-1f15zaj">Holder: <a href="${"/holders/" + escape(holder_name, true)}" class="svelte-1f15zaj">${escape(holder_name)}</a></span>` : `<span class="svelte-1f15zaj" data-svelte-h="svelte-ikipug">Holder: Unknown</span>`} <span class="svelte-1f15zaj">Artist: ${escape(artist)}</span></div></div></div> <div class="card__back svelte-1f15zaj"><div class="lore svelte-1f15zaj">${lore != "" ? `<p><!-- HTML_TAG_START -->${loreToDisplay}<!-- HTML_TAG_END --></p>` : `No lore for this chimpion yet...`}</div></div></div></button></div> </div>`;
});
export {
  Card as C
};
