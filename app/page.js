import Image from "next/image";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="h-full ">
      <Hero/>
      <Features/>
      <Footer/>
    </main>
  );
}
