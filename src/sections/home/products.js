"use client";

import { useState } from "react";
import ProductRow from "./components/products-row";

export default function Products() {
  const [activeTab, setActiveTab] = useState("best-deals");

  const tabs = [
    { id: "best-deals", label: "Best Deals" },
    { id: "tv-video", label: "TV & Video" },
    { id: "cameras", label: "Cameras" },
    { id: "audio", label: "Audio" },
    { id: "smartphones", label: "Smartphones" },
    { id: "gps-navi", label: "GPS & Navi" },
    { id: "computers", label: "Computers" },
    { id: "portable-audio", label: "Portable Audio" },
    { id: "accessories", label: "Accessories" },
  ];
  return (
    <div className="products-group-4-1-4 space-1 bg-gray-7">
      <h2 className="sr-only">Products Grid</h2>
      <div className="container">
        {/* <!-- Nav Classic --> */}
        <div className="position-relative text-center z-index-2 mb-3">
          <ul
            className="nav nav-classic nav-tab nav-tab-sm px-md-3 justify-content-start justify-content-lg-center flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visble border-md-down-bottom-0 pb-1 pb-lg-0 mb-n1 mb-lg-0"
            id="pills-tab-1"
            role="tablist"
          >
            {tabs.map((tab, index) => (
              <li
                key={index}
                className="nav-item flex-shrink-0 flex-lg-shrink-1"
              >
                <a
                  className={`nav-link ${
                    activeTab === tab.id ? "active" : ""
                  } `}
                  id="Tpills-one-example1-tab"
                  data-toggle="pill"
                  href="#Tpills-one-example1"
                  role="tab"
                  aria-controls="Tpills-one-example1"
                  aria-selected="true"
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div
                    className={`d-md-flex justify-content-md-center align-items-md-center ${
                      activeTab === tab.id
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-500"
                    }`}
                  >
                    {tab?.label}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <!-- End Nav Classic --> */}

        {/* <!-- Tab Content --> */}
        <div className="tab-content" id="Tpills-tabContent">
          <div
            className={`tab-pane fade pt-2 ${
              activeTab === "best-deals" ? "show active" : ""
            }`}
            id="Tpills-one-example1"
            role="tabpanel"
            aria-labelledby="Tpills-one-example1-tab"
          >
            <ProductRow />
          </div>
          <div
            className={`tab-pane fade pt-2 ${
              activeTab === "tv-video" ? "show active" : ""
            }`}
            id="Tpills-two-example1"
            role="tabpanel"
            aria-labelledby="Tpills-two-example1-tab"
          >
            <ProductRow />
          </div>
          <div
            className={`tab-pane fade pt-2 ${
              activeTab === "cameras" ? "show active" : ""
            }`}
            id="Tpills-three-example1"
            role="tabpanel"
            aria-labelledby="Tpills-three-example1-tab"
          >
            <ProductRow />
          </div>
          {activeTab === "audio" && (
            <div
              className={`tab-pane fade pt-2 ${
                activeTab === "audio" ? "show active" : ""
              }`}
              id="Tpills-four-example1"
              role="tabpanel"
              aria-labelledby="Tpills-four-example1-tab"
            >
              <ProductRow />
            </div>
          )}
          {activeTab === "smartphones" && (
            <div
              className={`tab-pane fade pt-2 ${
                activeTab === "smartphones" ? "show active" : ""
              }`}
              id="Tpills-five-example1"
              role="tabpanel"
              aria-labelledby="Tpills-five-example1-tab"
            >
              <ProductRow />
            </div>
          )}
          {activeTab === "gps-navi" && (
            <div
              className={`tab-pane fade pt-2 ${
                activeTab === "gps-navi" ? "show active" : ""
              }`}
              id="Tpills-six-example1"
              role="tabpanel"
              aria-labelledby="Tpills-six-example1-tab"
            >
              <ProductRow />
            </div>
          )}
          {activeTab === "computers" && (
            <div
              className={`tab-pane fade pt-2 ${
                activeTab === "computers" ? "show active" : ""
              }`}
              id="Tpills-seven-example1"
              role="tabpanel"
              aria-labelledby="Tpills-seven-example1-tab"
            >
              <ProductRow />
            </div>
          )}
          {activeTab === "portable-audio" && (
            <div
              className={`tab-pane fade pt-2 ${
                activeTab === "portable-audio" ? "show active" : ""
              }`}
              id="Tpills-eight-example1"
              role="tabpanel"
              aria-labelledby="Tpills-eight-example1-tab"
            >
              <ProductRow />
            </div>
          )}
          {activeTab === "accessories" && (
            <div
              className={`tab-pane fade pt-2 ${
                activeTab === "accessories" ? "show active" : ""
              }`}
              id="Tpills-nine-example1"
              role="tabpanel"
              aria-labelledby="Tpills-nine-example1-tab"
            >
              <ProductRow />
            </div>
          )}
        </div>
        {/* <!-- End Tab Content --> */}
      </div>

      {/* <!-- Features Section --> */}

      {/* <!-- End Features Section --> */}
    </div>
  );
}
