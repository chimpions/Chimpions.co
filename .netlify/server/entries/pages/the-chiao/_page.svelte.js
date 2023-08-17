import { c as create_ssr_component, b as add_attribute, v as validate_component, d as each, e as escape } from "../../../chunks/ssr.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import { B as BackToTop } from "../../../chunks/BackToTop.js";
import { F as Fa } from "../../../chunks/fa.js";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons/index.js";
import { c as chimpions } from "../../../chunks/chimpions.js";
const OurVision_svelte_svelte_type_style_lang = "";
const council = [
  {
    name: "Birb",
    twitter: "@mulletmusketeer",
    discord: "mulletmusketeer",
    chimp: chimpions[139]
  },
  {
    name: "Brink",
    twitter: "@Brink_Brinker",
    discord: "Brink#0001",
    chimp: chimpions[134]
  },
  {
    name: "Dasein",
    twitter: "@DaseinIllusion",
    discord: "dasein2249",
    chimp: chimpions[192]
  },
  {
    name: "Jota",
    twitter: "@JotaDotSol",
    discord: "Jota#0002",
    chimp: chimpions[81]
  },
  {
    name: "Katsu",
    twitter: "@katsudon_sol",
    discord: "katsudon#7432",
    chimp: chimpions[178]
  },
  {
    name: "Mamon",
    twitter: "@mamonBTC",
    discord: "debankedmamon",
    chimp: chimpions[61]
  },
  {
    name: "MaxBrs",
    twitter: "@Max___Brs",
    discord: "MaxBrs ⛏#5204",
    chimp: chimpions[145]
  },
  {
    name: "Minne_ape_olis",
    twitter: "@minne_ape_olis",
    discord: "minne_ape_olis#5330",
    chimp: chimpions[156]
  },
  {
    name: "Punk Monke",
    twitter: "@Punk_Monke",
    discord: "punkmonke",
    chimp: chimpions[166]
  },
  {
    name: "Utopia",
    twitter: "@utopia_artist",
    discord: "Utopia#3861",
    chimp: chimpions[185]
  }
];
const Structure_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".subsectionHeading.svelte-1kcnp7d.svelte-1kcnp7d{margin-top:5rem}ul.svelte-1kcnp7d.svelte-1kcnp7d{margin:0 0 3rem 0;line-height:1.25rem;letter-spacing:0.05rem;font-size:0.875rem;color:var(--whiter-purple)}ol.svelte-1kcnp7d li.svelte-1kcnp7d{margin:1rem}.CEO.svelte-1kcnp7d.svelte-1kcnp7d{margin:auto;display:grid;grid-template-columns:250px;width:fit-content;justify-items:center}.council.svelte-1kcnp7d.svelte-1kcnp7d{--numberOfColumns:1;--column-gap:calc(80vw - var(--numberOfColumns) * 250px);margin:auto;display:grid;grid-template-columns:repeat(var(--numberOfColumns), 250px);width:fit-content;row-gap:calc(var(--column-gap) /3);column-gap:var(--column-gap);justify-items:center}@media screen and (min-width: 700px){.council.svelte-1kcnp7d.svelte-1kcnp7d{--numberOfColumns:2;--column-gap:calc((80vw - var(--numberOfColumns) * 250px) / var(--numberOfColumns));row-gap:calc(var(--column-gap) * 350 / 250)}}@media screen and (min-width: 900px){.council.svelte-1kcnp7d.svelte-1kcnp7d{--numberOfColumns:3}}@media screen and (min-width: 1100px){.council.svelte-1kcnp7d.svelte-1kcnp7d{--numberOfColumns:4}}@media screen and (min-width: 1400px){.council.svelte-1kcnp7d.svelte-1kcnp7d{--numberOfColumns:5}}.lead-box.svelte-1kcnp7d.svelte-1kcnp7d{margin:1rem}.chimpImage.svelte-1kcnp7d.svelte-1kcnp7d{max-width:200px;border-radius:0.25rem;width:100%}.leadDescription.svelte-1kcnp7d.svelte-1kcnp7d{max-width:200px;border-radius:0.25rem;margin-top:0.25rem;padding:0.25rem;color:white}.leadName.svelte-1kcnp7d.svelte-1kcnp7d{text-align:center;margin-bottom:0.25rem}.leadTwitterAndDiscord.svelte-1kcnp7d.svelte-1kcnp7d{display:flex;justify-content:center;align-items:center;column-gap:0.25rem;font-size:0.75rem;line-height:1rem;text-align:center;user-select:none;opacity:0.8;transition:opacity 0.3s ease}.leadTwitterAndDiscord.svelte-1kcnp7d.svelte-1kcnp7d:hover{opacity:1;transition:opacity 0.3s ease}@media(max-width: 768px){.leadName.svelte-1kcnp7d.svelte-1kcnp7d{font-size:0.875rem}.leadTwitterAndDiscord.svelte-1kcnp7d.svelte-1kcnp7d{font-size:0.625rem}}",
  map: null
};
const Structure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section><h2 class="subsectionHeading svelte-1kcnp7d" data-svelte-h="svelte-5psi5j">Structure</h2> <div class="subsectionParagraph" data-svelte-h="svelte-1ao0qlz"><p>Chimpions have adapted to the ecosystem in which they live. Whereas a model where 10 Leads representing the Chimpions served them for just over a year, the Chimpions have decided to pivot to a governance model with a CEO.</p> <p>The new model operates as follows:
            The chimpions elect a CEO from among the members of the previous board for a 6-month term.
            A new board is created from 10 volunteers chosen in order of the most active members of the community.</p></div> <h2 class="subsectionHeading svelte-1kcnp7d" data-svelte-h="svelte-1sg7mmu">The CEO</h2> <div class="subsectionParagraph" data-svelte-h="svelte-4vaox0"><p>For this first term running from July 17, 2023 to January 17, 2024, Doudou has been elected CEO.</p> <p>Missions:</p> <ul class="svelte-1kcnp7d"><li>Make the Chimpions prosper</li> <li>Satisfy CHIAO&#39;s requests</li> <li>Manage the Treasury</li></ul></div> <div class="CEO svelte-1kcnp7d"><div class="lead-box svelte-1kcnp7d"><img class="chimpImage svelte-1kcnp7d"${add_attribute("src", chimpions[1].paths.gif, 0)} alt="Chimpion of Doudou"> <div class="leadDescription svelte-1kcnp7d"><div class="leadName svelte-1kcnp7d" data-svelte-h="svelte-1gp6b5g">Doudou</div> <div class="leadTwitterAndDiscord svelte-1kcnp7d">${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "sm" }, {}, {})} <a href="https://twitter.com/notdoudou_sol" target="_blank" rel="noreferrer" style="color: inherit; text-decoration:none; cursor:pointer;" data-svelte-h="svelte-aj1c2b">@notdoudou_sol</a></div> <div class="leadTwitterAndDiscord svelte-1kcnp7d">${validate_component(Fa, "Fa").$$render($$result, { icon: faDiscord, size: "sm" }, {}, {})}
                    notdoudou_sol</div></div></div></div> <h2 class="subsectionHeading svelte-1kcnp7d" data-svelte-h="svelte-1ttyuf8">The Council</h2> <div class="subsectionParagraph" data-svelte-h="svelte-131sctx"><p>The Council is the intermediary between the CEO and the CHIAO.</p>
        Missions:
        <ul class="svelte-1kcnp7d"><li>Secure the CHIAO treasury by validating the transactions</li> <li>Support the CEO in decision-making</li> <li>Vote to dismiss the CEO in case of profound disagreement with the actions taken</li></ul> <p>The current Council members are :</p></div> <div class="council svelte-1kcnp7d">${each(council, (councilMember) => {
    return `<div class="lead-box svelte-1kcnp7d"><img class="chimpImage svelte-1kcnp7d"${add_attribute("src", councilMember.chimp.paths.gif, 0)} alt="${"Chimpion of " + escape(councilMember.name, true)}"> <div class="leadDescription svelte-1kcnp7d"><div class="leadName svelte-1kcnp7d">${escape(councilMember.name)}</div> <div class="leadTwitterAndDiscord svelte-1kcnp7d">${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "sm" }, {}, {})} <a href="${"https://twitter.com/" + escape(councilMember.twitter, true)}" target="_blank" rel="noreferrer" style="color: inherit; text-decoration:none; cursor:pointer;">${escape(councilMember.twitter)}</a></div> <div class="leadTwitterAndDiscord svelte-1kcnp7d">${validate_component(Fa, "Fa").$$render($$result, { icon: faDiscord, size: "sm" }, {}, {})} ${escape(councilMember.discord)} </div></div> </div>`;
  })}</div> <h2 class="subsectionHeading svelte-1kcnp7d" data-svelte-h="svelte-zd1upy">Code of Conduct</h2> <div class="subsectionParagraph" data-svelte-h="svelte-wdxkl3"><p>The Code of Conduct describes the desired behaviour and actions for all members of the CHIAO, and is tacitly accepted by joining The Chimpions community.</p> <p>In The Chimpions we promote a respectful, family atmosphere. We seek to empower community members to be the best they can be. Members should be aware of the code of conduct and attempt to always act within the bounds herein for the continued good of the community as a whole.</p> <ol class="svelte-1kcnp7d"><li class="svelte-1kcnp7d">Strive to be excellent to all people and help whenever possible</li> <li class="svelte-1kcnp7d">Treat each other with kindness and respect, and foster an inclusive environment for all</li> <li class="svelte-1kcnp7d">Remember that your actions reflect on the entire Chimpions community, especially if you use a Chimpion as your profile picture on social media</li> <li class="svelte-1kcnp7d">Do not spam the discord channels with irrelevant messages or content</li> <li class="svelte-1kcnp7d">Do not attempt to scam or deceive other members of the community or anyone outside of the community</li> <li class="svelte-1kcnp7d">Do not engage in any discriminatory or hateful behaviour, including but not limited to racism, sexism, homophobia</li> <li class="svelte-1kcnp7d">Avoid engaging in any behaviour that could be perceived as harassment, intimidation, or bullying towards other members</li> <li class="svelte-1kcnp7d">Community Members can not loan their Chimpions to anyone for temporary access to the CHIAO benefits such as Whitelists or VC Deals</li> <li class="svelte-1kcnp7d">Do not share or distribute any personal or confidential information of other members without their explicit consent</li> <li class="svelte-1kcnp7d">Do not engage in any unethical or fraudulent NFT or cryptocurrency trading practices, such as, but not limited to, buying NFTs with stolen or fake funds, or selling NFTs that you do not own or have the right to sell</li> <li class="svelte-1kcnp7d">Do not engage in any activities that would harm the integrity or value of the Chimpions NFT collection or community, such as manipulating the market (for example, Pump and Dump) or participating in vote-rigging</li> <li class="svelte-1kcnp7d">If you have any issues or concerns regarding the conduct of another CHIAO member, please contact an elected lead rather than addressing them in the discord server, or publicly</li> <li class="svelte-1kcnp7d">Violation of any of these rules may result in temporary or permanent revocation of access to the Discord community, any punishment will be discussed and voted upon among the CHIAO</li></ol></div> </section>`;
});
const LoadingSquare_svelte_svelte_type_style_lang = "";
const Collection_svelte_svelte_type_style_lang = "";
const TreeHollow_svelte_svelte_type_style_lang = "";
const TheGallery_svelte_svelte_type_style_lang = "";
const TheChiao_svelte_svelte_type_style_lang = "";
const css = {
  code: ".toShow.svelte-19etg2j{display:grid;grid-template-columns:1fr 1fr 1fr 1fr}.button.svelte-19etg2j{padding:0.5rem 1rem;margin:1rem;border:2px white solid;border-radius:0.25rem;background-color:inherit;color:white;box-shadow:1px 1px 5px rgb(255 255 255 / 0.3);transition:all 0.5s ease}.button.svelte-19etg2j:hover{background-color:white;color:black;cursor:pointer}.selected.svelte-19etg2j{background-color:white;color:black}@media screen and (max-width: 768px){.toShow.svelte-19etg2j{grid-template-columns:1fr 1fr}button.svelte-19etg2j{margin:0.5rem}}@media screen and (max-width: 400px){.toShow.svelte-19etg2j{grid-template-columns:1fr}}",
  map: null
};
const TheChiao = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <section class="container"><h1 class="heading" data-svelte-h="svelte-1xjbaps">The Chiao</h1> <div class="toShow svelte-19etg2j"><button class="${"button " + escape("selected", true) + " svelte-19etg2j"}">Structure</button> <button class="${"button " + escape("", true) + " svelte-19etg2j"}">Our Vision</button> <button class="${"button " + escape("", true) + " svelte-19etg2j"}">The Gallery</button> <button class="${"button " + escape("", true) + " svelte-19etg2j"}">The Tree Hollow</button></div> ${`${validate_component(Structure, "Structure").$$render($$result, {}, {}, {})}`} ${validate_component(BackToTop, "BackToTop").$$render($$result, {}, {}, {})} </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(TheChiao, "TheChiao").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
