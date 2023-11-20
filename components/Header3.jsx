'use client'

import React, { useState } from "react";
import Link from "next/link";

const Header3 = () => {

  const [city, setCity] = useState(" ");
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
      <div className="p-5">
        <h2 className="text-4xl text-center font-bold text-white">Over 157,000 hotels and homes across 35 countries</h2>
        <div className="flex justify-center my-5 mx-20">
          <input
            type="text"
            placeholder="Search..."
            className=" w-6/12  h-16 outline-none px-3 text-lg border-r-2 border-gray-400 "
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          {/* <input type="text" placeholder="search..." className=" col-span-1 h-16 outline-none px-3 text-lg border-r-2 border-gray-400" />
          <input type="text" placeholder="search..." className=" col-span-1 h-16 outline-none px-3 text-lg" /> */}
          <button type="submit" className="h-16 px-3 py-2 col-span-1 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"><Link href={`/hotels?city=${city}`}>Search</Link></button>
        </div>
        <div className="flex mx-20 my-5">
          <button type="submit" className=" h-16 px-3 py-2 hover:cursor-pointer text-white  mr-5 font-bold">Continue your Search</button>
          <button type="submit" className=" hover:bg-gray-500 rounded-xl border-2 border-white h-16 px-3 py-2 hover:cursor-pointer text-white  mr-5">Home stay in India hotel</button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
