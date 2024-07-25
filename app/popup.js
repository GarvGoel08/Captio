import { useState } from "react";

const ShortenedLinkPopup = ({ shortenedLink, onClose }) => {
  return (
    shortenedLink && (
      <div
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-30 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg p-4 text-center"
      >
        <p className="text-green-500">
          Shortened Link:{" "}
          <a
            href={shortenedLink}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortenedLink}
          </a>
        </p>
        <button
          onClick={onClose}
          className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    )
  );
};

export default ShortenedLinkPopup;
