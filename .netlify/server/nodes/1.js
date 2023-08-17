

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.8c6b2ec6.js","_app/immutable/chunks/scheduler.73d4235d.js","_app/immutable/chunks/index.2f37fbdf.js","_app/immutable/chunks/NotFound.d691d429.js","_app/immutable/chunks/Navigation.0a52b34e.js"];
export const stylesheets = ["_app/immutable/assets/NotFound.2da35e92.css","_app/immutable/assets/Navigation.d73f42bd.css"];
export const fonts = [];
