
import Features from "@/components/features/Features";
import SecondBanner from "@/components/home/SecondBanner";
import Banner from "../components/home/Banner";

export default function Home() {
  return (
    <div>
      <main>
        <Banner></Banner>
        <SecondBanner></SecondBanner>
        <Features />
      </main>
    </div>
  );
}
