"use client";
import { FiSearch } from "react-icons/fi";
import { RiArrowDownSFill } from "react-icons/ri";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="mt-[62px] ml-[30px]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800 ">Dua Page</h1>

        <div className="w-[371px] ml-[345px]">
          <div className="flex items-center bg-white border border-gray-200 rounded-[10px]">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="flex-1 px-4 py-2 text-gray-500 placeholder-gray-400 text-sm outline-none"
            />
            <div className="bg-gray-100 p-2 m-1 rounded-md">
              <FiSearch className="text-gray-500 text-xl" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mr-4">
          <div className="relative">
            <Image src="/profile.png" alt="Logo" width={45} height={45} />
            <RiArrowDownSFill className="absolute -right-5 top-3 text-lg text-gray-500" />
          </div>
        </div>
      </div>
    </nav>
  );
}
