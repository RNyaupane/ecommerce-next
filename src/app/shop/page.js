import FilterLeft from "@/sections/shop/filter-left";
import RecommendProducts from "@/sections/shop/recommended-products";
import ShopControlBar from "@/sections/shop/shop-control-bar";
import ShopPagination from "@/sections/shop/shop-pagination";
import ShopProductGrid from "@/sections/shop/shop-product-grid";

export const metadata = {
  title: "Shop",
  description: "Ecommerce developed by Roshan",
};

export default function Shop() {
  return (
    <>
      <FilterLeft />

      <div className="col-xl-9 col-wd-9gdot5">
        <ShopControlBar />

        <ShopProductGrid />

        <ShopPagination />

        <RecommendProducts />
      </div>
    </>
  );
}
