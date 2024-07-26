import { useState } from "react";

const ShortenedLinkPopup = ({ shortenedLink, onClose }) => {
  return (
    shortenedLink && (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 group block bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20  rounded-md duration-150 hover:border-blue-500 ease-in p-6 text-center">
        <svg
          onClick={onClose}
          className="absolute top-2 right-2 fill-current text-white cursor-pointer"
          height={16}
          width={16}
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path>
        </svg>
        <div className="text-green-600 mb-1">
          Your URL Has been shortened, and link has been copied to your
          clipboard
        </div>
        <div>
          <a
            href={shortenedLink}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortenedLink}
          </a>
          <svg
            onClick={(e) => {
              navigator.clipboard.writeText(shortenedLink);
              e.target.classList.add("text-green-500");
              setTimeout(() => {
                e.target.classList.remove("text-green-500");
              }, 1000);
            }}
            className="inline-block ml-2 fill-current text-blue-500 cursor-pointer"
            height={16}
            width={16}
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 12H5V6h14v10zm-2-6H7v1h10V6zm0 3H7v1h10V9z"></path>
          </svg>
        </div>
      </div>
    )
  );
};

export default ShortenedLinkPopup;
