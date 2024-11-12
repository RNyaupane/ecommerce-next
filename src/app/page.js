import EndProducts from "@/sections/home/end-products";
import Products from "@/sections/home/products";
import Services from "@/sections/home/services";
import SliderSection from "@/sections/home/slider";

export default function Home() {
  return (
    <>
      <SliderSection />

      <Services />

      <Products />

      <EndProducts />
    </>
  );
}
