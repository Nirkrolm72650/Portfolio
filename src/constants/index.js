import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  python,
  tailwind,
  vmware,
  nodejs,
  mongodb,
  git,
  windows,
  macos,
  linux,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  viaformation,
  gite,
  docteurIT,
  gandarmerie,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Expérience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Bac Pro SEN - Lycée Touchard Washington - Le Mans",
    icon: web,
  },
  {
    title: "Licence Informatique - Université Le Mans",
    icon: mobile,
  },
  {
    title: "Développeur Web - Titre RNCP N.5 - Arinfo - Le Mans",
    icon: backend,
  },
  {
    title: "BTS SIO SISR - CFP Saint Charles - Le Mans",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Windows",
    icon: windows,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "MacOS",
    icon: macos,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  /**{
    name: "Redux Toolkit",
    icon: redux,
  },*/
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  /**{
    name: "MongoDB",
    icon: mongodb,
  },*/
  /**{
    name: "Three JS",
    icon: threejs,
  },*/
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  /**{
    name: "docker",
    icon: docker,
  },*/
  {
    name: "python",
    icon: python,
  },
  {
    name: "vmware",
    icon: vmware,
  },
];

const experiences = [
  {
    title: "Technicien informatique",
    company_name: "Via formation",
    icon: viaformation,
    iconBg: "#383E56",
    date: "Novembre 2023 - Septembre 2025",
    points: [
      "Ticketing (GLPI)",
      "Dépannage sur site ou à distance",
      "Déploiement (FOG / WDS)",
      "Mise à niveau du serveur GLPI sous la dernière version (Importation inventaire, Collecteur...)"
    ],
  },
  {
    title: "Intégrateur Web",
    company_name: "Le gîte du plantagenêt",
    icon: gite,
    iconBg: "#E6DEDD",
    date: "2022",
    points: [
      "Intégration complète du site avec la maquette sur figma",
      "Élaboration d'un cahier des charges",
      "Gestion de projet"
    ],
  },
  {
    title: "Stagiaire assistant responsable systèmes d'informations",
    company_name: "Via Formation",
    icon: viaformation,
    iconBg: "#383E56",
    date: "2014 - 2015",
    points: [
      "Assistance aux utilisateurs",
      "Mise en place d'un FreeNAS / Système de sauvegarde et de restauration (CloneZilla)"
    ],
  },
  {
    title: "Stagiaire dépanneur informatique",
    company_name: "Docteur Ordinateur",
    icon: docteurIT,
    iconBg: "#E6DEDD",
    date: "2014",
    points: [
      "Dépannage informatique",
      "Mise en place d'un NAS et d'une caméra IP"
    ],
  },
  {
    title: "Stagiaire assistant responsable systèmes d'informations",
    company_name: "Via Formation",
    icon: viaformation,
    iconBg: "#E6DEDD",
    date: "2013",
    points: [
      "Assistance aux utilisateurs",
      "Mise en place d'un système de sauvegarde et de restauration"
    ],
  },
  {
    title: "Stagiaire en maintenance informatique",
    company_name: "Gandarmerie Nationale",
    icon: gandarmerie,
    iconBg: "#E6DEDD",
    date: "2013",
    points: [
      "Dépannage informatique",
      "Mise en place d'un serveur DHCP et d'un proxy Squid"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
