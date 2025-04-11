"use client";
import { useState } from "react";
import DuaContent from "./DuaContent";
import Categories from "./Categories";

const CatAndDua = ({ categories, subCategories, duas }) => {
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);

  console.log(selectedSubcategoryId);
  return (
    <>
      <div>
        <Categories
          categories={categories}
          subCategories={subCategories}
          setSelectedSubcategoryId={setSelectedSubcategoryId}
        />
      </div>
      <div className="flex-1 overflow-y-auto ml-[33px] mr-[29px]">
        <DuaContent
          duas={duas}
          subCategories={subCategories}
          selectedSubcategoryId={selectedSubcategoryId}
        />
      </div>
    </>
  );
};

export default CatAndDua;
