import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";

function NavBar() {
  return (
    <div className="hidden md:flex item-center justify-around py-3 shadow-md border-b-[1px] bg-white">
      <Image src="./next.svg" alt="logo" width={100} height={150} />

      <div className="flex gap-5">
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Home
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          History
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          Contact us
        </h2>
      </div>∑

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default NavBar;
