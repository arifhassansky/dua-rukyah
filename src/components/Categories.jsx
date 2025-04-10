"use client";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

export default function Categories({ categories, subCategories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (cat) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === cat.id ? null : cat.id
    );
  };

  // Filter categories based on search query
  const filteredCategories = categories?.filter((cat) =>
    cat.cat_name_en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 rounded-2xl shadow border border-gray-200 overflow-hidden font-sans bg-white">
      {/* Header */}
      <div className="bg-green-600 text-white text-center py-3 text-sm font-semibold">
        Categories
      </div>

      {/* Search Bar */}
      <div className="p-4 border-b">
        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search by Categories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 text-sm rounded border border-gray-300 focus:outline-none"
          />
        </div>
      </div>

      {/* Categories List */}
      <div className="px-4 py-2 space-y-3">
        {filteredCategories?.map((cat) => (
          <div key={cat.id}>
            <div
              onClick={() => handleCategoryClick(cat)}
              className={`${
                selectedCategory === cat.id
                  ? "rounded-xl bg-green-50 border border-green-300 p-3"
                  : "flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-200 cursor-pointer"
              }`}
            >
              <div className="flex items-center space-x-2">
                <img
                  src={cat.cat_icon}
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium text-green-700 text-sm">
                    {cat.cat_name_en}
                  </div>
                  <div className="text-xs text-gray-500">
                    Subcategory: {cat.no_of_subcat ?? 0}
                  </div>
                </div>
              </div>
              <div className="text-right text-sm text-gray-600">
                <div className="text-base font-semibold">
                  {cat.no_of_dua ?? 0}
                </div>
                <div className="text-xs">Duas</div>
              </div>
            </div>

            {/* Render subcategories only if this category is selected */}
            {selectedCategory === cat.id && (
              <div className="mt-3 pl-6 border-l-2 border-dotted border-green-500 space-y-2">
                {subCategories
                  ?.filter((sub) => sub.cat_id === cat.cat_id)
                  .map((sub, i) => (
                    <div
                      key={i}
                      className="relative pl-3 text-sm text-gray-700"
                    >
                      <span className="absolute left-[-0.55rem] top-1 w-2 h-2 bg-green-500 rounded-full"></span>
                      <span
                        className={`${
                          i === 0 ? "text-green-700 font-semibold" : ""
                        }`}
                      >
                        {sub.subcat_name_en}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
