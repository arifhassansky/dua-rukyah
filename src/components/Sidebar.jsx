"use client";
import {
  FiHome,
  FiGrid,
  FiBookmark,
  FiDollarSign,
  FiBookOpen,
} from "react-icons/fi";
import { FaPersonPraying } from "react-icons/fa6";
import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { TbMedicineSyrup, TbMessages } from "react-icons/tb";
import { BsBook } from "react-icons/bs";

export default function Sidebar() {
  const menuItems = [
    { icon: <FiHome size={20} />, label: "Home" },
    { icon: <FiGrid size={20} />, label: "Categories" },
    { icon: <HiOutlineLightBulb size={20} />, label: "Tips" },
    { icon: <FiBookmark size={20} />, label: "Bookmarks" },
    { icon: <TbMedicineSyrup size={20} />, label: "Donate" },
    { icon: <TbMessages size={20} />, label: "message" },
    { icon: <BsBook size={20} />, label: "Read" },
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
            className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:text-[#1FA45B] hover:bg-emerald-50 flex items-center justify-center transition"
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
