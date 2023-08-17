

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.343f2844.js","_app/immutable/chunks/scheduler.abb7d34b.js","_app/immutable/chunks/index.ed998943.js","_app/immutable/chunks/Math.9e08ec05.js","_app/immutable/chunks/index.f07fb0ee.js","_app/immutable/chunks/Navigation.04cfdd59.js"];
export const stylesheets = ["_app/immutable/assets/2.15dab207.css","_app/immutable/assets/Navigation.9ea3bcef.css"];
export const fonts = [];
