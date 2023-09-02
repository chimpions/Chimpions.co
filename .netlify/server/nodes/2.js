

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.0c669613.js","_app/immutable/chunks/scheduler.81a4d397.js","_app/immutable/chunks/index.69f5e7c0.js","_app/immutable/chunks/spring.8092c004.js","_app/immutable/chunks/index.9566cbc7.js","_app/immutable/chunks/Math.bc540454.js","_app/immutable/chunks/Navigation.a091d716.js"];
export const stylesheets = ["_app/immutable/assets/2.15909b03.css","_app/immutable/assets/Navigation.d73f42bd.css"];
export const fonts = [];
