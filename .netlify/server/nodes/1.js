

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.228c0a61.js","_app/immutable/chunks/scheduler.81a4d397.js","_app/immutable/chunks/index.69f5e7c0.js","_app/immutable/chunks/NotFound.5d317f40.js","_app/immutable/chunks/Navigation.a091d716.js"];
export const stylesheets = ["_app/immutable/assets/NotFound.2da35e92.css","_app/immutable/assets/Navigation.d73f42bd.css"];
export const fonts = [];
