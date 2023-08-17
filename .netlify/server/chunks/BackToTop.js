import { c as create_ssr_component } from "./ssr.js";
import "./Navigation.js";
const BackToTop_svelte_svelte_type_style_lang = "";
const css = {
  code: '.button-zone.svelte-apu2hu.svelte-apu2hu{position:fixed;bottom:1rem;right:1rem;transition:all 0.3s ease}.back-to-top.svelte-apu2hu.svelte-apu2hu{position:relative;padding:0.5rem 0.75rem;cursor:pointer;color:white;background-color:black;border-radius:0.25rem;border:1px white solid;opacity:1;transition:opacity 0.3s ease}.back-to-top.svelte-apu2hu.svelte-apu2hu:after{position:absolute;content:"";background:#fff;width:104%;height:112%;left:-2%;top:-6%;border-radius:0.25rem;transform:scaleY(0);z-index:-1;transition:transform 0.2s ease;transform-origin:top}.button-zone.svelte-apu2hu .back-to-top.svelte-apu2hu:hover:after{transform:scaleY(1);transform-origin:bottom}.hidden.svelte-apu2hu.svelte-apu2hu{z-index:-1;opacity:0;transition:all 0.3s ease}',
  map: null
};
const BackToTop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showOnPx = 500 } = $$props;
  if ($$props.showOnPx === void 0 && $$bindings.showOnPx && showOnPx !== void 0)
    $$bindings.showOnPx(showOnPx);
  $$result.css.add(css);
  return `  <div class="${["button-zone svelte-apu2hu", "hidden"].join(" ").trim()}"><div class="back-to-top svelte-apu2hu" role="presentation" data-svelte-h="svelte-19apwqj">Back to top</div> </div>`;
});
export {
  BackToTop as B
};
