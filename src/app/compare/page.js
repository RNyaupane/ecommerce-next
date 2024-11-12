import Image from "next/image";

export const metadata = {
  title: "Compare",
  description: "Ecommerce developed by Roshan",
};

export default function Compare() {
  const products = [
    {
      imgSrc: "/img/212X200/img1.jpg",
      title: "Protection Plan for MacBook Air / 13 inch MacBook Pro",
      price: "$250.00",
      stock: "In stock",
      description: [
        "Intel Core i5 processors (13-inch model)",
        "Intel Iris Graphics 6100 (13-inch model)",
        "Flash storage",
        "Up to 10 hours of battery life (13-inch model)",
        "Force Touch trackpad (13-inch model)",
      ],
      sku: "5487FB8/44",
      weight: "500g",
      color: "Red",
    },
    {
      imgSrc: "/img/212X200/img6.jpg",
      title: "Purple NX Mini F1 aparat SMART NX",
      price: "$559.00",
      stock: "82 in stock",
      description: [
        "No more blur and noise",
        "Cloud storage",
        "HD video recording",
        "Perfect for Selfies",
        "Adobe Photoshop Lightroom 5 software",
      ],
      sku: "5487FB8/43",
      weight: "40g",
      color: "Green",
    },
    {
      imgSrc: "/img/212X200/img7.jpg",
      title: "White Solo 2 Wireless",
      price: "$248.99",
      stock: "73 in stock",
      description: [
        "Pair and Play with Bluetooth device",
        "12 hour rechargeable battery",
        "Hands-free calls with built-in mic",
        "Fine-tuned acoustics",
      ],
      sku: "5487FB8/42",
      weight: "1759g",
      color: "Blue",
    },
    {
      imgSrc: "/img/212X200/img8.jpg",
      title: "Tablet Red EliteBook Revolve 810 G2",
      price: "$2,299.00",
      stock: "54 in stock",
      description: [
        "Intel Core i5 processors (13-inch model)",
        "Intel Iris Graphics 6100 (13-inch model)",
        "Flash storage",
        "Up to 10 hours of battery life (13-inch model)",
        "Force Touch trackpad (13-inch model)",
      ],
      sku: "5487FB8/41",
      weight: "90g",
      color: "Yellow",
    },
  ];

  return (
    <div className="container">
      <div className="table-responsive table-bordered table-compare-list mb-10 border-0">
        <table className="table">
          <tbody>
            <tr>
              <th className="min-width-200">Product</th>
              {products.map((product, index) => (
                <td key={index}>
                  <a href="#" className="product d-block">
                    <div className="product-compare-image">
                      <div className="d-flex mb-3">
                        <Image
                          height={80}
                          width={80}
                          className="img-fluid mx-auto"
                          src={product.imgSrc}
                          alt="Product Image"
                        />
                      </div>
                    </div>
                    <h3 className="product-item__title text-blue font-weight-bold mb-3">
                      {product.title}
                    </h3>
                  </a>
                  <div className="text-warning mb-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <small key={starIndex} className="fas fa-star"></small>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <th>Price</th>
              {products.map((product, index) => (
                <td key={index}>
                  <div className="product-price">{product.price}</div>
                </td>
              ))}
            </tr>
            <tr>
              <th>Availability</th>
              {products.map((product, index) => (
                <td key={index}>
                  <span>{product.stock}</span>
                </td>
              ))}
            </tr>
            <tr>
              <th>Description</th>
              {products.map((product, index) => (
                <td key={index}>
                  <ul>
                    {product.description.map((desc, descIndex) => (
                      <li key={descIndex}>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <th>Add to cart</th>
              {products.map((_, index) => (
                <td key={index}>
                  <div>
                    <a
                      href="#"
                      className="btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-3 px-xl-5"
                    >
                      Add to cart
                    </a>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <th>Sku</th>
              {products.map((product, index) => (
                <td key={index}>{product.sku}</td>
              ))}
            </tr>
            <tr>
              <th>Weight</th>
              {products.map((product, index) => (
                <td key={index}>{product.weight}</td>
              ))}
            </tr>
            <tr>
              <th>Color</th>
              {products.map((product, index) => (
                <td key={index}>{product.color}</td>
              ))}
            </tr>
            <tr>
              <th>Remove</th>
              {products.map((_, index) => (
                <td key={index} className="text-center">
                  <a href="#" className="text-gray-90">
                    <i className="fa fa-times"></i>
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
