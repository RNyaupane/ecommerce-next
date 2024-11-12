"use client";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

export default function SliderSection() {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <div className="mb-5">
      <div
        className="bg-img-hero"
        style={{ backgroundImage: "url('/img/1920X422/img1.jpg')" }}
      >
        <div className="container min-height-420 overflow-hidden">
          <Slider {...settings}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="bg-img-hero-center" key={index}>
                <div className="row min-height-420 py-7 py-md-0">
                  <div className="offset-xl-3 col-xl-4 col-6 mt-md-8">
                    <h1 className="font-size-64 text-lh-57 font-weight-light">
                      THE NEW{" "}
                      <span className="d-block font-size-55">STANDARD</span>
                    </h1>
                    <h6 className="font-size-15 font-weight-bold mb-3">
                      UNDER FAVORABLE SMARTWATCHES
                    </h6>
                    <div className="mb-4">
                      <span className="font-size-13">FROM</span>
                      <div className="font-size-50 font-weight-bold text-lh-45">
                        <sup>$</sup>749<sup>99</sup>
                      </div>
                    </div>
                    <Link
                      href="/shop"
                      className="btn btn-primary transition-3d-hover rounded-lg font-weight-normal py-2 px-md-7 px-3 font-size-16"
                    >
                      Start Buying
                    </Link>
                  </div>
                  <div className="col-xl-5 col-6 d-flex align-items-center">
                    <Image
                      src={`/img/416X420/img${index + 1}.png`}
                      alt="Image Description"
                      fill
                      objectFit="cover"
                      className=" img-fluid h-full w-full"
                    />
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
