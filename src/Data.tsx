import {
  FaReact,
  FaPhoneAlt,
  FaUser,
  FaPaperPlane,
  FaInstagram,
  FaLinkedin,
  FaJava,
  FaPython,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiJupyter, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandCpp } from "react-icons/tb";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";

export const navLinks = ["home", "about", "skills", "projects", "contact"];

export const socialIcons = [
  {
    id: 1,
    url: "https://www.instagram.com/saketaryann/",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/saketaryan/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://www.github.com/whysosaket/",
    icon: <FaGithub />,
  },
];

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Saket",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+919950262900",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "saketaryan2002@gmail.com",
  },
];

export const icons = [
  <SiTypescript />,
  <TbBrandNextjs />,
  <FaReact />,
  <FaJava />,
  <TbBrandCpp />,
  ,
  <DiNodejs />,
  <FaPython />,
  <SiJupyter />,
];

export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Research Intern",
    company: "Samsung R&D Institute, Bangalore",
  },
  {
    id: 2,
    year: "2023",
    position: "Coordinator",
    company: "Codex - ITER's Coding Club",
  },
];
export const finishes = [
  {
    id: 1,
    number: "2+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "20+",
    itemName: "Projects",
  },
  {
    id: 3,
    number: "6",
    itemName: "Hackathons",
  },
  {
    id: 4,
    number: "5+",
    itemName: "Events Organized",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "ITER, SOA, Bhubaneswar, Odisha, India",
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "saketaryan2002@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+919950262900",
  },
];

export const workImages = [
  {
    id: 1,
    img: work1,
    name: "SixthSense",
    category: "ml",
    github: "https://github.com/whysosaket/SixthSense",
    deploy: "",
  },
  {
    id: 2,
    img: work2,
    name: "PayBackPal",
    category: "app",
    github: "https://github.com/whysosaket/PayBackPal",
    deploy: "",
  },
  {
    id: 3,
    img: work3,
    name: "Codeberg",
    category: "web",
    github: "https://github.com/whysosaket/codeberg",
    deploy: "",
  },
  {
    id: 4,
    img: work4,
    name: "FindMyMovie",
    category: "web",
    github: "https://github.com/whysosaket/FindMyMovie",
    deploy: "https://findmymovie.onrender.com/",
  },
  {
    id: 5,
    img: work5,
    name: "LinkMyLinks",
    category: "web",
    github: "https://github.com/whysosaket/LinkMyLinks",
    deploy: "https://linkmylinks.netlify.app/",
  },
  {
    id: 6,
    img: work6,
    name: "VAttend",
    category: "web",
    github: "https://github.com/whysosaket/VAttend",
    deploy: "https://vattend.netlify.app",
  },
];

export const workNavs = ["All", "Web", "App", "ML"];
