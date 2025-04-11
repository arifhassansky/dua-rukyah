import { FiBookmark, FiVolume2, FiCopy, FiShare2 } from "react-icons/fi";
import { useRef } from "react";

export default function DuaContent({ selectedSubcategoryId, duas }) {
  const audioRefs = useRef({});

  const playAudio = (id) => {
    // Pause all audios first
    Object.values(audioRefs.current).forEach((audio) => {
      if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    // Then play the selected one
    if (audioRefs.current[id]) {
      audioRefs.current[id].play();
    }
  };

  const FilteredDuas = duas.filter(
    (dua) => dua.subcat_id == selectedSubcategoryId
  );

  return (
    <div className="space-y-4">
      {/* Section Title */}
      <div className="text-sm text-gray-500">
        Section:
        <span className="text-gray-900">
          The servant is dependent on his Lord
        </span>
      </div>

      {FilteredDuas?.map((dua) => (
        <div key={dua.id}>
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

            {/* Hidden Audio Element */}
            {dua.audio && (
              <audio ref={(el) => (audioRefs.current[dua.id] = el)}>
                <source src={dua.audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}

            <div className="flex gap-4 mt-4 text-gray-500">
              <FiCopy className="cursor-pointer hover:text-emerald-500" />
              <FiBookmark className="cursor-pointer hover:text-emerald-500" />
              {dua.audio && (
                <FiVolume2
                  className="cursor-pointer hover:text-emerald-500"
                  onClick={() => playAudio(dua.id)}
                />
              )}
              <FiShare2 className="cursor-pointer hover:text-emerald-500" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
