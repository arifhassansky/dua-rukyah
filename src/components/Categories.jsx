// components/Categories.jsx
import { FiSearch } from "react-icons/fi";

export default function Categories({ category }) {
  return (
    <div className="w-80 bg-white rounded-2xl shadow border border-gray-100 p-4">
      <div className="bg-green-600 text-white rounded-t-xl text-center py-2 font-semibold">
        Categories
      </div>
      <div className="p-3">
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search by Categories"
            className="w-full pl-10 pr-3 py-2 text-sm rounded border border-gray-300 focus:outline-none"
          />
          <FiSearch className="absolute top-2.5 left-3 text-gray-500" />
        </div>

        {/* Render categories dynamically from DB */}
        {category?.map((cat) => (
          <div
            key={cat.id}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border mb-2"
          >
            <div className="flex items-center space-x-2">
              <img
                src="/avatar-icon.png"
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-800">{cat.name}</div>
                <div className="text-xs text-gray-500">
                  Subcategory: {cat.subcategory_count ?? 0}
                </div>
              </div>
            </div>
            <div className="text-right text-gray-500 text-sm">
              <div className="text-lg font-semibold">{cat.dua_count ?? 0}</div>
              <div className="text-xs">Duas</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
