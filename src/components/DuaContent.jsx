import { FiBookmark, FiVolume2, FiCopy, FiShare2 } from "react-icons/fi";

export default function DuaContent({ selectedSubcategoryId, duas }) {
  const defaultCatId = duas[0]?.cat_id;
  const activeCatId = selectedSubcategoryId || defaultCatId;

  const FilteredDuas = duas.filter((dua) => dua.subcat_id === activeCatId);

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500 bg-white rounded-[10px] py-[18px] px-[30px]">
        Section:
        <span className="text-gray-900">
          The servant is dependent on his Lord
        </span>
      </div>

      {FilteredDuas?.map((dua, i) => (
        <div key={i}>
          <div className="bg-white p-4 rounded border border-gray-200">
            <h2 className="text-emerald-600 font-semibold flex items-center mb-2">
              {dua.dua_name_en}
            </h2>
            <p className="text-sm text-gray-800">{dua.top_en}</p>
            <div className="text-right text-2xl leading-loose mt-3">
              <p className="text-gray-900">{dua.dua_arabic}</p>
            </div>

            {dua.transliteration_en && (
              <p className="text-sm mt-2 italic text-gray-700">
                Transliteration: {dua.transliteration_en}
              </p>
            )}

            {dua.translation_en && (
              <p className="text-sm text-gray-800 mt-2">
                Translation: {dua.translation_en}
              </p>
            )}

            {dua.refference_en && (
              <p className="mt-2 text-xs text-emerald-700 font-medium">
                Reference: {dua.refference_en}
              </p>
            )}

            <div className="flex gap-4 mt-4 text-gray-500">
              <FiCopy className="cursor-pointer hover:text-emerald-500" />
              <FiBookmark className="cursor-pointer hover:text-emerald-500" />
              {dua.audio && (
                <FiVolume2 className="cursor-pointer hover:text-emerald-500" />
              )}
              <FiShare2 className="cursor-pointer hover:text-emerald-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
