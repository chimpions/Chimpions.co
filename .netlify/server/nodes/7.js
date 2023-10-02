import * as universal from '../entries/pages/holders/_holderName_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holders/_holderName_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/holders/[holderName]/+page.js";
export const imports = ["_app/immutable/nodes/7.7dfa3818.js","_app/immutable/chunks/scheduler.e3ae8c1b.js","_app/immutable/chunks/index.68aef871.js","_app/immutable/chunks/holders.e7cf4531.js","_app/immutable/chunks/stores.430553bc.js","_app/immutable/chunks/singletons.60b4b293.js","_app/immutable/chunks/index.657c6801.js","_app/immutable/chunks/NotFound.946869ac.js","_app/immutable/chunks/Navigation.d979aeab.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.1da4e53a.js","_app/immutable/chunks/chimpions.ff638e41.js","_app/immutable/chunks/card.abe3e2de.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/spring.6e7e5c64.js"];
export const stylesheets = ["_app/immutable/assets/7.3eb7aa77.css","_app/immutable/assets/NotFound.2da35e92.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/index.af927694.css","_app/immutable/assets/card.dc4e6221.css"];
export const fonts = [];
