import DetailBreadcrumb from "@/sections/product-detail/detail-breadcrumb";
import DetailView from "@/sections/product-detail/detail-view";
import ProductDescription from "@/sections/product-detail/product-description";

export const metadata = {
  title: "Product || Detail",
  description: "Ecommerce developed by Roshan",
};

export default function ProductDetail({ params }) {
  return (
    <>
      <DetailBreadcrumb />

      <DetailView />

      <ProductDescription />
    </>
  );
}
