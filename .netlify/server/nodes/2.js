

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6834003f.js","_app/immutable/chunks/scheduler.73d4235d.js","_app/immutable/chunks/index.2f37fbdf.js","_app/immutable/chunks/Math.0ae48eb6.js","_app/immutable/chunks/index.382c8255.js","_app/immutable/chunks/Navigation.0a52b34e.js"];
export const stylesheets = ["_app/immutable/assets/2.15dab207.css","_app/immutable/assets/Navigation.d73f42bd.css"];
export const fonts = [];