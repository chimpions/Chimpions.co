import * as universal from '../entries/pages/holders/_holderName_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holders/_holderName_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/holders/[holderName]/+page.js";
export const imports = ["_app/immutable/nodes/7.bb6b130c.js","_app/immutable/chunks/scheduler.81a4d397.js","_app/immutable/chunks/index.69f5e7c0.js","_app/immutable/chunks/holders.ed729fec.js","_app/immutable/chunks/stores.88c1b8aa.js","_app/immutable/chunks/singletons.d34c71be.js","_app/immutable/chunks/index.9566cbc7.js","_app/immutable/chunks/NotFound.5d317f40.js","_app/immutable/chunks/Navigation.a091d716.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/chimpions.ba056678.js"];
export const stylesheets = ["_app/immutable/assets/7.90336bde.css","_app/immutable/assets/NotFound.2da35e92.css","_app/immutable/assets/Navigation.d73f42bd.css"];
export const fonts = [];
