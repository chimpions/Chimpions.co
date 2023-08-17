import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { N as NotFound } from "../../chunks/NotFound.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(NotFound, "NotFound").$$render($$result, {}, {}, {})}`;
});
export {
  Error as default
};
