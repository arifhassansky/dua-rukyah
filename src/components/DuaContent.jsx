"use client";
import { FiBookmark, FiVolume2, FiCopy, FiShare2 } from "react-icons/fi";

export default function DuaContent() {
  return (
    <div className="space-y-4">
      {/* Section Title */}
      <div className="text-sm text-gray-500">
        Section:{" "}
        <span className="text-gray-900">
          The servant is dependent on his Lord
        </span>
      </div>

      {/* First Dua Block */}
      <div className="bg-white p-4 rounded border border-gray-200">
        <h2 className="text-emerald-600 font-semibold flex items-center mb-2">
          1. The servant is dependent on his Lord #1
        </h2>
        <p className="text-sm text-gray-800">
          All human beings depend on Allah for their welfare and prevention of
          evil in various matters of their religion and world. Allah says
          (interpretation of the meaning): O mankind, you are those in need of
          Allah, while Allah is the Free of need, the Praiseworthy.
        </p>
        <p className="mt-2 text-xs text-emerald-700 font-medium">
          Reference: Surah Al-Fatir 35:15
        </p>
        <div className="flex gap-4 mt-4 text-gray-500">
          <FiCopy className="cursor-pointer hover:text-emerald-500" />
          <FiBookmark className="cursor-pointer hover:text-emerald-500" />
          <FiVolume2 className="cursor-pointer hover:text-emerald-500" />
          <FiShare2 className="cursor-pointer hover:text-emerald-500" />
        </div>
      </div>

      {/* Second Dua Block */}
      <div className="bg-white p-4 rounded border border-gray-200">
        <h2 className="text-emerald-600 font-semibold flex items-center mb-2">
          2. Conditions for Dua to be successful
        </h2>
        <p className="text-sm text-gray-800">
          Prophet (ﷺ) used to say after every compulsory prayer, The servant
          will ask his Lord for all of his religiously and worldly needs,
          because the treasure of all things is in the hands of Allah. Allah
          says (interpretation of the meaning): "And there is not a thing but
          that with Us are its depositories, and We do not send it down except
          according to a known measure." (Surah Al-Hijr 15:21) No one can
          withhold what Allah gives; And, no one can give what he resists.
        </p>
        <div className="text-right text-2xl leading-loose mt-3">
          <p className="text-gray-900">
            لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا
            يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
          </p>
        </div>
        <p className="text-sm mt-2 italic text-gray-700">
          Transliteration: Laa ilaaha illallaahu wahdahu laa sharika lahu,
          lahul-mulku wa lahul-hamdu wa huwa ‘alaa kulli shay’in qadir.
          Allaahumma laa maani’a limaa a’tayta wa laa mu’tiya limaa mana’ta wa
          laa yanfa’u dhal-jaddi minka al-jaddu
        </p>
        <p className="text-sm text-gray-800 mt-2">
          Translation: There is none worthy of worship except Allah alone with
          no partner or associate. He is the Dominion and to Him be all praise,
          and He is able to do all things. O Allah, one can withhold what You
          have given and none can give what You have withheld, and no wealth or
          fortune can benefit anyone or free from You comes all wealth and
          fortune.
        </p>
        <p className="mt-2 text-xs text-emerald-700 font-medium">
          Reference: Bukhari: 844
        </p>
        <div className="flex gap-4 mt-4 text-gray-500">
          <FiCopy className="cursor-pointer hover:text-emerald-500" />
          <FiBookmark className="cursor-pointer hover:text-emerald-500" />
          <FiVolume2 className="cursor-pointer hover:text-emerald-500" />
          <FiShare2 className="cursor-pointer hover:text-emerald-500" />
        </div>
      </div>
    </div>
  );
}
