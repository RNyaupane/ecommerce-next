"use client";
import Image from "next/image";
import Slider from "react-slick";

export default function RecentlyViewed() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <div className="fa fa-angle-right right-0" />,
    prevArrow: <div className="fa fa-angle-left right-1" />,
  };

  const products = [
    {
      category: "Speakers",
      title: "Wireless Audio System Multiroom 360 degree Full base audio",
      price: "$685.00",
      image: "/img/212X200/img1.jpg",
      compareLink: "#",
      wishlistLink: "#",
      productLink: "#",
    },
    {
      category: "Speakers",
      title: "Wireless Audio System Multiroom 360 degree Full base audio",
      price: "$685.00",
      image: "/img/212X200/img2.jpg",
      compareLink: "#",
      wishlistLink: "#",
      productLink: "#",
    },
    {
      category: "Speakers",
      title: "Wireless Audio System Multiroom 360 degree Full base audio",
      price: "$685.00",
      image: "/img/212X200/img1.jpg",
      compareLink: "#",
      wishlistLink: "#",
      productLink: "#",
    },
    {
      category: "Speakers",
      title: "Wireless Audio System Multiroom 360 degree Full base audio",
      price: "$685.00",
      image: "/img/212X200/img2.jpg",
      compareLink: "#",
      wishlistLink: "#",
      productLink: "#",
    },
    {
      category: "Speakers",
      title: "Wireless Audio System Multiroom 360 degree Full base audio",
      price: "$685.00",
      image: "/img/212X200/img1.jpg",
      compareLink: "#",
      wishlistLink: "#",
      productLink: "#",
    },
    {
      category: "Speakers",
      title: "Wireless Audio System Multiroom 360 degree Full base audio",
      price: "$685.00",
      image: "/img/212X200/img2.jpg",
      compareLink: "#",
      wishlistLink: "#",
      productLink: "#",
    },
  ];

  return (
    <div className="mb-6">
      <div className="position-relative">
        <div className="border-bottom border-color-1 mb-2">
          <h3 className="section-title mb-0 pb-2 font-size-22">
            Recently Viewed
          </h3>
        </div>
        <div className="position-static overflow-hidden pb-7 pt-2 px-1">
          <Slider {...settings}>
            {products.map((product, index) => (
              <div key={index} className="products-group">
                <div className="product-item">
                  <div className="product-item__outer h-100">
                    <div className="product-item__inner px-wd-4 p-2 p-md-3">
                      <div className="product-item__body pb-xl-2">
                        <div className="mb-2">
                          <a
                            href={product.productLink}
                            className="font-size-12 text-gray-5"
                          >
                            {product.category}
                          </a>
                        </div>
                        <h5 className="mb-1 product-item__title">
                          <a
                            href={product.productLink}
                            className="text-blue font-weight-bold"
                          >
                            {product.title}
                          </a>
                        </h5>
                        <div className="mb-2">
                          <a
                            href={product.productLink}
                            className="d-block text-center"
                          >
                            <Image
                              width={300}
                              height={300}
                              className="img-fluid"
                              src={product.image}
                              alt={product.title}
                            />
                          </a>
                        </div>
                        <div className="flex-center-between mb-1">
                          <div className="prodcut-price">
                            <div className="text-gray-100">{product.price}</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href={product.productLink}
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
                            href={product.compareLink}
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                            Compare
                          </a>
                          <a
                            href={product.wishlistLink}
                            className="text-gray-6 font-size-13"
                          >
                            <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                            Wishlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
