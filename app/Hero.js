const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('/img/Background.jpeg')",
      }}
      className="h-full bg-cover text-white bg-no-repeat flex-row flex items-center justify-between"
    >
      <div className="flex p-4 flex-col gap-2">
        <div className="relative group">
          <button className="group bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md duration-150 hover:border-blue-500 ease-in">
            <svg
              className="fill-current text-white group-hover:text-blue-500 duration-150 ease-in"
              height={16}
              width={16}
              viewBox="0 0 495.398 495.398"
            >
              <g>
                <g>
                  <g>
                    <path
                      d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
    v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
    c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
    c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
                    />
                    <path
                      d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
    c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
    c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </button>
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block bg-black bg-opacity-25  shadow-gray-700/50 backdrop-blur-lg rounded-xl border text-white/80 border-white/20 text-xs  py-1 px-2">
            Home
          </div>
        </div>

        <div className="relative group">
          <button className="group bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md duration-150 hover:border-blue-500 ease-in">
            <svg
              className="fill-current text-white group-hover:text-blue-500 duration-150 ease-in"
              height={16}
              width={16}
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19 0H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 24h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"></path>
            </svg>
          </button>
          <div className="absolute text-nowrap top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block bg-black bg-opacity-25  shadow-gray-700/50 backdrop-blur-lg rounded-xl border text-white/80 border-white/20 text-xs  py-1 px-2">
            Contact Us
          </div>
        </div>

        <div className="relative group">
          <button className="group bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md duration-150 hover:border-blue-500 ease-in">
            <svg
              className="fill-current text-white group-hover:text-blue-500 duration-150 ease-in"
              height={16}
              width={16}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84846399,13.5498221 C7.28813318,13.433801 8.73442297,13.433801 10.1740922,13.5498221 C10.9580697,13.5955225 11.7383286,13.6935941 12.5099314,13.8434164 C14.1796238,14.1814947 15.2696821,14.7330961 15.73685,15.6227758 C16.0877167,16.317132 16.0877167,17.1437221 15.73685,17.8380783 C15.2696821,18.727758 14.2228801,19.3149466 12.4926289,19.6174377 C11.7216312,19.7729078 10.9411975,19.873974 10.1567896,19.9199288 C9.43008411,20 8.70337858,20 7.96802179,20 L6.64437958,20 C6.36753937,19.9644128 6.09935043,19.9466192 5.83981274,19.9466192 C5.05537891,19.9062698 4.27476595,19.8081536 3.50397353,19.6530249 C1.83428106,19.3327402 0.744222763,18.7633452 0.277054922,17.8736655 C0.0967111971,17.5290284 0.00163408158,17.144037 0.000104217816,16.752669 C-0.00354430942,16.3589158 0.0886574605,15.9704652 0.268403665,15.6227758 C0.72692025,14.7330961 1.81697855,14.1548043 3.50397353,13.8434164 C4.27816255,13.6914539 5.06143714,13.5933665 5.84846399,13.5498221 Z M8.00262682,-1.16351373e-13 C10.9028467,-1.16351373e-13 13.2539394,2.41782168 13.2539394,5.40035587 C13.2539394,8.38289006 10.9028467,10.8007117 8.00262682,10.8007117 C5.10240696,10.8007117 2.75131423,8.38289006 2.75131423,5.40035587 C2.75131423,2.41782168 5.10240696,-1.16351373e-13 8.00262682,-1.16351373e-13 Z"
                transform="translate(4 2)"
              ></path>
            </svg>
          </button>
          <div className="absolute top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block bg-black bg-opacity-25  shadow-gray-700/50 backdrop-blur-lg rounded-xl border text-white/80 border-white/20 text-xs  py-1 px-2">
            Dashboard/Signup
          </div>
        </div>
      </div>

      <div>
        <div className="text-center">
          <h1 className="text-xl text-left max-sm:text-2xl mb-3 font-bold max-sm:text-center">Captio</h1>
          <p className="text-5xl max-md:text-xl max-sm:hidden font-bold leading-tight">
            Shorten your Links instantly in one click
          </p>
          <div className="flex flex-row items-center w-full justify-center mt-8 max-sm:flex-col max-sm:mt-1">
            <input
              type="text"
              placeholder="Paste your long link here"
              className="bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg rounded-xl border text-white/80 border-white/20 grow p-2 px-4 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500 w-[inherit]"
            />

            <button className="group bg-black bg-opacity-25 max-sm:w-[40px] shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2 px-2.5 rounded-md ml-3 max-sm:ml-0 max-sm:mt-2 duration-150 hover:border-blue-500 ease-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                id="arrow"
                className="fill-current text-white group-hover:text-blue-500 duration-150 ease-in"
                height={20}
                width={20}
              >
                <path d="M11 16.5V13H3V7h8V3.5l6.5 6.5-6.5 6.5z"></path>
              </svg>
            </button>
          </div>
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
