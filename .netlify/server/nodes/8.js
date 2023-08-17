

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/treehouse/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.00bd43be.js","_app/immutable/chunks/scheduler.abb7d34b.js","_app/immutable/chunks/index.ed998943.js","_app/immutable/chunks/BackToTop.916ea7d3.js","_app/immutable/chunks/Navigation.04cfdd59.js","_app/immutable/chunks/index.19e0239b.js"];
export const stylesheets = ["_app/immutable/assets/8.1dafb5b1.css","_app/immutable/assets/BackToTop.ad805fd3.css","_app/immutable/assets/Navigation.9ea3bcef.css","_app/immutable/assets/index.af927694.css"];
export const fonts = [];
