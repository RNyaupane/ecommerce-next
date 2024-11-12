"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function ProductCardCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <div className="fa fa-angle-right" />,
    prevArrow: <div className="fa fa-angle-left" />,
  };

  return (
    <div className="space-top-2">
      <div className="d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
        <h3 className="section-title mb-0 pb-2 font-size-22">Bestsellers</h3>
        <ul className="nav nav-pills mb-2 pt-3 pt-md-0 mb-0 border-top border-color-1 border-md-top-0 align-items-center font-size-15 font-size-15-md flex-nowrap flex-md-wrap overflow-auto overflow-md-visible">
          <li className="nav-item flex-shrink-0 flex-md-shrink-1">
            <a
              className="text-gray-90 btn btn-outline-primary border-width-2 rounded-pill py-1 px-4 font-size-15 text-lh-19 font-size-15-md"
              href="#"
            >
              Top 20
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-md-shrink-1">
            <a className="nav-link text-gray-8" href="#">
              Phones & Tablets
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-md-shrink-1">
            <a className="nav-link text-gray-8" href="#">
              Laptops & Computers
            </a>
          </li>
          <li className="nav-item flex-shrink-0 flex-md-shrink-1">
            <a className="nav-link text-gray-8" href="#">
              Video Cameras
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-3 pb-6">
        <Slider {...settings}>
          {[...Array(3)].map((_, slideIndex) => (
            <div key={slideIndex}>
              <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                {Array.from({ length: 6 }).map((_, index) => (
                  <ProductCard key={index} />
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const ProductCard = () => {
  return (
    <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
      <div className="product-item__outer h-100">
        <div className="product-item__inner p-md-3 row no-gutters">
          <div className="col col-lg-auto product-media-left">
            <a href="/shop/2" className="max-width-150 d-block">
              <Image
                height={200}
                width={200}
                className="img-fluid"
                src="/img/150X140/img1.jpg"
                alt="Image Description"
              />
            </a>
          </div>
          <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
            <div className="mb-4">
              <div className="mb-2">
                <a
                  href="https://transvelo.github.io/electro-html/2.0/html/shop/product-categories-7-column-full-width.html"
                  className="font-size-12 text-gray-5"
                >
                  Tablets
                </a>
              </div>
              <h5 className="product-item__title">
                <a href="/shop/2" className="text-blue font-weight-bold">
                  Tablet Air 3 WiFi 64GB Gold
                </a>
              </h5>
            </div>
            <div className="flex-center-between mb-3">
              <div className="prodcut-price">
                <div className="text-gray-100">$629,00</div>
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
                  <i className="ec ec-favorites mr-1 font-size-15"></i> Wishlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
