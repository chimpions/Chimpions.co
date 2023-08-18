import * as universal from '../entries/pages/compendium-v2/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/compendium-v2/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/compendium-v2/+page.js";
export const imports = ["_app/immutable/nodes/5.f01a6591.js","_app/immutable/chunks/scheduler.73d4235d.js","_app/immutable/chunks/index.2f37fbdf.js","_app/immutable/chunks/Navigation.0a52b34e.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spring.9b2f08ab.js","_app/immutable/chunks/index.382c8255.js","_app/immutable/chunks/holders.5274fefa.js","_app/immutable/chunks/chimpions.1bf25341.js","_app/immutable/chunks/BackToTop.a6c772b4.js"];
export const stylesheets = ["_app/immutable/assets/5.045f23d3.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
