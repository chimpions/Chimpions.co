

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.566c9fcf.js","_app/immutable/chunks/scheduler.abb7d34b.js","_app/immutable/chunks/index.ed998943.js"];
export const stylesheets = [];
export const fonts = [];
