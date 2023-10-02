

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d060540b.js","_app/immutable/chunks/scheduler.e3ae8c1b.js","_app/immutable/chunks/index.68aef871.js","_app/immutable/chunks/NotFound.946869ac.js","_app/immutable/chunks/Navigation.d979aeab.js"];
export const stylesheets = ["_app/immutable/assets/NotFound.2da35e92.css","_app/immutable/assets/Navigation.d73f42bd.css"];
export const fonts = [];
