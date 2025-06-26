import Hero from "@/components/Hero";
import Strategy from "@/components/Strategy";
import WhyUs from "@/components/WhyUs";
import LetsCreate from "@/components/LetsCreate";
// import CreateCard from "@/components/CreateCard";
import NextStep from "@/components/NextStep";
import SupplyChain from "@/components/SupplyChain";

export default function Home() {
  return (
    <main>
      <Hero />
      <Strategy />
      <WhyUs />
      <LetsCreate />
      {/* <CreateCard /> */}
      <SupplyChain/>
      <NextStep/>
    </main>
  );
}
