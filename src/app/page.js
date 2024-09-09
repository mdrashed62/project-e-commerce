
import Features from "@/components/features/Features";
import SecondBanner from "@/components/home/SecondBanner";
import Banner from "../components/home/Banner";
// import Arrival from "@/components/arrival/Arrival";
import Products from "@/components/products/products";

export default function Home() {
  return (
    <div>
      <main>
        <Banner></Banner>
        <Products></Products>
        <SecondBanner></SecondBanner>
        {/* <Arrival/> */}
        <Features />
      </main>
    </div>
  );
}
