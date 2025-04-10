"use client";
import {
  FiHome,
  FiBookOpen,
  FiSettings,
  FiGlobe,
  FiBookmark,
} from "react-icons/fi";
import { FaHandsPraying } from "react-icons/fa6";

export default function Sidebar() {
  const menuItems = [
    { icon: <FiHome />, label: "Home" },
    { icon: <FiBookOpen />, label: "Duas" },
    { icon: <FiBookmark />, label: "Bookmarks" },
    { icon: <FiGlobe />, label: "Language" },
    { icon: <FiSettings />, label: "Settings" },
  ];

  return (
    <aside className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-6 px-8">
      <div className="w-10 h-10 bg-emerald-500 rounded-md flex items-center justify-center">
        <FaHandsPraying className="text-white text-2xl" />
      </div>
      <div className="flex flex-col items-center space-y-6 text-xl text-gray-500">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="hover:text-emerald-500 transition-colors duration-200"
            title={item.label}
          >
            {item.icon}
          </button>
        ))}
      </div>
    </aside>
  );
}
