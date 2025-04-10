"use client";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <h1 className="text-lg font-semibold text-gray-800">Dua Page</h1>

      <div className="relative">
        <input
          type="text"
          placeholder="Search by Dua Name"
          className="pl-10 pr-3 py-2 w-64 rounded-md text-sm border border-gray-300 bg-white text-gray-800 focus:outline-none"
        />
        <FiSearch className="absolute top-2.5 left-3 text-gray-500" />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="https://i.pravatar.cc/36"
            alt="user avatar"
            className="w-9 h-9 rounded-full object-cover border-2 border-gray-300"
          />
          <FaChevronDown className="absolute -right-4 top-3 text-sm text-gray-600" />
        </div>
      </div>
    </div>
  );
}
