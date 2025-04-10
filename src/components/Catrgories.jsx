import { FiSearch } from "react-icons/fi";

export default function Categories() {
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

        {/* Active Category Card */}
        <div className="flex items-center justify-between p-3 rounded-xl bg-gray-100 mb-2">
          <div className="flex items-center space-x-2">
            <img
              src="/avatar-icon.png"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="text-green-600 font-medium">
                Introduction to Dua
              </div>
              <div className="text-xs text-gray-500">Subcategory: 11</div>
            </div>
          </div>
          <div className="text-right text-gray-500 text-sm">
            <div className="text-lg font-semibold">15</div>
            <div className="text-xs">Duas</div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="border-l-2 border-dotted border-green-500 ml-5 mb-4">
          {[
            "What is Dua",
            "Conditions for Dua to be successful",
            "The Methode Of Dua",
            "Before Dua",
            "During Dua",
            "Prerequisites of writing Dua and drinking it’s water",
            "The correct way to perform Dua for a small child",
          ].map((item, index) => (
            <div key={index} className="relative pl-4 pb-2">
              <div className="absolute left-[-12px] top-1 w-2 h-2 bg-green-500 rounded-full"></div>
              <div
                className={`${
                  index === 0 ? "text-green-600 font-semibold" : "text-gray-700"
                } text-sm`}
              >
                {item}
              </div>
            </div>
          ))}
        </div>

        {/* Repeated Category Cards */}
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border mb-2"
          >
            <div className="flex items-center space-x-2">
              <img
                src="/avatar-icon.png"
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-medium text-gray-800">
                  Introduction to Dua
                </div>
                <div className="text-xs text-gray-500">Subcategory: 11</div>
              </div>
            </div>
            <div className="text-right text-gray-500 text-sm">
              <div className="text-lg font-semibold">15</div>
              <div className="text-xs">Duas</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
