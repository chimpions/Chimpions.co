import * as universal from '../entries/pages/compendium-old/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/compendium-old/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/compendium-old/+page.js";
export const imports = ["_app/immutable/nodes/5.351cc9af.js","_app/immutable/chunks/scheduler.e3ae8c1b.js","_app/immutable/chunks/index.68aef871.js","_app/immutable/chunks/Navigation.d979aeab.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spring.6e7e5c64.js","_app/immutable/chunks/index.657c6801.js","_app/immutable/chunks/Math.bc540454.js","_app/immutable/chunks/holders.e7cf4531.js","_app/immutable/chunks/chimpions.ff638e41.js","_app/immutable/chunks/BackToTop.cd577580.js"];
export const stylesheets = ["_app/immutable/assets/5.b083bbd8.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
