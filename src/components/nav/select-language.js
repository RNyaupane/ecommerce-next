"use client";
import { useState } from "react";

export default function LanguageDropdown() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <li className="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
      <div className="d-flex align-items-center">
        <div className="position-relative">
          <a
            className="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal"
            role="button"
            aria-controls="languageDropdown"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <span className="d-inline-block d-sm-none">US</span>
            <span className="d-none d-sm-inline-flex align-items-center">
              <i className="ec ec-dollar mr-1"></i> Dollar (US)
            </span>
          </a>

          {isDropdownOpen && (
            <div
              id="languageDropdown"
              className="dropdown-menu show"
              aria-labelledby="languageDropdownInvoker"
            >
              <a className="dropdown-item active" href="#">
                English
              </a>
              <a className="dropdown-item" href="#">
                Deutsch
              </a>
              <a className="dropdown-item" href="#">
                Espa
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
