import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, n as null_to_empty, e as each, a as subscribe } from "../../../../chunks/ssr.js";
import { h as holders } from "../../../../chunks/holders.js";
import { p as page } from "../../../../chunks/stores.js";
import { N as NotFound } from "../../../../chunks/NotFound.js";
import { F as Fa } from "../../../../chunks/fa.js";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { c as chimpions } from "../../../../chunks/chimpions.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
import { C as Card } from "../../../../chunks/card.js";
const palmora = {
  wallets: [
    "7894Xg9AAFPiMpVY65UWmFzLUXgRoNhKPyNc2QnyoCJ2"
  ],
  chimpions: [
    "TheBubbly"
  ],
  pfp: "/images/compressed-pfps/palmora.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Visery = {
  wallets: [
    "G8YTPi8pHbfUeFbpwxaGbS8zywva1LwRM6Cmf9MDnmCR"
  ],
  chimpions: [
    "TheHellion"
  ],
  pfp: "/images/compressed-pfps/Visery.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const ThunderBear = {
  wallets: [
    "Ga1d3vk3qi85gz1fnG2nkZMRCZ5aV3s5cK6UT6pipYpN",
    "J8mwJfwEJ4eHpWi3nizgZkjjtxxz2zJWWStQtFqgKwiS",
    "srgPHxmybW2ErMzfig18NsKwE3umS3KEuYdKP5BgxPz"
  ],
  chimpions: [
    "TheLightInShadow",
    "TheTimeworn",
    "TheShieldBearer",
    "TheCommodore",
    "TheEmaciated",
    "TheMilitant",
    "TheRemnant",
    "TheCursed",
    "TheAureate",
    "TheSquire",
    "TheHardwired",
    "ThePlumber",
    "TheTestSubject",
    "TheSummoner",
    "TheGolem",
    "TheOrdained",
    "TheAberration",
    "TheYouthful",
    "TheSpiritKeeper",
    "TheCybernetic",
    "TheDormant",
    "TheBored",
    "TheBonesmith",
    "TheMartialArtist",
    "TheLeftHand"
  ],
  pfp: "/images/compressed-pfps/ThunderBear.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": true,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const SolBigBrain = {
  wallets: [
    "2sFenzGQwUgQtqU5fy8Uysz4GY91eyM6NARSkpFivgna",
    "25TYJVvSFHdjiuu5YRMDspFmg4jMmJB9PZfw6SidN1je"
  ],
  chimpions: [
    "TheFrozen",
    "TheOathkeeper",
    "TheWithered",
    "TheDoctor"
  ],
  pfp: "/images/compressed-pfps/SolBigBrain.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Pwenguin = {
  wallets: [
    "44CMhAJgCV25pSWvPxm7VrgjDRiW96p8acnQvpdbLM9W"
  ],
  chimpions: [
    "TheRancher"
  ],
  pfp: "/images/compressed-pfps/Pwenguin.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const F2LKKz4oq8TFaA1zYqJVWcj9n3ZFKAocDqwgaW6Wgps9 = {
  wallets: [
    "F2LKKz4oq8TFaA1zYqJVWcj9n3ZFKAocDqwgaW6Wgps9"
  ],
  chimpions: [
    "TheHost",
    "TheConstantCompanion"
  ],
  pfp: "/images/compressed-pfps/F2LKKz4oq8TFaA1zYqJVWcj9n3ZFKAocDqwgaW6Wgps9.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const an0rak07 = {
  wallets: [
    "GseLTxZXi2HdyU3YgFVzktzaB6SCUZPYpowVCrx8EU8D"
  ],
  chimpions: [
    "TheFuturist",
    "TheTrained"
  ],
  pfp: "/images/compressed-pfps/an0rak07.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Soledge = {
  wallets: [
    "Dy8d2rZBvYpEzSajH47GruLi4wDEJdenBoofFYvnXXns"
  ],
  chimpions: [
    "TheBlazing"
  ],
  pfp: "/images/compressed-pfps/Soledge.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": true,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const zachary = {
  wallets: [
    "GxJukaJRcgzz8HJpdQTBaRiRH2yaBKPuMUtR4r82a1p7"
  ],
  chimpions: [
    "TheMessenger"
  ],
  pfp: "/images/compressed-pfps/zachary.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const murath = {
  wallets: [
    "9zjxoKgsQSkcUTv7P4fSYDPFFQn2fUCy7pSwM27dc1jn"
  ],
  chimpions: [
    "TheVassal"
  ],
  pfp: "/images/compressed-pfps/murath.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const dabums3 = {
  wallets: [
    "BV4bgjnHfmWvwa1fGtHdjxv1S1HQ3H5z6h4k41igz99U"
  ],
  chimpions: [
    "TheWatchman"
  ],
  pfp: "/images/compressed-pfps/dabums3.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const NotDoudou = {
  wallets: [
    "JCfN3HU8Ji9TFBUVdQY5kbximweEhVgx2dM11ZLWJA9H",
    "DCrUzchP8h1B1fHYhNNE1xN5Rs5bkQU1y6VrhJpVfJMR",
    "Doudouiw35DhHz79MxW679fNEZ1Mi4fyo1UtG2Xd57iQ"
  ],
  chimpions: [
    "TheGhastly",
    "TheEvaluator",
    "TheFirewatch",
    "TheColorful",
    "TheBeacon",
    "ThePaladin",
    "TheKnightCompanion",
    "TheAchromatic",
    "TheJudge",
    "ThePackLeader",
    "TheJovian",
    "TheEdgy",
    "TheHunter"
  ],
  pfp: "/images/compressed-pfps/NotDoudou.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": true,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Vell = {
  wallets: [
    "DwGYXjFaWDfbu3GHZ8oKBafMxuuW3bUrrRmDvPLvxcfD"
  ],
  chimpions: [
    "TheTattered"
  ],
  pfp: "/images/compressed-pfps/Vell.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const bipkoyn = {
  wallets: [
    "CQUTdvx2e9xnsgabMvJ2CEnXFeZ54C5NqZjCtCgpfkKP"
  ],
  chimpions: [
    "TheJuror"
  ],
  pfp: "/images/compressed-pfps/bipkoyn.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Grooovy = {
  wallets: [
    "9LB76M6iLW2kectygdGN7S5vkJzwEQoBn93gc2HXcTey"
  ],
  chimpions: [
    "TheCeremonial"
  ],
  pfp: "/images/compressed-pfps/Grooovy.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const zekarodzer = {
  wallets: [
    "CgW1Tj6g51u2DtMgUGmyx7TPNZGgn3LHPZwVWxXpu4VD"
  ],
  chimpions: [
    "TheRitualist"
  ],
  pfp: "/images/compressed-pfps/zekarodzer.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const futuristics0l = {
  wallets: [
    "BGDaVT8Buzdrhvz75edDmN3FGpZHfPYUdzdTZwLwcU7q"
  ],
  chimpions: [
    "TheKnightCommander"
  ],
  pfp: "/images/compressed-pfps/futuristics0l.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const H71yxeDHUd8A1HhNpHtcnQYmvBmdimSo87sjwau4wy3A = {
  wallets: [
    "5zizoqbNgmdgwGpmw6vHR4zMGk4cuUuuFt9USvKPLnn2"
  ],
  chimpions: [
    "TheSocial"
  ],
  pfp: "/images/compressed-pfps/H71yxeDHUd8A1HhNpHtcnQYmvBmdimSo87sjwau4wy3A.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Dutch = {
  wallets: [
    "A5XfjrJfYznBXQ5asMLqj7HrM1w9qmSUQb1wtHsMpL4C"
  ],
  chimpions: [
    "TheScorched"
  ],
  pfp: "/images/compressed-pfps/Dutch.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const FokcyAi3xEeJXxmKNuy7Smg4J2VK8uHFvsnnK7PUMw8X = {
  wallets: [
    "CLhcxUfiUA6pmLkKYQu5MhDTEUVmDkAuVvbzspA5tbj7"
  ],
  chimpions: [
    "TheLover"
  ],
  pfp: "/images/compressed-pfps/FokcyAi3xEeJXxmKNuy7Smg4J2VK8uHFvsnnK7PUMw8X.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const dasein2249 = {
  wallets: [
    "JCRFyCgqDZAyjBUf3cCL7abw5FpUpd2FQb3hTRJpQJR3"
  ],
  chimpions: [
    "TheStatic"
  ],
  pfp: "/images/compressed-pfps/dasein2249.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Marculinopng = {
  wallets: [
    "4jKL6AZCUr8xT9dQN4jD7ZkCjJqdWPbtqkkSzNGZoDxX"
  ],
  chimpions: [
    "TheCultist"
  ],
  pfp: "/images/compressed-pfps/Marculinopng.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const nicksaywhat = {
  wallets: [
    "D36aPW2xnnRX9MDp1sdTuHk9vSsdPJUgQU3igajkRQW"
  ],
  chimpions: [
    "TheJoyful"
  ],
  pfp: "/images/compressed-pfps/nicksaywhat.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Akaba = {
  wallets: [
    "7AVuVdWJnKKtBvebsmsYfhUAbzWJf6cMfp2UPhN2uerd"
  ],
  chimpions: [
    "TheHeroic"
  ],
  pfp: "/images/compressed-pfps/Akaba.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": false
  }
};
const donkatsu = {
  wallets: [
    "5vjgMnwP1SPCFcDvfJSUSrDheJwVZ9RW9pWm2PFANEkx"
  ],
  chimpions: [
    "TheRocker"
  ],
  pfp: "/images/compressed-pfps/donkatsu.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const EE9PmcDQ3aGNxJ8iP6jqKRf95DdaU7dJwEQ8m3DBUo1p = {
  wallets: [
    "PuSxwQc9Pzc1R7e94VY4aanr2vR6fSxiAFLCsGrdiGx"
  ],
  chimpions: [
    "TheRoyal"
  ],
  pfp: "/images/compressed-pfps/EE9PmcDQ3aGNxJ8iP6jqKRf95DdaU7dJwEQ8m3DBUo1p.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": false
  }
};
const mebbs = {
  wallets: [
    "H68fEf6LE9F6nFmkkmjT4yaA7zCdJixhoK1BZZbWwJwp"
  ],
  chimpions: [
    "TheSpelunker"
  ],
  pfp: "/images/compressed-pfps/mebbs.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const PunkMonke = {
  wallets: [
    "HiuTF84WysMp3K1opSzFdXzKxi7hdLJ8nqcgUfDMaNVe"
  ],
  chimpions: [
    "ThePunk"
  ],
  pfp: "/images/compressed-pfps/PunkMonke.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const GJB2kQRLoRyTwaY11WCk9D8ZvKo2XAgT27xNGjxPQ58B = {
  wallets: [
    "GJB2kQRLoRyTwaY11WCk9D8ZvKo2XAgT27xNGjxPQ58B"
  ],
  chimpions: [
    "TheIrradiated"
  ],
  pfp: "/images/compressed-pfps/GJB2kQRLoRyTwaY11WCk9D8ZvKo2XAgT27xNGjxPQ58B.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Wald = {
  wallets: [
    "7BcUejMJe2SWf9FQtgTzkCKbMURGWdLfzUBySpQA24et"
  ],
  chimpions: [
    "TheOmniscient"
  ],
  pfp: "/images/compressed-pfps/Wald.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Rheld = {
  wallets: [
    "Au1By68c45zuU9wiCu9mj6LqH4eBN9md3dnkRoQTn22h"
  ],
  chimpions: [
    "TheOfficer"
  ],
  pfp: "/images/compressed-pfps/Rheld.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const EaeMcN6KWaVTa2iu2MVGC6uVAxes7xJVnSoEjbQ5MyAL = {
  wallets: [
    "6dfPPZ1KFEkEfSwdrLRC82XuMz2oPN5xdFJHQw1saAqv"
  ],
  chimpions: [
    "TheProfessional"
  ],
  pfp: "/images/compressed-pfps/EaeMcN6KWaVTa2iu2MVGC6uVAxes7xJVnSoEjbQ5MyAL.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const CMC81 = {
  wallets: [
    "3iPCBH8M2RR3LMLdwjbg8mhWVPoqSJoVXZBycRkdVNSb",
    "93eGqLb8cm7VFwotx6MiM7APvENmg9yw8p7NFH3wRDxZ"
  ],
  chimpions: [
    "ThePatrolman",
    "TheEradicator"
  ],
  pfp: "/images/compressed-pfps/CMC81.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Dappearl = {
  wallets: [
    "2htFTcMyY6kuW4w4751WeR4YmyuWLnEzK6myxkZBFKtn"
  ],
  chimpions: [
    "TheRightHand"
  ],
  pfp: "/images/compressed-pfps/Dappearl.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const phant0m = {
  wallets: [
    "6MHJ9GFNyrto2hr5xU2QMCNdbKvNUJcvtBUJVqj1dTym"
  ],
  chimpions: [
    "TheShogun",
    "TheWitchDoctor"
  ],
  pfp: "/images/compressed-pfps/phant0m.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const koreancatdog = {
  wallets: [
    "BGYW5TFm7kYh3SAVgzUu6VKAWqDLx9Wn9CtS8SaDsK9N"
  ],
  chimpions: [
    "TheIndecisive"
  ],
  pfp: "/images/compressed-pfps/koreancatdog.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const meddler = {
  wallets: [
    "CBR2qAFXpssSooWRESvXV3zh3xr2TqVXLsVU36uR3L7Y"
  ],
  chimpions: [
    "TheConcealed"
  ],
  pfp: "/images/compressed-pfps/meddler.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const eddierebel = {
  wallets: [
    "ADSBMcKb8fTmZJCEGUGKXFFyQJxXEXooeCTpmr3Uqyef"
  ],
  chimpions: [
    "TheHip"
  ],
  pfp: "/images/compressed-pfps/eddierebel.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const KenGoh = {
  wallets: [
    "6kZUFXLoNwDARuFkrHGqW18SdSwnkZEL3zoZ4thGuLgD"
  ],
  chimpions: [
    "TheHighPriest"
  ],
  pfp: "/images/compressed-pfps/KenGoh.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": true,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const HFP = {
  wallets: [
    "HFPaT6WKk9SkwtYVZ5m5Sqw7ZbyehGu9GHjsctigm49S"
  ],
  chimpions: [
    "TheHollow"
  ],
  pfp: "/images/compressed-pfps/HFP.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Jotatavo = {
  wallets: [
    "CVHnMEjMyBqdT8458SNvkb6vCzfkWsfVVCmhFoxLR9ep"
  ],
  chimpions: [
    "TheFriendly"
  ],
  pfp: "/images/compressed-pfps/Jotatavo.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const heleemelon = {
  wallets: [
    "BCF6fdgHytx7ivrkSVEEngUnbA7s7qkTfLe4b3Rpk95G"
  ],
  chimpions: [
    "TheUnknowable"
  ],
  pfp: "/images/compressed-pfps/heleemelon.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const iamlaurael = {
  wallets: [
    "GTP4g1at8tUnDnsPUfVkgB4wQYCBZnV6WMfbVLbHCdYv"
  ],
  chimpions: [
    "TheGilded"
  ],
  pfp: "/images/compressed-pfps/iamlaurael.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const EWweH6VE7ifGwb7ocuQCrNK3PbqhDwdZ4TJrbpfARvBL = {
  wallets: [
    "Et5d2EzhUtGt2AA8rm1Gqj2pxRCTvcUmYAGJ8g74iq5g"
  ],
  chimpions: [
    "TheIllustrator"
  ],
  pfp: "/images/compressed-pfps/EWweH6VE7ifGwb7ocuQCrNK3PbqhDwdZ4TJrbpfARvBL.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": false
  }
};
const Ap3s6w9zkKSyTvt3Gpc2kubEwYGo4veiRADgqqdW3767 = {
  wallets: [
    "fppWEaJFy8gXoWmuWok3KV1SDN3A6FwPnZJrWchFY8s",
    "Ap3s6w9zkKSyTvt3Gpc2kubEwYGo4veiRADgqqdW3767"
  ],
  chimpions: [
    "TheSurvivor",
    "TheHeretic"
  ],
  pfp: "/images/compressed-pfps/Ap3s6w9zkKSyTvt3Gpc2kubEwYGo4veiRADgqqdW3767.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const konstantina = {
  wallets: [
    "CwrWGN7RXGGe4XTD4BYJKYmHjdeiKvXGQ4Si2jEQduxh"
  ],
  chimpions: [
    "TheEphemeral"
  ],
  pfp: "/images/compressed-pfps/konstantina.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const mikethompson = {
  wallets: [
    "43eQfPurWf2ZwaovzteijSXrT9ATWYkXQkCw9q9nVNqu"
  ],
  chimpions: [
    "TheWartorn"
  ],
  pfp: "/images/compressed-pfps/mikethompson.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const mulletmusketeer = {
  wallets: [
    "EkExbysCPaWtPyvKYKsPnpuZxzfFubVKg9Ri6qrV5gTm"
  ],
  chimpions: [
    "TheOffworlder"
  ],
  pfp: "/images/compressed-pfps/mulletmusketeer.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const mccapital = {
  wallets: [
    "5eTF55jK4SQT4HE5m8w8PSSMn3Cy2D6KRgaFqApU1VGg"
  ],
  chimpions: [
    "TheEnforcer"
  ],
  pfp: "/images/compressed-pfps/mccapital.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Alkine = {
  wallets: [
    "5aXZdi9QLt7yUbvJ7XSD4PbVCArmdrw2XvjXFp7EtsTV"
  ],
  chimpions: [
    "TheOverflowing"
  ],
  pfp: "/images/compressed-pfps/Alkine.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const ED8qVQFtrHWVb7625mCqcTrJGFJ5HFqZF86F2FsbF3BH = {
  wallets: [
    "ED8qVQFtrHWVb7625mCqcTrJGFJ5HFqZF86F2FsbF3BH"
  ],
  chimpions: [
    "TheEncased"
  ],
  pfp: "/images/compressed-pfps/ED8qVQFtrHWVb7625mCqcTrJGFJ5HFqZF86F2FsbF3BH.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const NOED = {
  wallets: [
    "EdwNvgXtTCxHdBAkMnJbMwfzWJ1BCF2P3FHDK6fNLaiK"
  ],
  chimpions: [
    "TheAdolescent"
  ],
  pfp: "/images/compressed-pfps/NOED.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const wu = {
  wallets: [
    "2ztQkQddhyhWi36dLECPB9Ktw5aATmvzeyurTcGvrtDs"
  ],
  chimpions: [
    "TheDreamer"
  ],
  pfp: "/images/compressed-pfps/wu.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const HJrYczWnCWYRdvTEzHhrvNB7foHSjG58WEcHgPLBn4TT = {
  wallets: [
    "HJrYczWnCWYRdvTEzHhrvNB7foHSjG58WEcHgPLBn4TT"
  ],
  chimpions: [
    "TheGangster",
    "TheStreetFighter"
  ],
  pfp: "/images/compressed-pfps/HJrYczWnCWYRdvTEzHhrvNB7foHSjG58WEcHgPLBn4TT.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const PNP = {
  wallets: [
    "GymubUBcEtce529CFmQ9cG8niVbfp451Na1AmbgoNrrZ"
  ],
  chimpions: [
    "TheMeathead"
  ],
  pfp: "/images/compressed-pfps/PNP.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const CryptoDriller = {
  wallets: [
    "CoZ4dUi7BTBNV8nfgxirXcAQxciiem8chB26BubrEa7R"
  ],
  chimpions: [
    "TheBeholder"
  ],
  pfp: "/images/compressed-pfps/CryptoDriller.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Hyblinxxx = {
  wallets: [
    "HgbPedpz5ykmBsU2mKDrntfhS1tRNbTJjybnYoRBGL8T"
  ],
  chimpions: [
    "TheMainCharacter"
  ],
  pfp: "/images/compressed-pfps/Hyblinxxx.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const gl00m = {
  wallets: [
    "2QZrCwwqRiSMX2kzbdhJxNkr55evjf6fmBNUnvifZ4WR"
  ],
  chimpions: [
    "TheEnvoy"
  ],
  pfp: "/images/compressed-pfps/gl00m.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const AXA8gaik3ckUTjK1hLDBC7quVGgvgjKPZFai3d8zceTA = {
  wallets: [
    "yxJHJXqmo5vmJUGqizHRJyPezrGsv8Ze7YyQr3sKpf3"
  ],
  chimpions: [
    "TheProgrammed"
  ],
  pfp: "/images/compressed-pfps/AXA8gaik3ckUTjK1hLDBC7quVGgvgjKPZFai3d8zceTA.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Polkjia = {
  wallets: [
    "83MjQFAMNFePPKRBzXRVuPSTDfWunDAjEDzysN4UxCSU"
  ],
  chimpions: [
    "TheEnraged"
  ],
  pfp: "/images/compressed-pfps/Polkjia.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const GPKBo1rEhz5SafcAw3k6PUHeYcjXpwxeFwuQhTZJ6YsP = {
  wallets: [
    "7EWVmRS39upz4rxmj69eJsTEKHEPU5FYdD8Yjrba4kjB"
  ],
  chimpions: [
    "TheImperial"
  ],
  pfp: "/images/compressed-pfps/GPKBo1rEhz5SafcAw3k6PUHeYcjXpwxeFwuQhTZJ6YsP.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const genuinearticles = {
  wallets: [
    "394iV6GMbpAr1VFMQJuFyLfPg3iw54ZohBqUsY8mGRfL"
  ],
  chimpions: [
    "TheWondrous"
  ],
  pfp: "/images/compressed-pfps/genuinearticles.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Rick009 = {
  wallets: [
    "Lefsq3Ei8VdCCDLULHUAgx4g1rMgt5Rm9a1fkT1mmwg"
  ],
  chimpions: [
    "ThePreeminent"
  ],
  pfp: "/images/compressed-pfps/Rick009.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const DEGENAPES = {
  wallets: [
    "5dwGQWdzpkDseKTZyVWVpNM1nGBuophkVUwstj3f2uoL"
  ],
  chimpions: [
    "TheInsomniac"
  ],
  pfp: "/images/compressed-pfps/DEGENAPES.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const OneEngineer = {
  wallets: [
    "1eng1Eg2KVash5wXZMt2TRZm7nPXSoDZSwtzsporKXb"
  ],
  chimpions: [
    "TheAutomaton"
  ],
  pfp: "/images/compressed-pfps/OneEngineer.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const drelasol = {
  wallets: [
    "EP1rvLC4Mm4TJbaHMTjbwgze2jpggJxAHphk65NTAdsT"
  ],
  chimpions: [
    "TheOtherworldly"
  ],
  pfp: "/images/compressed-pfps/drelasol.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const ExpliciT = {
  wallets: [
    "EZhRx2vRP4SzB6MTyzYa3Z8AegyWYJDTxnY2QY7P4jvm"
  ],
  chimpions: [
    "TheSultan"
  ],
  pfp: "/images/compressed-pfps/ExpliciT.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const huatrabbit = {
  wallets: [
    "BBMRzqrFS3FQ7CDYesyjdKQV7mTLiBZwWJuj4wy3P68o"
  ],
  chimpions: [
    "TheOneWhoRocksHard",
    "TheZealous",
    "TheAgitator",
    "TheInstrument"
  ],
  pfp: "/images/compressed-pfps/huatrabbit.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const BAfSP8fqeeyGeewgdq6C8rQHVvjoFjSUUfPfooCSWZFr = {
  wallets: [
    "BAfSP8fqeeyGeewgdq6C8rQHVvjoFjSUUfPfooCSWZFr"
  ],
  chimpions: [
    "TheMechanized"
  ],
  pfp: "/images/compressed-pfps/BAfSP8fqeeyGeewgdq6C8rQHVvjoFjSUUfPfooCSWZFr.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const bmn = {
  wallets: [
    "2sJjz76VB1kdCYTX7DBR9gBPDDe58YToYPWm6fUdnL9g"
  ],
  chimpions: [
    "TheAncestral"
  ],
  pfp: "/images/compressed-pfps/bmn.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const kqek2ij4RLgcm9fYQ855zn9AL5ND75zkwFteujCvcHc = {
  wallets: [
    "kqek2ij4RLgcm9fYQ855zn9AL5ND75zkwFteujCvcHc"
  ],
  chimpions: [
    "TheStudious"
  ],
  pfp: "/images/compressed-pfps/kqek2ij4RLgcm9fYQ855zn9AL5ND75zkwFteujCvcHc.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Fi3ytMzX8P2Zb7cDjS7gzwxAXmndJbSbbG4rbS2XVwEz = {
  wallets: [
    "Fi3ytMzX8P2Zb7cDjS7gzwxAXmndJbSbbG4rbS2XVwEz"
  ],
  chimpions: [
    "TheOneWhoLurksInShadow"
  ],
  pfp: "/images/compressed-pfps/Fi3ytMzX8P2Zb7cDjS7gzwxAXmndJbSbbG4rbS2XVwEz.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const hamster = {
  wallets: [
    "EUyDBRrEMYStndhK7LgecefHUn4nzPmPGNUJ5xuvMkZQ"
  ],
  chimpions: [
    "TheWarlike"
  ],
  pfp: "/images/compressed-pfps/hamster.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const SKUX = {
  wallets: [
    "2KcZVqaJZMCxs8QRUcMjqWGFz3u91xU35oKM1PATifdx"
  ],
  chimpions: [
    "ThePtolemaic",
    "TheReversed",
    "TheCelestial"
  ],
  pfp: "/images/compressed-pfps/SKUX.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Whyde2 = {
  wallets: [
    "Hdo42FLav4EusZJvqNiAjG5kh4oYBg596ADPK1z7oahn"
  ],
  chimpions: [
    "TheExpressive"
  ],
  pfp: "/images/compressed-pfps/Whyde2.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Thesis = {
  wallets: [
    "3zny73kiEqHBnVDjZ13giy2q5aCMibkyaaA2EbqjPGZa"
  ],
  chimpions: [
    "TheComedian"
  ],
  pfp: "/images/compressed-pfps/Thesis.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Aure64 = {
  wallets: [
    "DzmiyYfLkPdPxf9CswQZnK7RyJHnBJ9vgjauT6kEGioK"
  ],
  chimpions: [
    "TheTechnophile"
  ],
  pfp: "/images/compressed-pfps/Aure64.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const WallStreet = {
  wallets: [
    "8StJhBs8GJK7B2SAardFKhUsaGdECftrUUMnQyQ8XnHJ"
  ],
  chimpions: [
    "TheChevalier"
  ],
  pfp: "/images/compressed-pfps/WallStreet.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Froggie = {
  wallets: [
    "21ncMb4cVyAS3y38suWiuUrQSRhqGdnw1Z6Hmi1nDCU1"
  ],
  chimpions: [
    "TheAntipaladin"
  ],
  pfp: "/images/compressed-pfps/Froggie.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const HyJ4vc9wUfVrnojdqRetVA6ktrpVQRsUgry4C6Hc5uSg = {
  wallets: [
    "Achbc9S7Arp8AudaV9mD16EBxu66sfJjcYHorgdZQt6A"
  ],
  chimpions: [
    "TheMasked"
  ],
  pfp: "/images/compressed-pfps/HyJ4vc9wUfVrnojdqRetVA6ktrpVQRsUgry4C6Hc5uSg.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const cripped_0 = {
  wallets: [
    "6dm86x4LHSBLR9WLUkjUHP27A5uJRwgp5Z5bVVCWeM9K"
  ],
  chimpions: [
    "TheStarbound"
  ],
  pfp: "/images/compressed-pfps/cripped_0.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Confusername = {
  wallets: [
    "6mBNN7cuBZ1Mq8UxcKqDapXP1ksdL4NS5W2KVvwCSYbQ"
  ],
  chimpions: [
    "TheFractured"
  ],
  pfp: "/images/compressed-pfps/Confusername.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const razr = {
  wallets: [
    "91R9mB46N8nTfruMxqpeNmTdBoW2WZGHH6eCok7m7S5G"
  ],
  chimpions: [
    "TheErroneous"
  ],
  pfp: "/images/compressed-pfps/razr.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const mundz = {
  wallets: [
    "DyBMTRZnMAtiL6Vg8pRn2pyYBDfMoEUzMjLsorzhi6HN"
  ],
  chimpions: [
    "TheTechnician"
  ],
  pfp: "/images/compressed-pfps/mundz.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const counter = {
  wallets: [
    "3zgC5F6puExXHQDtaSrRyryL8UVPLnW6tvWky2em8bA1"
  ],
  chimpions: [
    "TheRegal"
  ],
  pfp: "/images/compressed-pfps/counter.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const oxonomye = {
  wallets: [
    "J5M5TkgQKr2AByv99RWGZcchEFKPPZeo9KShbBDMJpvA"
  ],
  chimpions: [
    "TheInverted"
  ],
  pfp: "/images/compressed-pfps/oxonomye.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Checco = {
  wallets: [
    "6SDKFQrh1bTom8h6HEVgBsQevcL1xMeJUC6m5Q4arYaM"
  ],
  chimpions: [
    "TheMutant"
  ],
  pfp: "/images/compressed-pfps/Checco.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Db8f51heQz4UxD1gdQLBJYf4tWnN5xtJs7smu2h9UAc2 = {
  wallets: [
    "AL22HtvGMWqGH6FV4rWgjSToAfK9RSkHRZy5ZbUp6kKD"
  ],
  chimpions: [
    "TheApologetic"
  ],
  pfp: "/images/compressed-pfps/Db8f51heQz4UxD1gdQLBJYf4tWnN5xtJs7smu2h9UAc2.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const Plexoo = {
  wallets: [
    "wu9w9RWz3JpKEArHSqLwkY7zwNqceeHuMtYEnXYHwQK"
  ],
  chimpions: [
    "TheChromatic"
  ],
  pfp: "/images/compressed-pfps/Plexoo.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Nargar = {
  wallets: [
    "G7LqVamLwd5PZbwnR3EvKZGUZiA1LHnqc4WjVZJozxeG"
  ],
  chimpions: [
    "TheMischievous"
  ],
  pfp: "/images/compressed-pfps/Nargar.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const MPRTI44 = {
  wallets: [
    "8mBEV1TMy3EHZyn6HS9KdBGZmHAxZ5QexYciA61ts68K"
  ],
  chimpions: [
    "TheCountryman"
  ],
  pfp: "/images/compressed-pfps/MPRTI44.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const GA9ZBqncLUcoXunBjWkydi1XBPRQ49oGCSfem8zu6mET = {
  wallets: [
    "GA9ZBqncLUcoXunBjWkydi1XBPRQ49oGCSfem8zu6mET"
  ],
  chimpions: [
    "TheExperiment"
  ],
  pfp: "/images/compressed-pfps/GA9ZBqncLUcoXunBjWkydi1XBPRQ49oGCSfem8zu6mET.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const papits = {
  wallets: [
    "Cx6n5KF5qS93c3j95aKQ99P52YWTCbb9cxpMgM19fGf6"
  ],
  chimpions: [
    "TheFirestarter"
  ],
  pfp: "/images/compressed-pfps/papits.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const SirBertol = {
  wallets: [
    "6vww9G3a8BFqMurXouPRb9XNhM5v99B9NiDJCjE3SFeK"
  ],
  chimpions: [
    "TheGrunt"
  ],
  pfp: "/images/compressed-pfps/SirBertol.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const hatse = {
  wallets: [
    "91hRPRh3RGw1NojeMA9rbLKU4wBYjGcyYYrz5foq7wkc"
  ],
  chimpions: [
    "TheWastelander"
  ],
  pfp: "/images/compressed-pfps/hatse.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const swzzi = {
  wallets: [
    "FdqjjuUFLpGrwq1kdoU16W7872rSBQZgnJnuqY3F1jfL"
  ],
  chimpions: [
    "ThePowderMonkey"
  ],
  pfp: "/images/compressed-pfps/swzzi.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const gwi = {
  wallets: [
    "3Sjf2ABVSRD6gEUBxRBjgsrAg9znz1DJKu6fAGA5NH8T"
  ],
  chimpions: [
    "TheFlamescarred"
  ],
  pfp: "/images/compressed-pfps/gwi.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const q2 = {
  wallets: [
    "5RJ5rwSpeNfRYanwVnRJRwMEbfsaRyo6JrEQUAW3oiER"
  ],
  chimpions: [
    "TheDecorated"
  ],
  pfp: "/images/compressed-pfps/q2.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Damasta = {
  wallets: [
    "4AB9iz8pjTffD5BhAggtqVD1ccABDnFpBLadcBAbu4bZ"
  ],
  chimpions: [
    "TheNightstalker"
  ],
  pfp: "/images/compressed-pfps/Damasta.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Hp3uHMFi2NvLkwHpq6fFhKgiEjLMTBiHN3F7PTNjHXwE = {
  wallets: [
    "Hp3uHMFi2NvLkwHpq6fFhKgiEjLMTBiHN3F7PTNjHXwE"
  ],
  chimpions: [
    "TheDemon"
  ],
  pfp: "/images/compressed-pfps/Hp3uHMFi2NvLkwHpq6fFhKgiEjLMTBiHN3F7PTNjHXwE.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Uranium = {
  wallets: [
    "BiSB68heHvBnyKL7LipW7XAGuwNP3B1K4xTdMLiEgg1g"
  ],
  chimpions: [
    "TheFaded"
  ],
  pfp: "/images/compressed-pfps/Uranium.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Meattyy = {
  wallets: [
    "5HXV18zbwtvsTkbgfRm8qS5s6Reupsm4P5VjopC8aUeh"
  ],
  chimpions: [
    "TheGhostHunter"
  ],
  pfp: "/images/compressed-pfps/Meattyy.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Nepenthe = {
  wallets: [
    "74qXbyHj3NNFQ8AVSZa5yq1kLua711Y5e156hf4Gq15e"
  ],
  chimpions: [
    "TheArmsman"
  ],
  pfp: "/images/compressed-pfps/Nepenthe.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const hmph = {
  wallets: [
    "ECgR7q986ijqFmdsCJ9XjmT4yMU94b8LuiKfYe7RrJjR"
  ],
  chimpions: [
    "TheBosun"
  ],
  pfp: "/images/compressed-pfps/hmph.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const sidvicious843 = {
  wallets: [
    "H6ZLTRpVXobSYuNWufG8iqN9dMRQyZkXXSR5nEaeW73r"
  ],
  chimpions: [
    "TheTrickster",
    "TheFreelancer"
  ],
  pfp: "/images/compressed-pfps/sidvicious843.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Raves = {
  wallets: [
    "2PQC5Yvsm6jWn28fXKxMMVsnjauNFkktG2PVXSNqpTMu"
  ],
  chimpions: [
    "TheDigital"
  ],
  pfp: "/images/compressed-pfps/Raves.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const mork = {
  wallets: [
    "ApGoCDpwvt5X3j7PvCnuYySnv6C5Ncu4mvjCViGyavkU"
  ],
  chimpions: [
    "ThePocketMonkey"
  ],
  pfp: "/images/compressed-pfps/mork.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const kuse = {
  wallets: [
    "H2WbaevpDeo6BiNC8oZw2tzhN33vzPazKMiwi2j6Z2eB"
  ],
  chimpions: [
    "TheDrowsy"
  ],
  pfp: "/images/compressed-pfps/kuse.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const AXn72v6GSNuozvPchh5Ry3sfMww5WfyLvLEtMVn5AZEY = {
  wallets: [
    "AXn72v6GSNuozvPchh5Ry3sfMww5WfyLvLEtMVn5AZEY"
  ],
  chimpions: [
    "TheTotemic"
  ],
  pfp: "/images/compressed-pfps/AXn72v6GSNuozvPchh5Ry3sfMww5WfyLvLEtMVn5AZEY.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Tainaker = {
  wallets: [
    "AUp3LyV11F91KkxqhoXH9SdrtQb81WtQ6JML8ZW7ZpFi"
  ],
  chimpions: [
    "TheDeepdweller"
  ],
  pfp: "/images/compressed-pfps/Tainaker.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const ZionAtlas = {
  wallets: [
    "6UUSv1XRPzvXRAj4JGBhHEyMHqVY1SZVwjb1ZQCxNu8V"
  ],
  chimpions: [
    "TheFaulty"
  ],
  pfp: "/images/compressed-pfps/ZionAtlas.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const DanielB = {
  wallets: [
    "HcbCNLVcYA5LsAeX3uJDTZx9cAakcCuW9JwWUagQQENo"
  ],
  chimpions: [
    "TheLeisurely"
  ],
  pfp: "/images/compressed-pfps/DanielB.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": true,
    "An Unlikely Friendship": true
  }
};
const liquidgold = {
  wallets: [
    "8Qv54mfBzAo1L31VJsuNNRjE5EQyHxJvsNWTjjQrXoK7"
  ],
  chimpions: [
    "TheEnameled"
  ],
  pfp: "/images/compressed-pfps/liquidgold.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const SomdotSol = {
  wallets: [
    "HD2isbDaQ4JJsYWpLb5ZCUx8eExGdafnhv9BbeJ3ts3Y"
  ],
  chimpions: [
    "TheAngsty"
  ],
  pfp: "/images/compressed-pfps/SomdotSol.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const rgb = {
  wallets: [
    "DVUm8qFo9wWDFcCZDWABZ7FzdF4ctymSdrhXTDsaw9hh"
  ],
  chimpions: [
    "TheAmalgamation"
  ],
  pfp: "/images/compressed-pfps/rgb.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Nightsx = {
  wallets: [
    "9sf4GxbYNvrQdQLKtPVRuU2LyK1nUwPrcFToZQDFai3b"
  ],
  chimpions: [
    "TheArisen"
  ],
  pfp: "/images/compressed-pfps/Nightsx.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const bokieV = {
  wallets: [
    "2qFtg7mMytPXH3T2cVJSFCX7wjvzotFyVgdERtaMHV6s"
  ],
  chimpions: [
    "TheChief"
  ],
  pfp: "/images/compressed-pfps/bokieV.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const shades = {
  wallets: [
    "BXCxwXnRkdHs4rB77T23WgB69ReKEhmmmixJCvLTDubN"
  ],
  chimpions: [
    "TheDeckhand"
  ],
  pfp: "/images/compressed-pfps/shades.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const thirty = {
  wallets: [
    "GpUU9dmv3rXhMXYxi391iyQM9sRPhkPfqoXxNZCcb6KT"
  ],
  chimpions: [
    "TheYeoman"
  ],
  pfp: "/images/compressed-pfps/thirty.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const lfk = {
  wallets: [
    "5k5P9oEkeSbLa2NvXtHWhdLSRkz8zctSYoMrpdHQso24"
  ],
  chimpions: [
    "TheAnalyst"
  ],
  pfp: "/images/compressed-pfps/lfk.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": true,
    "Last Bastion": true,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const Brink = {
  wallets: [
    "5ykiofgHEQ8cbMrq8jfw9riwMbF2ziMqnuTcSfbrEoBA"
  ],
  chimpions: [
    "TheNeuromancer"
  ],
  pfp: "/images/compressed-pfps/Brink.png",
  TWS: {
    "Forest Fellowship": true,
    "Dusk Till Dawn": true,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": true,
    LaurenceAntonyXChimpions: true,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": true
  }
};
const tuxr = {
  wallets: [
    "DYNLJb46KpydmQD4rP8TDFm59bR7dzoegU4Qm4Mu5A6u"
  ],
  chimpions: [
    "TheBionic"
  ],
  pfp: "/images/compressed-pfps/tuxr.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const Lex = {
  wallets: [
    "5cw7nMpBZVsqTfgC2QqeXrjt5AHbcDwBeNWuagUsf61i"
  ],
  chimpions: [
    "TheRapscallion"
  ],
  pfp: "/images/compressed-pfps/Lex.png",
  TWS: {
    "Forest Fellowship": false,
    "Dusk Till Dawn": false,
    "The Fall of the Eradicator": false,
    "Last Bastion": false,
    "The Uprising": false,
    LaurenceAntonyXChimpions: false,
    "The Crystal of Unity": false,
    "Grave Danger": false,
    "An Unlikely Friendship": false
  }
};
const matrica_data = {
  "3341xpm9ovPwrDsxhVxrKxT3u5aVSyb5VJEjFLQx87vG": {
    wallets: [
      "3341xpm9ovPwrDsxhVxrKxT3u5aVSyb5VJEjFLQx87vG"
    ],
    chimpions: [
      "TheOperative"
    ],
    pfp: "/images/compressed-pfps/3341xpm9ovPwrDsxhVxrKxT3u5aVSyb5VJEjFLQx87vG.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  palmora,
  Visery,
  ThunderBear,
  SolBigBrain,
  Pwenguin,
  F2LKKz4oq8TFaA1zYqJVWcj9n3ZFKAocDqwgaW6Wgps9,
  "9mooXoqKP7bXCrXFKAVmqxLPLE4UA3VbHhuodhDdakqd": {
    wallets: [
      "9mooXoqKP7bXCrXFKAVmqxLPLE4UA3VbHhuodhDdakqd"
    ],
    chimpions: [
      "TheStubborn"
    ],
    pfp: "/images/compressed-pfps/9mooXoqKP7bXCrXFKAVmqxLPLE4UA3VbHhuodhDdakqd.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  an0rak07,
  Soledge,
  zachary,
  "7dUj9sypMMfTgs4nNRuj4upKrVE6agnEhBDNoKFfEdwu": {
    wallets: [
      "7dUj9sypMMfTgs4nNRuj4upKrVE6agnEhBDNoKFfEdwu"
    ],
    chimpions: [
      "TheNomad"
    ],
    pfp: "/images/compressed-pfps/7dUj9sypMMfTgs4nNRuj4upKrVE6agnEhBDNoKFfEdwu.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  "599Pzfg4GPgGbb5BZvT9CJQHp7ptEEjT5wApVr7qv7Rq": {
    wallets: [
      "599Pzfg4GPgGbb5BZvT9CJQHp7ptEEjT5wApVr7qv7Rq"
    ],
    chimpions: [
      "TheGreeter"
    ],
    pfp: "/images/compressed-pfps/599Pzfg4GPgGbb5BZvT9CJQHp7ptEEjT5wApVr7qv7Rq.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": true,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  murath,
  dabums3,
  NotDoudou,
  Vell,
  bipkoyn,
  Grooovy,
  zekarodzer,
  futuristics0l,
  H71yxeDHUd8A1HhNpHtcnQYmvBmdimSo87sjwau4wy3A,
  Dutch,
  FokcyAi3xEeJXxmKNuy7Smg4J2VK8uHFvsnnK7PUMw8X,
  dasein2249,
  Marculinopng,
  nicksaywhat,
  Akaba,
  donkatsu,
  EE9PmcDQ3aGNxJ8iP6jqKRf95DdaU7dJwEQ8m3DBUo1p,
  mebbs,
  PunkMonke,
  "𝕦𝕟𝕤𝕜𝕚𝕝𝕝𝕖𝕕𝕗𝕒𝕥𝕙𝕖𝕣": {
    wallets: [
      "ErqxDxaz7HUtA8ANqLxhmLyWciXFWYFdfhBo6uqSKNgE",
      "DmMxdroUbhrouPjcNtkbJjSc9MqsVWfzC9om8jgQGVyc"
    ],
    chimpions: [
      "TheRebel",
      "TheElated"
    ],
    pfp: "/images/compressed-pfps/𝕦𝕟𝕤𝕜𝕚𝕝𝕝𝕖𝕕𝕗𝕒𝕥𝕙𝕖𝕣.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": true,
      "An Unlikely Friendship": true
    }
  },
  "2rXm46giBNKAR7itut91G1C9sk5n3AF16SPnxJ8wyvgi": {
    wallets: [
      "3ozAjFF3iz8jWifoVjCAG3iJ1a4aNzzvznb9K5LmQbvj"
    ],
    chimpions: [
      "TheBranded"
    ],
    pfp: "/images/compressed-pfps/2rXm46giBNKAR7itut91G1C9sk5n3AF16SPnxJ8wyvgi.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  GJB2kQRLoRyTwaY11WCk9D8ZvKo2XAgT27xNGjxPQ58B,
  "Matrica User": {
    wallets: [
      "bQhUy5CAdacYJQuBCrEpChbUtd6d5YDPGC27UFY9LZN"
    ],
    chimpions: [
      "TheSinged",
      "TheFirstborn"
    ],
    pfp: "/images/compressed-pfps/Matrica User.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  Wald,
  Rheld,
  EaeMcN6KWaVTa2iu2MVGC6uVAxes7xJVnSoEjbQ5MyAL,
  CMC81,
  Dappearl,
  phant0m,
  koreancatdog,
  meddler,
  "3Afw3cCxHkhngihdeAxu4rFHMkTLGT1GgD9dx5uSW8Y6": {
    wallets: [
      "3Afw3cCxHkhngihdeAxu4rFHMkTLGT1GgD9dx5uSW8Y6"
    ],
    chimpions: [
      "TheAviator"
    ],
    pfp: "/images/compressed-pfps/3Afw3cCxHkhngihdeAxu4rFHMkTLGT1GgD9dx5uSW8Y6.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  eddierebel,
  KenGoh,
  HFP,
  "6wjLnSy5XxWfEm3xBMbt6o3UXkcMFRuV19r1rpR49dWK": {
    wallets: [
      "6wjLnSy5XxWfEm3xBMbt6o3UXkcMFRuV19r1rpR49dWK"
    ],
    chimpions: [
      "TheMercenary"
    ],
    pfp: "/images/compressed-pfps/6wjLnSy5XxWfEm3xBMbt6o3UXkcMFRuV19r1rpR49dWK.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": true,
      "The Fall of the Eradicator": true,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": true,
      "An Unlikely Friendship": true
    }
  },
  Jotatavo,
  heleemelon,
  iamlaurael,
  EWweH6VE7ifGwb7ocuQCrNK3PbqhDwdZ4TJrbpfARvBL,
  Ap3s6w9zkKSyTvt3Gpc2kubEwYGo4veiRADgqqdW3767,
  konstantina,
  mikethompson,
  mulletmusketeer,
  mccapital,
  Alkine,
  ED8qVQFtrHWVb7625mCqcTrJGFJ5HFqZF86F2FsbF3BH,
  NOED,
  wu,
  HJrYczWnCWYRdvTEzHhrvNB7foHSjG58WEcHgPLBn4TT,
  PNP,
  CryptoDriller,
  Hyblinxxx,
  gl00m,
  "trucker.sol": {
    wallets: [
      "J6fPx8qJi9hDRK75foV3kqnmLvfbGNaKJuBMTcVew1hs"
    ],
    chimpions: [
      "TheAttendant"
    ],
    pfp: "/images/compressed-pfps/trucker.sol.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": true,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  AXA8gaik3ckUTjK1hLDBC7quVGgvgjKPZFai3d8zceTA,
  Polkjia,
  GPKBo1rEhz5SafcAw3k6PUHeYcjXpwxeFwuQhTZJ6YsP,
  genuinearticles,
  "76GmNz82LjfeNetiK1KGwhTqvMuQGzsHJ8cWsUewJfcQ": {
    wallets: [
      "76GmNz82LjfeNetiK1KGwhTqvMuQGzsHJ8cWsUewJfcQ"
    ],
    chimpions: [
      "ThePioneer"
    ],
    pfp: "/images/compressed-pfps/76GmNz82LjfeNetiK1KGwhTqvMuQGzsHJ8cWsUewJfcQ.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  Rick009,
  DEGENAPES,
  OneEngineer,
  "9HwDUmGzPNpLc1MXwXFf1tgT8ZfSAhbKqjU4zTQMGky6": {
    wallets: [
      "9HwDUmGzPNpLc1MXwXFf1tgT8ZfSAhbKqjU4zTQMGky6"
    ],
    chimpions: [
      "TheTraditional"
    ],
    pfp: "/images/compressed-pfps/9HwDUmGzPNpLc1MXwXFf1tgT8ZfSAhbKqjU4zTQMGky6.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  "The Gentlemonke": {
    wallets: [
      "JCapwSzWyHkjuVrT5ZTyKwBHzV9oYrTNhZguAMc9PiEc"
    ],
    chimpions: [
      "TheComrade"
    ],
    pfp: "/images/compressed-pfps/The Gentlemonke.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  drelasol,
  ExpliciT,
  "3Fv9YppPQ8Z1p3j3vDT8TGhVqmdNnREmQsW94Wvhg8nh": {
    wallets: [
      "CXgDH9WcdB6Xn7ZK2Bt5CUfq1Aa9GMw3G7dcDQG66GrV"
    ],
    chimpions: [
      "ThePensive"
    ],
    pfp: "/images/compressed-pfps/3Fv9YppPQ8Z1p3j3vDT8TGhVqmdNnREmQsW94Wvhg8nh.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": true,
      "The Fall of the Eradicator": true,
      "Last Bastion": true,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": true,
      "An Unlikely Friendship": true
    }
  },
  huatrabbit,
  BAfSP8fqeeyGeewgdq6C8rQHVvjoFjSUUfPfooCSWZFr,
  bmn,
  kqek2ij4RLgcm9fYQ855zn9AL5ND75zkwFteujCvcHc,
  "9QNjD2hxzLpkRQx9zR9mAcqH3aqGEYCmTbYKyFmbYtRx": {
    wallets: [
      "9QNjD2hxzLpkRQx9zR9mAcqH3aqGEYCmTbYKyFmbYtRx"
    ],
    chimpions: [
      "TheOrnamented"
    ],
    pfp: "/images/compressed-pfps/9QNjD2hxzLpkRQx9zR9mAcqH3aqGEYCmTbYKyFmbYtRx.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": true,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  Fi3ytMzX8P2Zb7cDjS7gzwxAXmndJbSbbG4rbS2XVwEz,
  hamster,
  "5kzNMQoPDcfSy1eBbHokyapKHe3hgBLBZ26FZdqm4Ers": {
    wallets: [
      "5kzNMQoPDcfSy1eBbHokyapKHe3hgBLBZ26FZdqm4Ers"
    ],
    chimpions: [
      "TheFirethrower"
    ],
    pfp: "/images/compressed-pfps/5kzNMQoPDcfSy1eBbHokyapKHe3hgBLBZ26FZdqm4Ers.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  SKUX,
  "93wqaPBJ1N5F4sDzVyCLvHrGNsx6cedWu2qNEcQQYzLM": {
    wallets: [
      "APgA3wZPRRhPHmauXP5qUFFVtxj3d3ebDwj4KNFbpFf1"
    ],
    chimpions: [
      "TheScientist"
    ],
    pfp: "/images/compressed-pfps/93wqaPBJ1N5F4sDzVyCLvHrGNsx6cedWu2qNEcQQYzLM.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  Whyde2,
  Thesis,
  Aure64,
  WallStreet,
  Froggie,
  HyJ4vc9wUfVrnojdqRetVA6ktrpVQRsUgry4C6Hc5uSg,
  cripped_0,
  Confusername,
  razr,
  mundz,
  counter,
  oxonomye,
  Checco,
  "9mAqWNp1WYesoV1TaCVm3Vv761Gnsi8kBrvXKc23uyp9": {
    wallets: [
      "9mAqWNp1WYesoV1TaCVm3Vv761Gnsi8kBrvXKc23uyp9"
    ],
    chimpions: [
      "TheSpectral"
    ],
    pfp: "/images/compressed-pfps/9mAqWNp1WYesoV1TaCVm3Vv761Gnsi8kBrvXKc23uyp9.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  Db8f51heQz4UxD1gdQLBJYf4tWnN5xtJs7smu2h9UAc2,
  Plexoo,
  Nargar,
  "8GjgPdkJAzupvk4azPY7BhaA9sL1BqTdVUTsbKk2YAF7": {
    wallets: [
      "8GjgPdkJAzupvk4azPY7BhaA9sL1BqTdVUTsbKk2YAF7"
    ],
    chimpions: [
      "TheCyborg"
    ],
    pfp: "/images/compressed-pfps/8GjgPdkJAzupvk4azPY7BhaA9sL1BqTdVUTsbKk2YAF7.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  MPRTI44,
  GA9ZBqncLUcoXunBjWkydi1XBPRQ49oGCSfem8zu6mET,
  papits,
  SirBertol,
  hatse,
  swzzi,
  "maxbrs.sol": {
    wallets: [
      "DhCrUDCEgcLq2LheRauzzFbzAp1qdKifTF7r2hFFPT9i"
    ],
    chimpions: [
      "TheOriginal"
    ],
    pfp: "/images/compressed-pfps/maxbrs.sol.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": true,
      "The Fall of the Eradicator": true,
      "Last Bastion": true,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  "Odd Skull": {
    wallets: [
      "VqxRNsh915neweKaBDXAz8Xcxn6ofcFLgFqXwqRpGYt"
    ],
    chimpions: [
      "TheReincarnated"
    ],
    pfp: "/images/compressed-pfps/Odd Skull.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  "24A94GwWo2U3WjbvcGxmwA1E97gqE5KFE9hUJ5wLjCeR": {
    wallets: [
      "9Gxa5nnpugzBh1D4A5aA1htmbKgGecXXGb7NVsShaNVK"
    ],
    chimpions: [
      "TheHidden"
    ],
    pfp: "/images/compressed-pfps/24A94GwWo2U3WjbvcGxmwA1E97gqE5KFE9hUJ5wLjCeR.png",
    TWS: {
      "Forest Fellowship": true,
      "Dusk Till Dawn": true,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": true,
      "An Unlikely Friendship": true
    }
  },
  gwi,
  q2,
  Damasta,
  Hp3uHMFi2NvLkwHpq6fFhKgiEjLMTBiHN3F7PTNjHXwE,
  Uranium,
  Meattyy,
  Nepenthe,
  hmph,
  sidvicious843,
  Raves,
  mork,
  kuse,
  AXn72v6GSNuozvPchh5Ry3sfMww5WfyLvLEtMVn5AZEY,
  Tainaker,
  ZionAtlas,
  DanielB,
  "123456789Matrica": {
    wallets: [
      "Fkof1epwMtTSL9PRGSBYguQgRU3MPqupgjBwN794JkQ8"
    ],
    chimpions: [
      "TheBinary"
    ],
    pfp: "/images/compressed-pfps/123456789Matrica.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  "endy.sol": {
    wallets: [
      "2HZ8YYWLFnWyY5FCH6DCuv6AzvwD7zzgyxJWzkGiPpTT"
    ],
    chimpions: [
      "TheJockey"
    ],
    pfp: "/images/compressed-pfps/endy.sol.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": true,
      "An Unlikely Friendship": true
    }
  },
  liquidgold,
  SomdotSol,
  rgb,
  Nightsx,
  bokieV,
  shades,
  thirty,
  lfk,
  Brink,
  tuxr,
  "5LDdaHcE1tzcwtfBzor6xbYB9k57hwz8z7Edq7NBVhRj": {
    wallets: [
      "CPo76cw52gKMTyvCS9GpnnZfvmkQQxovLwQFxonZrCRU"
    ],
    chimpions: [
      "ThePainter"
    ],
    pfp: "/images/compressed-pfps/5LDdaHcE1tzcwtfBzor6xbYB9k57hwz8z7Edq7NBVhRj.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": true
    }
  },
  "Max Sterrling": {
    wallets: [
      "FiZSfokXNfPMRqNPrGNcjGKMCbGu3Apj7UPobfsQetjb"
    ],
    chimpions: [
      "TheCaptain"
    ],
    pfp: "/images/compressed-pfps/Max Sterrling.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": true,
      "The Uprising": true,
      LaurenceAntonyXChimpions: true,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  "0xnasa": {
    wallets: [
      "631p9sYTTDDkRp1JjY5DxVezWQeg9kFMvxnb5PirQgD8"
    ],
    chimpions: [
      "ThePainted"
    ],
    pfp: "/images/compressed-pfps/0xnasa.png",
    TWS: {
      "Forest Fellowship": false,
      "Dusk Till Dawn": false,
      "The Fall of the Eradicator": false,
      "Last Bastion": false,
      "The Uprising": false,
      LaurenceAntonyXChimpions: false,
      "The Crystal of Unity": false,
      "Grave Danger": false,
      "An Unlikely Friendship": false
    }
  },
  Lex
};
const discord_data = {
  "304124024672223234": {
    discordHandle: "notdoudou_sol",
    twitterHandle: "notdoudou_sol",
    points: 118266,
    level: 15,
    keepingSpirit: 1694522332925e-3,
    twitterPFP: true
  },
  "266989823879806978": {
    discordHandle: "alkine",
    twitterHandle: "alkineee",
    points: 68078,
    level: 12,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "806446353420517397": {
    discordHandle: "maxbrs",
    twitterHandle: "MaxBrsNFT",
    points: 130742,
    level: 16,
    keepingSpirit: 1696068934731e-3,
    twitterPFP: true
  },
  "314686698716004353": {
    discordHandle: "utopia_artist",
    twitterHandle: "utopia_artist",
    points: 169304,
    level: 18,
    keepingSpirit: 1696140395413e-3,
    twitterPFP: false
  },
  "527601406727815181": {
    discordHandle: "wronguser",
    twitterHandle: "wronguser000",
    points: 17184,
    level: 6,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "308629865744302101": {
    discordHandle: "minne_ape_olis",
    twitterHandle: "minne_ape_olis",
    points: 44838,
    level: 9,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "316905146770522113": {
    discordHandle: "debankedmamon",
    twitterHandle: "mamonbtc",
    points: 100205,
    level: 14,
    keepingSpirit: 1690585333782e-3,
    twitterPFP: false
  },
  "793743503863578675": {
    discordHandle: "papernprotein",
    twitterHandle: "papernprotein",
    points: 25018,
    level: 7,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "690046283091935239": {
    discordHandle: "sidvicious843",
    twitterHandle: "Sidvicious843",
    points: 61774,
    level: 11,
    keepingSpirit: 1696109728664e-3,
    twitterPFP: true
  },
  "450295239232454666": {
    discordHandle: "purp_123",
    twitterHandle: "purpgorillaglue",
    points: 350,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "343985217452900352": {
    discordHandle: "zionatlas2470",
    twitterHandle: "zionatlas",
    points: 26024,
    level: 7,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "436310639640576021": {
    discordHandle: "tuxr",
    twitterHandle: "tuxr228",
    points: 77975,
    level: 12,
    keepingSpirit: 1696098978492e-3,
    twitterPFP: false
  },
  "535861769248178176": {
    discordHandle: "ExpliciT",
    twitterHandle: "",
    points: 3858,
    level: 3,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "830941636720197652": {
    discordHandle: "dasein2249",
    twitterHandle: "daseinillusion",
    points: 167132,
    level: 18,
    keepingSpirit: 1695834829096e-3,
    twitterPFP: false
  },
  "419798818239021059": {
    discordHandle: "an0rak7",
    twitterHandle: "an0rak7",
    points: 48,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "329380399362998283": {
    discordHandle: "mulletmusketeer",
    twitterHandle: "mulletmusketeer",
    points: 134497,
    level: 16,
    keepingSpirit: 1691519607785e-3,
    twitterPFP: true
  },
  "308778218398285836": {
    discordHandle: "frostyxsol",
    twitterHandle: "",
    points: 118,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "548858030784249857": {
    discordHandle: "xphant0m",
    twitterHandle: "sad_phant0m",
    points: 18117,
    level: 6,
    keepingSpirit: 16951152232e-1,
    twitterPFP: true
  },
  "1122056088355876986": {
    discordHandle: "suator",
    twitterHandle: "",
    points: 10,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "216108019342114816": {
    discordHandle: "dwunk",
    twitterHandle: "",
    points: 1106,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "381248536810881024": {
    discordHandle: "katsudon",
    twitterHandle: "katsudon_sol",
    points: 32950,
    level: 8,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "704327714298921050": {
    discordHandle: "pwenguin",
    twitterHandle: "Pwenguin_16",
    points: 68,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "283569743711961089": {
    discordHandle: "jotasol",
    twitterHandle: "Jotadotsol",
    points: 28172,
    level: 8,
    keepingSpirit: 1694289740072e-3,
    twitterPFP: false
  },
  "307942307091578890": {
    discordHandle: "0xcounter",
    twitterHandle: "0xcounter",
    points: 36652,
    level: 9,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "145648034829565952": {
    discordHandle: "puggl3",
    twitterHandle: "puggl3",
    points: 4654,
    level: 3,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "886961750392586251": {
    discordHandle: "cmc81",
    twitterHandle: "cmc816",
    points: 5094,
    level: 3,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "275630935339433986": {
    discordHandle: "thesisfox",
    twitterHandle: "ThesisInvestor",
    points: 135849,
    level: 16,
    keepingSpirit: 0,
    twitterPFP: true
  },
  "257807581735682049": {
    discordHandle: "meattyy",
    twitterHandle: "Meattyyy",
    points: 300,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "926198013028884562": {
    discordHandle: "mrcamel",
    twitterHandle: "MrCamel__",
    points: 4320,
    level: 3,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "461031295640928256": {
    discordHandle: "rami_kro",
    twitterHandle: "shades_sol",
    points: 17224,
    level: 6,
    keepingSpirit: 1691507110619e-3,
    twitterPFP: true
  },
  "461991057337352232": {
    discordHandle: "mebbs",
    twitterHandle: "xmebbs",
    points: 1420,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "819007619690922025": {
    discordHandle: "punkmonke",
    twitterHandle: "Punk_Monke",
    points: 129564,
    level: 16,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "760792786802573313": {
    discordHandle: "gweistefani",
    twitterHandle: "gweistefani_",
    points: 1262,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "219389399396253696": {
    discordHandle: "DanielB",
    twitterHandle: "0xDanielB",
    points: 2936,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "625230933569699866": {
    discordHandle: "bipkoyn",
    twitterHandle: "bipkoyn",
    points: 2342,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "828052192124076083": {
    discordHandle: "j0hners",
    twitterHandle: "j0hners",
    points: 2586,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "711189328457498675": {
    discordHandle: "earlthepearl",
    twitterHandle: "_EARL_the_pEARL",
    points: 10246,
    level: 5,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "209394359475372032": {
    discordHandle: "0x4p3",
    twitterHandle: "cryptoretard69",
    points: 7978,
    level: 4,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "235804343176003586": {
    discordHandle: "the_pink_panther",
    twitterHandle: "Alex_R_J_Swann",
    points: 2162,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "373168260188733460": {
    discordHandle: "konstantina",
    twitterHandle: "0xkonstantina",
    points: 12544,
    level: 5,
    keepingSpirit: 1695898099284e-3,
    twitterPFP: false
  },
  "511623487622873088": {
    discordHandle: "dabums",
    twitterHandle: "dabums1",
    points: 2512,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "464906353971036163": {
    discordHandle: "tainaker",
    twitterHandle: "tainaker",
    points: 300,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "869300921803341835": {
    discordHandle: "ikaanft",
    twitterHandle: "ikaanft",
    points: 470,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "432183629485965312": {
    discordHandle: "marculinopng",
    twitterHandle: "marculinopng",
    points: 196,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "772080590282293288": {
    discordHandle: "hatse",
    twitterHandle: "HatseHatse",
    points: 6260,
    level: 4,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "237628434145083392": {
    discordHandle: "vizery",
    twitterHandle: "VizeryNFTs",
    points: 100,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "176183220688125952": {
    discordHandle: "brinkbrinker",
    twitterHandle: "Brink_Brinker",
    points: 68796,
    level: 12,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "399844565143519242": {
    discordHandle: "0x_deon",
    twitterHandle: "0x_deon",
    points: 18,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "844874021706792962": {
    discordHandle: "aure64",
    twitterHandle: "Aure_0405",
    points: 2448,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: true
  },
  "407000935856996363": {
    discordHandle: "greenview",
    twitterHandle: "GreenviewSol",
    points: 916,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "926346138095861830": {
    discordHandle: "cpuerror",
    twitterHandle: "",
    points: 2578,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "388653562827374602": {
    discordHandle: "lfkonchain",
    twitterHandle: "LFKOnChain",
    points: 43,
    level: 1,
    keepingSpirit: 1690909481206e-3,
    twitterPFP: false
  },
  "807535973842944030": {
    discordHandle: "ken_goh",
    twitterHandle: "Ken_Goh_",
    points: 75529,
    level: 12,
    keepingSpirit: 1696132594601e-3,
    twitterPFP: false
  },
  "897031594404102155": {
    discordHandle: "sirbertoli",
    twitterHandle: "SirBertoli",
    points: 38224,
    level: 9,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "457814187276632065": {
    discordHandle: "_rick009",
    twitterHandle: "",
    points: 12698,
    level: 5,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "202248168681897987": {
    discordHandle: "shark_0x",
    twitterHandle: "0xShark_",
    points: 630,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "817838163799965716": {
    discordHandle: "amundra",
    twitterHandle: "fox_mundz",
    points: 3688,
    level: 3,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "920111592455168071": {
    discordHandle: "trucker.sol",
    twitterHandle: "",
    points: 2922,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "561035955822133259": {
    discordHandle: "genuinearticles",
    twitterHandle: "genuinearticles",
    points: 14502,
    level: 5,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "415336779017617408": {
    discordHandle: "zwald",
    twitterHandle: "YoSoyWald",
    points: 96,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "294592430127185921": {
    discordHandle: "nargar.",
    twitterHandle: "Nargar6",
    points: 200,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "747420576250855445": {
    discordHandle: "hamster.sol",
    twitterHandle: "hamster_labs",
    points: 41854,
    level: 9,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "639471981934280714": {
    discordHandle: "heisenthug",
    twitterHandle: "",
    points: 1658,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "246590325257273344": {
    discordHandle: "jreff",
    twitterHandle: "MyNamesJreff",
    points: 12499,
    level: 5,
    keepingSpirit: 1692275623433e-3,
    twitterPFP: false
  },
  "349889849353830404": {
    discordHandle: "huatrabbit",
    twitterHandle: "huatrabbit",
    points: 13212,
    level: 5,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "765029847629824001": {
    discordHandle: "markwittman",
    twitterHandle: "0xMork",
    points: 164,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "368369231387164673": {
    discordHandle: "knickerless",
    twitterHandle: "",
    points: 22,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "853739185595613194": {
    discordHandle: ".nicksaywhat",
    twitterHandle: "",
    points: 3170,
    level: 3,
    keepingSpirit: 169618805208e-2,
    twitterPFP: false
  },
  "840537599121817630": {
    discordHandle: "pamflat",
    twitterHandle: "",
    points: 108,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "450008770458812418": {
    discordHandle: "case_fud",
    twitterHandle: "case_fud",
    points: 7460,
    level: 4,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "615878607700754462": {
    discordHandle: "meddlr",
    twitterHandle: "0x_meddler",
    points: 442,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "406143145273982981": {
    discordHandle: "jvzxdx",
    twitterHandle: "",
    points: 774,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "879016526693433355": {
    discordHandle: "shibatonii",
    twitterHandle: "",
    points: 130,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1073926545858625577": {
    discordHandle: "tornado5",
    twitterHandle: "",
    points: 948,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "263669007570305025": {
    discordHandle: "tombtn",
    twitterHandle: "tomboutin_",
    points: 874,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "985684047512612914": {
    discordHandle: "calve_l",
    twitterHandle: "",
    points: 148,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1055076008367247410": {
    discordHandle: "MariaRobertsSV3VP8",
    twitterHandle: "",
    points: 590,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1055079461483204608": {
    discordHandle: "LauraGreenSV3iVD",
    twitterHandle: "",
    points: 294,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "805866641152802826": {
    discordHandle: "Jason 🍋",
    twitterHandle: "",
    points: 496,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1082902949057019985": {
    discordHandle: "IrbaazR",
    twitterHandle: "",
    points: 588,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "396761630479876097": {
    discordHandle: "sn00ze_sol",
    twitterHandle: "",
    points: 208,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "887635085858336768": {
    discordHandle: "solt1",
    twitterHandle: "",
    points: 26,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "905124402683842610": {
    discordHandle: "oxonomye",
    twitterHandle: "oxonomye",
    points: 532,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "446267337964912650": {
    discordHandle: "tellias",
    twitterHandle: "TelNFT",
    points: 10325,
    level: 5,
    keepingSpirit: 1692164425963e-3,
    twitterPFP: false
  },
  "1085510037482520616": {
    discordHandle: "Waterproof Truck",
    twitterHandle: "",
    points: 676,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "439912094834360321": {
    discordHandle: "minz0001",
    twitterHandle: "minnieZ23",
    points: 474,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "833692218563887164": {
    discordHandle: "j0hanna",
    twitterHandle: "WeStillEarly",
    points: 6454,
    level: 4,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "594811677896081417": {
    discordHandle: "palmora09",
    twitterHandle: "palmora09",
    points: 286,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "278676331758223362": {
    discordHandle: "fakerisdad",
    twitterHandle: "FakerIsDad",
    points: 382,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "215543767938236417": {
    discordHandle: "plexoo",
    twitterHandle: "Plexoooo",
    points: 98,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "397624763847016448": {
    discordHandle: "upstarts",
    twitterHandle: "upstartsu",
    points: 1644,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "802093937346215976": {
    discordHandle: "draco___",
    twitterHandle: "",
    points: 128,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "893894790628921424": {
    discordHandle: "artfannfttheshy",
    twitterHandle: "ArtFanNFT",
    points: 4078,
    level: 3,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "642264961837694986": {
    discordHandle: "meepo_",
    twitterHandle: "Meowpooo",
    points: 10,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "937053391845216386": {
    discordHandle: "kittenism.",
    twitterHandle: "",
    points: 42,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "846757705010905149": {
    discordHandle: "whyde2",
    twitterHandle: "Why_De2",
    points: 3356,
    level: 3,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "172696279258890240": {
    discordHandle: "agil8",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1075294246447370311": {
    discordHandle: "timbertate",
    twitterHandle: "",
    points: 112,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "383019686465372162": {
    discordHandle: "simbasol",
    twitterHandle: "simba_sol",
    points: 1024,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "411253774456324097": {
    discordHandle: "deadkingsociety",
    twitterHandle: "",
    points: 6228,
    level: 4,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "847988515379478588": {
    discordHandle: "lahseminit",
    twitterHandle: "",
    points: 428,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "386371975095910400": {
    discordHandle: "faintatk",
    twitterHandle: "faintdotwav",
    points: 1566,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "952090098353201153": {
    discordHandle: "artofkaiju",
    twitterHandle: "",
    points: 242,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "867186625456504852": {
    discordHandle: "thunderbear7193",
    twitterHandle: "NFT_TB_Crypto",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "805901543080722473": {
    discordHandle: "rgb0x00",
    twitterHandle: "rgb0x00",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "232019243959320577": {
    discordHandle: "somdot",
    twitterHandle: "SomdotSol",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "888046309746016306": {
    discordHandle: "smallfroggie",
    twitterHandle: "smallfroggi",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "807813212397240354": {
    discordHandle: "_zerosol",
    twitterHandle: "zeroatasehir",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "184445100930105347": {
    discordHandle: "sebasterbator",
    twitterHandle: "sebasterbator",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "272869614785134611": {
    discordHandle: "nightsx",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "307500488029634562": {
    discordHandle: ".nepenthe",
    twitterHandle: "nepenthe_sol",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "329264435656916993": {
    discordHandle: "OneEngineer",
    twitterHandle: "chart_garden",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "597921661785735199": {
    discordHandle: "cryptodriller",
    twitterHandle: "CryptoDriller",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "357909532334096395": {
    discordHandle: "ninozimo",
    twitterHandle: "ninozimo",
    points: 762,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "150023955745472514": {
    discordHandle: "soledge",
    twitterHandle: "Themultipool",
    points: 108,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "860522484015956038": {
    discordHandle: "becca.sol#4946",
    twitterHandle: "rebeccagund",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "156191111692419074": {
    discordHandle: "DMX#4187",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "372580834227781633": {
    discordHandle: "sterrling",
    twitterHandle: "MSterrling",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "909808227024261140": {
    discordHandle: "s_k_u_x",
    twitterHandle: "_SKUX_",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "105451106590564352": {
    discordHandle: "grooovy",
    twitterHandle: "GroovyNFTs",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "399022823143899136": {
    discordHandle: "WallStreet#9440",
    twitterHandle: "WallStreetCorp",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "882152974317649920": {
    discordHandle: "b0k#6961",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "871715895905509437": {
    discordHandle: "gentlemonke",
    twitterHandle: "TheGentlemonke",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "910542912595558460": {
    discordHandle: "MPRTI#2033",
    twitterHandle: "MPRTI",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "295358658286714881": {
    discordHandle: "xmancxd",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "103306856465731584": {
    discordHandle: "obeyraves",
    twitterHandle: "Ravers",
    points: 480,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "785722075942879243": {
    discordHandle: "solbigbrain",
    twitterHandle: "SOLBigBrain",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "777600613282218014": {
    discordHandle: "solnoob",
    twitterHandle: "SolanaNoob",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "546855918264909834": {
    discordHandle: "kuse",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "904826894665515028": {
    discordHandle: "unskilledfather",
    twitterHandle: "unskilledfather",
    points: 270,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "384731134682071041": {
    discordHandle: "CryptoSazerac#3186",
    twitterHandle: "Cryptosazerac81",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "404180172288425985": {
    discordHandle: "Jelly Beans#7457",
    twitterHandle: "Jeshness",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "687780309710012438": {
    discordHandle: "polkjia",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "825219927384391691": {
    discordHandle: "gloom2295",
    twitterHandle: "gloom_sol",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "222365429371371521": {
    discordHandle: "razrtooth",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "356295414669901825": {
    discordHandle: "moonlights_",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "839418904958468098": {
    discordHandle: "uraniumsol",
    twitterHandle: "uraniumSOL",
    points: 130,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "270468690514804739": {
    discordHandle: "papits",
    twitterHandle: "papits_sol",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "544790436452237314": {
    discordHandle: "dreilord#1608",
    twitterHandle: "dreilord_sol",
    points: 824,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "285560956946219010": {
    discordHandle: "genwei",
    twitterHandle: "genweii",
    points: 432,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "483779106606153764": {
    discordHandle: ".confusername",
    twitterHandle: "Confusername1",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "929162432088256573": {
    discordHandle: "iamlaurael1991",
    twitterHandle: "iamlaurael",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "796263136268517407": {
    discordHandle: "torabyou",
    twitterHandle: "torabyou",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "679994255913254927": {
    discordHandle: "akaba",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "773317868463849492": {
    discordHandle: "Kyufei#5180",
    twitterHandle: "NFTKid2",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "945815476116815963": {
    discordHandle: "eddierebel",
    twitterHandle: "0xEddieRebel",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "872987712251134013": {
    discordHandle: "hfp",
    twitterHandle: "degenHFP",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "319484101444894722": {
    discordHandle: "vinc3nt.eth",
    twitterHandle: "vinc3nt_eth",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "864528887131013140": {
    discordHandle: "outkastnfts",
    twitterHandle: "OutkastNFTs",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "321433140327350273": {
    discordHandle: "teddyruxpin",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "342670605037862913": {
    discordHandle: "endy.sol",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "295984223569969152": {
    discordHandle: "futuristic",
    twitterHandle: "futuristicS0L",
    points: 9418,
    level: 4,
    keepingSpirit: 1695036396027e-3,
    twitterPFP: false
  },
  "222204690404868096": {
    discordHandle: "aspenisoffline",
    twitterHandle: "aspen_ow",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "176545456845750272": {
    discordHandle: "hyblinxx",
    twitterHandle: "hyblinxx",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "905268446386876437": {
    discordHandle: "FaddyBaton#0815",
    twitterHandle: "faddybaton",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "896337062393958400": {
    discordHandle: "zacharyp_",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "143733325499072512": {
    discordHandle: "sven.sol",
    twitterHandle: "Damasta_",
    points: 352,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "160599849304064001": {
    discordHandle: "rheld",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "562434959080554527": {
    discordHandle: "drelasol",
    twitterHandle: "DreLaSOL",
    points: 1442,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "645315104958709762": {
    discordHandle: "zuzuzuzuzuzuzu",
    twitterHandle: "Zuzu_ww",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "585519703221338126": {
    discordHandle: "scum.sol",
    twitterHandle: "SCUMSOL",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "915127375073783818": {
    discordHandle: "oddskull",
    twitterHandle: "OddSkull_",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "926670219827626074": {
    discordHandle: "0xdutch",
    twitterHandle: "0xDutch",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "300960990890295309": {
    discordHandle: "terrora",
    twitterHandle: "terroraonsol",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "502326628060495901": {
    discordHandle: "cripped_0",
    twitterHandle: "cripped_0",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "931412410030518294": {
    discordHandle: "Rene (Outcast)#4121",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "888590718061412352": {
    discordHandle: "citineuqua",
    twitterHandle: "InfinityDeFi",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "255686519426121728": {
    discordHandle: "vell.k",
    twitterHandle: "vell_sol",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "274942175257690112": {
    discordHandle: "tthomass",
    twitterHandle: "",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "705096053283881030": {
    discordHandle: "heleemelon",
    twitterHandle: "heleemelon",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "399626989750976514": {
    discordHandle: "murath",
    twitterHandle: "murathsol",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "138425184666386433": {
    discordHandle: "thirtyone31",
    twitterHandle: "thirtyNFT",
    points: 0,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "433283310651965452": {
    discordHandle: "peter_0019",
    twitterHandle: "",
    points: 24,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "664046412564267038": {
    discordHandle: "goriev",
    twitterHandle: "",
    points: 68,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "873127602301325322": {
    discordHandle: "lukexdod",
    twitterHandle: "",
    points: 208,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "811686108604661790": {
    discordHandle: "thewizardofrez",
    twitterHandle: "",
    points: 142,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "272496181794570240": {
    discordHandle: "toronja",
    twitterHandle: "",
    points: 2,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "677482073606586378": {
    discordHandle: "003zeus",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "397369792857636864": {
    discordHandle: "rxxlxnx",
    twitterHandle: "",
    points: 28,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1010643567854768188": {
    discordHandle: "gibprofit",
    twitterHandle: "",
    points: 120,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "880918395367882813": {
    discordHandle: "alphaomega8",
    twitterHandle: "",
    points: 12,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1025467360179654786": {
    discordHandle: "BigSol 🧪",
    twitterHandle: "",
    points: 8830,
    level: 4,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1013285715330732063": {
    discordHandle: "MAD D◎W 🎒",
    twitterHandle: "",
    points: 58,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "121080965354356737": {
    discordHandle: "keishinkae",
    twitterHandle: "",
    points: 2,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "735008984116887553": {
    discordHandle: "ceaze411",
    twitterHandle: "",
    points: 574,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "964577665283682304": {
    discordHandle: "Olive",
    twitterHandle: "",
    points: 64,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "429925701362122752": {
    discordHandle: ".sdnt",
    twitterHandle: "",
    points: 8,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "254930445135773697": {
    discordHandle: "krint.world",
    twitterHandle: "",
    points: 2,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1090753217626910740": {
    discordHandle: "nemesiswolf83",
    twitterHandle: "",
    points: 420,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1058153243726839960": {
    discordHandle: "Protexionalf",
    twitterHandle: "",
    points: 2258,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "706934395277279333": {
    discordHandle: "yoooker",
    twitterHandle: "",
    points: 8,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "983011620861116478": {
    discordHandle: "ecstazy_eth",
    twitterHandle: "",
    points: 52,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "480207967950733312": {
    discordHandle: "nomnom4376",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "903096407999807498": {
    discordHandle: "phocking",
    twitterHandle: "",
    points: 180,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "500371257351471125": {
    discordHandle: "ajrst",
    twitterHandle: "",
    points: 16,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "735885666885566504": {
    discordHandle: "yawnnnns",
    twitterHandle: "",
    points: 130,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "891514917977456651": {
    discordHandle: "Maxfield",
    twitterHandle: "",
    points: 10,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "843153028148494336": {
    discordHandle: "Calcus",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "846269275084816394": {
    discordHandle: "maja_43",
    twitterHandle: "",
    points: 2,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "689346259705790475": {
    discordHandle: "elaell",
    twitterHandle: "",
    points: 8,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "898507326422667345": {
    discordHandle: "khuradiya",
    twitterHandle: "",
    points: 6,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "794931335528579112": {
    discordHandle: "shubham5089",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "920793537421905991": {
    discordHandle: "romanescu",
    twitterHandle: "",
    points: 6,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "854106423704813568": {
    discordHandle: "sasuke1236",
    twitterHandle: "",
    points: 18,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "317279968595804163": {
    discordHandle: "rikishi",
    twitterHandle: "",
    points: 10672,
    level: 5,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1095518667279699968": {
    discordHandle: "itssolgoodman",
    twitterHandle: "",
    points: 106,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "577340309240021022": {
    discordHandle: ".solami",
    twitterHandle: "",
    points: 3116,
    level: 3,
    keepingSpirit: 1695446396244e-3,
    twitterPFP: false
  },
  "901112086359339029": {
    discordHandle: "nickbecool",
    twitterHandle: "",
    points: 204,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "847959264685457448": {
    discordHandle: "toopoor4eth",
    twitterHandle: "",
    points: 142,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "906099462898872320": {
    discordHandle: "spodifsol",
    twitterHandle: "",
    points: 8,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "929146714936463391": {
    discordHandle: "kingcon.sol",
    twitterHandle: "",
    points: 162,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "925402265068650506": {
    discordHandle: "maxbrosss",
    twitterHandle: "",
    points: 834,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "706984690317394002": {
    discordHandle: "anton_oo0",
    twitterHandle: "",
    points: 1134,
    level: 2,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "932383698895138876": {
    discordHandle: "dave9686",
    twitterHandle: "",
    points: 270,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "827302584612159548": {
    discordHandle: "folafaithful",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "839103428088037407": {
    discordHandle: "mrhappy4203",
    twitterHandle: "",
    points: 410,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "707702188847399035": {
    discordHandle: "bad__religion",
    twitterHandle: "",
    points: 102,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "888442745662873632": {
    discordHandle: "cyberaventurier",
    twitterHandle: "",
    points: 8,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "541152220591161354": {
    discordHandle: "Mo Betta",
    twitterHandle: "",
    points: 234,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1058155297773994015": {
    discordHandle: "xDave1308u",
    twitterHandle: "",
    points: 20,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "820282404673028149": {
    discordHandle: "og_neshka",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "900382453628305458": {
    discordHandle: "leandrecrypto",
    twitterHandle: "",
    points: 554,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "958299584659066880": {
    discordHandle: "notfibo",
    twitterHandle: "",
    points: 114,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "881027605342609440": {
    discordHandle: "skwidflow",
    twitterHandle: "",
    points: 172,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "220233111198236682": {
    discordHandle: "talibabtou",
    twitterHandle: "",
    points: 228,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "441906436843503616": {
    discordHandle: "duckzzy",
    twitterHandle: "",
    points: 48,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "979402242861977700": {
    discordHandle: "travishtun",
    twitterHandle: "",
    points: 18,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "949473298889191424": {
    discordHandle: "wazbal",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "919560089302597652": {
    discordHandle: "mubarak6331",
    twitterHandle: "",
    points: 10,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "856109479195967488": {
    discordHandle: "maxkh",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "844618276872257536": {
    discordHandle: "tosinid",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "691571016362623007": {
    discordHandle: "alexalexander995",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "921761532151496795": {
    discordHandle: "masteroftheuniversz",
    twitterHandle: "",
    points: 56,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1068581407078760498": {
    discordHandle: "rumpel87654321",
    twitterHandle: "",
    points: 82,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1078124809118035998": {
    discordHandle: "masturbish",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "1048308784122056776": {
    discordHandle: "lionyt",
    twitterHandle: "",
    points: 4,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "902605450359484436": {
    discordHandle: "wronguser000",
    twitterHandle: "",
    points: 12,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "983090727758200912": {
    discordHandle: "asapvi_2",
    twitterHandle: "",
    points: 10,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  },
  "236125507446374401": {
    discordHandle: "Nasa",
    twitterHandle: "",
    points: 10,
    level: 1,
    keepingSpirit: 0,
    twitterPFP: false
  }
};
const HolderSearch_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-73juff{vertical-align:bottom;text-decoration:none;color:var(--whiter-purple)}a.svelte-73juff:hover{text-decoration:underline}li.svelte-73juff{display:flex;align-items:center;cursor:pointer;padding:0px;border-top:1px solid var(--purple);background-color:var(--darker-purple);transition:background-color 0.2s ease}li.svelte-73juff:hover{background-color:var(--purple)}.search-pfp.svelte-73juff{width:30px;margin-right:5px;vertical-align:bottom}",
  map: null
};
const Holder_search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { holderName = "" } = $$props;
  let { holderPfp = "" } = $$props;
  if ($$props.holderName === void 0 && $$bindings.holderName && holderName !== void 0)
    $$bindings.holderName(holderName);
  if ($$props.holderPfp === void 0 && $$bindings.holderPfp && holderPfp !== void 0)
    $$bindings.holderPfp(holderPfp);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", `/holders/${holderName}`, 0)} class="svelte-73juff"><li class="svelte-73juff"><img class="search-pfp svelte-73juff"${add_attribute("src", holderPfp, 0)} alt="">${escape(holderName)}</li> </a>`;
});
const HolderPage_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--width:1000px;--visibility:hidden}.holder-misc.svelte-ongfmr.svelte-ongfmr{width:85%;margin:100px 5% 1rem 10%;display:flex;border:1px var(--white-purple) solid;border-radius:0.25rem;background-color:var(--dark-purple);padding:1rem;column-gap:3rem;row-gap:1rem}.holder-misc-left.svelte-ongfmr.svelte-ongfmr{display:flex;align-items:center;gap:1rem}.holder-misc-right.svelte-ongfmr.svelte-ongfmr{display:flex;align-items:center;gap:2rem}.holder-misc.svelte-ongfmr .name.svelte-ongfmr{font-size:1.5rem;color:var(--whiter-purple)}.socials.svelte-ongfmr.svelte-ongfmr{display:grid;grid-template-columns:20px 1fr;column-gap:5px;row-gap:0.5rem;justify-content:center;align-items:center}.icon.svelte-ongfmr.svelte-ongfmr{display:flex;align-items:center;justify-content:center}.TWS-section.svelte-ongfmr.svelte-ongfmr{display:grid;grid-template-columns:repeat(5, 1fr);gap:0.5rem}button.svelte-ongfmr.svelte-ongfmr{margin:0;padding:0;border:none;background:none;font:inherit;color:inherit;cursor:pointer;outline:none}.TWS.svelte-ongfmr.svelte-ongfmr{height:20px;width:20px;border-radius:3rem}.inactive.svelte-ongfmr.svelte-ongfmr{filter:grayscale(1)}.tooltip.svelte-ongfmr.svelte-ongfmr{position:relative}.tooltip.svelte-ongfmr .tooltiptext.svelte-ongfmr{visibility:hidden;width:120px;background-color:black;color:#fff;text-align:center;border-radius:6px;padding:5px 0;position:absolute;font-size:0.875rem;z-index:1;left:50%;margin-left:-60px}.tooltip.svelte-ongfmr .tooltiptext.top.svelte-ongfmr{bottom:150%}.tooltip.svelte-ongfmr .tooltiptext.bottom.svelte-ongfmr{top:150%}.tooltip.svelte-ongfmr .tooltiptext.svelte-ongfmr::after{content:"";position:absolute;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:black transparent transparent transparent}.tooltip.svelte-ongfmr .tooltiptext.top.svelte-ongfmr::after{top:100%}.tooltip.svelte-ongfmr .tooltiptext.bottom.svelte-ongfmr::after{bottom:100%}.tooltip.svelte-ongfmr:hover .tooltiptext.svelte-ongfmr{visibility:visible}.Experience.svelte-ongfmr.svelte-ongfmr{display:flex;flex-direction:column;align-items:center;gap:0.25rem}.progress-bar.svelte-ongfmr.svelte-ongfmr{width:100px;background-color:var(--white-purple);height:14px;border:2px var(--white-purple) solid;border-radius:1rem;overflow:hidden}.progress.svelte-ongfmr.svelte-ongfmr{height:10px;background-color:var(--purple);border-top-left-radius:1rem;border-bottom-left-radius:1rem}.main-content.svelte-ongfmr.svelte-ongfmr{display:flex;margin:2rem auto}.left-side.svelte-ongfmr.svelte-ongfmr{width:50%;margin-left:10%}.right-side.svelte-ongfmr.svelte-ongfmr{width:50%;margin-left:10%;margin-right:5%}.favorite-art.svelte-ongfmr.svelte-ongfmr{width:100%;text-align:center}.favorite-art.svelte-ongfmr img.svelte-ongfmr{width:100%;padding:1rem}span.title.svelte-ongfmr.svelte-ongfmr{font-size:2rem}.answer.svelte-ongfmr.svelte-ongfmr{margin:2rem;margin-top:1rem;text-align:justify}.chimpions-held.svelte-ongfmr.svelte-ongfmr{margin-left:10%;margin-right:10%}.center-grid.svelte-ongfmr.svelte-ongfmr{width:50%;margin-top:50px;margin-bottom:100px;display:flex;justify-content:center}.pfp.svelte-ongfmr.svelte-ongfmr{height:100px;border-radius:0.25rem}a.svelte-ongfmr.svelte-ongfmr{vertical-align:bottom;text-decoration:none;color:var(--whiter-purple)}a.svelte-ongfmr.svelte-ongfmr:hover{text-decoration:underline}.menu-cont.svelte-ongfmr.svelte-ongfmr{display:flex;position:absolute;top:0px;right:0px;margin:0;padding:30px}#query-section.svelte-ongfmr.svelte-ongfmr{display:flex;flex-direction:column}#search-input-cont.svelte-ongfmr.svelte-ongfmr{width:200px}.search-field.svelte-ongfmr.svelte-ongfmr{position:relative;width:100%;font-size:1rem;border:2px solid white;border-radius:0.25rem;background-color:var(--darker-purple);color:white;padding:0.5rem;outline:none}.no-border-radius.svelte-ongfmr.svelte-ongfmr{border-bottom-left-radius:0;border-bottom-right-radius:0}.results.svelte-ongfmr.svelte-ongfmr{visibility:var(--visibility);max-height:200px;width:200px;overflow:auto;border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem;position:relative;z-index:5}.results.svelte-ongfmr ul.svelte-ongfmr{margin:0;list-style-type:none;padding:0;border:1px solid var(--purple);border-top:0px}#box-for-next-chimp.svelte-ongfmr.svelte-ongfmr{height:36px;margin-left:30px}.nextChimpion.svelte-ongfmr.svelte-ongfmr{background-color:var(--dark-purple);border-radius:0.25rem;border:2px var(--purple) solid;padding:0.5rem 1rem;white-space:nowrap;transition:all 0.2s ease}.nextChimpion.svelte-ongfmr.svelte-ongfmr:hover{background-color:var(--purple);border:2px var(--white-purple) solid}.arrow-right.svelte-ongfmr.svelte-ongfmr{height:0.75rem}a.svelte-ongfmr.svelte-ongfmr{text-decoration:none;color:inherit}.svelte-ongfmr.svelte-ongfmr::-webkit-scrollbar{width:8px}.svelte-ongfmr.svelte-ongfmr::-webkit-scrollbar-track{background:var(--dark-purple)}.svelte-ongfmr.svelte-ongfmr::-webkit-scrollbar-thumb{background:var(--light-purple);border-radius:0.25rem}.svelte-ongfmr.svelte-ongfmr::-webkit-scrollbar-thumb:hover{background:var(--lighter-purple)}@media screen and (max-width: 900px){.holder-misc.svelte-ongfmr.svelte-ongfmr{margin-left:5%;margin-right:5%}.main-content.svelte-ongfmr.svelte-ongfmr{flex-direction:column}.left-side.svelte-ongfmr.svelte-ongfmr{width:90%;margin-left:5%;margin-right:5%}.right-side.svelte-ongfmr.svelte-ongfmr{width:90%;margin-left:5%;margin-right:5%}}@media screen and (max-width: 800px){.holder-misc.svelte-ongfmr.svelte-ongfmr{width:90%;margin-left:5%;margin-right:5%;flex-direction:column}.holder-misc-left.svelte-ongfmr.svelte-ongfmr{width:100%;gap:1rem}.holder-misc-right.svelte-ongfmr.svelte-ongfmr{width:100%;gap:1rem}.favorite-art.svelte-ongfmr img.svelte-ongfmr{width:100%;padding:1rem 2rem 0.5rem 2rem}}.card-grid.svelte-ongfmr.svelte-ongfmr{display:grid;margin:1rem auto;grid-template-columns:305px;row-gap:50px;justify-items:center;align-items:center;justify-content:center}@media screen and (min-width: 700px){.card-grid.svelte-ongfmr.svelte-ongfmr{grid-template-columns:305px 305px;column-gap:max(30px, calc((var(--width) - 710px)/4))}}@media screen and (min-width: 1100px){.card-grid.svelte-ongfmr.svelte-ongfmr{grid-template-columns:305px 305px 305px;column-gap:max(30px, calc((var(--width) - 1015px)/4))}}@media screen and (min-width: 1500px){.card-grid.svelte-ongfmr.svelte-ongfmr{grid-template-columns:305px 305px 305px 305px;column-gap:max(30px, calc((var(--width) - 1410px)/4))}}',
  map: null
};
const HolderPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let experienceToDisplay;
  let skillsToDisplay;
  let styles;
  let { holderName = "" } = $$props;
  let { pfp = "" } = $$props;
  let { twitter = "" } = $$props;
  let { discord = "" } = $$props;
  let { points = 0 } = $$props;
  let { level = 1 } = $$props;
  let { chimpions_held = [] } = $$props;
  let { TWS = {} } = $$props;
  let { experience = "" } = $$props;
  let { skills = "" } = $$props;
  let { favoriteArt = "" } = $$props;
  let artName = "";
  let artistName = "";
  let nextHolder = "";
  let visibility = "hidden";
  const toHtml = (topic) => {
    if (topic != "" && topic != void 0) {
      return topic.replace(/\n/g, "<br/>");
    } else {
      return "";
    }
  };
  let chimpions_held_data = [];
  let windowWidth = 1e3;
  let cardMobility = true;
  const getChimpionsData = (chimpions_held2) => {
    let chimpions_held_parsed = chimpions_held2.map((chimpion) => chimpion.replace(/ /g, ""));
    for (let chimpion of chimpions) {
      if (chimpions_held_parsed.includes(chimpion.name)) {
        chimpions_held_data = [...chimpions_held_data, chimpion];
      }
    }
  };
  const getProgressBar = (level2, points2) => {
    let increment = 1e3;
    let sum_experience = 0;
    let test_level = 1;
    while (test_level < level2) {
      sum_experience += increment;
      increment += 1e3;
      test_level += 1;
    }
    let progression = (points2 - sum_experience) / increment * 100;
    return progression;
  };
  let searchTerm = "";
  let filteredHolders = [];
  const getNextHolder = (holderName2) => {
    let keysArray = Object.keys(holders);
    let currentIndex = 0;
    for (let name in holders) {
      if (name.toLowerCase() == holderName2.toLowerCase()) {
        currentIndex = keysArray.indexOf(name);
      }
    }
    nextHolder = keysArray[currentIndex + 1];
  };
  const getArtNameAndArtistName = (favoriteArt2) => {
    if (favoriteArt2 != void 0) {
      let favoriteArtArray = favoriteArt2.split("/");
      let artNameAndArtistNameArray = favoriteArtArray[favoriteArtArray.length - 1].split(".")[0].split("-");
      artName = artNameAndArtistNameArray[0];
      artistName = artNameAndArtistNameArray[1];
    }
  };
  if ($$props.holderName === void 0 && $$bindings.holderName && holderName !== void 0)
    $$bindings.holderName(holderName);
  if ($$props.pfp === void 0 && $$bindings.pfp && pfp !== void 0)
    $$bindings.pfp(pfp);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.discord === void 0 && $$bindings.discord && discord !== void 0)
    $$bindings.discord(discord);
  if ($$props.points === void 0 && $$bindings.points && points !== void 0)
    $$bindings.points(points);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.chimpions_held === void 0 && $$bindings.chimpions_held && chimpions_held !== void 0)
    $$bindings.chimpions_held(chimpions_held);
  if ($$props.TWS === void 0 && $$bindings.TWS && TWS !== void 0)
    $$bindings.TWS(TWS);
  if ($$props.experience === void 0 && $$bindings.experience && experience !== void 0)
    $$bindings.experience(experience);
  if ($$props.skills === void 0 && $$bindings.skills && skills !== void 0)
    $$bindings.skills(skills);
  if ($$props.favoriteArt === void 0 && $$bindings.favoriteArt && favoriteArt !== void 0)
    $$bindings.favoriteArt(favoriteArt);
  $$result.css.add(css);
  experienceToDisplay = toHtml(experience);
  skillsToDisplay = toHtml(skills);
  {
    getNextHolder(holderName);
  }
  {
    getChimpionsData(chimpions_held);
  }
  {
    if (holderName) {
      filteredHolders = [];
      chimpions_held_data = [];
      getChimpionsData(chimpions_held);
      getArtNameAndArtistName(favoriteArt);
    }
  }
  {
    if (holderName) {
      searchTerm = "";
    }
  }
  {
    {
      cardMobility = true;
    }
  }
  styles = `--width: ${windowWidth}px;
                 --visibility: ${visibility}`;
  return `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <div class="menu-cont svelte-ongfmr"${add_attribute("style", styles, 0)}><div id="query-section" class="svelte-ongfmr"><div id="search-input-cont" class="svelte-ongfmr"><input type="text" class="${escape(
    null_to_empty(filteredHolders.length > 0 ? "search-field no-border-radius" : "search-field"),
    true
  ) + " svelte-ongfmr"}" placeholder="Search for a Holder" autocomplete="on"${add_attribute("value", searchTerm, 0)}></div> <div class="results svelte-ongfmr">${filteredHolders.length > 0 ? `<ul class="svelte-ongfmr">${each(filteredHolders, (holder) => {
    return `${validate_component(Holder_search, "HolderSearch").$$render(
      $$result,
      {
        holderName: holder.name,
        holderPfp: holder.pfp
      },
      {},
      {}
    )}`;
  })}</ul>` : ``}</div></div> <div id="box-for-next-chimp" class="svelte-ongfmr"><a href="${"/holders/" + escape(nextHolder, true)}" class="svelte-ongfmr"><div class="nextChimpion svelte-ongfmr">${`See Next Holder`} <span class="svelte-ongfmr" data-svelte-h="svelte-1a9pe3w"><img class="arrow-right svelte-ongfmr" src="/images/arrow-right-white.png" alt="arrow to the right"></span></div></a></div></div> <div class="holder-misc svelte-ongfmr"><div class="holder-misc-left svelte-ongfmr"><img class="pfp svelte-ongfmr"${add_attribute("src", pfp, 0)} alt="PFP"> <span class="name svelte-ongfmr">${escape(holderName)}</span></div> <div class="holder-misc-right svelte-ongfmr"><div class="socials svelte-ongfmr">${twitter != "" ? `<div class="icon svelte-ongfmr">${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "sm" }, {}, {})}</div> <a href="${"https://twitter.com/" + escape(twitter, true)}" target="_blank" rel="noreferrer" class="svelte-ongfmr">${escape(twitter)}</a>` : `<div class="icon svelte-ongfmr">${validate_component(Fa, "Fa").$$render($$result, { icon: faTwitter, size: "sm" }, {}, {})}</div> ${escape(twitter)}`} <div class="icon svelte-ongfmr">${validate_component(Fa, "Fa").$$render($$result, { icon: faDiscord, size: "sm" }, {}, {})}</div> <div class="tooltip svelte-ongfmr"><button class="svelte-ongfmr">${escape(discord)}</button> ${`<span class="tooltiptext bottom svelte-ongfmr" data-svelte-h="svelte-uqhby8">Copy to clipboard</span>`}</div></div> <div class="TWS-section svelte-ongfmr"><div class="tooltip svelte-ongfmr"><a href="https://www.tensor.trade/trade/tws1" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["Forest Fellowship"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/matabolong/forest_fellowship_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-15a48rj">TWS1: Forest Fellowship</span></div> <div class="tooltip svelte-ongfmr"><a href="https://www.tensor.trade/trade/tws2" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["Dusk Till Dawn"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/nyaumon/dusk_till_dawn_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-hlcfs2">TWS2: Dusk Till Dawn</span></div> <div class="tooltip svelte-ongfmr"><a href="https://www.tensor.trade/trade/tws3" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["The Fall of the Eradicator"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/rgb/ChimpionXCritters_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-axsgxb">TWS3: The Fall of the Eradicator</span></div> <div class="tooltip svelte-ongfmr"><a href="https://www.tensor.trade/trade/tws4" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["Last Bastion"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/neilvilppu/LastBastion_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-1f9n66m">TWS4: Last Bastion</span></div> <div class="tooltip svelte-ongfmr"><a href="https://magiceden.io/marketplace/tws5" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["The Uprising"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/ugslabs/TheUprising_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-i6ctkz">TWS5: The Uprising</span></div> <div class="tooltip svelte-ongfmr"><a href="https://www.tensor.trade/trade/tws6" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["LaurenceAntonyXChimpions"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/laurenceantony/Finale_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-z01eok">TWS6: LaurenceAntony X Chimpions</span></div> <div class="tooltip svelte-ongfmr"><a href="https://www.tensor.trade/trade/tws7" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["The Crystal of Unity"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/knittables/CrystalCompanions_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-18cmung">TWS7: The Crystal of Unity</span></div> <div class="tooltip svelte-ongfmr"><a href="https://www.tensor.trade/trade/tws8" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["Grave Danger"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/artbynafay/GraveDanger_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-1c1jblm">TWS8: Grave Danger</span></div> <div class="tooltip svelte-ongfmr"><a href="https://magiceden.io/marketplace/tws9" target="_blank" class="svelte-ongfmr"><img class="${"TWS " + escape(TWS["An Unlikely Friendship"] ? "" : "inactive", true) + " svelte-ongfmr"}" src="/images/tws/tainaker/AnUnlikelyFriendship_square.png" alt=""></a> <span class="tooltiptext top svelte-ongfmr" data-svelte-h="svelte-hab6zt">TWS9: An Unlikely Friendship</span></div></div> <div class="Experience svelte-ongfmr"><div class="svelte-ongfmr">Level ${escape(level)}</div> <div class="progress-bar svelte-ongfmr"><div class="progress svelte-ongfmr" style="${"width: " + escape(getProgressBar(level, points), true) + "%;"}"></div></div></div></div></div> <div class="main-content svelte-ongfmr"><div class="left-side svelte-ongfmr">${experience ? `<div class="ama-section svelte-ongfmr"><span class="title svelte-ongfmr" data-svelte-h="svelte-191vet8">Web3 Experience</span> <div class="answer svelte-ongfmr"><!-- HTML_TAG_START -->${experienceToDisplay}<!-- HTML_TAG_END --></div></div>` : ``} ${skills ? `<div class="ama-section svelte-ongfmr"><span class="title svelte-ongfmr" data-svelte-h="svelte-1pzzlti">Occupation / Professional skills</span> <div class="answer svelte-ongfmr"><!-- HTML_TAG_START -->${skillsToDisplay}<!-- HTML_TAG_END --></div></div>` : ``}</div> <div class="right-side svelte-ongfmr">${favoriteArt ? `<span class="title svelte-ongfmr" data-svelte-h="svelte-8g3kej">Favorite artwork</span> <div class="favorite-art svelte-ongfmr"><img${add_attribute("src", favoriteArt, 0)} alt="${escape(holderName, true) + "'s favorite artwork"}" class="svelte-ongfmr"> <span style="font-size: 1.25rem; text-decoration: underline" class="svelte-ongfmr">${escape(artName)}</span> <i class="svelte-ongfmr">by ${escape(artistName)}</i></div>` : ``}</div></div> <div class="chimpions-held svelte-ongfmr"><span class="title svelte-ongfmr" data-svelte-h="svelte-1mg57nb">Chimpions hodled</span> ${`${chimpions_held_data.length == 1 ? `<div class="center-grid svelte-ongfmr">${each(chimpions_held_data, (chimpion) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        active: false,
        dynamic: cardMobility,
        name: chimpion.name.split(/(?=[A-Z])/).join(" "),
        index: chimpion.index,
        tribe: chimpion.tribe,
        type: chimpion.type.split(/(?=[A-Z])/).join(" "),
        art_files: chimpion.paths,
        lore: chimpion.lore,
        holder_name: chimpion.holder
      },
      {},
      {}
    )}`;
  })}</div>` : `<div class="card-grid svelte-ongfmr"${add_attribute("style", styles, 0)}>${each(chimpions_held_data, (chimpion) => {
    return `${validate_component(Card, "Card").$$render(
      $$result,
      {
        active: false,
        dynamic: cardMobility,
        name: chimpion.name.split(/(?=[A-Z])/).join(" "),
        index: chimpion.index,
        tribe: chimpion.tribe,
        type: chimpion.type.split(/(?=[A-Z])/).join(" "),
        art_files: chimpion.paths,
        lore: chimpion.lore,
        holder_name: chimpion.holder
      },
      {},
      {}
    )}`;
  })}</div>`}`} </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let holderName;
  let MatricaKey;
  let DiscordKey;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  function getHolderName(params) {
    try {
      let holderName2 = params.toLowerCase();
      for (let key in holders) {
        if (key.toLowerCase() == holderName2) {
          return holderName2 = key;
        }
      }
    } catch (error) {
      console.log("HolderNotFoundError");
      return holderName = null;
    }
  }
  holderName = getHolderName($page.params.holderName);
  MatricaKey = holders[holderName].matricaId;
  DiscordKey = holders[holderName].discordId;
  $$unsubscribe_page();
  return `${MatricaKey && DiscordKey ? `${validate_component(HolderPage, "HolderPage").$$render(
    $$result,
    {
      holderName,
      pfp: matrica_data[MatricaKey].pfp,
      twitter: discord_data[DiscordKey].twitterHandle,
      discord: discord_data[DiscordKey].discordHandle,
      points: discord_data[DiscordKey].points,
      level: discord_data[DiscordKey].level,
      chimpions_held: matrica_data[MatricaKey].chimpions,
      TWS: matrica_data[MatricaKey].TWS,
      experience: holders[holderName].experience,
      skills: holders[holderName].skills,
      favoriteArt: holders[holderName].favoriteArt
    },
    {},
    {}
  )}` : `${validate_component(NotFound, "NotFound").$$render($$result, {}, {}, {})}`}`;
});
export {
  Page as default
};
