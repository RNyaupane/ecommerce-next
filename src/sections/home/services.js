import Image from "next/image";

export default function Services() {
  return (
    <div className="container">
      {/* <!-- Banner --> */}
      <div className="mb-5">
        <div className="row">
          {Array.from({ length: 4 }).map((item, index) => (
            <div className="col-md-6 mb-4 mb-xl-0 col-xl-3" key={index}>
              <a
                href="https://transvelo.github.io/electro-html/2.0/html/shop/shop.html"
                className="d-black text-gray-90"
              >
                <div className="min-height-132 py-1 d-flex bg-gray-1 align-items-center">
                  <div className="col-6 col-xl-5 col-wd-6 pr-0">
                    <Image
                      className="img-fluid"
                      src={`/img/190X150/img1.png`}
                      //   fill
                      height={300}
                      width={300}
                      alt="Image Description"
                    />
                  </div>
                  <div className="col-6 col-xl-7 col-wd-6">
                    <div className="mb-2 pb-1 font-size-16 font-weight-light text-ls-n1 text-lh-23">
                      CATCH BIG <strong>DEALS</strong> ON THE CAMERAS
                    </div>
                    <div
                      className="link text-gray-90 font-weight-bold font-size-15"
                      href="#"
                    >
                      Shop now
                      <span className="link__icon ml-1">
                        <span className="link__icon-inner">
                          <i className="ec ec-arrow-right-categproes"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- End Banner --> */}
      {/* <!-- Deals-and-tabs --> */}
      <div className="mb-5">
        <div className="row">
          {/* <!-- Deal --> */}
          <div className="col-md-auto mb-6 mb-md-0">
            <div className="p-3 border border-width-2 border-primary borders-radius-20 bg-white min-width-370">
              <div className="d-flex justify-content-between align-items-center m-1 ml-2">
                <h3 className="font-size-22 mb-0 font-weight-normal text-lh-28 max-width-120">
                  Special Offer
                </h3>
                <div className="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                  <span className="font-size-12">Save</span>
                  <div className="font-size-20 font-weight-bold">$120</div>
                </div>
              </div>
              <div className="mb-4">
                <a href="/shop/2" className="d-block text-center">
                  <Image
                    className="img-fluid"
                    src={`/img/320X300/img1.jpg`}
                    alt="Image "
                    height={400}
                    width={300}
                  />
                </a>
              </div>
              <h5 className="mb-2 font-size-14 text-center mx-auto max-width-180 text-lh-18">
                <a href="/shop/2" className="text-blue font-weight-bold">
                  Game Console Controller + USB 3.0 Cable
                </a>
              </h5>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <del className="font-size-18 mr-2 text-gray-2">$99,00</del>
                <ins className="font-size-30 text-red text-decoration-none">
                  $79,00
                </ins>
              </div>
              <div className="mb-3 mx-2">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="">
                    Availavle: <strong>6</strong>
                  </span>
                  <span className="">
                    Already Sold: <strong>28</strong>
                  </span>
                </div>
                <div className="rounded-pill bg-gray-3 height-20 position-relative">
                  <span className="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                </div>
              </div>
              <div className="mb-2">
                <h6 className="font-size-15 text-gray-2 text-center mb-3">
                  Hurry Up! Offer ends in:
                </h6>
                <div
                  className="js-countdown d-flex justify-content-center"
                  data-end-date="2020/11/30"
                  data-hours-format="%H"
                  data-minutes-format="%M"
                  data-seconds-format="%S"
                >
                  <div className="text-lh-1">
                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                      <span className="js-cd-hours"></span>
                    </div>
                    <div className="text-gray-2 font-size-12 text-center">
                      HOURS
                    </div>
                  </div>
                  <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                  <div className="text-lh-1">
                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                      <span className="js-cd-minutes"></span>
                    </div>
                    <div className="text-gray-2 font-size-12 text-center">
                      MINS
                    </div>
                  </div>
                  <div className="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                  <div className="text-lh-1">
                    <div className="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                      <span className="js-cd-seconds"></span>
                    </div>
                    <div className="text-gray-2 font-size-12 text-center">
                      SECS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Deal --> */}
          {/* <!-- Tab Prodcut --> */}
          <div className="col">
            {/* <!-- Features Section --> */}
            <div className="">
              {/* <!-- Nav Classic --> */}
              <div className="position-relative bg-white text-center z-index-2">
                <ul
                  className="nav nav-classic nav-tab justify-content-center"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active "
                      id="pills-one-example1-tab"
                      data-toggle="pill"
                      href="#pills-one-example1"
                      role="tab"
                      aria-controls="pills-one-example1"
                      aria-selected="true"
                    >
                      <div className="d-md-flex justify-content-md-center align-items-md-center">
                        Featured
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      id="pills-two-example1-tab"
                      data-toggle="pill"
                      href="#pills-two-example1"
                      role="tab"
                      aria-controls="pills-two-example1"
                      aria-selected="false"
                    >
                      <div className="d-md-flex justify-content-md-center align-items-md-center">
                        On Sale
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      id="pills-three-example1-tab"
                      data-toggle="pill"
                      href="#pills-three-example1"
                      role="tab"
                      aria-controls="pills-three-example1"
                      aria-selected="false"
                    >
                      <div className="d-md-flex justify-content-md-center align-items-md-center">
                        Top Rated
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- End Nav Classic --> */}

              {/* <!-- Tab Content --> */}
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade pt-2 show active"
                  id="pills-one-example1"
                  role="tabpanel"
                  aria-labelledby="pills-one-example1-tab"
                >
                  <ul className="row list-unstyled products-group no-gutters">
                    {Array.from({ length: 6 }).map((item, index) => (
                      <li
                        className="col-6 col-wd-3 col-md-4 product-item"
                        key={index}
                      >
                        <div className="product-item__outer h-100">
                          <div className="product-item__inner px-xl-4 p-3">
                            <div className="product-item__body pb-xl-2">
                              <div className="mb-2">
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-7-column-full-width.html"
                                  className="font-size-12 text-gray-5"
                                >
                                  Speakers
                                </a>
                              </div>
                              <h5 className="mb-1 product-item__title">
                                <a
                                  href="/shop/2"
                                  className="text-blue font-weight-bold"
                                >
                                  Wireless Audio System Multiroom 360 degree
                                  Full base audio
                                </a>
                              </h5>
                              <div className="mb-2">
                                <a
                                  href="/shop/2"
                                  className="d-block text-center"
                                >
                                  <Image
                                    className="img-fluid"
                                    src={`/img/212X200/img${index + 1}.jpg`}
                                    // fill
                                    height={300}
                                    objectFit="contain"
                                    width={200}
                                    alt="Image"
                                  />
                                </a>
                              </div>
                              <div className="flex-center-between mb-1">
                                <div className="prodcut-price">
                                  <div className="text-gray-100">$685,00</div>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="/shop/2"
                                    className="btn-add-cart btn-primary transition-3d-hover"
                                  >
                                    <i className="ec ec-add-to-cart"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-item__footer">
                              <div className="border-top pt-2 flex-center-between flex-wrap">
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/compare.html"
                                  className="text-gray-6 font-size-13"
                                >
                                  <i className="ec ec-compare mr-1 font-size-15"></i>
                                  Compare
                                </a>
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/wishlist.html"
                                  className="text-gray-6 font-size-13"
                                >
                                  <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                  Add to Wishlist
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="tab-pane fade pt-2"
                  id="pills-two-example1"
                  role="tabpanel"
                  aria-labelledby="pills-two-example1-tab"
                >
                  <ul className="row list-unstyled products-group no-gutters">
                    {Array.from({ length: 5 }).map((item, index) => (
                      <li
                        className="col-6 col-wd-3 col-md-4 product-item"
                        key={index}
                      >
                        <div className="product-item__outer h-100">
                          <div className="product-item__inner px-xl-4 p-3">
                            <div className="product-item__body pb-xl-2">
                              <div className="mb-2">
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-7-column-full-width.html"
                                  className="font-size-12 text-gray-5"
                                >
                                  Speakers
                                </a>
                              </div>
                              <h5 className="mb-1 product-item__title">
                                <a
                                  href="/shop/2"
                                  className="text-blue font-weight-bold"
                                >
                                  Tablet White EliteBook Revolve 810 G2
                                </a>
                              </h5>
                              <div className="mb-2">
                                <a
                                  href="/shop/2"
                                  className="d-block text-center"
                                >
                                  <Image
                                    className="img-fluid"
                                    src={`/img/212X200/img${index + 1}.jpg`}
                                    height={300}
                                    objectFit="contain"
                                    width={200}
                                    alt="Image"
                                  />
                                </a>
                              </div>
                              <div className="flex-center-between mb-1">
                                <div className="prodcut-price">
                                  <div className="text-gray-100">$685,00</div>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="/shop/2"
                                    className="btn-add-cart btn-primary transition-3d-hover"
                                  >
                                    <i className="ec ec-add-to-cart"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-item__footer">
                              <div className="border-top pt-2 flex-center-between flex-wrap">
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/compare.html"
                                  className="text-gray-6 font-size-13"
                                >
                                  <i className="ec ec-compare mr-1 font-size-15"></i>
                                  Compare
                                </a>
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/wishlist.html"
                                  className="text-gray-6 font-size-13"
                                >
                                  <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                  Add to Wishlist
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="tab-pane fade pt-2"
                  id="pills-three-example1"
                  role="tabpanel"
                  aria-labelledby="pills-three-example1-tab"
                >
                  <ul className="row list-unstyled products-group no-gutters">
                    {Array.from({ length: 5 }).map((item, index) => (
                      <li
                        className="col-6 col-wd-3 col-md-4 product-item"
                        key={index}
                      >
                        <div className="product-item__outer h-100">
                          <div className="product-item__inner px-xl-4 p-3">
                            <div className="product-item__body pb-xl-2">
                              <div className="mb-2">
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-7-column-full-width.html"
                                  className="font-size-12 text-gray-5"
                                >
                                  Speakers
                                </a>
                              </div>
                              <h5 className="mb-1 product-item__title">
                                <a
                                  href="/shop/2"
                                  className="text-blue font-weight-bold"
                                >
                                  Wireless Audio System Multiroom 360 degree
                                  Full base audio
                                </a>
                              </h5>
                              <div className="mb-2">
                                <a
                                  href="/shop/2"
                                  className="d-block text-center"
                                >
                                  <Image
                                    className="img-fluid"
                                    src={`/img/212X200/img${index + 1}.jpg`}
                                    height={300}
                                    objectFit="contain"
                                    width={200}
                                    alt="Image"
                                  />
                                </a>
                              </div>
                              <div className="flex-center-between mb-1">
                                <div className="prodcut-price">
                                  <div className="text-gray-100">$685,00</div>
                                </div>
                                <div className="d-none d-xl-block prodcut-add-cart">
                                  <a
                                    href="/shop/2"
                                    className="btn-add-cart btn-primary transition-3d-hover"
                                  >
                                    <i className="ec ec-add-to-cart"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="product-item__footer">
                              <div className="border-top pt-2 flex-center-between flex-wrap">
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/compare.html"
                                  className="text-gray-6 font-size-13"
                                >
                                  <i className="ec ec-compare mr-1 font-size-15"></i>
                                  Compare
                                </a>
                                <a
                                  href="https://transvelo.github.io/electro-html/2.0/html/shop/wishlist.html"
                                  className="text-gray-6 font-size-13"
                                >
                                  <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                                  Add to Wishlist
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <!-- End Tab Content --> */}
            </div>
            {/* <!-- End Features Section --> */}
          </div>
          {/* <!-- End Tab Prodcut --> */}
        </div>
      </div>
      {/* <!-- End Deals-and-tabs --> */}
    </div>
  );
}
