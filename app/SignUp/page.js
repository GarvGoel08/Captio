import Image from "next/image";
import Footer from "../Footer";
import Link from "next/link";
import Form from "./Form";

export default function page() {
  return (
    <div className="h-full flex flex-col">
      {/* Top Navbar Color: 0b0c19, With just Logo to Go back to home page */}
      <div className="bg-[#0b0c19] flex flex-row items-center justify-between px-4 text-white text-center p-2.5">
        <Link
          href={"/"}
          className="flex flex-row items-center gap-3 underline font-semibold"
        >
          <Image src="/img/Logo.png" width={34} height={34} />
          Capt.io
        </Link>
      </div>
      <Form/>
      <Footer />
    </div>
  );
}
