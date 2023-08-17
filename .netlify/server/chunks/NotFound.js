import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { N as Navigation } from "./Navigation.js";
const NotFound_svelte_svelte_type_style_lang = "";
const css = {
  code: ".full-page.svelte-1g1xrlf.svelte-1g1xrlf{position:fixed;height:100vh;width:100vw;overflow:hidden;display:flex;justify-content:center;align-items:center}.full-page.svelte-1g1xrlf img.svelte-1g1xrlf{width:20%;margin:2rem}.full-page.svelte-1g1xrlf h1.svelte-1g1xrlf{font-size:2rem;margin-right:2rem}@media(max-width: 800px){.full-page.svelte-1g1xrlf h1.svelte-1g1xrlf{font-size:1.5rem}}@media(max-width: 500px){.full-page.svelte-1g1xrlf img.svelte-1g1xrlf{margin-right:1rem}.full-page.svelte-1g1xrlf h1.svelte-1g1xrlf{font-size:1rem;margin:1rem}}",
  map: null
};
const NotFound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <div class="full-page svelte-1g1xrlf" data-svelte-h="svelte-1i36cw7"><img src="/images/chimpions/ThePerplexed/ThePerplexed-_rabbels_.png" alt="Surprised Chimp" class="svelte-1g1xrlf"> <h1 class="svelte-1g1xrlf">The page you requested does not exist...</h1> </div>`;
});
export {
  NotFound as N
};
