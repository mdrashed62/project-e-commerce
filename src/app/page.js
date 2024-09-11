
import Features from "@/components/features/Features";
import SecondBanner from "@/components/home/SecondBanner";
import Banner from "../components/home/Banner";
// import Arrival from "@/components/arrival/Arrival";
import Products from "@/components/products/products";
import Category from "@/components/category/Category";
import FlashSaleProducts from "@/components/products/FlashSaleProducts";
import BestSellingProducts from "@/components/products/BestSellingProducts";

export default function Home() {
  return (
    <div>
      <main>
        <Banner></Banner>
        <FlashSaleProducts></FlashSaleProducts>
        <Category></Category>
        <BestSellingProducts></BestSellingProducts>
        <SecondBanner></SecondBanner>
        {/* <Arrival/> */}
        <Features />
        <Products></Products>
      </main>
    </div>
  );
}
