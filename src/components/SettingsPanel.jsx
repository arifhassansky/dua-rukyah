"use client";
import { useState } from "react";
import { IoLanguageOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { LiaBookSolid } from "react-icons/lia";

export default function SettingsPanel() {
  const [activeTab, setActiveTab] = useState("appearance");

  const tabs = [
    {
      id: "language",
      label: "Language Settings",
      icon: <IoLanguageOutline size={18} />,
    },
    {
      id: "general",
      label: "General Settings",
      icon: <LiaBookSolid size={18} />,
    },
    {
      id: "font",
      label: "Font Settings",
      icon: <CiGrid41 size={18} />,
    },
    {
      id: "appearance",
      label: "Appearance Settings",
      icon: <CiGrid41 size={18} />,
    },
  ];

  return (
    <div className="w-64 min-h-screen px-4 bg-white rounded-2xl shadow border border-gray-100 text-black hidden lg:block">
      <h2 className="text-center text-xl font-bold mb-[25px] mt-[35px]">
        Settings
      </h2>

      <div className="space-y-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center p-3 rounded-xl cursor-pointer transition group
              ${
                activeTab === tab.id
                  ? "bg-white text-green-600 border-l-4 border-green-500 shadow-sm"
                  : "bg-gray-100 text-gray-500"
              }`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 transition-all
                ${
                  activeTab === tab.id
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-200 text-gray-400"
                }`}
            >
              {tab.icon}
            </div>
            <span>{tab.label}</span>
          </div>
        ))}
        {activeTab === "appearance" && (
          <div className="px-3 rounded-xl bg-white my-[28px]">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">Night Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-gray-600 transition-colors" />
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-transform" />
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
