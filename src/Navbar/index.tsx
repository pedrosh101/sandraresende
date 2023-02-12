import React from "react";
import { useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="md:hidden">
        <div className="flex">
          <button onClick={handleClick}>{click ? <p>Menu</p> : ""}</button>
          <div className="flex relative">
            {click ? (
              ""
            ) : (
              <div className="flex items-start bg-clr1 p-4 absolute -right-full -top-4 z-20">
                <ul>
                  <li>Arquivo</li>
                  <li>Biografia</li>
                  <li>Contato</li>
                </ul>
                <button onClick={handleClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
