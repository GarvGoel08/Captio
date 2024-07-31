import Image from "next/image";
import Footer from "../Footer";
import Link from "next/link";
import Form from "./Form";
import { Suspense } from "react";

export default function page() {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-[#0b0c19] flex flex-row items-center justify-between px-4 text-white text-center p-2.5">
        <Link
          href={"/"}
          className="flex flex-row items-center gap-3 underline font-semibold"
        >
          <Image src="/img/Logo.png" width={34} height={34} />
          Capt.io
        </Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Form />
      </Suspense>
      <Footer />
    </div>
  );
}
