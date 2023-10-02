import * as universal from '../entries/pages/compendium/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/compendium/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/compendium/+page.js";
export const imports = ["_app/immutable/nodes/3.863dfa18.js","_app/immutable/chunks/scheduler.e3ae8c1b.js","_app/immutable/chunks/index.68aef871.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Navigation.d979aeab.js","_app/immutable/chunks/BackToTop.cd577580.js","_app/immutable/chunks/card.abe3e2de.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/spring.6e7e5c64.js","_app/immutable/chunks/index.657c6801.js","_app/immutable/chunks/chimpions.ff638e41.js"];
export const stylesheets = ["_app/immutable/assets/3.8437fcc8.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css","_app/immutable/assets/card.dc4e6221.css"];
export const fonts = [];
