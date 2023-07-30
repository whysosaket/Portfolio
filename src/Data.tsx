import {  FaUser, FaPhoneAlt, FaPaperPlane, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
    <FaDribbble />,
    <FaInstagram />,
    <FaLinkedin />,
    <BsMedium />
]

export const bios = [
    {
      id: 1,
      icon: <FaUser />,
      key: "Name",
      value: "Saket"
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      key: "Phone",
      value: "+919950262900"
    },
    {
      id: 3,
      icon: <FaPaperPlane />,
      key: "Email",
      value: "saketaryan2002@gmail.com"
    }
  ]