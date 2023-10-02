

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.f309bb28.js","_app/immutable/chunks/scheduler.e3ae8c1b.js","_app/immutable/chunks/index.68aef871.js","_app/immutable/chunks/spring.6e7e5c64.js","_app/immutable/chunks/index.657c6801.js","_app/immutable/chunks/Math.bc540454.js","_app/immutable/chunks/Navigation.d979aeab.js"];
export const stylesheets = ["_app/immutable/assets/2.15909b03.css","_app/immutable/assets/Navigation.d73f42bd.css"];
export const fonts = [];
