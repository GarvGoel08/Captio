import Link from "next/link";
import Navigation from "./Navigation";
import Shortener from "./Shortener";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/img/Background.jpeg')",
      }}
      className="h-full bg-cover text-white bg-no-repeat flex-row flex items-center justify-between"
    >
      <Navigation/>

      <div>
        <div className="text-center">
          <h1 className="text-xl text-left max-sm:text-2xl mb-3 font-bold max-sm:text-center">Captio</h1>
          <p className="text-5xl max-md:text-xl max-sm:hidden font-bold leading-tight">
            Shorten your Links instantly in one click
          </p>
          <Shortener/>
        </div>
      </div>
      <div className="flex p-4 flex-col gap-2">
        <a
          href="https://www.linkedin.com/in/garvgoel2908/"
          target="_blank"
          className="group bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md ml-3 duration-150 hover:border-[#0077B5] ease-in"
        >
          <svg
            className="fill-current text-white group-hover:text-[#0077B5] duration-150 ease-in"
            height={16}
            width={16}
            viewBox="0 0 310 310"
          >
            <g id="XMLID_801_">
              <path
                id="XMLID_802_"
                d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
C77.16,101.969,74.922,99.73,72.16,99.73z"
              />
              <path
                id="XMLID_803_"
                d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
              />
              <path
                id="XMLID_804_"
                d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
C310,145.43,300.549,94.761,230.454,94.761z"
              />
            </g>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/garvgoel6/"
          target="_blank"
          className="group bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md ml-3 duration-150 hover:border-[#833AB4] ease-in"
        >
          <svg
            className="fill-current text-white group-hover:text-[#833AB4] duration-150 ease-in"
            height={16}
            width={16}
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://github.com/GarvGoel08"
          target="_blank"
          className="group bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md ml-3 duration-150 hover:border-[#4078c0] ease-in"
        >
          <svg
            className="fill-current text-white group-hover:text-[#4078c0] duration-150 ease-in"
            height={16}
            width={16}
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
