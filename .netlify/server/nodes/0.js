

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.28c608f5.js","_app/immutable/chunks/scheduler.73d4235d.js","_app/immutable/chunks/index.2f37fbdf.js"];
export const stylesheets = [];
export const fonts = [];
