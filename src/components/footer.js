import Image from "next/image";
import Link from "next/link";
import FooterTop from "./footer/footer-top";
import Logo from "@/app/mock/logo/logo";

export default function Footer() {
  const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

  const categories = [
    "Laptops & Computers",
    "Cameras & Photography",
    "Smart Phones & Tablets",
    "Video Games & Consoles",
    "TV & Audio",
    "Gadgets",
    "Car Electronic & GPS",
  ];

  const categoriesNew = [
    "Printers & Ink",
    "Software",
    "Office Supplies",
    "Computer Components",
    "Accesories",
  ];

  const links = [
    { href: "/shop/my-account.html", text: "My Account" },
    { href: "/shop/track-your-order.html", text: "Order Tracking" },
    { href: "/shop/wishlist.html", text: "Wish List" },
    { href: "/terms-and-conditions.html", text: "Customer Service" },
    { href: "/terms-and-conditions.html", text: "Returns / Exchange" },
    { href: "/faq.html", text: "FAQs" },
    { href: "/terms-and-conditions.html", text: "Product Support" },
  ];

  return (
    <footer>
      {/* <!-- Footer-top-widget --> */}
      <FooterTop />
      {/* <!-- End Footer-top-widget --> */}

      {/* <!-- Footer-newsletter --> */}
      <div className="bg-primary py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 mb-md-3 mb-lg-0">
              <div className="row align-items-center">
                <div className="col-auto flex-horizontal-center">
                  <i className="ec ec-newsletter font-size-40"></i>
                  <h2 className="font-size-20 mb-0 ml-3">
                    Sign up to Newsletter
                  </h2>
                </div>
                <div className="col my-4 my-md-0">
                  <h5 className="font-size-15 ml-4 mb-0">
                    ...and receive{" "}
                    <strong>$20 coupon for first shopping.</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {/* <!-- Subscribe Form --> */}
              <form className="js-validate js-form-message">
                <label className="sr-only" htmlFor="subscribeSrEmail">
                  Email address
                </label>
                <div className="input-group input-group-pill">
                  <input
                    type="email"
                    className="form-control border-0 height-40"
                    name="email"
                    id="subscribeSrEmail"
                    placeholder="Email address"
                    aria-label="Email address"
                    aria-describedby="subscribeButton"
                    required
                    data-msg="Please enter a valid email address."
                  />
                  <div className="input-group-append">
                    <button
                      type="submit"
                      className="btn btn-dark btn-sm-wide height-40 py-2"
                      id="subscribeButton"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
              {/* <!-- End Subscribe Form --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Footer-newsletter --> */}
      {/* <!-- Footer-bottom-widgets --> */}
      <div className="pt-8 pb-4 bg-gray-13">
        <div className="container mt-1">
          <div className="row">
            <div className="col-lg-5">
              <div className="mb-6">
                <div className="d-inline-block">
                  <Logo />
                </div>
              </div>
              <div className="mb-4">
                <div className="row no-gutters">
                  <div className="col-auto">
                    <i className="ec ec-support text-primary font-size-56"></i>
                  </div>
                  <div className="col pl-3">
                    <div className="font-size-13 font-weight-light">
                      Got questions? Call us 24/7!
                    </div>
                    <a
                      href="tel:+80080018588"
                      className="font-size-20 text-gray-90"
                    >
                      9840953995,{" "}
                    </a>
                    <a
                      href="tel:+0600874548"
                      className="font-size-20 text-gray-90"
                    >
                      9821583327
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h6 className="mb-1 font-weight-bold">Contact info</h6>
                <address className="">Putalisadak, kathmandu, Nepal</address>
              </div>
              <div className="my-4 my-md-4">
                <ul className="list-inline mb-0 opacity-7">
                  <li className="list-inline-item mr-0">
                    <a
                      className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle"
                      href="#"
                    >
                      <span className="fab fa-facebook-f btn-icon__inner"></span>
                    </a>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a
                      className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle"
                      href="#"
                    >
                      <span className="fab fa-google btn-icon__inner"></span>
                    </a>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a
                      className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle"
                      href="#"
                    >
                      <span className="fab fa-twitter btn-icon__inner"></span>
                    </a>
                  </li>
                  <li className="list-inline-item mr-0">
                    <a
                      className="btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle"
                      href="#"
                    >
                      <span className="fab fa-github btn-icon__inner"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-12 col-md mb-4 mb-md-0">
                  <h6 className="mb-3 font-weight-bold">Find it Fast</h6>
                  <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                    {" "}
                     
                    {categories.map((category, index) => (
                      <li key={index} className="list-group-item">
                        <Link
                          href="/shop/product-categories-5-column-sidebar.html"
                          legacyBehavior
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-12 col-md mb-4 mb-md-0">
                  <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent mt-md-6">
                    {" "}
                     
                    {categoriesNew.map((category, index) => (
                      <li key={index} className="list-group-item">
                        <Link
                          href="/shop/product-categories-5-column-sidebar.html"
                          legacyBehavior
                        >
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-12 col-md mb-4 mb-md-0">
                  <h6 className="mb-3 font-weight-bold">Customer Care</h6>
                  <ul className="list-group list-group-flush list-group-borderless mb-0 list-group-transparent">
                    {" "}
                     
                    {links.map((link, index) => (
                      <li key={index} className="list-group-item">
                        <Link href={link.href} legacyBehavior>
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Footer-bottom-widgets --> */}
      {/* <!-- Footer-copy-right --> */}
      <div className="bg-gray-14 py-2">
        <div className="container">
          <div className="flex-center-between d-block d-md-flex">
            <div className="mb-3 mb-md-0">
              ©{" "}
              <a href="#" className="font-weight-bold text-gray-90">
                Electro
              </a>{" "}
              - All rights Reserved
            </div>
            <div className="text-md-right">
              {images.map((image, index) => (
                <span
                  key={index}
                  className="d-inline-block bg-white border rounded p-2 mr-2"
                >
                  <Image
                    src={`/img/100X60/${image}`}
                    alt="Image Description"
                    width={100}
                    height={60}
                    className="max-width-6 img-fluid"
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Footer-copy-right --> */}
    </footer>
  );
}
