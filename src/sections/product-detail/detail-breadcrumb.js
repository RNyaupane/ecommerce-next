import Link from "next/link";

const DetailBreadcrumb = () => {
  return (
    <div className="bg-gray-13 bg-md-transparent">
      <div className="container">
        <div className="my-md-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
              <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <Link href="/">Accessories</Link>
              </li>
              <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1">
                <Link href="/shop">Headphones</Link>
              </li>
              <li
                className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active"
                aria-current="page"
              >
                Ultra Wireless S50 Headphones S50 with Bluetooth
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DetailBreadcrumb;
