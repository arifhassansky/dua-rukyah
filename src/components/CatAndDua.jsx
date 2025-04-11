"use client";
import { useState } from "react";
import CategoriesWrapper from "./CatrgoriesWrapper";
import DuaContent from "./DuaContent";

const CatAndDua = ({ categories, subCategories, duas }) => {
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null);
  console.log(selectedSubcategoryId);
  return (
    <>
      <div className="p-6">
        <CategoriesWrapper
          categories={categories}
          subCategories={subCategories}
          setSelectedSubcategoryId={setSelectedSubcategoryId}
        />
      </div>
      <div className="flex-1 p-6 overflow-y-auto">
        <DuaContent duas={duas} selectedSubcategoryId={selectedSubcategoryId} />
      </div>
    </>
  );
};

export default CatAndDua;
