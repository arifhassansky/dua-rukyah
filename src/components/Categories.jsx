"use client";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

export default function Categories({
  categories,
  subCategories,
  setSelectedSubcategoryId,
}) {
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
    <div className="w-72 min-h-screen rounded-xl border-gray-200 border-[0.5px] overflow-hidden bg-white ml-[30px] hidden lg:block">
      {/* Header */}
      <div className="bg-[#1FA45B] text-[17px] text-white text-center py-[18px] font-semibold">
        Categories
      </div>

      {/* Search Bar */}
      <div className="p-[15px]">
        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search by Categories"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 placeholder:text-gray-400 pr-3 py-2 text-sm rounded-[7px] border-[1.5px] border-gray-300 focus:outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Categories List */}
      <div className="px-[15px] space-y-3 pb-4">
        {filteredCategories?.map((cat) => (
          <div key={cat.id}>
            <div
              onClick={() => handleCategoryClick(cat)}
              className={`${
                selectedCategory === cat.id
                  ? "rounded-xl bg-[#E8F0F5] p-3"
                  : "flex items-center justify-between p-[10px] rounded-[10px] bg-gray-50 border border-gray-200 cursor-pointer"
              }`}
            >
              <div className="flex items-center space-x-4">
                <Image
                  src="/cat_image.png"
                  alt="catrgory pic"
                  width={40}
                  height={40}
                />
                <div>
                  <div className="font-medium text-green-700 mb-[5px]">
                    {cat.cat_name_en}
                  </div>
                  <div className="text-sm text-gray-500">
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
              <div className="mt-3 border-l-2 border-dotted border-[#1FA45B] space-y-2">
                {subCategories
                  ?.filter((sub) => sub.cat_id === cat.cat_id)
                  .map((sub, i) => (
                    <div
                      key={i}
                      className="relative pl-3 text-sm text-gray-700"
                    >
                      <span className="absolute -left-[5px] top-1 w-2 h-2 bg-green-500 rounded-full"></span>
                      <button
                        onClick={() => setSelectedSubcategoryId(sub.subcat_id)}
                        className={`${
                          i === 0 ? "text-green-700 font-semibold" : ""
                        }`}
                      >
                        {sub.subcat_name_en}
                      </button>
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
