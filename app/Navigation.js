import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex p-4 flex-col gap-2">
      <div className="relative group">
        <Link
          href={"/"}
          className="group block bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md duration-150 hover:border-blue-500 ease-in"
        >
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
        </Link>
        <div className="absolute z-10 top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block bg-black bg-opacity-25  shadow-gray-700/50 backdrop-blur-lg rounded-xl border text-white/80 border-white/20 text-xs  py-1 px-2">
          Home
        </div>
      </div>

      <div className="relative group">
        <Link
          href={"ContactUs"}
          className="group block bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md duration-150 hover:border-blue-500 ease-in"
        >
          <svg
            className="fill-current text-white group-hover:text-blue-500 duration-150 ease-in"
            height={16}
            width={16}
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M19 0H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 24h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"></path>
          </svg>
        </Link>
        <div className="absolute z-10 text-nowrap top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block bg-black bg-opacity-25  shadow-gray-700/50 backdrop-blur-lg rounded-xl border text-white/80 border-white/20 text-xs  py-1 px-2">
          Contact Us
        </div>
      </div>

      <div className="relative group">
        <Link
          href={"SignUp"}
          className="group block bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2.5 px-3 rounded-md duration-150 hover:border-blue-500 ease-in"
        >
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
        </Link>
        <div className="absolute z-10 top-1/2 left-full transform -translate-y-1/2 ml-2 hidden group-hover:block bg-black bg-opacity-25  shadow-gray-700/50 backdrop-blur-lg rounded-xl border text-white/80 border-white/20 text-xs  py-1 px-2">
          Dashboard/Signup
        </div>
      </div>
    </div>
  );
}
