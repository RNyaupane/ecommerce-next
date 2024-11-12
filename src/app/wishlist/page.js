import Image from "next/image";

export const metadata = {
  title: "Wishlist",
  description: "Ecommerce developed by Roshan",
};

export default function Wishlist() {
  return (
    <div className="container">
      <div className="my-6">
        <h1 className="text-center">My wishlist on Electro</h1>
      </div>
      <div className="mb-16 wishlist-table">
        <form className="mb-4" action="#" method="post">
          <div className="table-responsive">
            <table className="table" cellSpacing="0">
              <thead>
                <tr>
                  <th className="product-remove">&nbsp;</th>
                  <th className="product-thumbnail">&nbsp;</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Unit Price</th>
                  <th className="product-Stock w-lg-15">Stock Status</th>
                  <th className="product-subtotal min-width-200-md-lg">
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                    <a href="#" className="text-gray-32 font-size-26">
                      ×
                    </a>
                  </td>
                  <td className="d-none d-md-table-cell">
                    <a href="#">
                      <Image
                        height={80}
                        width={80}
                        className="img-fluid max-width-100 p-1 border border-color-1"
                        src="/img/300X300/img6.jpg"
                        alt="Product"
                      />
                    </a>
                  </td>
                  <td data-title="Product">
                    <a href="#" className="text-gray-90">
                      Ultra Wireless S50 Headphones S50 with Bluetooth
                    </a>
                  </td>
                  <td data-title="Unit Price">
                    <span>$1,100.00</span>
                  </td>
                  <td data-title="Stock Status">
                    <span>In stock</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto"
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <a href="#" className="text-gray-32 font-size-26">
                      ×
                    </a>
                  </td>
                  <td className="d-none d-md-table-cell">
                    <a href="#">
                      <Image
                        height={80}
                        width={80}
                        className="img-fluid max-width-100 p-1 border border-color-1"
                        src="/img/300X300/img7.png"
                        alt="Product"
                      />
                    </a>
                  </td>
                  <td data-title="Product">
                    <a href="#" className="text-gray-90">
                      Widescreen NX Mini F1 SMART NX
                    </a>
                  </td>
                  <td data-title="Unit Price">
                    <span>$685.00</span>
                  </td>
                  <td data-title="Stock Status">
                    <span>In stock</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto"
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
