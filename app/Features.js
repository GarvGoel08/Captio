const Features = () => {
  return (
    <div className="flex bg-[#111222] flex-col gap-10 px-8 py-16">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-white tracking-light text-4xl font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
          Features
        </h1>
        <p className="text-white text-lg  font-semibold leading-normal max-w-[720px]">
          Our platform offers powerful features that make it easy to shorten.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
        <div className="flex text-center items-center justify-center flex-1 gap-3 bg-black bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md duration-150 hover:border-blue-500 ease-in p-6 py-8 flex-col">
          <div
            className="text-white"
            data-icon="Book"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl mt-1 mb-1 font-bold leading-tight">
              One Click Shortening
            </h2>
            <p className="text-[#637588] text-base font-normal leading-normal">
              Shorten your lengthy URLs instantly with just one click, and enjoy
              the convenience of not having to create an account.
            </p>
          </div>
        </div>
        <div className="flex text-center items-center justify-center flex-1 gap-3 bg-black bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md duration-150 hover:border-blue-500 ease-in p-6 py-8 flex-col">
          <div
            className="text-white"
            data-icon="Calculator"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M80,120h96a8,8,0,0,0,8-8V64a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8v48A8,8,0,0,0,80,120Zm8-48h80v32H88ZM200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM100,148a12,12,0,1,1-12-12A12,12,0,0,1,100,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,148Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,148Zm-80,40a12,12,0,1,1-12-12A12,12,0,0,1,100,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,140,188Zm40,0a12,12,0,1,1-12-12A12,12,0,0,1,180,188Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl mt-1 mb-1 font-bold leading-tight">
              Custom Links
            </h2>
            <p className="text-[#637588] text-base font-normal leading-normal">
              Looking to add a personal touch to your shortened URLs? With
              Captio, you have the ability to customize your shortened links.
            </p>
          </div>
        </div>
        <div className="flex text-center items-center justify-center flex-1 gap-3 bg-black bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md duration-150 hover:border-blue-500 ease-in p-6 py-8 flex-col">
          <div
            className="text-white"
            data-icon="Lock"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl mt-1 mb-1 font-bold leading-tight">
              Link Management
            </h2>
            <p className="text-[#637588] text-base font-normal leading-normal">
              Our comprehensive dashboard provides you with all the tools you
              need to monitor, edit, and track your shortened URLs with ease
            </p>
          </div>
        </div>
        <div className="flex text-center items-center justify-center flex-1 gap-3 bg-black bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md duration-150 hover:border-blue-500 ease-in p-6 py-8 flex-col">
          <div
            className="text-white"
            data-icon="ShieldCheck"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl mt-1 mb-1 font-bold leading-tight">
              Safe and secure
            </h2>
            <p className="text-[#637588] text-base font-normal leading-normal">
              We take your privacy and security very seriously. Your data is
              securely encrypted and never shared with third parties.
            </p>
          </div>
        </div>
        <div className="flex text-center items-center justify-center flex-1 gap-3 bg-black bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md duration-150 hover:border-blue-500 ease-in p-6 py-8 flex-col">
          <div
            className="text-white"
            data-icon="Watch"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M208,128a79.94,79.94,0,0,0-32.7-64.47l-6.24-34.38A16,16,0,0,0,153.32,16H102.68A16,16,0,0,0,86.94,29.15L80.7,63.53a79.9,79.9,0,0,0,0,128.94l6.24,34.38A16,16,0,0,0,102.68,240h50.64a16,16,0,0,0,15.74-13.15l6.24-34.38A79.94,79.94,0,0,0,208,128ZM102.68,32h50.64l3.91,21.55a79.75,79.75,0,0,0-58.46,0ZM64,128a64,64,0,1,1,64,64A64.07,64.07,0,0,1,64,128Zm89.32,96H102.68l-3.91-21.55a79.75,79.75,0,0,0,58.46,0ZM120,128V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16H128A8,8,0,0,1,120,128Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl mt-1 mb-1 font-bold leading-tight">
              Always Free
            </h2>
            <p className="text-[#637588] text-base font-normal leading-normal">
              Enjoy unlimited access to our service with the ability to create
              an infinite number of shortened URLs at no cost. There are no
              hidden fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
