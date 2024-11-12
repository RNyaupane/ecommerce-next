import Image from "next/image";

const SingleRow = () => (
  <div className="col-md-3 col-wd-4 d-md-flex d-wd-block">
    <ul className="row list-unstyled products-group no-gutters mb-0 flex-xl-column flex-wd-row">
      {Array.from({ length: 4 }).map((item, index) => (
        <li
          key={index}
          className={`col-xl-6 index${index} product-item max-width-xl-100 remove-divider ${
            index === 2 || index === 3 ? "d-lg-none d-wd-block" : ""
          }`}
        >
          <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
            <div className="product-item__inner bg-white p-3">
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
                  <a href="/shop/2" className="text-blue font-weight-bold">
                    Wireless Audio System Multiroom 360 degree Full base audio
                  </a>
                </h5>
                <div className="mb-2">
                  <a href="/shop/2" className="d-block text-center">
                    <Image
                      className="img-fluid"
                      src={`/img/212X200/img${index + 1}.jpg`}
                      alt="Image Description"
                      height={300}
                      width={150}
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
                    <i className="ec ec-compare mr-1 font-size-15"></i> Compare
                  </a>
                  <a
                    href="https://transvelo.github.io/electro-html/2.0/html/shop/wishlist.html"
                    className="text-gray-6 font-size-13"
                  >
                    <i className="ec ec-favorites mr-1 font-size-15"></i> Add to
                    Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);
export default function ProductRow() {
  return (
    <div className="row no-gutters">
      <SingleRow />
      <div className="col-md-6 col-wd-4 products-group-1">
        <ul className="row list-unstyled products-group no-gutters bg-white h-100 mb-0">
          <li className="col product-item remove-divider">
            <div className="product-item__outer h-100 w-100 prodcut-box-shadow">
              <div className="product-item__inner bg-white p-3">
                <div className="product-item__body d-flex flex-column">
                  <div className="mb-1">
                    <div className="mb-2">
                      <a
                        href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-7-column-full-width.html"
                        className="font-size-12 text-gray-5"
                      >
                        Game Consoles
                      </a>
                    </div>
                    <h5 className="mb-0 product-item__title">
                      <a href="/shop/2" className="text-blue font-weight-bold">
                        Game Console Controller + USB 3.0 Cablezsc
                      </a>
                    </h5>
                  </div>
                  <div className="mb-1 min-height-4-1-3">
                    <a
                      href="#"
                      className="d-block text-center my-4 mt-lg-6 mb-lg-5 mt-xl-0 mb-xl-0 mt-wd-6 mb-wd-5"
                    >
                      <Image
                        className="img-fluid"
                        src="/img/564X520/img2.jpg"
                        alt="Image Description"
                        height={400}
                        width={400}
                      />
                    </a>
                    {/* <!-- Gallery --> */}
                    <div className="row mx-gutters-2 mb-3">
                      <div className="col-auto">
                        {/* <!-- Gallery --> */}
                        <a
                          className="js-fancybox max-width-60 u-media-viewer"
                          href="javascript:;"
                          data-src="../../assets/img/1920X1080/img1.jpg"
                          data-fancybox="fancyboxGallery6"
                          data-caption="Electro in frames - image #01"
                          data-speed="700"
                          data-is-infinite="true"
                        >
                          <Image
                            className="img-fluid border"
                            src="/img/100X100/img1.jpg"
                            alt="Image Description"
                            height={300}
                            width={200}
                          />

                          <span className="u-media-viewer__container">
                            <span className="u-media-viewer__icon">
                              <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                            </span>
                          </span>
                        </a>
                        {/* <!-- End Gallery --> */}
                      </div>

                      <div className="col-auto">
                        {/* <!-- Gallery --> */}
                        <a
                          className="js-fancybox max-width-60 u-media-viewer"
                          data-src="../../assets/img/1920X1080/img2.jpg"
                          data-fancybox="fancyboxGallery6"
                          data-caption="Electro in frames - image #02"
                          data-speed="700"
                          data-is-infinite="true"
                        >
                          <Image
                            className="img-fluid border"
                            src="/img/100X100/img2.jpg"
                            alt="Image Description"
                            height={300}
                            width={200}
                          />

                          <span className="u-media-viewer__container">
                            <span className="u-media-viewer__icon">
                              <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                            </span>
                          </span>
                        </a>
                        {/* <!-- End Gallery --> */}
                      </div>

                      <div className="col-auto">
                        {/* <!-- Gallery --> */}
                        <a
                          className="js-fancybox max-width-60 u-media-viewer"
                          href="javascript:;"
                          data-src="../../assets/img/1920X1080/img3.jpg"
                          data-fancybox="fancyboxGallery6"
                          data-caption="Electro in frames - image #03"
                          data-speed="700"
                          data-is-infinite="true"
                        >
                          <Image
                            className="img-fluid border"
                            src="/img/100X100/img3.jpg"
                            alt="Image Description"
                            height={300}
                            width={200}
                          />

                          <span className="u-media-viewer__container">
                            <span className="u-media-viewer__icon">
                              <span className="fas fa-plus u-media-viewer__icon-inner"></span>
                            </span>
                          </span>
                        </a>
                        {/* <!-- End Gallery --> */}
                      </div>
                      <div className="col"></div>
                    </div>
                    {/* <!-- End Gallery --> */}
                  </div>
                  <div className="flex-center-between">
                    <div className="prodcut-price">
                      <div className="text-gray-100">$685,00</div>
                    </div>
                    <div className="d-none d-xl-block prodcut-add-cart">
                      <a
                        href="/shop/2"
                        className="btn-add-cart btn-add-cart__wide btn-primary transition-3d-hover"
                      >
                        <i className="ec ec-add-to-cart mr-2"></i> Add to Cart
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
                      <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                      Compare
                    </a>
                    <a
                      href="https://transvelo.github.io/electro-html/2.0/html/shop/wishlist.html"
                      className="text-gray-6 font-size-13"
                    >
                      <i className="ec ec-favorites mr-1 font-size-15"></i> Add
                      to Wishlist
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <SingleRow />
    </div>
  );
}
