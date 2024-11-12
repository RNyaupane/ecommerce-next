import Image from "next/image";
import Link from "next/link";

export default function FooterTop() {
  return (
    <div className="container d-none d-lg-block mb-3">
      <div className="row">
        <div className="col-wd-4 col-lg-4">
          <div className="widget-column">
            <div className="border-bottom border-color-1 mb-5">
              <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">
                Featured Products
              </h3>
            </div>
            <ul className="list-unstyled products-group">
              {Array.from({ length: 3 }).map((item, index) => (
                <li
                  key={index}
                  className="product-item product-item__list row no-gutters mb-6 remove-divider"
                >
                  <div className="col-auto">
                    <Link
                      href="/shop/2"
                      className="d-block width-75 text-center"
                    >
                      <Image
                        width={100}
                        height={100}
                        className="img-fluid"
                        src={`/img/75X75/img${index + 1}.jpg`}
                        alt="Image Description"
                      />
                    </Link>
                  </div>
                  <div className="col pl-4 d-flex flex-column">
                    <h5 className="product-item__title mb-0">
                      <Link
                        href="/shop/2"
                        className="text-blue font-weight-bold"
                      >
                        Purple Wireless Headphones Solo 2 HD
                      </Link>
                    </h5>
                    <div className="prodcut-price mt-auto">
                      <div className="font-size-15">$1149.00</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-wd-4 col-lg-4">
          <div className="border-bottom border-color-1 mb-5">
            <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">
              Onsale Products
            </h3>
          </div>
          <ul className="list-unstyled products-group">
            {Array.from({ length: 3 }).map((item, index) => (
              <li
                key={index}
                className="product-item product-item__list row no-gutters mb-6 remove-divider"
              >
                <div className="col-auto">
                  <Link href="/shop/2" className="d-block width-75 text-center">
                    <Image
                      width={100}
                      height={100}
                      className="img-fluid"
                      src={`/img/75X75/img${index + 3}.jpg`}
                      alt="Image Description"
                    />
                  </Link>
                </div>
                <div className="col pl-4 d-flex flex-column">
                  <h5 className="product-item__title mb-0">
                    <Link href="/shop/2" className="text-blue font-weight-bold">
                      Yellow Earphones Waterproof with Bluetooth
                    </Link>
                  </h5>
                  <div className="prodcut-price mt-auto flex-horizontal-center">
                    <ins className="font-size-15 text-decoration-none">
                      $110.00
                    </ins>
                    <del className="font-size-12 text-gray-9 ml-2">$250.00</del>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-wd-4 col-lg-4">
          <div className="border-bottom border-color-1 mb-5">
            <h3 className="section-title section-title__sm mb-0 pb-2 font-size-18">
              Top Rated Products
            </h3>
          </div>
          <ul className="list-unstyled products-group">
            {Array.from({ length: 3 }).map((item, index) => (
              <li
                key={index}
                className="product-item product-item__list row no-gutters mb-6 remove-divider"
              >
                <div className="col-auto">
                  <Link href="/shop/2" className="d-block width-75 text-center">
                    <Image
                      width={100}
                      height={100}
                      className="img-fluid"
                      src={`/img/75X75/img${index + 6}.jpg`}
                      alt="Image Description"
                    />
                  </Link>
                </div>
                <div className="col pl-4 d-flex flex-column">
                  <h5 className="product-item__title mb-0">
                    <Link href="/shop/2" className="text-blue font-weight-bold">
                      Yellow Earphones Waterproof with Bluetooth
                    </Link>
                  </h5>
                  <div className="prodcut-price mt-auto flex-horizontal-center">
                    <ins className="font-size-15 text-decoration-none">
                      $110.00
                    </ins>
                    <del className="font-size-12 text-gray-9 ml-2">$250.00</del>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="col-wd-4 d-none d-wd-block">
          <a
            href="https://transvelo.github.io/electro-html/2.0/html/shop/shop.html"
            className="d-block"
          >
            <Image
              width={100}
              height={100}
              className="img-fluid"
              src="/img/330X360/img1.jpg"
              alt="Image Description"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
}
