import Image from "next/image";

const products = [
  {
    name: "Notebook Black Spire V Nitro VN7-591G",
    image: "/img/300X300/img1.jpg",
    link: "/shop/2",
    rating: 4,
    oldPrice: "$2299.00",
    price: "$1999.00",
  },
  {
    name: "Notebook Black Spire V Nitro VN7-591G",
    image: "/img/300X300/img3.jpg",
    link: "/shop/2",
    rating: 4,
    price: "$499.00",
  },
  {
    name: "Tablet Thin EliteBook Revolve 810 G6",
    image: "/img/300X300/img5.jpg",
    link: "/shop/2",
    rating: 4,
    price: "$100.00",
  },
  {
    name: "Notebook Purple G952VX-T7008T",
    image: "/img/300X300/img6.jpg",
    link: "/shop/2",
    rating: 4,
    oldPrice: "$2299.00",
    price: "$1999.00",
  },
  {
    name: "Laptop Yoga 21 80JH0035GE W8.1",
    image: "/img/300X300/img10.png",
    link: "/shop/2",
    rating: 4,
    price: "$1200.00",
  },
];

export default function FilterLeft() {
  return (
    <div className="d-none d-xl-block col-xl-3 col-wd-2gdot5">
      <div className="mb-6 border border-width-2 border-color-3 borders-radius-6">
        {/* <!-- List --> */}
        <ul
          id="sidebarNav"
          className="list-unstyled mb-0 sidebar-navbar view-all"
        >
          <li>
            <div className="dropdown-title">Browse Categories</div>
          </li>
          <li>
            <a
              className="dropdown-toggle dropdown-toggle-collapse"
              href="javascript:;"
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="sidebarNav1Collapse"
              data-target="#sidebarNav1Collapse"
            >
              Accessories
              <span className="text-gray-25 font-size-12 font-weight-normal">
                {" "}
                (56)
              </span>
            </a>

            <div
              id="sidebarNav1Collapse"
              className="collapse"
              data-parent="#sidebarNav"
            >
              <ul id="sidebarNav1" className="list-unstyled dropdown-list">
                {/* <!-- Menu List --> */}
                <li>
                  <a className="dropdown-item" href="#">
                    Accessories
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (56)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cameras & Photography
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (11)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Computer Components
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (22)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Gadgets
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (5)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Home Entertainment
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (7)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Laptops & Computers
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (42)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Printers & Ink
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (63)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Smart Phones & Tablets
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (11)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    TV & Audio
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (66)
                    </span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Video Games & Consoles
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (31)
                    </span>
                  </a>
                </li>
                {/* <!-- End Menu List --> */}
              </ul>
            </div>
          </li>
          <li>
            <a
              className="dropdown-toggle dropdown-toggle-collapse"
              href="javascript:;"
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-controls="sidebarNav2Collapse"
              data-target="#sidebarNav2Collapse"
            >
              Cameras & Photography
              <span className="text-gray-25 font-size-12 font-weight-normal">
                {" "}
                (56)
              </span>
            </a>

            <div
              id="sidebarNav2Collapse"
              className="collapse"
              data-parent="#sidebarNav"
            >
              <ul id="sidebarNav2" className="list-unstyled dropdown-list">
                {/* <!-- Menu List --> */}
                <li>
                  <a className="dropdown-item" href="#">
                    Cameras
                    <span className="text-gray-25 font-size-12 font-weight-normal">
                      {" "}
                      (56)
                    </span>
                  </a>
                </li>
                {/* <!-- End Menu List --> */}
              </ul>
            </div>
          </li>
        </ul>
        {/* <!-- End List --> */}
      </div>
      <div className="mb-6">
        <div className="border-bottom border-color-1 mb-5">
          <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">
            Filters
          </h3>
        </div>
        <div className="border-bottom pb-4 mb-4">
          <h4 className="font-size-14 mb-3 font-weight-bold">Brands</h4>

          {/* <!-- Checkboxes --> */}
          <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brandAdidas"
              />
              <label className="custom-control-label" htmlFor="brandAdidas">
                Adidas
                <span className="text-gray-25 font-size-12 font-weight-normal">
                  {" "}
                  (56)
                </span>
              </label>
            </div>
          </div>
          <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="brandNewBalance"
              />
              <label className="custom-control-label" htmlFor="brandNewBalance">
                New Balance
                <span className="text-gray-25 font-size-12 font-weight-normal">
                  {" "}
                  (56)
                </span>
              </label>
            </div>
          </div>

          {/* <!-- End Checkboxes --> */}

          {/* <!-- View More - Collapse --> */}
          <div className="collapse" id="collapseBrand">
            <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="brandGucci"
                />
                <label className="custom-control-label" htmlFor="brandGucci">
                  Gucci
                  <span className="text-gray-25 font-size-12 font-weight-normal">
                    {" "}
                    (56)
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* <!-- End View More - Collapse --> */}

          {/* <!-- Link --> */}
          <a
            className="link link-collapse small font-size-13 text-gray-27 d-inline-flex mt-2"
            data-toggle="collapse"
            href="#collapseBrand"
            role="button"
            aria-expanded="false"
            aria-controls="collapseBrand"
          >
            <span className="link__icon text-gray-27 bg-white">
              <span className="link__icon-inner">+</span>
            </span>
            <span className="link-collapse__default">Show more</span>
            <span className="link-collapse__active">Show less</span>
          </a>
          {/* <!-- End Link --> */}
        </div>

        <div className="border-bottom pb-4 mb-4">
          <h4 className="font-size-14 mb-3 font-weight-bold">Color</h4>

          {/* <!-- Checkboxes --> */}
          <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="categoryTshirt"
              />
              <label className="custom-control-label" htmlFor="categoryTshirt">
                Black{" "}
                <span className="text-gray-25 font-size-12 font-weight-normal">
                  {" "}
                  (56)
                </span>
              </label>
            </div>
          </div>
          <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="categoryShoes"
              />
              <label className="custom-control-label" htmlFor="categoryShoes">
                Black Leather{" "}
                <span className="text-gray-25 font-size-12 font-weight-normal">
                  {" "}
                  (56)
                </span>
              </label>
            </div>
          </div>

          {/* <!-- End Checkboxes --> */}

          {/* <!-- View More - Collapse --> */}
          <div className="collapse" id="collapseColor">
            <div className="form-group d-flex align-items-center justify-content-between mb-2 pb-1">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="categoryShorts"
                />
                <label
                  className="custom-control-label"
                  htmlFor="categoryShorts"
                >
                  Turquoise{" "}
                  <span className="text-gray-25 font-size-12 font-weight-normal">
                    {" "}
                    (56)
                  </span>
                </label>
              </div>
            </div>
          </div>
          {/* <!-- End View More - Collapse --> */}

          {/* <!-- Link --> */}
          <a
            className="link link-collapse small font-size-13 text-gray-27 d-inline-flex mt-2"
            data-toggle="collapse"
            href="#collapseColor"
            role="button"
            aria-expanded="false"
            aria-controls="collapseColor"
          >
            <span className="link__icon text-gray-27 bg-white">
              <span className="link__icon-inner">+</span>
            </span>
            <span className="link-collapse__default">Show more</span>
            <span className="link-collapse__active">Show less</span>
          </a>
          {/* <!-- End Link --> */}
        </div>

        <div className="range-slider">
          <h4 className="font-size-14 mb-3 font-weight-bold">Price</h4>
          {/* <!-- Range Slider --> */}
          <input
            className="js-range-slider"
            type="text"
            data-extra-classes="u-range-slider u-range-slider-indicator u-range-slider-grid"
            data-type="double"
            data-grid="false"
            data-hide-from-to="true"
            data-prefix="$"
            data-min="0"
            data-max="3456"
            data-from="0"
            data-to="3456"
            data-result-min="#rangeSliderExample3MinResult"
            data-result-max="#rangeSliderExample3MaxResult"
          />
          {/* <!-- End Range Slider --> */}
          <div className="mt-1 text-gray-111 d-flex mb-4">
            <span className="mr-0dot5">Price: </span>
            <span>$</span>
            <span id="rangeSliderExample3MinResult" className=""></span>
            <span className="mx-0dot5"> — </span>
            <span>$</span>
            <span id="rangeSliderExample3MaxResult" className=""></span>
          </div>
          <button
            type="submit"
            className="btn px-4 btn-primary-dark-w py-2 rounded-lg"
          >
            Filter
          </button>
        </div>
      </div>

      {/* Latest Products */}

      <div className="mb-8">
        <div className="border-bottom border-color-1 mb-5">
          <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">
            Latest Products
          </h3>
        </div>
        <ul className="list-unstyled">
          {products.map((product, index) => (
            <li key={index} className="mb-4">
              <div className="row">
                <div className="col-auto">
                  <a href={product.link} className="d-block width-75">
                    <Image
                      width={100}
                      height={100}
                      className="img-fluid"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>
                </div>
                <div className="col">
                  <h3 className="text-lh-1dot2 font-size-14 mb-0">
                    <a href={product.link}>{product.name}</a>
                  </h3>
                  <div
                    className="text-warning text-ls-n2 font-size-16 mb-1"
                    style={{ width: "80px" }}
                  >
                    {[...Array(5)].map((_, starIndex) => (
                      <small
                        key={starIndex}
                        className={`${
                          starIndex < product.rating ? "fas" : "far"
                        } fa-star ${
                          starIndex >= product.rating ? "text-muted" : ""
                        }`}
                      ></small>
                    ))}
                  </div>
                  <div className="font-weight-bold">
                    {product.oldPrice && (
                      <del className="font-size-11 text-gray-9 d-block">
                        {product.oldPrice}
                      </del>
                    )}
                    <ins className="font-size-15 text-red text-decoration-none d-block">
                      {product.price}
                    </ins>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
