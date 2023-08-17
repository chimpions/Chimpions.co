import { c as create_ssr_component, e as escape, b as add_attribute, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import { B as BackToTop } from "../../../chunks/BackToTop.js";
const HolderBox_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".holder-box.svelte-grv6on{margin:20px;height:70px;border:1px solid var(--purple);border-radius:0.25rem;background-color:var(--dark-purple);transition:all 0.2s ease}.holder-box.svelte-grv6on:hover{border:1px solid var(--white-purple);background-color:var(--purple)}.align-items.svelte-grv6on{display:flex;align-items:center}.pfp.svelte-grv6on{height:50px;width:50px;border-radius:50%;margin:10px}.name.svelte-grv6on{margin-right:10px;color:var(--whiter-purple)}a.svelte-grv6on{color:var(--whiter-purple);text-decoration:none}@media(max-width: 500px){.holder-box.svelte-grv6on{margin:10px;height:50px;font-size:0.75rem}.pfp.svelte-grv6on{height:40px;width:40px;margin:5px}.name.svelte-grv6on{margin-right:5px}}",
  map: null
};
const Holder_box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pfp;
  let twitter;
  let { name = "" } = $$props;
  let { holder_data = {} } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.holder_data === void 0 && $$bindings.holder_data && holder_data !== void 0)
    $$bindings.holder_data(holder_data);
  $$result.css.add(css$1);
  pfp = holder_data["pfp"];
  twitter = holder_data["twitter"];
  return ` <div class="holder-box svelte-grv6on">${twitter != "" ? `<a class="align-items svelte-grv6on" href="${"https://twitter.com/" + escape(twitter, true)}" target="_blank" rel="noreferrer"><img class="pfp svelte-grv6on"${add_attribute("src", pfp, 0)} alt="${"Profile picture of " + escape(name, true)}"> <span class="name svelte-grv6on">${each(name.split(" "), (namepart, i) => {
    return `${i < name.split(" ").length - 1 ? `${escape(namepart)} ` : `${escape(namepart)}`}`;
  })}</span></a>` : `<div class="align-items svelte-grv6on"><img class="pfp svelte-grv6on"${add_attribute("src", pfp, 0)} alt="${"Profile picture of " + escape(name, true)}"> <span class="name svelte-grv6on">${each(name.split(" "), (namepart, i) => {
    return `${i < name.split(" ").length - 1 ? `${escape(namepart)} ` : `${escape(namepart)}`}`;
  })}</span></div>`} </div>`;
});
const Holders_svelte_svelte_type_style_lang = "";
const css = {
  code: "#the-holders.svelte-60ja5r.svelte-60ja5r{padding-top:6rem;margin-bottom:6rem}.introduction.svelte-60ja5r.svelte-60ja5r{margin:auto 10%;font-size:large;font-weight:normal;line-height:1.5em}.introduction.svelte-60ja5r h1.svelte-60ja5r{font-weight:normal;color:#fff}.introduction.svelte-60ja5r p.svelte-60ja5r{opacity:0.8}.holders-tab.svelte-60ja5r.svelte-60ja5r{width:80%;margin:2rem auto}.holderLine.svelte-60ja5r.svelte-60ja5r{display:flex;justify-content:center}",
  map: null
};
const Holders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let holderLines = [];
  $$result.css.add(css);
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}  <section id="the-holders" class="svelte-60ja5r"><div class="introduction svelte-60ja5r" data-svelte-h="svelte-fodkcp"><h1 class="heading svelte-60ja5r">The Holders</h1> <p class="svelte-60ja5r">The holders of this exceptional collection stand as guardians of history, artistry, and passion converging within its carefully curated confines.</p></div> <div class="holders-tab svelte-60ja5r">${each(holderLines, (holderLine) => {
    return `<div class="holderLine svelte-60ja5r">${each(Object.keys(holderLine), (holderName) => {
      return `${validate_component(Holder_box, "HolderBox").$$render(
        $$result,
        {
          name: holderName,
          holder_data: holderLine[holderName]
        },
        {},
        {}
      )}`;
    })} </div>`;
  })}</div> ${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Holders, "Holders").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
