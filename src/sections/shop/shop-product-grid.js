"use client";
import { fetchProducts } from "@/redux/reducer/product/getProductSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ShopProductGrid() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade pt-2 show active"
        id="pills-one-example1"
        role="tabpanel"
        aria-labelledby="pills-one-example1-tab"
        data-target-group="groups"
      >
        <ul className="row list-unstyled products-group no-gutters">
          {products?.map((item, index) => (
            <li
              key={index}
              className="col-6 col-md-3 col-wd-2gdot4 product-item"
            >
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-xl-4 p-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2">
                      <p className="font-size-12 text-gray-5">Speakers</p>
                    </div>
                    <h5 className="mb-1 product-item__title">
                      <Link
                        href="/shop/2"
                        className="text-blue font-weight-bold"
                      >
                        {item?.name}
                      </Link>
                    </h5>
                    <div className="mb-2">
                      <Link href="/shop/2" className="d-block text-center">
                        <Image
                          height={300}
                          width={200}
                          className="img-fluid"
                          src={`/img/212X200/img${
                            index >= 8 ? "1" : index + 1
                          }.jpg`}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <Link
                          href="/cart"
                          className="btn-add-cart btn-primary transition-3d-hover"
                        >
                          <i className="ec ec-add-to-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-item__footer">
                    <div className="border-top pt-2 flex-center-between flex-wrap">
                      <Link
                        href="/compare"
                        className="text-gray-6 font-size-13"
                      >
                        <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                        Compare
                      </Link>
                      <Link
                        href="/wishlist"
                        className="text-gray-6 font-size-13"
                      >
                        <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                        Wishlist
                      </Link>
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
        data-target-group="groups"
      >
        <ul className="row list-unstyled products-group no-gutters">
          {Array.from({ length: 20 }).map((item, index) => (
            <li
              key={index}
              className="col-6 col-md-3 col-wd-2gdot4 product-item"
            >
              <div className="product-item__outer h-100">
                <div className="product-item__inner px-xl-4 p-3">
                  <div className="product-item__body pb-xl-2">
                    <div className="mb-2">
                      <p className="font-size-12 text-gray-5">Speakers</p>
                    </div>
                    <h5 className="mb-1 product-item__title">
                      <Link
                        href="/shop/2"
                        className="text-blue font-weight-bold"
                      >
                        Wireless Audio System Multiroom 360 degree Full base
                        audio
                      </Link>
                    </h5>
                    <div className="mb-2">
                      <Link href="/shop/2" className="d-block text-center">
                        <Image
                          height={300}
                          width={200}
                          className="img-fluid"
                          src={`/img/212X200/img${
                            index >= 8 ? "1" : index + 1
                          }.jpg`}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                    <div className="flex-center-between mb-1">
                      <div className="prodcut-price">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="d-none d-xl-block prodcut-add-cart">
                        <Link
                          href="/cart"
                          className="btn-add-cart btn-primary transition-3d-hover"
                        >
                          <i className="ec ec-add-to-cart"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="product-item__footer">
                    <div className="border-top pt-2 flex-center-between flex-wrap">
                      <Link
                        href="/compare"
                        className="text-gray-6 font-size-13"
                      >
                        <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                        Compare
                      </Link>
                      <Link
                        href="/wishlist"
                        className="text-gray-6 font-size-13"
                      >
                        <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                        Wishlist
                      </Link>
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
        data-target-group="groups"
      >
        <ul className="d-block list-unstyled products-group prodcut-list-view">
          {Array.from({ length: 6 }).map((item, index) => (
            <li key={index} className="product-item remove-divider">
              <div className="product-item__outer w-100">
                <div className="product-item__inner remove-prodcut-hover py-4 row">
                  <div className="product-item__header col-6 col-md-4">
                    <div className="mb-2">
                      <Link href="/shop/2" className="d-block text-center">
                        <Image
                          height={300}
                          width={200}
                          className="img-fluid"
                          src={`/img/212X200/img${index + 1}.jpg`}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="product-item__body col-6 col-md-5">
                    <div className="pr-lg-10">
                      <div className="mb-2">
                        <p className="font-size-12 text-gray-5">Speakers</p>
                      </div>
                      <h5 className="mb-2 product-item__title">
                        <Link
                          href="/shop/2"
                          className="text-blue font-weight-bold"
                        >
                          Wireless Audio System Multiroom 360 degree Full base
                          audio
                        </Link>
                      </h5>
                      <div className="prodcut-price mb-2 d-md-none">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <Link
                          className="d-inline-flex align-items-center small font-size-14"
                          href="/shop/2"
                        >
                          <div className="text-warning mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="far fa-star text-muted"></small>
                          </div>
                          <span className="text-secondary">(40)</span>
                        </Link>
                      </div>
                      <ul className="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                        <li className="line-clamp-1 mb-1 list-bullet">
                          Brand new and high quality
                        </li>
                        <li className="line-clamp-1 mb-1 list-bullet">
                          Made of supreme quality, durable EVA crush resistant,
                          anti-shock material.
                        </li>
                        <li className="line-clamp-1 mb-1 list-bullet">
                          20 MP Electro and 28 megapixel CMOS rear camera
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-item__footer col-md-3 d-md-block">
                    <div className="mb-3">
                      <div className="prodcut-price mb-2">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="prodcut-add-cart">
                        <Link
                          href="/cart"
                          className="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover"
                        >
                          Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="flex-horizontal-center justify-content-between justify-content-wd-center flex-wrap">
                      <Link
                        href="/compare"
                        className="text-gray-6 font-size-13 mx-wd-3"
                      >
                        <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                        Compare
                      </Link>
                      <Link
                        href="/wishlist"
                        className="text-gray-6 font-size-13 mx-wd-3"
                      >
                        <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                        Wishlist
                      </Link>
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
        id="pills-four-example1"
        role="tabpanel"
        aria-labelledby="pills-four-example1-tab"
        data-target-group="groups"
      >
        <ul className="d-block list-unstyled products-group prodcut-list-view-small">
          {Array.from({ length: 6 }).map((item, index) => (
            <li key={index} className="product-item remove-divider">
              <div className="product-item__outer w-100">
                <div className="product-item__inner remove-prodcut-hover py-4 row">
                  <div className="product-item__header col-6 col-md-4">
                    <div className="mb-2">
                      <Link href="/shop/2" className="d-block text-center">
                        <Image
                          height={300}
                          width={200}
                          className="img-fluid"
                          src={`/img/212X200/img${index + 1}.jpg`}
                          alt="Image Description"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="product-item__body col-6 col-md-5">
                    <div className="pr-lg-10">
                      <div className="mb-2">
                        <p className="font-size-12 text-gray-5">Speakers</p>
                      </div>
                      <h5 className="mb-2 product-item__title">
                        <Link
                          href="/shop/2"
                          className="text-blue font-weight-bold"
                        >
                          Wireless Audio System Multiroom 360 degree Full base
                          audio
                        </Link>
                      </h5>
                      <div className="prodcut-price mb-2 d-md-none">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="mb-3 d-none d-md-block">
                        <a
                          className="d-inline-flex align-items-center small font-size-14"
                          href="#"
                        >
                          <div className="text-warning mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="far fa-star text-muted"></small>
                          </div>
                          <span className="text-secondary">(40)</span>
                        </a>
                      </div>
                      <ul className="font-size-12 p-0 text-gray-110 mb-4 d-none d-md-block">
                        <li className="line-clamp-1 mb-1 list-bullet">
                          Brand new and high quality
                        </li>
                        <li className="line-clamp-1 mb-1 list-bullet">
                          Made of supreme quality, durable EVA crush resistant,
                          anti-shock material.
                        </li>
                        <li className="line-clamp-1 mb-1 list-bullet">
                          20 MP Electro and 28 megapixel CMOS rear camera
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-item__footer col-md-3 d-md-block">
                    <div className="mb-3">
                      <div className="prodcut-price mb-2">
                        <div className="text-gray-100">$685,00</div>
                      </div>
                      <div className="prodcut-add-cart">
                        <Link
                          href="/cart"
                          className="btn btn-sm btn-block btn-primary-dark btn-wide transition-3d-hover"
                        >
                          Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="flex-horizontal-center justify-content-between justify-content-wd-center flex-wrap">
                      <Link
                        href="/compare"
                        className="text-gray-6 font-size-13 mx-wd-3"
                      >
                        <i className="ec ec-compare mr-1 font-size-15"></i>{" "}
                        Compare
                      </Link>
                      <Link
                        href="/wishlist"
                        className="text-gray-6 font-size-13 mx-wd-3"
                      >
                        <i className="ec ec-favorites mr-1 font-size-15"></i>{" "}
                        Wishlist
                      </Link>
                    </div>
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
