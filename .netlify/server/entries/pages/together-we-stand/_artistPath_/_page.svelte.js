import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, d as each, a as subscribe } from "../../../../chunks/ssr.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
import { F as Fa } from "../../../../chunks/fa.js";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons/index.js";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons/index.js";
import { B as BackToTop } from "../../../../chunks/BackToTop.js";
import { d as drops } from "../../../../chunks/tws.js";
import { p as page } from "../../../../chunks/stores.js";
const Artist_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-bbw7k4{color:inherit}.infos.svelte-bbw7k4{margin-top:3rem}.tws-info.svelte-bbw7k4{display:flex;align-items:center;justify-content:space-around;color:var(--purple-white)}.subsectionParagraph.svelte-bbw7k4{text-align:justify;line-height:1.5rem;letter-spacing:0.05rem;width:100%;opacity:0.8;margin-top:0.5rem;color:var(--purple-white)}.title.svelte-bbw7k4{color:var(--white-purple)}.readMore.svelte-bbw7k4{border-left:2px var(--whiter-purple) solid;background-color:rgb(31 6 56 / 1);padding:0.5rem;padding-left:1rem;border-radius:0.25rem;margin-bottom:4rem;color:var(--whiter-purple)}.subsectionQuestion.svelte-bbw7k4{width:100%;margin-top:0rem;letter-spacing:0.05em;color:var(--whiter-purple)}.subsectionAnswer.svelte-bbw7k4{width:100%;margin-top:1rem;margin-bottom:1rem;letter-spacing:0.05rem;color:var(--purple-white);padding-left:1rem;border-left:2px currentColor solid}.qa.svelte-bbw7k4{border-radius:0.25rem;background-color:rgb(31 6 56 / 1);padding:1rem;margin-top:1rem;margin-bottom:1rem}@media(max-width: 500px){.tws-info.svelte-bbw7k4{font-size:0.5rem}}",
  map: null
};
const Artist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { artist = "" } = $$props;
  let { twitter = "" } = $$props;
  let { portfolio = "" } = $$props;
  let { discord = "" } = $$props;
  let { piecePath = "" } = $$props;
  let { pieceTeaserPath = "" } = $$props;
  let { pieceTitle = "" } = $$props;
  let { pieceReleased = false } = $$props;
  let { copy = [] } = $$props;
  let { qa = [] } = $$props;
  if ($$props.artist === void 0 && $$bindings.artist && artist !== void 0)
    $$bindings.artist(artist);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.portfolio === void 0 && $$bindings.portfolio && portfolio !== void 0)
    $$bindings.portfolio(portfolio);
  if ($$props.discord === void 0 && $$bindings.discord && discord !== void 0)
    $$bindings.discord(discord);
  if ($$props.piecePath === void 0 && $$bindings.piecePath && piecePath !== void 0)
    $$bindings.piecePath(piecePath);
  if ($$props.pieceTeaserPath === void 0 && $$bindings.pieceTeaserPath && pieceTeaserPath !== void 0)
    $$bindings.pieceTeaserPath(pieceTeaserPath);
  if ($$props.pieceTitle === void 0 && $$bindings.pieceTitle && pieceTitle !== void 0)
    $$bindings.pieceTitle(pieceTitle);
  if ($$props.pieceReleased === void 0 && $$bindings.pieceReleased && pieceReleased !== void 0)
    $$bindings.pieceReleased(pieceReleased);
  if ($$props.copy === void 0 && $$bindings.copy && copy !== void 0)
    $$bindings.copy(copy);
  if ($$props.qa === void 0 && $$bindings.qa && qa !== void 0)
    $$bindings.qa(qa);
  $$result.css.add(css);
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <section class="container"><h1 class="heading" style="text-align: center">${escape(artist)}</h1> <h2 class="subsectionHeading" style="text-align: center;">&quot;${escape(pieceTitle)}&quot;</h2> <div class="dropContainer" style="gap: 0.5rem;"><div>${pieceReleased ? `<img style="max-width: 100%"${add_attribute("src", `/images/tws/${piecePath}`, 0)} alt="TWS art piece">` : `<img style="max-width: 100%"${add_attribute("src", `/images/tws/${pieceTeaserPath}`, 0)} alt="TWS art piece teaser">`}</div> <div class="tws-info svelte-bbw7k4"><div>${validate_component(Fa, "Fa").$$render($$result, { icon: faPaintBrush, size: "sm" }, {}, {})} <a${add_attribute("href", portfolio, 0)} class="svelte-bbw7k4">Portfolio</a></div> <div>${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "sm" }, {}, {})} <a${add_attribute("href", `https://twitter.com/${twitter}`, 0)} class="svelte-bbw7k4">${escape(twitter)}</a></div> <div>${validate_component(Fa, "Fa").$$render($$result, { icon: faDiscord, size: "sm" }, {}, {})} ${escape(discord)}</div></div> <div class="infos svelte-bbw7k4">${copy.length != 0 ? `${each(copy, (copyElem) => {
    return `${copyElem[0] == "readMore" ? `<p class="readMore svelte-bbw7k4"><!-- HTML_TAG_START -->${copyElem[1]}<!-- HTML_TAG_END --></p>` : `${copyElem[0] == "h1" ? `<p class="title svelte-bbw7k4"><!-- HTML_TAG_START -->${copyElem[1]}<!-- HTML_TAG_END --></p>` : `<p class="subsectionParagraph svelte-bbw7k4"><!-- HTML_TAG_START -->${copyElem[0]}<!-- HTML_TAG_END --></p>`}`}`;
  })}` : ``}</div> ${qa.length != 0 ? `<h2 class="subsectionHeading" data-svelte-h="svelte-13icoxr">Q &amp; A</h2> ${each(qa, (qaElem) => {
    return `<div><div class="qa svelte-bbw7k4"><p class="subsectionQuestion svelte-bbw7k4">${escape(qaElem[0])}</p> <p class="subsectionAnswer svelte-bbw7k4" style="margin-bottom: 0px;">${escape(qaElem[1])}</p></div> </div>`;
  })}` : ``}</div></section> ${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})}`;
});
const NotFound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `The page you requested does not exist.`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const artistPath = $page.params.artistPath;
  let TWS_data = null;
  if (drops.some((item) => item.artistPath === artistPath)) {
    TWS_data = drops.find((item) => item.artistPath === artistPath);
  }
  $$unsubscribe_page();
  return `${TWS_data ? `${validate_component(Artist, "Artist").$$render(
    $$result,
    {
      artist: TWS_data.artist,
      twitter: TWS_data.twitter,
      portfolio: TWS_data.portfolio,
      discord: TWS_data.discord,
      piecePath: TWS_data.piece.path,
      pieceTeaserPath: TWS_data.piece.teaserPath,
      pieceTitle: TWS_data.piece.title,
      pieceReleased: TWS_data.piece.released,
      copy: TWS_data.copy,
      qa: TWS_data.qa
    },
    {},
    {}
  )}` : `${validate_component(NotFound, "NotFound").$$render($$result, {}, {}, {})}`} `;
});
export {
  Page as default
};
