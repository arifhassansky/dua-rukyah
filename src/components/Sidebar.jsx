"use client";
import {
  FiHome,
  FiGrid,
  FiLightbulb,
  FiBookmark,
  FiDollarSign,
  FiSearch,
  FiBookOpen,
} from "react-icons/fi";
import { FaPersonPraying } from "react-icons/fa6";
import Image from "next/image";

export default function Sidebar() {
  const menuItems = [
    { icon: <FiHome />, label: "Home" },
    { icon: <FiGrid />, label: "Categories" },
    // { icon: <FiLightbulb />, label: "Tips" },
    { icon: <FiBookmark />, label: "Bookmarks" },
    { icon: <FiDollarSign />, label: "Donate" },
    { icon: <FiSearch />, label: "Search" },
    { icon: <FiBookOpen />, label: "Read" },
  ];

  return (
    <aside className="bg-white px-[13px] rounded-3xl mt-[40px] hidden lg:block">
      <Image
        src="/logo.png"
        alt="Logo"
        width={73}
        height={73}
        className="mt-[31px] mb-[145px]"
      />

      {/* Middle Menu */}
      <div className="flex flex-col items-center space-y-[27px] mt-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:text-emerald-500 hover:bg-emerald-50 flex items-center justify-center transition"
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>

      {/* Bottom Icon */}
      <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center mt-[162px]">
        <FaPersonPraying className="text-white text-xl" />
      </div>
    </aside>
  );
}
