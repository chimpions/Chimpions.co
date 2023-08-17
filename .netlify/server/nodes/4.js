

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/holders/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.74f337de.js","_app/immutable/chunks/scheduler.abb7d34b.js","_app/immutable/chunks/index.ed998943.js","_app/immutable/chunks/BackToTop.916ea7d3.js","_app/immutable/chunks/Navigation.04cfdd59.js","_app/immutable/chunks/holders.b0761676.js"];
export const stylesheets = ["_app/immutable/assets/4.1d270bc0.css","_app/immutable/assets/BackToTop.ad805fd3.css","_app/immutable/assets/Navigation.9ea3bcef.css"];
export const fonts = [];
