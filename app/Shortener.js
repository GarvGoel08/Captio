"use client";
import { set } from "mongoose";
import { useState } from "react";
import ShortenedLinkPopup from "./popup";

const Shortener = () => {
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL;
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  const handleButtonClick = async () => {
    if (!link.trim()) {
      setError("Please enter a link");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: link }),
      });

      if (!response.ok) {
        setError("An error occurred. Please try again.");
      }

      const data = await response.json();
      setShortenedLink(process.env.NEXT_PUBLIC_VERCEL_URL+"/"+data.code); 
      setIsPopupVisible(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <input
        type="text"
        placeholder="Paste your long link here"
        value={link}
        onChange={handleInputChange}
        className="bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg rounded-xl border text-white/80 border-white/20 p-2 px-4 focus:outline-none ease-in duration-150 focus:border-blue-500 hover:border-blue-500 w-[inherit] mb-2"
      />

      <button
        onClick={handleButtonClick}
        className="group bg-black bg-opacity-25 shadow-lg shadow-gray-700/50 backdrop-blur-lg border border-white/20 p-2 px-2.5 rounded-md duration-150 hover:border-blue-500 ease-in"
      >
        {loading ? (
          <span>Loading...</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-current text-white group-hover:text-blue-500 duration-150 ease-in"
            height={20}
            width={20}
          >
            <path d="M11 16.5V13H3V7h8V3.5l6.5 6.5-6.5 6.5z"></path>
          </svg>
        )}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {isPopupVisible && shortenedLink && (
        <ShortenedLinkPopup
          shortenedLink={shortenedLink}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default Shortener;
