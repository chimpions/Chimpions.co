

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holders/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.d29ca714.js","_app/immutable/chunks/scheduler.e3ae8c1b.js","_app/immutable/chunks/index.68aef871.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Navigation.d979aeab.js","_app/immutable/chunks/BackToTop.cd577580.js","_app/immutable/chunks/holders.e7cf4531.js"];
export const stylesheets = ["_app/immutable/assets/6.1d270bc0.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
