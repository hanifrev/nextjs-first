import React from "react";

export default function MenuButton({click}) {
  return (
    <div id="menu-button-div" className="-mr-2 flex items-center md:hidden">
      <button
        type="button"
        onClick={click}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
        id="main-menu"
        aria-label="Main menu"
        aria-haspopup="true"
      >
        <svg
          className="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        OPEN
      </button>
    </div>
  );
}
