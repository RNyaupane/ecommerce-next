"use client";
import Slider from "react-slick";
import Image from "next/image";

const BrandCarousel = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 7000,
    infinite: true,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: (
      <div className="fa fa-angle-right u-slick__arrow-classic-inner--right" />
    ),
    prevArrow: (
      <div className="fa fa-angle-left u-slick__arrow-classic-inner--left" />
    ),
  };

  const images = [
    { src: "/img/200X60/img1.png", alt: "Image Description" },
    { src: "/img/200X60/img2.png", alt: "Image Description" },
    { src: "/img/200X60/img3.png", alt: "Image Description" },
    { src: "/img/200X60/img4.png", alt: "Image Description" },
    { src: "/img/200X60/img5.png", alt: "Image Description" },
    { src: "/img/200X60/img6.png", alt: "Image Description" },
  ];

  return (
    <div className="mb-8">
      <div className="py-2 border-top border-bottom">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <a href="#" className="link-hover__brand">
                <Image
                  height={100}
                  width={200}
                  className="img-fluid m-auto max-height-50"
                  src={image.src}
                  alt={image.alt}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BrandCarousel;
