'use client'

import Image from "next/image";
import React from "react";

const Header4 = () => {
  return (
    <div className="flex my-14 justify-between items-center border-2 border-gray-300 px-5 py-2 rounded-lg">
        <div className="flex items-center">
           <Image src={"/fire.jpg"} alt="fire" width={200} height={200} className="w-32 h-32 rounded-full mr-5"/>
           <div className="text-xl">
                  <p className="font-bold">Get access to exclusive deals</p>
                  <p className="text-gray-400">Only the best deals reach your inbox</p>
           </div>
        </div>
        <div>
            <input type="email" className=" w-80 h-16 px-6 py-3 outline-none rounded-lg border border-gray-300" placeholder="e.g. john@gmail.com"/>
            <button type="submit" className=" rounded-md w-32 h-14 bg-red-500 text-xl to-white cursor-pointer">Notify</button>
        </div>
    </div>
  );
};

export default Header4;
