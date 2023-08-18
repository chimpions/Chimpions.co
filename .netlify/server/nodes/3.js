import * as universal from '../entries/pages/compendium/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/compendium/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/compendium/+page.js";
export const imports = ["_app/immutable/nodes/3.195c40f6.js","_app/immutable/chunks/scheduler.73d4235d.js","_app/immutable/chunks/index.2f37fbdf.js","_app/immutable/chunks/Navigation.0a52b34e.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spring.9b2f08ab.js","_app/immutable/chunks/index.382c8255.js","_app/immutable/chunks/Math.bc540454.js","_app/immutable/chunks/holders.5274fefa.js","_app/immutable/chunks/chimpions.1bf25341.js","_app/immutable/chunks/BackToTop.a6c772b4.js"];
export const stylesheets = ["_app/immutable/assets/3.b083bbd8.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
