import Breadcrumb from "@/components/breadcrumb";

export default function ShopLayout({ children }) {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Shop" }];

  return (
    <>
      {/* <Breadcrumb items={breadcrumbItems} /> */}

      <div className="container mt-4">
        <div className="row mb-8">{children}</div>
      </div>
    </>
  );
}
