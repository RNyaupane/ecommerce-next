export default function Breadcrumb({ items }) {
  return (
    <div className="bg-gray-12 bg-md-transparent w-auto">
      <div className="container">
        <div className="my-md-3">
          <nav aria-label="breadcrumb ">
            <ol className="breadcrumb mb-4 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visible">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item flex-shrink-0 flex-xl-shrink-1 ${
                    index === items.length - 1 ? "active" : ""
                  }`}
                  aria-current={index === items.length - 1 ? "page" : undefined}
                >
                  {index !== items.length - 1 ? (
                    <a href={item.href}>{item.label}</a>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
