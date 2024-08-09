"use client";
import React, { useState } from "react";
import Link from "next/link";
import ExpandNav from "./expand";

function TopNavigation() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/*Top Navigation*/}
      <nav className="lg:w-4/12 md:w-12/12 md:block lg:hidden bg-none shadow-l items-center text-center">
        <div className="text-2xl text-center p{t|b}-{6} text-slate-800 font-semibold text-gray-500 pb-8 tracking-wide">
          <a href="/"> ATTHACHAI P </a>
        </div>
        <button onClick={() => setShow(!show)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {show ? <ExpandNav /> : null}
      </nav>
    </>
  );
}

export default TopNavigation;
