import React from "react";
import { useState } from "react";

const NavBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="grid grid-cols-3 py-1 bg-black text-white gap-3">
        <div className="flex justify-self-end items-center">
          <button onClick={handleClick} className="pr-4 cursor-pointer">
            {click ? <p>Menu</p> : ""}
          </button>
          <div className="flex items-center relative">
            {click ? (
              ""
            ) : (
              <div className="flex flex-col bg-red-200 text-black absolute -right-full top-8 p-4 z-20">
                <ul>
                  <li>Arquivo</li>
                  <li>Biografia</li>
                  <li>Contato</li>
                </ul>
                <button onClick={handleClick}>X</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
