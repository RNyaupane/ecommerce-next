"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [subMenuId, setSubMenuID] = useState("");

  return (
    <div className="d-none d-xl-block container">
      <div className="row">
        <div className="col-md-auto d-none d-xl-block">
          <div className="max-width-270 min-width-270">
            <div id="basicsAccordion">
              <div className="card border-0">
                <div
                  className="card-header card-collapse border-0"
                  id="basicsHeadingOne"
                >
                  <button
                    type="button"
                    className="btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90"
                    data-toggle="collapse"
                    data-target="#basicsCollapseOne"
                    aria-expanded="true"
                    aria-controls="basicsCollapseOne"
                  >
                    <span className="ml-0 text-gray-90 mr-2">
                      <span className="fa fa-list-ul"></span>
                    </span>
                    <span className="pl-1 text-gray-90">All Categories</span>
                  </button>
                </div>
                <div
                  id="basicsCollapseOne"
                  className={`collapse  vertical-menu animated border-2 border-primary `}
                  aria-labelledby="basicsHeadingOne"
                  data-parent="#basicsAccordion"
                  style={{ border: "2px solid #fed700" }}
                >
                  <div className="card-body p-0">
                    <nav
                      className="js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized"
                      style={{ minHeight: "398px", alignItems: "start" }}
                    >
                      <div
                        id="navBar"
                        className="collapse navbar-collapse u-header__navbar-collapse"
                      >
                        <ul className="navbar-nav u-header__navbar-nav">
                          <li
                            className="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left"
                          >
                            <a
                              href="#"
                              className="nav-link u-header__nav-link font-weight-bold"
                            >
                              Value of the Day
                            </a>
                          </li>
                          <li
                            className="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left"
                          >
                            <a
                              href="#"
                              className="nav-link u-header__nav-link font-weight-bold"
                            >
                              Top 100 Offers
                            </a>
                          </li>
                          <li
                            className="nav-item u-header__nav-item"
                            data-event="hover"
                            data-position="left"
                          >
                            <a
                              href="#"
                              className="nav-link u-header__nav-link font-weight-bold"
                            >
                              New Arrivals
                            </a>
                          </li>
                          {/* <!-- Nav Item MegaMenu --> */}
                          <li
                            className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-animation-in="slideInUp"
                            data-animation-out="fadeOut"
                            data-position="left"
                          >
                            <a
                              id="basicMegaMenu"
                              onMouseEnter={() => setSubMenuID("basicMegaMenu")}
                              onMouseLeave={() => setSubMenuID("")}
                              className="nav-link u-header__nav-link u-header__nav-link-toggle "
                              style={{ cursor: "pointer" }}
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Computers & Accessories
                            </a>

                            {/* <!-- Nav Item - Mega Menu --> */}

                            <div
                              onMouseEnter={() => setSubMenuID("basicMegaMenu")}
                              onMouseLeave={() => setSubMenuID("")}
                              className={`hs-mega-menu vmm-tfw u-header__sub-menu ${
                                subMenuId == "basicMegaMenu"
                                  ? "animated hs-position-left slideInUp d-block subMenu"
                                  : ""
                              } `}
                              style={{ marginLeft: "-10px" }}
                              aria-labelledby="basicMegaMenu"
                            >
                              <div className="vmm-bg">
                                <Image
                                  className="img-fluid"
                                  src="/img/500X400/img1.png"
                                  alt="Image Description"
                                  height={500}
                                  width={500}
                                />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">
                                    Computers & Accessories
                                  </span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        All Computers & Accessories
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Laptops, Desktops & Monitors
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Printers & Ink
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Networking & Internet Devices
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Computer Accessories
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Software
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start"
                                        href="#"
                                      >
                                        <div className="">All Electronics</div>
                                        <div className="u-nav-subtext font-size-11 text-gray-30">
                                          Discover more products
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">
                                    Office & Stationery
                                  </span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        All Office & Stationery
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                          </li>
                          {/* <!-- End Nav Item MegaMenu--> */}
                          {/* <!-- Nav Item MegaMenu --> */}
                          <li
                            className="nav-item hs-has-mega-menu u-header__nav-item"
                            data-event="hover"
                            data-position="left"
                          >
                            <a
                              id="basicMegaMenu1"
                              className="nav-link u-header__nav-link u-header__nav-link-toggle"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Cameras, Audio & Video
                            </a>

                            {/* <!-- Nav Item - Mega Menu --> */}
                            <div
                              className="hs-mega-menu vmm-tfw u-header__sub-menu"
                              aria-labelledby="basicMegaMenu1"
                            >
                              <div className="vmm-bg">
                                <Image
                                  className="img-fluid"
                                  src="/img/500X400/img4.png"
                                  alt="Image Description"
                                  height={200}
                                  width={200}
                                />
                              </div>
                              <div className="row u-header__mega-menu-wrapper">
                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">
                                    Cameras & Photography
                                  </span>
                                  <ul className="u-header__sub-menu-nav-group mb-3">
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Lenses
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Camera Accessories
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Security & Surveillance
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Binoculars & Telescopes
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Camcorders
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Software
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link u-nav-divider border-top pt-2 flex-column align-items-start"
                                        href="#"
                                      >
                                        <div className="">All Electronics</div>
                                        <div className="u-nav-subtext font-size-11 text-gray-30">
                                          Discover more products
                                        </div>
                                      </a>
                                    </li>
                                  </ul>
                                </div>

                                <div className="col mb-3 mb-sm-0">
                                  <span className="u-header__sub-menu-title">
                                    Audio & Video
                                  </span>
                                  <ul className="u-header__sub-menu-nav-group">
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        All Audio & Video
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="nav-link u-header__sub-menu-nav-link"
                                        href="#"
                                      >
                                        Headphones & Speakers
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            {/* <!-- End Nav Item - Mega Menu --> */}
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Vertical Menu --> */}
        {/* <!-- Secondary Menu --> */}
        <div className="col">
          <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
            <div
              id="navBar"
              className="collapse navbar-collapse u-header__navbar-collapse"
            >
              <ul className="navbar-nav u-header__navbar-nav">
                <li className="nav-item u-header__nav-item">
                  <Link
                    className="nav-link u-header__nav-link"
                    href="/"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-labelledby="pagesSubMenu"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item u-header__nav-item">
                  <Link
                    className="nav-link u-header__nav-link"
                    href="/shop"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-labelledby="pagesSubMenu"
                  >
                    Shop
                  </Link>
                </li>

                {/* <!-- Featured Brands --> */}
                <li className="nav-item u-header__nav-item">
                  <Link
                    className="nav-link u-header__nav-link"
                    href="/about"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-labelledby="pagesSubMenu"
                  >
                    About
                  </Link>
                </li>
                {/* <!-- End Featured Brands --> */}

                {/* <!-- Trending Styles --> */}
                <li className="nav-item u-header__nav-item">
                  <Link
                    className="nav-link u-header__nav-link"
                    href="/faq"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-labelledby="blogSubMenu"
                  >
                    FAQ
                  </Link>
                </li>
                {/* <!-- End Trending Styles --> */}

                {/* <!-- Gift Cards --> */}
                <li className="nav-item u-header__nav-item">
                  <Link
                    className="nav-link u-header__nav-link"
                    href="/contact"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Contact
                  </Link>
                </li>
                {/* <!-- End Gift Cards --> */}

                {/* <!-- Button --> */}
                <li className="nav-item u-header__nav-last-item">
                  <a className="text-gray-90" href="#" target="_blank">
                    Free Shipping on Orders $50+
                  </a>
                </li>
                {/* <!-- End Button --> */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
