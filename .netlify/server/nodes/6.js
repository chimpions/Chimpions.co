

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holders/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.c171eef9.js","_app/immutable/chunks/scheduler.81a4d397.js","_app/immutable/chunks/index.69f5e7c0.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Navigation.a091d716.js","_app/immutable/chunks/BackToTop.f39b7aa6.js","_app/immutable/chunks/holders.662a4692.js"];
export const stylesheets = ["_app/immutable/assets/6.1d270bc0.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
