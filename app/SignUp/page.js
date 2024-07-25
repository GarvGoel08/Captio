import Image from "next/image";
import Footer from "../Footer";
import Link from "next/link";

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
      <div className="grow flex items-center justify-center">
        <div className="bg-[#0b0c19] flex flex-col my-10 mx-2 text-white p-6 py-8 rounded-lg overflow-x-hidden  min-w-[490px] max-sm:min-w-0 max-sm:w-full">
          <div className="font-semibold text-center text-2xl mb-4">
            SignUp to Capt.io
          </div>
          <div className="flex flex-col text-sm gap-4 mt-4">
            <div className="flex flex-col gap-1">
              <div>Name</div>
              <input
                type="text"
                placeholder="John Doe"
                className="p-2 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  rounded-md bg-[#111222] bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>Email</div>
              <input
                type="email"
                placeholder="johndoe@capt.io"
                className="p-2 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  rounded-md bg-[#111222] bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>Password</div>
              <input
                type="password"
                placeholder="Password"
                className="p-2 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  rounded-md bg-[#111222] bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div>Confirm Password</div>
              <input
                type="password"
                placeholder="Password"
                className="p-2 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  rounded-md bg-[#111222] bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20"
              />
            </div>
          </div>
          <button className="bg-blue-800 ease-in duration-150 hover:bg-blue-700 text-white rounded-md p-2 mt-6">
            SignUp
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
