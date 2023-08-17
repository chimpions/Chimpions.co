import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "./ssr.js";
const global = "";
const button_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--originX:0%;--originY:0%;--size:0%;--bg-color:rgb(8, 1, 15);--opacity:0}li.svelte-1cqhr46.svelte-1cqhr46{padding:0px}li.svelte-1cqhr46 a.svelte-1cqhr46{text-decoration:none;padding:10px;color:#fff;background-color:var(--bg-color);position:relative;white-space:nowrap}li.svelte-1cqhr46 a.svelte-1cqhr46:after{position:absolute;content:"";width:calc(100% + 6px);height:calc(100% + 6px);left:-3px;top:-3px;z-index:-1;transition:color 0.2s ease;border-radius:0.25rem;background:radial-gradient(\r\n            farthest-corner circle at var(--originX) var(--originY),\r\n            rgb(255 255 255 / var(--opacity)) calc(5 * var(--size)),\r\n            var(--bg-color) calc(5 * var(--size) + 50%));;;transition:color 0.2s ease}li.svelte-1cqhr46 a.svelte-1cqhr46:hover:after{color:var(--bg-color);transition:color 0.2s ease}@media(max-width: 768px){:root{--bg-color:black}}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let styles;
  let { button_name = "" } = $$props;
  let { button_id = "" } = $$props;
  let { mouseX = 0 } = $$props;
  let { mouseY = 0 } = $$props;
  let originX = 0;
  let originY = 0;
  let size = 0;
  let opacity = 0;
  if ($$props.button_name === void 0 && $$bindings.button_name && button_name !== void 0)
    $$bindings.button_name(button_name);
  if ($$props.button_id === void 0 && $$bindings.button_id && button_id !== void 0)
    $$bindings.button_id(button_id);
  if ($$props.mouseX === void 0 && $$bindings.mouseX && mouseX !== void 0)
    $$bindings.mouseX(mouseX);
  if ($$props.mouseY === void 0 && $$bindings.mouseY && mouseY !== void 0)
    $$bindings.mouseY(mouseY);
  $$result.css.add(css);
  styles = `
            --originX: ${originX}%;
            --originY: ${originY}%;
            --size: ${size}%;
            --opacity: ${opacity}`;
  return `<li${add_attribute("style", styles, 0)} class="svelte-1cqhr46"> <a${add_attribute("id", button_id, 0)} href="${"/" + escape(button_id, true)}" class="svelte-1cqhr46">${escape(button_name)}</a> </li>`;
});
const navigation = "";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mouseX = 0;
  let mouseY = 0;
  return `<nav><div class="preload"></div> <input type="checkbox" id="active" class="main-navigation-toggle"> <label for="active" class="menu-btn"></label>  <div class="wrapper"><ul>${validate_component(Button, "Button").$$render(
    $$result,
    {
      button_name: "Compendium",
      button_id: "compendium",
      mouseX,
      mouseY
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      button_name: "The CHIAO",
      button_id: "the-chiao",
      mouseX,
      mouseY
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      button_name: "The TreeHouse",
      button_id: "treehouse",
      mouseX,
      mouseY
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      button_name: "Together We Stand",
      button_id: "together-we-stand",
      mouseX,
      mouseY
    },
    {},
    {}
  )} ${validate_component(Button, "Button").$$render(
    $$result,
    {
      button_name: "The Holders",
      button_id: "holders",
      mouseX,
      mouseY
    },
    {},
    {}
  )}</ul></div></nav>`;
});
export {
  Navigation as N
};
