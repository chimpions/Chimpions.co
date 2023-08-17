

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0c6d1de0.js","_app/immutable/chunks/scheduler.abb7d34b.js","_app/immutable/chunks/index.ed998943.js","_app/immutable/chunks/stores.abde9edb.js","_app/immutable/chunks/singletons.0e16832e.js","_app/immutable/chunks/index.f07fb0ee.js"];
export const stylesheets = [];
export const fonts = [];
