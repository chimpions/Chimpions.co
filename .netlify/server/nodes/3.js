

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/compendium/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.6d48ac22.js","_app/immutable/chunks/scheduler.abb7d34b.js","_app/immutable/chunks/index.ed998943.js","_app/immutable/chunks/Navigation.04cfdd59.js","_app/immutable/chunks/BackToTop.916ea7d3.js","_app/immutable/chunks/Math.9e08ec05.js","_app/immutable/chunks/index.f07fb0ee.js","_app/immutable/chunks/holders.b0761676.js","_app/immutable/chunks/chimpions.338f1af5.js"];
export const stylesheets = ["_app/immutable/assets/3.40a37d08.css","_app/immutable/assets/Navigation.9ea3bcef.css","_app/immutable/assets/BackToTop.ad805fd3.css"];
export const fonts = [];
