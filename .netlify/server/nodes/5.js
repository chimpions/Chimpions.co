import * as universal from '../entries/pages/compendium-old/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/compendium-old/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/compendium-old/+page.js";
export const imports = ["_app/immutable/nodes/5.f8193df6.js","_app/immutable/chunks/scheduler.81a4d397.js","_app/immutable/chunks/index.69f5e7c0.js","_app/immutable/chunks/Navigation.a091d716.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spring.8092c004.js","_app/immutable/chunks/index.9566cbc7.js","_app/immutable/chunks/Math.bc540454.js","_app/immutable/chunks/holders.ed729fec.js","_app/immutable/chunks/chimpions.ba056678.js","_app/immutable/chunks/BackToTop.f39b7aa6.js"];
export const stylesheets = ["_app/immutable/assets/5.b083bbd8.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
