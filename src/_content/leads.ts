import chimpions from "_content/chimpions.json";

export type Lead = {
  name: string;
  twitter?: string;
  discord?: string;
  title: string;
  chimp: { path: string; animationPath?: string };
};

export const leads: Lead[] = [
  {
    name: "Minne_ape_olis",
    twitter: "@minne_ape_olis",
    discord: "minne_ape_olis#5330",
    title: "Technology",
    chimp: chimpions[156],
  },
  {
    name: "Roninwar",
    twitter: "@RoninwarXZG",
    discord: "Roninwar#4054",
    title: "Communications",
    chimp: chimpions[115],
  },

  {
    name: "Thesis Investor",
    twitter: "@ThesisInvestor",
    discord: "DR1V1R#2245",
    title: "Communications",
    chimp: chimpions[153],
  },
  {
    name: "Brink",
    twitter: "@Brink_Brinker",
    discord: "Brink#0001",
    title: "Curator",
    chimp: chimpions[134],
  },
  {
    name: "MaxBrs",
    twitter: "@Max___Brs",
    discord: "MaxBrs ⛏#5204",
    title: "Opportunities",
    chimp: chimpions[145],
  },
  {
    name: "Rak",
    twitter: "@an0rak7",
    discord: "an0rak7#0001",
    title: "Curator",
    chimp: chimpions[83],
  },
  {
    name: "Katsu",
    twitter: "@katsudon_sol",
    discord: "katsudon#7432",
    title: "Technology",
    chimp: chimpions[178],
  },

  {
    name: "Dwunk",
    twitter: "@dwunkdwunk",
    discord: "Dwunk#4299",
    title: "Opportunities",
    chimp: chimpions[208],
  },
  {
    name: "Sal",
    twitter: "@holl0vv",
    discord: "hollow#0510",
    title: "Communications",
    chimp: chimpions[70],
  },
  {
    name: "Jota",
    twitter: "@JotaDotSol",
    discord: "Jota#0002",
    title: "Technology",
    chimp: chimpions[81],
  },
  {
    name: "Doudou",
    twitter: "@notdoudou_sol",
    discord: "Doudou#0001",
    title: "Technology",
    chimp: chimpions[1],
  },
];
