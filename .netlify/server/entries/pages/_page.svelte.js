import { c as create_ssr_component, a as subscribe, v as validate_component, b as add_attribute } from "../../chunks/ssr.js";
import { s as spring } from "../../chunks/spring.js";
import { N as Navigation } from "../../chunks/Navigation.js";
const Landing_svelte_svelte_type_style_lang = "";
const css = {
  code: `:root{--button-z-index:10;--lore-opacity:0;--lore-z-index:-1;--mx:50%;--my:50%;--o:0;--btn-opacity:0.4;--lighting-size:100px}#background-image.svelte-1lq9xen.svelte-1lq9xen{background:no-repeat url("/images/RGB_Commissioned_Banner-resized.png");background-size:cover;background-position:center;background-color:#1F1531;min-height:100vh;transition:background-image 0.2s ease-in-out}.glare.svelte-1lq9xen.svelte-1lq9xen{height:100vh;width:100vw;background:radial-gradient(\r
			farthest-corner circle at var(--mx) var(--my),\r
			rgba(255, 255, 255, 0.5) 2.5%,\r
			rgba(255, 255, 255, 0.15) 10%,\r
			rgba(0, 0, 0, 0.5) 100%\r
		);mix-blend-mode:overlay;opacity:var(--o)}.openLore-btn.svelte-1lq9xen.svelte-1lq9xen{position:absolute;top:48%;left:50%;transform:translate(-50%, -50%);z-index:var(--button-z-index);height:65%;width:150px;background-color:transparent;border:0px;text-align:center;border-radius:50%;cursor:pointer;transition:all 0.3s ease;animation:svelte-1lq9xen-crystal-glow 1s linear infinite alternate}.crystalPulse.svelte-1lq9xen.svelte-1lq9xen{position:absolute;top:48%;left:50%;transform:translate(-50%, -50%);z-index:var(--button-z-index);height:65%;width:150px;border:0px;background-color:transparent;text-align:center;border-radius:50%;animation:svelte-1lq9xen-crystal-glow 4s ease-in-out infinite alternate}.landing-lore.svelte-1lq9xen.svelte-1lq9xen{opacity:var(--lore-opacity);transition:opacity 1s ease;color:var(--whiter-purple);background-color:rgb(20 20 20 / 0.6);border-radius:2%;font-family:'Alagard';letter-spacing:0.1em;text-align:justify;margin-left:auto;margin-right:auto;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);width:60%;text-shadow:1px 1px 0 #222;z-index:var(--lore-z-index)}.landing-title.svelte-1lq9xen.svelte-1lq9xen{display:flex;flex-direction:row;justify-content:space-between;column-gap:2rem;font-size:1.875rem;line-height:2.25rem;padding:1em;text-align:left;color:var(--white-purple)}.closeLore-btn.svelte-1lq9xen.svelte-1lq9xen{background-color:rgb(0 0 0 / 0.8);width:25px;height:25px;border-radius:0.25rem;background:no-repeat url("/images/logos/white-cross.png");background-size:contain;cursor:pointer}.landing-lore.svelte-1lq9xen p.svelte-1lq9xen{line-height:2rem;opacity:1;padding:1em;margin:0px}.toCompendium.svelte-1lq9xen.svelte-1lq9xen{position:absolute;display:flex;justify-content:center;bottom:1rem;right:1rem;padding:0.5rem 1rem;border:2px white solid;border-radius:0.25rem;background-color:rgb(0 0 0 / 0.6);box-shadow:0px 0px 4px transparent;font-size:0.75rem;color:white;text-align:left;animation:svelte-1lq9xen-glowButton 1s linear infinite alternate;transition:all 0.3s ease}.toCompendium.svelte-1lq9xen.svelte-1lq9xen:hover{animation-play-state:paused;background-color:rgb(0 0 0 / 1);box-shadow:0px 0px 4px white}.arrow-right.svelte-1lq9xen.svelte-1lq9xen{width:20px;height:20px;margin-left:0.5rem;content:url("/images/arrow-right-white-center.png")}.theChimpionsLoading.svelte-1lq9xen.svelte-1lq9xen{display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;width:100%;height:100%;overflow-x:hidden;overflow-y:hidden;background-color:black;opacity:1;z-index:1000;animation:svelte-1lq9xen-opacity0 3s ease-in 5.5s forwards}.ChimpionGIF.svelte-1lq9xen.svelte-1lq9xen{width:100%;display:flex;justify-content:center;align-items:center;animation:svelte-1lq9xen-opacity0-zIndex0 0.2s ease 5s forwards\r
    }.ChimpionGIF.svelte-1lq9xen img.svelte-1lq9xen{width:50%}@keyframes svelte-1lq9xen-glowButton{from{border:2px rgb(255 255 255 / 0.5) solid }to{border:2px rgb(255 255 255 / 1) solid }}@keyframes svelte-1lq9xen-crystal-glow{from{background-color:rgb(255 255 255 / 0);box-shadow:0px 0px var(--lighting-size) rgb( 255 255 255 / 0)}to{background-color:rgb(255 255 255 / var(--btn-opacity));box-shadow:0px 0px var(--lighting-size) rgb(255 255 255 / 1)}}@keyframes svelte-1lq9xen-opacity0{from{opacity:1}to{opacity:0;z-index:0}}@keyframes svelte-1lq9xen-opacity0-zIndex0{from{opacity:1}to{opacity:0;z-index:0}}@media(max-width: 768px){.ChimpionGIF.svelte-1lq9xen img.svelte-1lq9xen{width:80%}.landing-lore.svelte-1lq9xen.svelte-1lq9xen{width:80%}.landing-title.svelte-1lq9xen.svelte-1lq9xen{font-size:1.5rem;line-height:1.75rem}.landing-lore.svelte-1lq9xen p.svelte-1lq9xen{font-size:1rem;line-height:1.5rem;opacity:100%;padding:1em;margin:0px}}@media(max-width: 768px){.landing-lore.svelte-1lq9xen.svelte-1lq9xen{width:80%}.landing-title.svelte-1lq9xen.svelte-1lq9xen{font-size:1.5rem;line-height:1.75rem}.landing-lore.svelte-1lq9xen p.svelte-1lq9xen{font-size:1rem;line-height:1.5rem;opacity:100%;padding:1em;margin:0px}}@media(max-width: 500px){.landing-lore.svelte-1lq9xen.svelte-1lq9xen{width:80%}.landing-title.svelte-1lq9xen.svelte-1lq9xen{font-size:1.25rem;line-height:1.25rem}.landing-lore.svelte-1lq9xen p.svelte-1lq9xen{font-size:1rem;line-height:1.5rem;opacity:100%;padding:1em;margin:0px}}`,
  map: null
};
const Landing = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let styles;
  let $springGlare, $$unsubscribe_springGlare;
  let loreOpacity = 0;
  let loreZIndex = -1;
  let buttonZIndex = 10;
  let springGlare = spring({ x: 50, y: 50, o: 0 });
  $$unsubscribe_springGlare = subscribe(springGlare, (value) => $springGlare = value);
  $$result.css.add(css);
  styles = `
            --button-z-index: ${buttonZIndex};
            --lore-opacity: ${loreOpacity};
            --lore-z-index: ${loreZIndex};
            --mx: ${$springGlare.x}%;
            --my: ${$springGlare.y}%;
            --o: ${$springGlare.o};
        `;
  $$unsubscribe_springGlare();
  return ` <section id="LandingPage">${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <div class="${["svelte-1lq9xen", ""].join(" ").trim()}"></div> <button class="openLore-btn svelte-1lq9xen"${add_attribute("style", styles, 0)} aria-label="Open the lore." tabindex="0"></button> <div id="background-image" class="svelte-1lq9xen"><div class="glare svelte-1lq9xen"${add_attribute("style", styles, 0)}></div></div> <div class="landing-lore svelte-1lq9xen"${add_attribute("style", styles, 0)}><div class="landing-title svelte-1lq9xen">There used to be thousands of us...
            <div class="closeLore"><button class="closeLore-btn svelte-1lq9xen"${add_attribute("style", styles, 0)} aria-label="Close the lore." tabindex="0"></button></div></div> <p class="svelte-1lq9xen" data-svelte-h="svelte-n9xbrm">Our packs used to roam this planet&#39;s primordial forests. Slinging
            from branch to branch, peering out across the treetops. It was a
            veritable paradise, and we were its kings and queens.</p> <p class="svelte-1lq9xen" data-svelte-h="svelte-57aam4">Or so we thought...</p> <p class="svelte-1lq9xen" data-svelte-h="svelte-1hi2voj">They appeared as if by magic. From across the vast oceans, they came
            bearing claw and fang. The Triumvirate of Chimpions, acted swiftly
            and decisively. Each tribe put forth their strongest of body and
            keenest of mind.</p> <p class="svelte-1lq9xen" data-svelte-h="svelte-1qn6gc8">Together we stand.</p> <a href="./compendium"><div class="toCompendium svelte-1lq9xen">${`<span style="display: flex; align-items: center" data-svelte-h="svelte-f4svn0">Next</span>`} <span style="display: flex; align-items: center" class="arrow-right svelte-1lq9xen" data-svelte-h="svelte-jimzih">Arrowright</span></div></a></div> <div class="theChimpionsLoading svelte-1lq9xen" data-svelte-h="svelte-1qd5rcy"><div class="ChimpionGIF svelte-1lq9xen"><img src="/images/logos/TheChimpionsLanding.gif" alt="The Chimpions" class="svelte-1lq9xen"></div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Landing, "Landing").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
