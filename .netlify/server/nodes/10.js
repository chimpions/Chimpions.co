

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/treehouse/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.6246b1fb.js","_app/immutable/chunks/scheduler.81a4d397.js","_app/immutable/chunks/index.69f5e7c0.js","_app/immutable/chunks/BackToTop.f39b7aa6.js","_app/immutable/chunks/Navigation.a091d716.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/index.09a12927.js"];
export const stylesheets = ["_app/immutable/assets/10.1dafb5b1.css","_app/immutable/assets/BackToTop.ad805fd3.css","_app/immutable/assets/Navigation.d73f42bd.css","_app/immutable/assets/index.af927694.css"];
export const fonts = [];
