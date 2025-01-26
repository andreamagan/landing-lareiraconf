import Raiola from "@assets/sponsors/raiola.svg";
import Denodo from "@assets/sponsors/denodo.svg";
import Dinahosting from "@assets/sponsors/dinahosting.svg";
import Tecdesoft from "@assets/sponsors/tecdesoft.svg";
import Captology from "@assets/sponsors/captology.svg";
import Teimas from "@assets/sponsors/teimas.svg";
import SmartClick from "@assets/sponsors/smartclick.svg";
import UDC from "@assets/sponsors/udc.svg";
import Codely from "@assets/sponsors/codely.svg";
import Lucus from "@assets/sponsors/lucus.svg";

enum SponsorTier {
  Lume = "lume",
  Brasa = "brasa",
  Faisca = "faisca",
  Vagalume = "vagalume",
}

export const SPONSORS = [
  {
    name: "Raiola Networks",
    logo: Raiola,
    url: "https://raiolanetworks.com/",
    tier: SponsorTier.Lume,
  },
  {
    name: "Denodo",
    logo: Denodo,
    url: "https://www.denodo.com/",
    tier: SponsorTier.Lume,
  },
  {
    name: "dinahosting",
    logo: Dinahosting,
    url: "https://dinahosting.com/",
    tier: SponsorTier.Lume,
  },
  {
    name: "Smartclick",
    logo: SmartClick,
    url: "https://smartclick.es/",
    tier: SponsorTier.Lume,
  },
  {
    name: "Lucus Host",
    logo: Lucus,
    url: "https://www.lucushost.com/",
    tier: SponsorTier.Lume,
  },
  {
    name: "Teimas",
    logo: Teimas,
    url: "https://www.teimas.com/",
    tier: SponsorTier.Brasa,
  },
  {
    name: "Tecdesoft",
    logo: Tecdesoft,
    url: "https://tecdesoft.es/",
    tier: SponsorTier.Brasa,
  },
  {
    name: "Captology",
    logo: Captology,
    url: "https://www.captology.es/",
    tier: SponsorTier.Faisca,
  },
  {
    name: "Codely",
    logo: Codely,
    url: "https://codely.com/",
    tier: SponsorTier.Vagalume,
  },
  {
    name: "Universidade da Coruña",
    logo: UDC,
    url: "https://www.udc.es/",
    tier: SponsorTier.Vagalume,
  },
];
