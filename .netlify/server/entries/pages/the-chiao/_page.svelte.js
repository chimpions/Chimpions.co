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
  code: ".sectionContainer.svelte-1isbagu.svelte-1isbagu{width:100%;margin-bottom:6rem}ul.svelte-1isbagu.svelte-1isbagu{margin:0 0 3rem 0;line-height:1.25rem;letter-spacing:0.05rem;font-size:0.875rem;color:var(--whiter-purple)}ol.svelte-1isbagu li.svelte-1isbagu{margin:1rem}.CEO.svelte-1isbagu.svelte-1isbagu{margin:auto;display:grid;grid-template-columns:250px;width:fit-content;justify-items:center}.council.svelte-1isbagu.svelte-1isbagu{--numberOfColumns:1;--column-gap:calc(80vw - var(--numberOfColumns) * 250px);margin:auto;display:grid;grid-template-columns:repeat(var(--numberOfColumns), 250px);width:fit-content;row-gap:calc(var(--column-gap) /3);column-gap:var(--column-gap);justify-items:center}@media screen and (min-width: 700px){.council.svelte-1isbagu.svelte-1isbagu{--numberOfColumns:2;--column-gap:calc((80vw - var(--numberOfColumns) * 250px) / var(--numberOfColumns));row-gap:calc(var(--column-gap) * 350 / 250)}}@media screen and (min-width: 900px){.council.svelte-1isbagu.svelte-1isbagu{--numberOfColumns:3}}@media screen and (min-width: 1100px){.council.svelte-1isbagu.svelte-1isbagu{--numberOfColumns:4}}@media screen and (min-width: 1400px){.council.svelte-1isbagu.svelte-1isbagu{--numberOfColumns:5}}.lead-box.svelte-1isbagu.svelte-1isbagu{margin:1rem}.chimpImage.svelte-1isbagu.svelte-1isbagu{max-width:200px;border-radius:0.25rem;width:100%}.leadDescription.svelte-1isbagu.svelte-1isbagu{max-width:200px;border-radius:0.25rem;margin-top:0.25rem;padding:0.25rem;color:white}.leadName.svelte-1isbagu.svelte-1isbagu{text-align:center;margin-bottom:0.25rem}.leadTwitterAndDiscord.svelte-1isbagu.svelte-1isbagu{display:flex;justify-content:center;align-items:center;column-gap:0.25rem;font-size:0.75rem;line-height:1rem;text-align:center;user-select:none;opacity:0.8;transition:opacity 0.3s ease}.leadTwitterAndDiscord.svelte-1isbagu.svelte-1isbagu:hover{opacity:1;transition:opacity 0.3s ease}@media(max-width: 768px){.leadName.svelte-1isbagu.svelte-1isbagu{font-size:0.875rem}.leadTwitterAndDiscord.svelte-1isbagu.svelte-1isbagu{font-size:0.625rem}}a.svelte-1isbagu.svelte-1isbagu{color:inherit}.subsectionParagraph.svelte-1isbagu.svelte-1isbagu{text-align:justify;line-height:1.5rem;letter-spacing:0.05rem;width:100%;opacity:0.8;margin-top:0.5rem;color:var(--purple-white)}.subsectionQuestion.svelte-1isbagu.svelte-1isbagu{font-size:1.125rem;width:100%;margin-top:0rem;letter-spacing:0.05em;color:var(--whiter-purple)}.subsectionAnswer.svelte-1isbagu.svelte-1isbagu{width:100%;margin-top:1rem;margin-bottom:0rem;line-height:1.5rem;letter-spacing:0.05rem;color:var(--purple-white);padding-left:1rem;border-left:2px currentColor solid}.qa.svelte-1isbagu.svelte-1isbagu{border-radius:0.25rem;background-color:rgb(31 6 56 / 1);padding:1rem;margin-top:1rem;margin-bottom:3rem}",
  map: null
};
const Structure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="sectionContainer svelte-1isbagu"><h2 class="subsectionHeading" data-svelte-h="svelte-uplj3o">FAQ</h2> <div class="qa svelte-1isbagu" data-svelte-h="svelte-v3abmz"><p class="subsectionQuestion svelte-1isbagu">When was the launch?</p> <p class="subsectionAnswer svelte-1isbagu">The Chimpions minted on January 31st, 2022 for 0.22 SOL.<br>The project utilized a 100% whitelist, 1-per-wallet approach.<br>Whitelists were offered via Discord/Twitter giveaways as well as through art and lore submissions.</p></div> <div class="qa svelte-1isbagu" data-svelte-h="svelte-1jobbg9"><p class="subsectionQuestion svelte-1isbagu">Where can I buy a Chimpion?</p> <p class="subsectionAnswer svelte-1isbagu">You can buy a Chimpion on <a href="https://www.tensor.trade/trade/the_chimpions" class="svelte-1isbagu">Tensor</a>.</p></div> <div class="qa svelte-1isbagu" data-svelte-h="svelte-10p0z1z"><p class="subsectionQuestion svelte-1isbagu">Why should I buy a Chimpion?</p> <p class="subsectionAnswer svelte-1isbagu">There are so many reasons to buy a Chimpion. We think some of the most compelling are detailed in these two threads by our leads (TLDR: art + alpha + community):<br> <li><a href="https://twitter.com/ThesisInvestor/status/1523642327419432961" target="_blank" class="svelte-1isbagu">ThesisInvestor&#39;s Tweet</a>.</li> <li><a href="https://twitter.com/max___brs/status/1508154075405193217" target="_blank" class="svelte-1isbagu">MaxBrs&#39; Tweet</a>.</li></p></div> <div class="qa svelte-1isbagu" data-svelte-h="svelte-18kbr10"><p class="subsectionQuestion svelte-1isbagu">Who leads the Chimpions?</p> <p class="subsectionAnswer svelte-1isbagu">The Chimpions have adapted to the ecosystem in which they live. Whereas a model where 10 Leads representing the Chimpions served them for just over a year, the Chimpions have decided to pivot to a governance model with a CEO.
                <br><br>
                The new model operates as follows:
                The chimpions elect a CEO from among the members of the previous board for a 6-month term.
                A new board is created from 10 volunteers chosen in order of the most active members of the community.</p></div> <div class="qa svelte-1isbagu" data-svelte-h="svelte-bplvmn"><p class="subsectionQuestion svelte-1isbagu">Is there an official Twitter account?</p> <p class="subsectionAnswer svelte-1isbagu">Here is our account: <a href="https://twitter.com/TheChimpions/" class="svelte-1isbagu">https://twitter.com/TheChimpions/</a>.<br>You can follow us to keep up to date with our latest news.</p></div> <div class="qa svelte-1isbagu" data-svelte-h="svelte-t51am6"><p class="subsectionQuestion svelte-1isbagu">Is there an official ranking?</p> <p class="subsectionAnswer svelte-1isbagu">No. Each Chimpion is a 1/1 NFT, so rarity is purely in the eyes of the beholder.</p></div> <div class="qa svelte-1isbagu" data-svelte-h="svelte-1jw8epg"><p class="subsectionQuestion svelte-1isbagu">What else should I know?</p> <p class="subsectionAnswer svelte-1isbagu">The Chimpions are a tight knit community. If you have a question, don’t hesitate to ask on <a href="https://twitter.com/TheChimpions/" class="svelte-1isbagu">Twitter</a> or on <a href="https://discord.gg/thechimpions" class="svelte-1isbagu">Discord</a>.</p></div> <h2 class="subsectionHeading" data-svelte-h="svelte-1sg7mmu">The CEO</h2> <div class="subsectionParagraph svelte-1isbagu" data-svelte-h="svelte-4vaox0"><p>For this first term running from July 17, 2023 to January 17, 2024, Doudou has been elected CEO.</p> <p>Missions:</p> <ul class="svelte-1isbagu"><li>Make the Chimpions prosper</li> <li>Satisfy CHIAO&#39;s requests</li> <li>Manage the Treasury</li></ul></div> <div class="CEO svelte-1isbagu"><div class="lead-box svelte-1isbagu"><img class="chimpImage svelte-1isbagu"${add_attribute("src", chimpions[1].paths.gif, 0)} alt="Chimpion of Doudou"> <div class="leadDescription svelte-1isbagu"><div class="leadName svelte-1isbagu" data-svelte-h="svelte-1gp6b5g">Doudou</div> <div class="leadTwitterAndDiscord svelte-1isbagu">${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "sm" }, {}, {})} <a href="https://twitter.com/notdoudou_sol" target="_blank" rel="noreferrer" style="color: inherit; text-decoration:none; cursor:pointer;" class="svelte-1isbagu" data-svelte-h="svelte-aj1c2b">@notdoudou_sol</a></div> <div class="leadTwitterAndDiscord svelte-1isbagu">${validate_component(Fa, "Fa").$$render($$result, { icon: faDiscord, size: "sm" }, {}, {})}
                    notdoudou_sol</div></div></div></div> <h2 class="subsectionHeading" data-svelte-h="svelte-1ttyuf8">The Council</h2> <div class="subsectionParagraph svelte-1isbagu" data-svelte-h="svelte-131sctx"><p>The Council is the intermediary between the CEO and the CHIAO.</p>
        Missions:
        <ul class="svelte-1isbagu"><li>Secure the CHIAO treasury by validating the transactions</li> <li>Support the CEO in decision-making</li> <li>Vote to dismiss the CEO in case of profound disagreement with the actions taken</li></ul> <p>The current Council members are :</p></div> <div class="council svelte-1isbagu">${each(council, (councilMember) => {
    return `<div class="lead-box svelte-1isbagu"><img class="chimpImage svelte-1isbagu"${add_attribute("src", councilMember.chimp.paths.gif, 0)} alt="${"Chimpion of " + escape(councilMember.name, true)}"> <div class="leadDescription svelte-1isbagu"><div class="leadName svelte-1isbagu">${escape(councilMember.name)}</div> <div class="leadTwitterAndDiscord svelte-1isbagu">${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "sm" }, {}, {})} <a href="${"https://twitter.com/" + escape(councilMember.twitter, true)}" target="_blank" rel="noreferrer" style="color: inherit; text-decoration:none; cursor:pointer;" class="svelte-1isbagu">${escape(councilMember.twitter)}</a></div> <div class="leadTwitterAndDiscord svelte-1isbagu">${validate_component(Fa, "Fa").$$render($$result, { icon: faDiscord, size: "sm" }, {}, {})} ${escape(councilMember.discord)} </div></div> </div>`;
  })}</div> <h2 class="subsectionHeading" data-svelte-h="svelte-zd1upy">Code of Conduct</h2> <div class="subsectionParagraph svelte-1isbagu" data-svelte-h="svelte-wdxkl3"><p>The Code of Conduct describes the desired behaviour and actions for all members of the CHIAO, and is tacitly accepted by joining The Chimpions community.</p> <p>In The Chimpions we promote a respectful, family atmosphere. We seek to empower community members to be the best they can be. Members should be aware of the code of conduct and attempt to always act within the bounds herein for the continued good of the community as a whole.</p> <ol class="svelte-1isbagu"><li class="svelte-1isbagu">Strive to be excellent to all people and help whenever possible</li> <li class="svelte-1isbagu">Treat each other with kindness and respect, and foster an inclusive environment for all</li> <li class="svelte-1isbagu">Remember that your actions reflect on the entire Chimpions community, especially if you use a Chimpion as your profile picture on social media</li> <li class="svelte-1isbagu">Do not spam the discord channels with irrelevant messages or content</li> <li class="svelte-1isbagu">Do not attempt to scam or deceive other members of the community or anyone outside of the community</li> <li class="svelte-1isbagu">Do not engage in any discriminatory or hateful behaviour, including but not limited to racism, sexism, homophobia</li> <li class="svelte-1isbagu">Avoid engaging in any behaviour that could be perceived as harassment, intimidation, or bullying towards other members</li> <li class="svelte-1isbagu">Community Members can not loan their Chimpions to anyone for temporary access to the CHIAO benefits such as Whitelists or VC Deals</li> <li class="svelte-1isbagu">Do not share or distribute any personal or confidential information of other members without their explicit consent</li> <li class="svelte-1isbagu">Do not engage in any unethical or fraudulent NFT or cryptocurrency trading practices, such as, but not limited to, buying NFTs with stolen or fake funds, or selling NFTs that you do not own or have the right to sell</li> <li class="svelte-1isbagu">Do not engage in any activities that would harm the integrity or value of the Chimpions NFT collection or community, such as manipulating the market (for example, Pump and Dump) or participating in vote-rigging</li> <li class="svelte-1isbagu">If you have any issues or concerns regarding the conduct of another CHIAO member, please contact an elected lead rather than addressing them in the discord server, or publicly</li> <li class="svelte-1isbagu">Violation of any of these rules may result in temporary or permanent revocation of access to the Discord community, any punishment will be discussed and voted upon among the CHIAO</li></ol></div> </section>`;
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
