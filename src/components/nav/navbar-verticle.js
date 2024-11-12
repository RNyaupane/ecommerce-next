"use client";

import Logo from "@/app/mock/logo/logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavbarVerticle() {
  const [iSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="py-2 py-xl-5 bg-primary-down-lg">
      <div className="container my-0dot5 my-xl-0">
        <div className="row align-items-center">
          <div className="col-auto">
            <nav className="navbar navbar-expand u-header__navbar py-0 justify-content-xl-between max-width-270 min-width-270">
              <Logo />

              <button
                id="sidebarHeaderInvokerMenu"
                type="button"
                className="navbar-toggler d-block btn u-hamburger mr-3 mr-xl-0"
                aria-controls="sidebarHeader"
                aria-haspopup="true"
                aria-expanded="false"
                data-unfold-event="click"
                data-unfold-hide-on-scroll="false"
                data-unfold-target="#sidebarHeader1"
                data-unfold-type="css-animation"
                data-unfold-animation-in="fadeInLeft"
                data-unfold-animation-out="fadeOutLeft"
                data-unfold-duration="500"
                onClick={() => setIsSidebarOpen(true)}
              >
                <span id="hamburgerTriggerMenu" className="u-hamburger__box">
                  <span className="u-hamburger__inner"></span>
                </span>
              </button>
            </nav>
            <aside
              id="sidebarHeader1"
              className={`u-sidebar u-sidebar--left u-unfold--css-animation ${
                iSidebarOpen ? "fadeInLeft" : "u-unfold--hidden"
              }`}
              aria-labelledby="sidebarHeaderInvoker"
              style={{ animationDuration: "500ms", left: "0px" }}
            >
              <div className="u-sidebar__scroller">
                <div className="u-sidebar__container">
                  <div className="u-header-sidebar__footer-offset">
                    <div className="position-absolute top-0 right-0 z-index-2 pt-4 pr-4 bg-white">
                      <button
                        type="button"
                        className="close ml-auto"
                        aria-controls="sidebarHeader"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-unfold-event="click"
                        data-unfold-hide-on-scroll="false"
                        data-unfold-target="#sidebarHeader1"
                        data-unfold-type="css-animation"
                        data-unfold-animation-in="fadeInLeft"
                        data-unfold-animation-out="fadeOutLeft"
                        data-unfold-duration="500"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        <span aria-hidden="true">
                          <i className="ec ec-close-remove text-gray-90 font-size-20"></i>
                        </span>
                      </button>
                    </div>
                    <div
                      className="js-scrollbar u-sidebar__body mCustomScrollbar _mCS_1 mCS-autoHide mCS_no_scrollbar"
                      style={{ position: "relative", overflow: "visible" }}
                    >
                      <div
                        id="mCSB_1"
                        className="mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside"
                        style={{ maxHeight: "none" }}
                        tabIndex="0"
                      >
                        <div
                          id="mCSB_1_container"
                          className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                          style={{
                            position: "relative",
                            top: "0px",
                            left: "0px",
                          }}
                          dir="ltr"
                        >
                          <div
                            id="headerSidebarContent"
                            className="u-sidebar__content u-header-sidebar__content"
                          >
                            <Logo />
                            <ul
                              id="headerSidebarList"
                              className="u-header-collapse__nav"
                            >
                              <li className="">
                                <a
                                  className="u-header-collapse__nav-link font-weight-bold"
                                  href="#"
                                >
                                  Value of the Day
                                </a>
                              </li>
                              {/* <!-- End Value of the Day --> */}

                              {/* <!-- Top 100 Offers --> */}
                              <li className="">
                                <a
                                  className="u-header-collapse__nav-link font-weight-bold"
                                  href="#"
                                >
                                  Top 100 Offers
                                </a>
                              </li>
                              {/* <!-- End Top 100 Offers --> */}

                              {/* <!-- New Arrivals --> */}
                              <li className="">
                                <a
                                  className="u-header-collapse__nav-link font-weight-bold"
                                  href="#"
                                >
                                  New Arrivals
                                </a>
                              </li>
                              {/* <!-- End New Arrivals --> */}

                              {/* <!-- Computers & Accessories --> */}
                              <li className="u-has-submenu u-header-collapse__submenu">
                                <a
                                  className="u-header-collapse__nav-link u-header-collapse__nav-pointer"
                                  data-target="#headerSidebarComputersCollapse"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="headerSidebarComputersCollapse"
                                >
                                  Computers & Accessories
                                </a>

                                <div
                                  id="headerSidebarComputersCollapse"
                                  className="collapse"
                                  data-parent="#headerSidebarContent"
                                >
                                  <ul className="u-header-collapse__nav-list">
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Computers &amp; Accessories
                                      </span>
                                    </li>
                                    <li className="">
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Computers & Accessories
                                      </a>
                                    </li>
                                    <li className="">
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Computer Accessories
                                      </a>
                                    </li>
                                    <li className="">
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Software
                                      </a>
                                    </li>
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Office & Stationery
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Office & Stationery
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Electronics
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              {/* <!-- End Computers & Accessories --> */}

                              {/* <!-- Cameras, Audio & Video --> */}
                              <li className="u-has-submenu u-header-collapse__submenu">
                                <a
                                  className="u-header-collapse__nav-link u-header-collapse__nav-pointer"
                                  data-target="#headerSidebarCamerasCollapse"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="headerSidebarCamerasCollapse"
                                >
                                  Cameras, Audio & Video
                                </a>

                                <div
                                  id="headerSidebarCamerasCollapse"
                                  className="collapse"
                                  data-parent="#headerSidebarContent"
                                >
                                  <ul className="u-header-collapse__nav-list">
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Cameras & Photography
                                      </span>
                                    </li>
                                    <li className="">
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Lenses
                                      </a>
                                    </li>
                                    <li className="">
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Camera Accessories
                                      </a>
                                    </li>
                                    <li className="">
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Security & Surveillance
                                      </a>
                                    </li>
                                    <li className="">
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Binoculars & Telescopes
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              {/* <!-- End Cameras, Audio & Video --> */}

                              {/* <!-- Mobiles & Tablets --> */}
                              <li className="u-has-submenu u-header-collapse__submenu">
                                <a
                                  className="u-header-collapse__nav-link u-header-collapse__nav-pointer"
                                  data-target="#headerSidebarMobilesCollapse"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="headerSidebarMobilesCollapse"
                                >
                                  Mobiles & Tablets
                                </a>

                                <div
                                  id="headerSidebarMobilesCollapse"
                                  className="collapse"
                                  data-parent="#headerSidebarContent"
                                >
                                  <ul className="u-header-collapse__nav-list">
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Mobiles & Tablets
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Mobile Phones
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Smartphones
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              {/* <!-- End Mobiles & Tablets --> */}

                              {/* <!-- Movies, Music & Video --> */}
                              <li className="u-has-submenu u-header-collapse__submenu">
                                <a
                                  className="u-header-collapse__nav-link u-header-collapse__nav-pointer"
                                  data-target="#headerSidebarMoviesCollapse"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="headerSidebarMoviesCollapse"
                                >
                                  Movies, Music & Video
                                </a>

                                <div
                                  id="headerSidebarMoviesCollapse"
                                  className="collapse"
                                  data-parent="#headerSidebarContent"
                                >
                                  <ul className="u-header-collapse__nav-list">
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Movies & TV Shows
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Movies & TV Shows
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All English
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Hindi
                                      </a>
                                    </li>
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Video Games
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              {/* <!-- End Movies, Music & Video --> */}

                              {/* <!-- TV & Audio --> */}
                              <li className="u-has-submenu u-header-collapse__submenu">
                                <a
                                  className="u-header-collapse__nav-link u-header-collapse__nav-pointer"
                                  data-target="#headerSidebarTvCollapse"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="headerSidebarTvCollapse"
                                >
                                  TV & Audio
                                </a>

                                <div
                                  id="headerSidebarTvCollapse"
                                  className="collapse"
                                  data-parent="#headerSidebarContent"
                                >
                                  <ul className="u-header-collapse__nav-list">
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Audio & Video
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Audio & Video
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Televisions
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Headphones
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              {/* <!-- End TV & Audio --> */}

                              {/* <!-- Watches & Eyewear --> */}
                              <li className="u-has-submenu u-header-collapse__submenu">
                                <a
                                  className="u-header-collapse__nav-link u-header-collapse__nav-pointer"
                                  data-target="#headerSidebarWatchesCollapse"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="headerSidebarWatchesCollapse"
                                >
                                  Watches & Eyewear
                                </a>

                                <div
                                  id="headerSidebarWatchesCollapse"
                                  className="collapse"
                                  data-parent="#headerSidebarContent"
                                >
                                  <ul className="u-header-collapse__nav-list">
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Watches
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Watches
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Men&apos;s Watches
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Women&apos;s Watches
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              {/* <!-- End Watches & Eyewear --> */}

                              {/* <!-- Car, Motorbike & Industrial --> */}
                              <li className="u-has-submenu u-header-collapse__submenu">
                                <a
                                  className="u-header-collapse__nav-link u-header-collapse__nav-pointer"
                                  data-target="#headerSidebarCarCollapse"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="headerSidebarCarCollapse"
                                >
                                  Car, Motorbike & Industrial
                                </a>

                                <div
                                  id="headerSidebarCarCollapse"
                                  className="collapse"
                                  data-parent="#headerSidebarContent"
                                >
                                  <ul className="u-header-collapse__nav-list">
                                    <li>
                                      <span className="u-header-sidebar__sub-menu-title">
                                        Car & Motorbike
                                      </span>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Cars & Bikes
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Car & Bike Care
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Lubricants
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              {/* <!-- End Car, Motorbike & Industrial --> */}

                              {/* <!-- Accessories --> */}
                              <li className="u-has-submenu u-header-collapse__submenu">
                                <a
                                  className="u-header-collapse__nav-link u-header-collapse__nav-pointer"
                                  data-target="#headerSidebarAccessoriesCollapse"
                                  role="button"
                                  data-toggle="collapse"
                                  aria-expanded="false"
                                  aria-controls="headerSidebarAccessoriesCollapse"
                                >
                                  Accessories
                                </a>

                                <div
                                  id="headerSidebarAccessoriesCollapse"
                                  className="collapse"
                                  data-parent="#headerSidebarContent"
                                >
                                  <ul className="u-header-collapse__nav-list">
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Cases
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Chargers
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Headphone Accessories
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Headphone Cases
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Headphones
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        All Industrial Supplies
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="u-header-collapse__submenu-nav-link"
                                        href="#"
                                      >
                                        Lab & Scientific
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              {/* <!-- End Accessories --> */}
                            </ul>
                            {/* <!-- End List --> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- End Content --> */}
                  </div>
                  {/* <!-- Footer --> */}
                  <footer
                    id="SVGwaveWithDots"
                    className="u-header-sidebar__footer"
                  >
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item pr-3">
                        <a
                          className="u-header-sidebar__footer-link text-gray-90"
                          href="#"
                        >
                          Privacy
                        </a>
                      </li>
                      <li className="list-inline-item pr-3">
                        <a
                          className="u-header-sidebar__footer-link text-gray-90"
                          href="#"
                        >
                          Terms
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a
                          className="u-header-sidebar__footer-link text-gray-90"
                          href="#"
                        >
                          <i className="fas fa-info-circle"></i>
                        </a>
                      </li>
                    </ul>

                    {/* SVG Background Shape */}
                    <div className="position-absolute right-0 bottom-0 left-0 z-index-n1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 126.5"
                        style={{
                          marginBottom: "-5px",
                          enableBackground: "new 0 0 300 126.5",
                        }}
                        className="injected-svg js-svg-injector"
                        data-parent="#SVGwaveWithDots"
                      >
                        <style type="text/css">
                          {`.wave-bottom-with-dots-0{fill:#377DFF;}
              .wave-bottom-with-dots-1{fill:#377DFF;}
              .wave-bottom-with-dots-2{fill:#DE4437;}
              .wave-bottom-with-dots-3{fill:#00C9A7;}
              .wave-bottom-with-dots-4{fill:#FFC107;}`}
                        </style>
                        <path
                          className="wave-bottom-with-dots-0 fill-primary"
                          opacity=".6"
                          d="M0,58.9c0-0.9,5.1-2,5.8-2.2c6-0.8,11.8,2.2,17.2,4.6c4.5,2.1,8.6,5.3,13.3,7.1C48.2,73.3,61,73.8,73,69  c43-16.9,40-7.9,84-2.2c44,5.7,83-31.5,143-10.1v69.8H0C0,126.5,0,59,0,58.9z"
                        ></path>
                        <path
                          className="wave-bottom-with-dots-1 fill-primary"
                          d="M300,68.5v58H0v-58c0,0,43-16.7,82,5.6c12.4,7.1,26.5,9.6,40.2,5.9c7.5-2.1,14.5-6.1,20.9-11  c6.2-4.7,12-10.4,18.8-13.8c7.3-3.8,15.6-5.2,23.6-5.2c16.1,0.1,30.7,8.2,45,16.1c13.4,7.4,28.1,12.2,43.3,11.2  C282.5,76.7,292.7,74.4,300,68.5z"
                        ></path>
                        <g>
                          <circle
                            className="wave-bottom-with-dots-2 fill-danger"
                            cx="259.5"
                            cy="17"
                            r="13"
                          ></circle>
                          <circle
                            className="wave-bottom-with-dots-1 fill-primary"
                            cx="290"
                            cy="35.5"
                            r="8.5"
                          ></circle>
                          <circle
                            className="wave-bottom-with-dots-3 fill-success"
                            cx="288"
                            cy="5.5"
                            r="5.5"
                          ></circle>
                          <circle
                            className="wave-bottom-with-dots-4 fill-warning"
                            cx="232.5"
                            cy="34"
                            r="2"
                          ></circle>
                        </g>
                      </svg>
                    </div>
                    {/* End SVG Background Shape */}
                  </footer>
                  {/* <!-- End Footer --> */}
                </div>
              </div>
            </aside>
            {/* <!-- ========== END HEADER SIDEBAR ========== --> */}
          </div>
          {/* <!-- End Logo-offcanvas-menu --> */}
          {/* <!-- Search Bar --> */}
          <div className="col d-none d-xl-block">
            <form className="js-focus-state">
              <label className="sr-only" htmlFor="searchproduct">
                Search
              </label>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary"
                  name="email"
                  id="searchproduct-item"
                  placeholder="Search for Products"
                  aria-label="Search for Products"
                  aria-describedby="searchProduct1"
                  required
                />
                <div className="input-group-append">
                  {/* <!-- Select --> */}
                  <select
                    className="js-select selectpicker dropdown-select custom-search-categories-select"
                    data-style="btn height-
                    40 text-gray-60 font-weight-normal border-top border-bottom border-left-0 rounded-0 border-primary border-width-2 pl-0 pr-5 py-2"
                    defaultValue="one"
                  >
                    <option value="one">All Categories</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                    <option value="four">Four</option>
                  </select>
                  {/* <!-- End Select --> */}
                  <button
                    className="btn btn-primary height-40 py-2 px-3 rounded-right-pill"
                    type="button"
                    id="searchProduct1"
                  >
                    <span className="ec ec-search font-size-24"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* <!-- End Search Bar --> */}
          {/* <!-- Header Icons --> */}
          <div className="col col-xl-auto text-right text-xl-left pl-0 pl-xl-3 position-static">
            <div className="d-inline-flex">
              <ul className="d-flex list-unstyled mb-0 align-items-center">
                {/* <!-- Search --> */}
                <li className="col d-xl-none px-2 px-sm-3 position-static">
                  <a
                    id="searchClassicInvoker"
                    className="font-size-22 text-gray-90 text-lh-1 btn-text-secondary"
                    role="button"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Search"
                    aria-controls="searchClassic"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-unfold-target="#searchClassic"
                    data-unfold-type="css-animation"
                    data-unfold-duration="300"
                    data-unfold-delay="300"
                    data-unfold-hide-on-scroll="true"
                    data-unfold-animation-in="slideInUp"
                    data-unfold-animation-out="fadeOut"
                  >
                    <span className="ec ec-search"></span>
                  </a>

                  {/* <!-- Input --> */}
                  <div
                    id="searchClassic"
                    className="dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2"
                    aria-labelledby="searchClassicInvoker"
                  >
                    <form className="js-focus-state input-group px-3">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search Product"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary px-3" type="button">
                          <i className="font-size-18 ec ec-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <!-- End Input --> */}
                </li>
                {/* <!-- End Search --> */}
                <li className="col d-none d-xl-block">
                  <Link
                    href="/compare"
                    className="text-gray-90"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Compare"
                  >
                    <i className="font-size-22 ec ec-compare"></i>
                  </Link>
                </li>
                <li className="col d-none d-xl-block">
                  <Link
                    href="/wishlist"
                    className="text-gray-90"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Favorites"
                  >
                    <i className="font-size-22 ec ec-favorites"></i>
                  </Link>
                </li>
                <li className="col d-none d-xl-block px-2 px-sm-3">
                  <Link
                    href="/my-account"
                    className="text-gray-90"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="My Account"
                  >
                    <i className="font-size-22 ec ec-user"></i>
                  </Link>
                </li>
                <li className="col pr-xl-0 px-2 px-sm-3 d-xl-none">
                  <Link
                    href="/cart"
                    className="text-gray-90 position-relative d-flex "
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Cart"
                  >
                    <i className="font-size-22 ec ec-shopping-bag"></i>
                    <span className="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12">
                      2
                    </span>
                    <span className="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">
                      $1785.00
                    </span>
                  </Link>
                </li>
                <li className="col pr-xl-0 px-2 px-sm-3 d-none d-xl-block">
                  <div
                    onClick={toggleDropdown}
                    className="text-gray-90 position-relative d-flex"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Cart"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                  >
                    <i className="font-size-22 ec ec-shopping-bag"></i>
                    <span className="bg-lg-down-black width-22 height-22 bg-primary position-absolute d-flex align-items-center justify-content-center rounded-circle left-12 top-8 font-weight-bold font-size-12">
                      2
                    </span>
                    <span className="d-none d-xl-block font-weight-bold font-size-16 text-gray-90 ml-3">
                      $1785.00
                    </span>
                  </div>

                  {isOpen && (
                    <div
                      id="basicDropdownHover"
                      class="cart-dropdown dropdown-menu dropdown-unfold border-top border-top-primary mt-3 border-width-2 border-left-0 border-right-0 border-bottom-0 left-auto right-0 u-unfold--css-animation slideInUp"
                      aria-labelledby="basicDropdownHoverInvoker"
                      style={{ animationDuration: "300ms", right: "0px" }}
                    >
                      <ul className="list-unstyled px-3 pt-3">
                        <li className="border-bottom pb-3 mb-3">
                          <div>
                            <ul className="list-unstyled row mx-n2">
                              <li className="px-2 col-auto">
                                <Image
                                  className="img-fluid"
                                  src="/img/140X140/img1.png"
                                  height={70}
                                  width={70}
                                  alt="Image Description"
                                  objectFit="cover"
                                />
                              </li>
                              <li className="px-2 col">
                                <h5 className="text-blue font-size-14 font-weight-bold">
                                  Ultra Wireless S50 Headphones S50 with
                                  Bluetooth
                                </h5>
                                <span className="font-size-14">
                                  1 × $1,100.00
                                </span>
                              </li>
                              <li className="px-2 col-auto">
                                <a href="#" className="text-gray-90">
                                  <i className="ec ec-close-remove"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="border-bottom pb-3 mb-3">
                          <div>
                            <ul className="list-unstyled row mx-n2">
                              <li className="px-2 col-auto">
                                <Image
                                  className="img-fluid"
                                  src="/img/140X140/img2.png"
                                  alt="Image Description"
                                  objectFit="cover"
                                  height={70}
                                  width={70}
                                />
                              </li>
                              <li className="px-2 col">
                                <h5 className="text-blue font-size-14 font-weight-bold">
                                  Widescreen NX Mini F1 SMART NX
                                </h5>
                                <span className="font-size-14">
                                  1 × $685.00
                                </span>
                              </li>
                              <li className="px-2 col-auto">
                                <a href="#" className="text-gray-90">
                                  <i className="ec ec-close-remove"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                      <div className="flex-center-between px-4 pt-2">
                        <Link
                          href="/cart"
                          className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5"
                        >
                          View cart
                        </Link>
                        <Link
                          href="/checkout"
                          className="btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
