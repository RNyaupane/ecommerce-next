"use client";

import NavbarVerticle from "./nav/navbar-verticle";
import Header from "./nav/header";
import Link from "next/link";
import LanguageDropdown from "./nav/select-language";

export default function Navbar() {
  return (
    <header id="header" className="u-header u-header-left-aligned-nav">
      <div className="u-header__section">
        <div className="u-header-topbar py-2 d-none d-xl-block">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="topbar-left">
                <a
                  href="#"
                  className="text-gray-110 font-size-13 hover-on-dark"
                >
                  Welcome to Worldwide Electronics Store
                </a>
              </div>
              <div className="topbar-right ml-auto">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                    <a
                      href="contact-v2.html"
                      className="u-header-topbar__nav-link"
                    >
                      <i className="ec ec-map-pointer mr-1"></i> Store Locator
                    </a>
                  </li>
                  <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                    <Link
                      href="/track-your-order"
                      className="u-header-topbar__nav-link"
                    >
                      <i className="ec ec-transport mr-1"></i> Track Your Order
                    </Link>
                  </li>

                  <LanguageDropdown />

                  <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                    <Link
                      id="sidebarNavToggler"
                      role="button"
                      className="u-header-topbar__nav-link"
                      aria-controls="sidebarContent"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-unfold-event="click"
                      data-unfold-hide-on-scroll="false"
                      data-unfold-target="#sidebarContent"
                      data-unfold-type="css-animation"
                      data-unfold-animation-in="fadeInRight"
                      data-unfold-animation-out="fadeOutRight"
                      data-unfold-duration="500"
                      href="/auth/login"
                    >
                      <i className="ec ec-user mr-1"></i> Register{" "}
                      <span className="text-gray-50">or</span> Sign in
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Topbar --> */}

        {/* <!-- Logo-Search-header-icons --> */}
        <NavbarVerticle />
        {/* <!-- End Logo-Search-header-icons --> */}

        {/* <!-- Vertical-and-secondary-menu --> */}
        <Header />
      </div>
    </header>
  );
}
