import { c as create_ssr_component, d as each, e as escape, b as add_attribute, v as validate_component, n as null_to_empty, a as subscribe } from "../../../../chunks/ssr.js";
import { h as holders } from "../../../../chunks/holders.js";
import { p as page } from "../../../../chunks/stores.js";
import { N as NotFound } from "../../../../chunks/NotFound.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
const HolderPage_svelte_svelte_type_style_lang = "";
const css = {
  code: ".holder-box.svelte-192fy17.svelte-192fy17{display:flex;align-items:center;height:70px;width:200px;border:1px solid var(--purple);border-radius:0.25rem;background-color:var(--dark-purple);vertical-align:bottom}.circle.svelte-192fy17.svelte-192fy17{height:50px;width:50px;border-radius:5rem;margin:10px}.pfp.svelte-192fy17.svelte-192fy17{height:50px;border-radius:5rem}.name.svelte-192fy17.svelte-192fy17{color:var(--whiter-purple)}a.svelte-192fy17.svelte-192fy17{vertical-align:bottom;text-decoration:none;color:var(--whiter-purple)}a.svelte-192fy17.svelte-192fy17:hover{text-decoration:underline}.search-pfp.svelte-192fy17.svelte-192fy17{width:30px;margin-right:5px;vertical-align:bottom}.menu-cont.svelte-192fy17.svelte-192fy17{display:flex;position:fixed;z-index:5;top:0px;right:0px;margin:0;padding:30px}#query-section.svelte-192fy17.svelte-192fy17{display:flex;flex-direction:column}#search-input-cont.svelte-192fy17.svelte-192fy17{width:200px}.search-field.svelte-192fy17.svelte-192fy17{position:relative;width:100%;font-size:1rem;border:2px solid white;border-radius:0.25rem;background-color:var(--darker-purple);color:white;padding:0.5rem;outline:none}.no-border-radius.svelte-192fy17.svelte-192fy17{border-bottom-left-radius:0;border-bottom-right-radius:0}.results.svelte-192fy17.svelte-192fy17{max-height:200px;width:200px;overflow:auto;border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem}.results.svelte-192fy17 ul.svelte-192fy17{margin:0;list-style-type:none;padding:0;border:1px solid var(--purple);border-top:0px}.results.svelte-192fy17 ul li.svelte-192fy17{display:flex;align-items:center;cursor:pointer;padding:0px;border-top:1px solid var(--purple);background-color:var(--darker-purple);transition:background-color 0.2s ease}.results.svelte-192fy17 ul li.svelte-192fy17:hover{background-color:var(--purple)}#box-for-next-chimp.svelte-192fy17.svelte-192fy17{height:36px;margin-left:30px}.nextChimpion.svelte-192fy17.svelte-192fy17{background-color:var(--dark-purple);border-radius:0.25rem;border:2px var(--purple) solid;padding:0.5rem 1rem;white-space:nowrap;transition:all 0.2s ease}.nextChimpion.svelte-192fy17.svelte-192fy17:hover{background-color:var(--purple);border:2px var(--white-purple) solid}.arrow-right.svelte-192fy17.svelte-192fy17{height:0.75rem}a.svelte-192fy17.svelte-192fy17{text-decoration:none;color:inherit}.svelte-192fy17.svelte-192fy17::-webkit-scrollbar{width:8px}.svelte-192fy17.svelte-192fy17::-webkit-scrollbar-track{background:var(--dark-purple)}.svelte-192fy17.svelte-192fy17::-webkit-scrollbar-thumb{background:var(--light-purple);border-radius:0.25rem}.svelte-192fy17.svelte-192fy17::-webkit-scrollbar-thumb:hover{background:var(--lighter-purple)}@media screen and (max-width: 800px){}",
  map: null
};
const HolderPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { holderName = "" } = $$props;
  let { pfp = "" } = $$props;
  let { twitter = "" } = $$props;
  let { level = 1 } = $$props;
  let { chimpions_held = [] } = $$props;
  let { TWS = {} } = $$props;
  let chimpions_held_data = [];
  let searchTerm = "";
  let filteredHolders = [];
  const linkNextHolder = (holderName2) => {
    let keysArray = Object.keys(holders);
    let currentIndex = 0;
    for (let name2 in holders) {
      if (name2.toLowerCase() == holderName2) {
        currentIndex = keysArray.indexOf(name2);
      }
    }
    return `./${keysArray[currentIndex + 1]}`;
  };
  if ($$props.holderName === void 0 && $$bindings.holderName && holderName !== void 0)
    $$bindings.holderName(holderName);
  if ($$props.pfp === void 0 && $$bindings.pfp && pfp !== void 0)
    $$bindings.pfp(pfp);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.chimpions_held === void 0 && $$bindings.chimpions_held && chimpions_held !== void 0)
    $$bindings.chimpions_held(chimpions_held);
  if ($$props.TWS === void 0 && $$bindings.TWS && TWS !== void 0)
    $$bindings.TWS(TWS);
  $$result.css.add(css);
  return `tototototot
${each(chimpions_held_data, (chimpion) => {
    return `<p class="svelte-192fy17">${escape(chimpion.name)}</p> <img${add_attribute("src", chimpion.paths.gif, 0)}${add_attribute("alt", chimpion.name, 0)} class="svelte-192fy17"> <br class="svelte-192fy17"><br class="svelte-192fy17"><br class="svelte-192fy17"><br class="svelte-192fy17"><br class="svelte-192fy17">`;
  })} <div class="holder-box svelte-192fy17"><a href="${"/holders/" + escape(name, true)}" class="circle svelte-192fy17"><img class="pfp svelte-192fy17"${add_attribute("src", pfp, 0)} alt="${"Profile picture of " + escape(name, true)}"></a> <span class="name svelte-192fy17">${twitter != "" ? `<a href="${"https://twitter.com/" + escape(twitter, true)}" target="_blank" rel="noreferrer" class="svelte-192fy17">${escape(name)}</a>` : `${escape(name)}`}</span></div> ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <div class="menu-cont svelte-192fy17"><div id="query-section" class="svelte-192fy17"><div id="search-input-cont" class="svelte-192fy17"><input type="text" class="${escape(
    null_to_empty(filteredHolders.length > 0 ? "search-field no-border-radius" : "search-field"),
    true
  ) + " svelte-192fy17"}" placeholder="Search for a Holder" autocomplete="on"${add_attribute("value", searchTerm, 0)}></div> <div class="results svelte-192fy17">${filteredHolders.length > 0 ? `<ul class="svelte-192fy17">${each(filteredHolders, (holder) => {
    return `<a${add_attribute("href", `/compendium/${holder.name}`, 0)} class="svelte-192fy17"><li class="svelte-192fy17"><img class="search-pfp svelte-192fy17"${add_attribute("src", holder.pfp, 0)} alt="${"pfp of " + escape(holder.name, true)}">${escape(holder.name)}</li></a>`;
  })}</ul>` : ``}</div></div> <div id="box-for-next-chimp" class="svelte-192fy17"><a${add_attribute("href", linkNextHolder(holderName), 0)} class="svelte-192fy17"><div class="nextChimpion svelte-192fy17" data-svelte-h="svelte-sw3xry">See Next Holder<span class="svelte-192fy17"><img class="arrow-right svelte-192fy17" src="/images/arrow-right-white.png" alt="arrow to the right"></span></div></a></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let holder_data;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let holderName = "";
  function getHolderData(params) {
    try {
      let holderNameArray = params.toLowerCase();
      holderName = holderNameArray;
      console.log(holderName);
      for (let key in holders) {
        if (key.toLowerCase() == holderName) {
          console.log("found");
          let xholder_data = holders[key];
          console.log(xholder_data);
          return holder_data = holders[key];
        }
      }
    } catch (error) {
      console.log("HolderNotFoundError");
      return holder_data = null;
    }
  }
  holder_data = getHolderData($page.params.holderName);
  $$unsubscribe_page();
  return `${holder_data ? `${validate_component(HolderPage, "HolderPage").$$render(
    $$result,
    {
      holderName,
      pfp: holder_data.pfp,
      twitter: holder_data.twitter,
      level: holder_data.level,
      chimpions: holder_data.chimpions,
      TWS: holder_data.TWS
    },
    {},
    {}
  )}` : `${validate_component(NotFound, "NotFound").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
