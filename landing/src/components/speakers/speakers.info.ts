import AndreaAvatar from "@speakers/Andrea.webp";
import GodlikeAvatar from "@speakers/Godlike.webp";
import ManriqueAvatar from "@speakers/Manrique.webp";
import CristinaAvatar from "@speakers/Cristina.webp";
import CarlaAvatar from "@speakers/Carla.webp";
import BreaAvatar from "@speakers/Brea.webp";
import PabloAvatar from "@speakers/Pablo.webp";
import NestorAvatar from "@speakers/Nestor.webp";
import SergioAvatar from "@speakers/Sergio.webp";
import DavidAvatar from "@speakers/David.webp";
import MoureAvatar from "@speakers/Moure.webp";
import KuartilloAvatar from "@speakers/Kuartillo.webp";
import Andrea from "@speakers/Andrea.jpg";
import Godlike from "@speakers/Godlike.jpg";
import Manrique from "@speakers/Manrique.jpg";
import Cristina from "@speakers/Cristina.jpg";
import Carla from "@speakers/Carla.jpg";
import Brea from "@speakers/Brea.jpg";
import Pablo from "@speakers/Pablo.jpg";
import Nestor from "@speakers/Nestor.jpg";
import Moure from "@speakers/Moure.jpg";
import David from "@speakers/David.jpg";
import Sergio from "@speakers/Sergio.jpg";
import Kuartillo from "@speakers/Kuartillo.jpg";

type Speaker = {
  id: string;
  speaker: string;
  image: string;
  avatar: string;
  role: string;
};

export const SPEAKERS: Speaker[] = [
  {
    id: "welcome",
    speaker: "Andrea Magán",
    image: Andrea,
    avatar: AndreaAvatar,
    role: "Sr Frontend | Sngular",
  },
  {
    id: "keynote1",
    speaker: "Brais Moure",
    image: Moure,
    avatar: MoureAvatar,
    role: "Divulgador | mouredev",
  },
  {
    id: "talkmanrique",
    speaker: "José Manrique",
    image: Manrique,
    avatar: ManriqueAvatar,
    role: "OSPO Manager | Inditex Tech",
  },
  {
    id: "talkcristina",
    speaker: "Cristina Barreiro",
    image: Cristina,
    avatar: CristinaAvatar,
    role: "Programadora de videojuegos",
  },
  {
    id: "talkalejandro",
    speaker: "Alejandro Brea",
    image: Brea,
    avatar: BreaAvatar,
    role: "Data Analyst | Deloitte",
  },
  {
    id: "talkkuartillo",
    speaker: "Jose Sendín",
    image: Kuartillo,
    avatar: KuartilloAvatar,
    role: "Abogado | Sistemius",
  },
  {
    id: "talkcarla",
    speaker: "Carla Rodríguez",
    image: Carla,
    avatar: CarlaAvatar,
    role: "Frontend developer | Sngular",
  },
  {
    id: "talknestor",
    speaker: "Nestor López",
    image: Nestor,
    avatar: NestorAvatar,
    role: "Sw Architect | Zephyr Cloud",
  },
  {
    id: "talkpablo",
    speaker: "Pablo Pan",
    image: Pablo,
    avatar: PabloAvatar,
    role: "DevOps Lead | DEUS",
  },
  {
    id: "talksergio",
    speaker: "Sergio Castelo",
    image: Sergio,
    avatar: SergioAvatar,
    role: "Consultor SEO | smartclick",
  },
  {
    id: "talkgodlike",
    speaker: "Godlike",
    image: Godlike,
    avatar: GodlikeAvatar,
    role: "Sr Support Eng. | Red Hat",
  },
  {
    id: "keynote2",
    speaker: "David Bonilla",
    image: David,
    avatar: DavidAvatar,
    role: "Co-fundador | Pétalo",
  },
];
