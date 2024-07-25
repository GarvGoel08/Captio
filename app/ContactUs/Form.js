import React from "react";

export default function Form() {
  return (
    <div className="flex grow mx-16 my-3 max-sm:mx-0 py-8 px-6 max-sm:mr-2 overflow-x-hidden text-white flex-col gap-5 bg-black bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md max-w-full sm:w-96">
      <h1 className="text-2xl font-bold text-center w-full mb-3">Contact Us</h1>
      <input
        type="text"
        placeholder="Name"
        className="bg-black focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md p-2"
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-black focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md p-2"
      />
      <input
        type="number"
        placeholder="Phone Number"
        className="bg-black focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md p-2"
      />
      <textarea
        placeholder="Message"
        rows={4}
        className="bg-black focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500  bg-opacity-25 shadow-gray-700/50 backdrop-blur-lg border border-white/20 rounded-md p-2"
      />
      <button className="bg-blue-500 text-white rounded-md p-2">Submit</button>
    </div>
  );
}
