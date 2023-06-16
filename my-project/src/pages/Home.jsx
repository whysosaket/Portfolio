import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import {faAddressBook, faBars, faBlog, faBriefcase, faCalendarDays, faEnvelopeOpenText, faFileLines, faLocationDot, faMoon, faSun, faUser, faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <>
  {/* commom meta tag */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    rel="shortcut icon"
    href="./images/logo/faveicon.jpg"
    type="image/x-icon"
  />
  {/*=== fontaswesome ===*/}
  <link rel="stylesheet" href="./assets/fontaswesome/css/all.min.css" />
  <link rel="stylesheet" href="./assets/fontaswesome/css/fontawesome.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Roboto+Slab:wght@300;400;500;600;700&display=swap"
    rel="stylesheet"
  />
  {/* slick */}
  <link rel="stylesheet" type="text/css" href="./css/vendor/slick.css" />
  {/*=== main css ===*/}
  <link rel="stylesheet" href="./css/tailwind.css" />
  <link rel="stylesheet" href="./css/custom.css" />
  <title>About - Bostami Tailwind CSS Personal Portfolio HTML Template </title>
  {/* PRELOADER */}
  <div id="preloader">
    <div className="loader_line" />
  </div>
  {/* /PRELOADER */}
  <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
    <div className="section-bg">
      <div className="w-full flex justify-between px-4">
        {/* website Logo */}
        <a href="/">
          <img
            className="h-[26px] lg:h-[32px]"
            src="./images/logo/logo.png"
            alt="logo"
          />
        </a>
        <div className="flex items-center">
          {/* dark and light mode toggle */}
          <button id="theme-toggle" type="button" className="dark-light-btn">
            {/* <i
              id="theme-toggle-dark-icon"
              className="fa-solid text-xl fa-moon hidden"
            /> */}
            <FontAwesomeIcon icon={faMoon} id="theme-toggle-dark-icon" className="fa-solid text-xl hidden" />
            {/* <i
              id="theme-toggle-light-icon"
              className="fa-solid fa-sun text-xl hidden"
            /> */}
            <FontAwesomeIcon icon={faSun} id="theme-toggle-light-icon" className="fa-solid fa-sun text-xl hidden" />
          </button>
          {/* mobile toggle button */}
          <button id="menu-toggle" type="button" className="menu-toggle-btn">
            <FontAwesomeIcon icon={faBars} id="menu-toggle-open-icon"
              className="fa-solid fa-bars text-xl" />
            <FontAwesomeIcon icon={faXmark} 
              className="fa-solid fa-xmark text-xl hidden " />
          </button>
        </div>
      </div>
    </div>
    {/* mobile menu start */}
    <nav id="navbar" className="hidden lg:hidden">
      <ul className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
        <li>
          <a className="mobile-menu-items-active" href="./aboutOne.html">
            <span className="mr-2 text-xl">
              <FontAwesomeIcon icon={faUser} />
            </span>
            About{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="./resumeOne.html">
            <span className="mr-2 text-xl">
              {/* <i className="fa-regular fa-file-lines" /> */}
              <FontAwesomeIcon icon={faFileLines} />
            </span>
            Resume{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="./portfiloOne.html">
            <span className="mr-2 text-xl">
              {/* <i className="fas fa-briefcase" /> */}
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            Works{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="./blogOne.html">
            <span className="mr-2 text-xl">
              {/* <i className="fa-brands fa-blogger" /> */}
              <FontAwesomeIcon icon={faBlog} />
            </span>
            Blogs{" "}
          </a>
        </li>
        <li>
          <a className="mobile-menu-items" href="./contactOne.html">
            <span className="mr-2 text-xl">
              {/* <i className="fa-solid fa-address-book" /> */}
              <FontAwesomeIcon icon={faAddressBook} />
            </span>{" "}
            Contact{" "}
          </a>
        </li>
      </ul>
    </nav>
    {/* mobile menu end */}
    <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
      {/* sidber personal info */}
      <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
        <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
          {/* profile image */}
          <img
            src="./images/about/avatar.jpg"
            className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
            alt="about"
          />
          <div className="pt-[100px] pb-8">
            <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
              {" "}
              Monalisa Ashley{" "}
            </h2>
            <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
              Ui/Ux Designer{" "}
            </h3>
            <div className="flex justify-center space-x-3">
              {/* facebook icon and link */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="socialbtn text-[#1773EA]">
                  <i className="fa-brands fa-facebook-f" />
                </span>
              </a>
              {/* twitter icon and link */}
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="socialbtn text-[#1C9CEA]">
                  <i className="fa-brands fa-twitter" />
                </span>
              </a>
              {/* dribbble icon and link */}
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="socialbtn text-[#e14a84]">
                  <i className="fa-brands fa-dribbble" />
                </span>
              </a>
              {/* linkedin icon and link */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="socialbtn text-[#0072b1]">
                  <i className="fa-brands fa-linkedin-in" />
                </span>
              </a>
            </div>
            {/* personal infomation start */}
            <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                  <i className="fa-solid fa-mobile-screen-button" />
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    {" "}
                    Phone{" "}
                  </p>
                  <p className="dark:text-white">+123 456 7890</p>
                </div>
              </div>
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                  {/* <i className="fa-solid fa-envelope-open-text" /> */}
                  <FontAwesomeIcon icon={faEnvelopeOpenText} />
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    {" "}
                    Email{" "}
                  </p>
                  <p className="dark:text-white">example@mail.com</p>
                </div>
              </div>
              <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                  {/* <i className="fa-solid fa-location-dot" /> */}
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    {" "}
                    Location{" "}
                  </p>
                  <p className="dark:text-white">Hong kong china</p>
                </div>
              </div>
              <div className="flex py-2.5">
                <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                  {/* <i className="fa-solid fa-calendar-days" /> */}
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>
                <div className="text-left ml-2.5">
                  <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                    {" "}
                    Birthday{" "}
                  </p>
                  <p className="dark:text-white">May 27, 1990</p>
                </div>
              </div>
            </div>
            {/* personal infomation end*/}
            {/* dowanload button */}
            <button className="dowanload-btn">
              <img
                className="mr-3"
                src="./images/icons/dowanload.png"
                alt="icon"
              />{" "}
              Download CV{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8">
        {/* header for mobile devices start */}
        <header className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
          <nav className="hidden lg:block">
            <ul className="flex">
              <li>
                {" "}
                <a className="menu-active" href="./aboutOne.html">
                  <span className="text-xl mb-1">
                    {/* <i className="fa-regular fa-user" /> */}
                    <FontAwesomeIcon icon={faUser} />
                  </span>{" "}
                  About{" "}
                </a>
              </li>
              <li>
                {" "}
                <a className="menu-item" href="./resumeOne.html">
                  <span className="text-xl mb-1">
                    {/* <i className="fa-regular fa-file-lines" /> */}
                    <FontAwesomeIcon icon={faFileLines} />
                  </span>{" "}
                  Resume{" "}
                </a>
              </li>
              <li>
                {" "}
                <a className="menu-item" href="./portfiloOne.html">
                  <span className="text-xl mb-1">
                    {/* <i className="fas fa-briefcase" /> */}
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>{" "}
                  Works{" "}
                </a>
              </li>
              <li>
                <a className="menu-item" href="./blogOne.html">
                  <span className="text-xl mb-1">
                    {/* <i className="fa-brands fa-blogger" /> */}
                    <FontAwesomeIcon icon={faBlog} />
                  </span>{" "}
                  Blogs{" "}
                </a>
              </li>
              <li>
                {" "}
                <a className="menu-item" href="./contactOne.html">
                  <span className="text-xl mb-1">
                    {/* <i className="fa-solid fa-address-book" /> */}
                    <FontAwesomeIcon icon={faAddressBook} />
                  </span>{" "}
                  Contact{" "}
                </a>
              </li>
            </ul>
          </nav>
        </header>
        {/* header for mobile devices end */}
        {/* about me section start */}
        <div>
          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
              {/* about page title */}
              <h2 className="after-effect after:left-52">About Me</h2>
              {/* personal info for mobile devices start */}
              <div className="lg:hidden">
                <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
                  {/* profile image  */}
                  <img
                    src="./images/about/avatar.jpg"
                    className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
                    alt="about"
                  />
                  <div className="pt-[100px] pb-8">
                    <h2 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
                      {" "}
                      Monalisa Ashley
                    </h2>
                    <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                      Ui/Ux Designer{" "}
                    </h3>
                    <div className="flex justify-center space-x-3">
                      {/* facebook icon and link */}
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="socialbtn text-[#1773EA]">
                          <i className="fa-brands fa-facebook-f" />
                          {/* <FontAwesomeIcon icon={faFacebook } /> */}
                        </span>
                      </a>
                      {/* twitter icon and link */}
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="socialbtn text-[#1C9CEA]">
                          <i className="fa-brands fa-twitter" />
                        </span>
                      </a>
                      {/* dribbble icon and link */}
                      <a
                        href="https://dribbble.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="socialbtn text-[#e14a84]">
                          <i className="fa-brands fa-dribbble" />
                        </span>
                      </a>
                      {/* linkedin icon and link */}
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="socialbtn text-[#0072b1]">
                          <i className="fa-brands fa-linkedin-in" />
                        </span>
                      </a>
                    </div>
                    {/* personal info start */}
                    <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                      <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                        <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                          <i className="fa-solid fa-mobile-screen-button" />
                        </span>
                        <div className="text-left ml-2.5">
                          <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                            {" "}
                            Phone{" "}
                          </p>
                          <p className="dark:text-white">+123 456 7890</p>
                        </div>
                      </div>
                      <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                        <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                          <i className="fa-solid fa-envelope-open-text" />
                        </span>
                        <div className="text-left ml-2.5">
                          <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                            {" "}
                            Email{" "}
                          </p>
                          <p className="dark:text-white">example@mail.com</p>
                        </div>
                      </div>
                      <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                        <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                          <i className="fa-solid fa-location-dot" />
                        </span>
                        <div className="text-left ml-2.5">
                          <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                            {" "}
                            Location{" "}
                          </p>
                          <p className="dark:text-white">Hong kong china</p>
                        </div>
                      </div>
                      <div className="flex py-2.5">
                        <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                          <i className="fa-solid fa-calendar-days" />
                        </span>
                        <div className="text-left ml-2.5">
                          <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                            {" "}
                            Birthday{" "}
                          </p>
                          <p className="dark:text-white">May 27, 1990</p>
                        </div>
                      </div>
                    </div>
                    {/* personal info end */}
                    {/* dowanload button */}
                    <button className="dowanload-btn">
                      <img
                        className="mr-3"
                        src="./images/icons/dowanload.png"
                        alt="icon"
                      />{" "}
                      Download CV
                    </button>
                  </div>
                </div>
              </div>
              {/* personal info for mobile devices end */}
              <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                <div className="col-span-12 space-y-2.5">
                  <div className="lg:mr-16">
                    <p className="text-[#44566c] dark:text-color-910 leading-7">
                      {" "}
                      I'm Creative Director and UI/UX Designer from Sydney,
                      Australia, working in web development and print media. I
                      enjoy turning complex problems into simple, beautiful and
                      intuitive designs.{" "}
                    </p>
                    <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910">
                      {" "}
                      My aim is to bring across your message and identity in the
                      most creative way. I created web design for many famous
                      brand companies.{" "}
                    </p>
                  </div>
                  <div />
                </div>
              </div>
            </div>
            {/* what i do section start */}
            <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
              <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5">
                {" "}
                What I do!{" "}
              </h3>
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
                  <img
                    className="w-10 h-10 object-contain block"
                    src="./images/icons/icon.svg"
                    alt="icon"
                  />
                  <div className="space-y-2">
                    <h3 className="dark:text-white text-[22px] font-semibold">
                      {" "}
                      Ui/Ux Design{" "}
                    </h3>
                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.{" "}
                    </p>
                  </div>
                </div>
                <div className="about-box bg-[#fefaf0] dark:bg-transparent">
                  <img
                    className="w-10 h-10 object-contain block"
                    src="./images/icons/icon1.svg"
                    alt="icon"
                  />
                  <div className="space-y-2">
                    <h3 className="dark:text-white text-[22px] font-semibold">
                      {" "}
                      App Development{" "}
                    </h3>
                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.{" "}
                    </p>
                  </div>
                </div>
                <div className="about-box bg-[#fcf4ff] dark:bg-transparent">
                  <img
                    className="w-10 h-10 object-contain block"
                    src="./images/icons/icon2.svg"
                    alt="icon"
                  />
                  <div className="space-y-2">
                    <h3 className="dark:text-white text-[22px] font-semibold">
                      {" "}
                      Photography{" "}
                    </h3>
                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.{" "}
                    </p>
                  </div>
                </div>
                <div className="about-box bg-[#fff4f4] dark:bg-transparent">
                  <img
                    className="w-10 h-10 object-contain block"
                    src="./images/icons/icon3.svg"
                    alt="icon"
                  />
                  <div className="space-y-2">
                    <h3 className="dark:text-white text-[22px] font-semibold">
                      {" "}
                      Photography{" "}
                    </h3>
                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.{" "}
                    </p>
                  </div>
                </div>
                <div className="about-box bg-[#fff0f8] dark:bg-transparent">
                  <img
                    className="w-10 h-10 object-contain block"
                    src="./images/icons/icon4.svg"
                    alt="icon"
                  />
                  <div className="space-y-2">
                    <h3 className="dark:text-white text-[22px] font-semibold">
                      {" "}
                      Managment{" "}
                    </h3>
                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.{" "}
                    </p>
                  </div>
                </div>
                <div className="about-box bg-[#f3faff] dark:bg-transparent">
                  <img
                    className="w-10 h-10 object-contain block"
                    src="./images/icons/icon5.svg"
                    alt="icon"
                  />
                  <div className="space-y-2">
                    <h3 className="dark:text-white text-[22px] font-semibold">
                      {" "}
                      Web Development{" "}
                    </h3>
                    <p className="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam euismod volutpat.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* what i do section start */}
            <div className="px-2 sm:px-5 md:px-10 lg:px-14">
              <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
                <h3 className="text-center dark:text-white text-6xl mb-3 font-semibold">
                  {" "}
                  Clients{" "}
                </h3>
                {/* slider and slider items */}
                <div className="slickOne text-center px-2 pt-8">
                  <div>
                    <img
                      className="overflow-hidden brand-img"
                      src="./images/slider/brand.png"
                      alt="brand icon"
                    />
                  </div>
                  <div>
                    <img
                      className="overflow-hidden brand-img"
                      src="./images/slider/brand1.png"
                      alt="brand icon"
                    />
                  </div>
                  <div>
                    <img
                      className="overflow-hidden brand-img"
                      src="./images/slider/brand2.png"
                      alt="brand icon"
                    />
                  </div>
                  <div>
                    <img
                      className="overflow-hidden brand-img"
                      src="./images/slider/brand3.png"
                      alt="brand icon"
                    />
                  </div>
                  <div>
                    <img
                      className="overflow-hidden brand-img"
                      src="./images/slider/brand4.png"
                      alt="brand icon"
                    />
                  </div>
                  <div>
                    <img
                      className="overflow-hidden brand-img"
                      src="./images/slider/brand1.png"
                      alt="brand icon"
                    />
                  </div>
                  <div>
                    <img
                      className="overflow-hidden brand-img"
                      src="./images/slider/brand1.png"
                      alt="brand icon"
                    />
                  </div>
                </div>
                {/* slider and slider items end */}
              </div>
            </div>
            {/* footer start */}
            <footer
              className="overflow-hidden rounded-b-2xl"
              style={{ background: "transparent" }}
            >
              <p className="text-center py-6 text-gray-lite dark:text-color-910">
                {" "}
                © 2022 All Rights Reserved by{" "}
                <a
                  className="hover:text-[#FA5252] duration-300 transition"
                  href="https://themeforest.net/user/ib-themes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  ib-themes
                </a>
                .{" "}
              </p>
            </footer>
            {/* footer section end */}
          </div>
        </div>
        {/* about me section start */}
      </div>
    </div>
  </div>
  {/* End bgHomeBg */}
</>

  )
}

export default Home