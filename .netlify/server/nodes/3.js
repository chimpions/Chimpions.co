import * as universal from '../entries/pages/compendium/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/compendium/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/compendium/+page.js";
export const imports = ["_app/immutable/nodes/3.7b402121.js","_app/immutable/chunks/scheduler.73d4235d.js","_app/immutable/chunks/index.2f37fbdf.js","_app/immutable/chunks/Navigation.0a52b34e.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Math.0ae48eb6.js","_app/immutable/chunks/index.382c8255.js","_app/immutable/chunks/holders.5274fefa.js","_app/immutable/chunks/chimpions.338f1af5.js","_app/immutable/chunks/BackToTop.a6c772b4.js"];
export const stylesheets = ["_app/immutable/assets/3.40a37d08.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
