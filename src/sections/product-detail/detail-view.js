"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const DetailView = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const images = [1, 2, 3];

  const mainSettings = {
    asNavFor: nav2,
    ref: (slider) => setNav1(slider),
    infinite: true,
    slidesToShow: 1,
    arrows: true,
  };

  const thumbSettings = {
    asNavFor: nav1,
    ref: (slider) => setNav2(slider),
    slidesToShow: 3,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: true,
  };
  return (
    <div className="container">
      {/* Single Product Body */}
      <div className="mb-14">
        <div className="row">
          {/* Product Image Slider */}
          <div className="col-md-6 col-lg-4 col-xl-5 mb-4 mb-md-0">
            {/* Main Image Slider */}
            <Slider {...mainSettings}>
              {images.map((item, i) => (
                <div key={i}>
                  <Image
                    height={400}
                    width={500}
                    className="img-fluid"
                    src={`/img/1024X1024/img${item}.jpg`}
                    alt={`Image ${item}`}
                  />
                </div>
              ))}
            </Slider>

            {/* Thumbnail Slider */}
            <Slider {...thumbSettings} className="mt-2 ">
              {images.map((item, i) => (
                <div
                  className="border-gray-3 border-1 w-auto p-2"
                  key={i}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    height={70}
                    width={70}
                    className="img-fluid"
                    src={`/img/1024X1024/img${item}.jpg`}
                    alt={`Thumb ${item}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* Product Details */}
          <div className="col-md-6 col-lg-4 col-xl-4 mb-md-6 mb-lg-0">
            <div className="mb-2">
              <a
                href="#"
                className="font-size-12 text-gray-5 mb-2 d-inline-block"
              >
                Headphones
              </a>
              <h2 className="font-size-25">
                Ultra Wireless S50 Headphones S50 with Bluetooth
              </h2>
              <div className="mb-2">
                <a
                  className="d-inline-flex align-items-center small font-size-15"
                  href="#"
                >
                  <div className="text-warning mr-2">
                    {[...Array(4)].map((_, i) => (
                      <small key={i} className="fas fa-star"></small>
                    ))}
                    <small className="far fa-star text-muted"></small>
                  </div>
                  <span className="text-secondary font-size-13">
                    (3 customer reviews)
                  </span>
                </a>
              </div>

              <div className="mb-2">
                <ul className="font-size-14 pl-3 ml-1 text-gray-110">
                  {[
                    "4.5 inch HD Touch Screen (1280 x 720)",
                    "Android 4.4 KitKat OS",
                    "1.4 GHz Quad Core™ Processor",
                    "20 MP Electro and 28 MP CMOS rear camera",
                  ].map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p>
                <strong>SKU</strong>: FW511948218
              </p>
            </div>
          </div>

          {/* Purchase Options */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="mb-2">
              <div className="card p-5 border-width-2 border-color-1 borders-radius-17">
                <div className="text-gray-9 font-size-14 pb-2 border-bottom mb-3">
                  Availability:{" "}
                  <span className="text-green font-weight-bold">
                    26 in stock
                  </span>
                </div>
                <div className="font-size-36 mb-3">$685.00</div>
                <div className="mb-3">
                  <h6 className="font-size-14">Quantity</h6>
                  <div className="border rounded-pill py-1 w-md-60 height-35 px-3 border-color-1">
                    <div className="js-quantity row align-items-center">
                      <div className="col">
                        <input
                          className="form-control border-0 p-0 shadow-none"
                          type="text"
                          value="1"
                        />
                      </div>
                      <div className="col-auto pr-1">
                        <a
                          className="js-minus btn btn-xs btn-outline-secondary rounded-circle border-0"
                          href="#"
                        >
                          <small className="fas fa-minus"></small>
                        </a>
                        <a
                          className="js-plus btn btn-xs btn-outline-secondary rounded-circle border-0"
                          href="#"
                        >
                          <small className="fas fa-plus"></small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <h6 className="font-size-14">Color</h6>
                  <select className="btn-block col-12 px-0">
                    {["White with Gold", "Red", "Green", "Blue"].map(
                      (color, i) => (
                        <option key={i} value={color.toLowerCase()}>
                          {color}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="mb-2 pb-0dot5">
                  <a href="#" className="btn btn-block btn-primary-dark">
                    <i className="ec ec-add-to-cart mr-2 font-size-20"></i>Add
                    to Cart
                  </a>
                </div>
                <div className="mb-3">
                  <a href="#" className="btn btn-block btn-dark">
                    Buy Now
                  </a>
                </div>
                <div className="flex-content-center flex-wrap">
                  <a href="#" className="text-gray-6 font-size-13 mr-2">
                    <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                    Wishlist
                  </a>
                  <a href="#" className="text-gray-6 font-size-13 ml-2">
                    <i className="ec ec-compare mr-1 font-size-15"></i> Compare
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Single Product Body */}
    </div>
  );
};

export default DetailView;
