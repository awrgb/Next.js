
import ImageSlider from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturesSection from "@/components/Feature";
import ProductGrid from "@/components/ProductGrid";
import ProductList from "@/components/Productlist";

export default function Home() {
  return (
    <>
    <div className="">
      <ImageSlider />
    </div>
      <div className="bg-white">
        <CategoryGrid />
        <FeaturesSection />
        <ProductList/>
        <ProductGrid/>
    </div>
    </>
  );
}
