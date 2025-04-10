import React from "react";

export default function SettingsPanel() {
  return (
    <div className="w-64 p-4 bg-white rounded-2xl shadow border border-gray-100">
      <h2 className="text-center text-lg font-semibold mb-4">Settings</h2>
      <div className="space-y-2">
        <div className="flex items-center p-3 rounded-lg bg-gray-100 text-gray-400">
          <span className="mr-2">🌐</span>
          <span>Language Settings</span>
        </div>
        <div className="flex items-center p-3 rounded-lg bg-gray-100 text-gray-400">
          <span className="mr-2">🔒</span>
          <span>General Settings</span>
        </div>
        <div className="flex items-center p-3 rounded-lg bg-gray-100 text-gray-400">
          <span className="mr-2">🔤</span>
          <span>Font Settings</span>
        </div>
        <div className="border-l-4 border-green-500 bg-green-50 p-3 rounded-lg">
          <span className="text-green-600 font-medium">
            Appearance Settings
          </span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
          <span>Night Mode</span>
        </div>
      </div>
    </div>
  );
}
