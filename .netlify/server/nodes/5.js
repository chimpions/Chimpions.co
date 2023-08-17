

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holders/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.54a140ca.js","_app/immutable/chunks/scheduler.73d4235d.js","_app/immutable/chunks/index.2f37fbdf.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Navigation.0a52b34e.js","_app/immutable/chunks/BackToTop.a6c772b4.js","_app/immutable/chunks/holders.5274fefa.js"];
export const stylesheets = ["_app/immutable/assets/5.1d270bc0.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
