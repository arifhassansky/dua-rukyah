import { FiBookmark, FiVolume2, FiCopy, FiShare2 } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { BsExclamationOctagon } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { useState, useRef } from "react";

const fallbackAudio =
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export default function DuaContent({
  selectedSubcategoryId,
  duas,
  subCategories,
}) {
  const defaultCatId = duas[0]?.cat_id;
  const activeCatId = selectedSubcategoryId || defaultCatId;

  const FilteredDuas = duas.filter((dua) => dua.subcat_id === activeCatId);

  const [playingAudio, setPlayingAudio] = useState(null);
  const [audioError, setAudioError] = useState(null);
  const audioRefs = useRef([]);

  const handlePlayPause = (index) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    // Stop previously playing audio
    if (playingAudio !== null && playingAudio !== index) {
      audioRefs.current[playingAudio]?.pause();
      setPlayingAudio(null);
    }

    if (currentAudio.paused) {
      currentAudio
        .play()
        .then(() => {
          setAudioError(null);
          setPlayingAudio(index);
        })
        .catch((error) => {
          console.error("Main audio failed:", error);
          // Try fallback audio
          currentAudio.src = fallbackAudio;
          currentAudio
            .play()
            .then(() => {
              setAudioError("Main audio failed. Fallback audio playing.");
              setPlayingAudio(index);
            })
            .catch((fallbackError) => {
              console.error("Fallback also failed:", fallbackError);
              setAudioError("Failed to load any audio. Please try again.");
            });
        });
    } else {
      currentAudio.pause();
      setPlayingAudio(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500 bg-white rounded-[10px] py-[15px] px-[30px]">
        <span className="text-green-700 font-semibold">Section: </span>
        <span className="text-gray-900">
          {subCategories.find((sub) => sub.subcat_id === activeCatId)
            ?.subcat_name_en || "Unnamed Subcategory"}
        </span>
      </div>

      {FilteredDuas?.map((dua, i) => {
        const correctedAudio =
          dua.audio?.replace(/^http:/, "https:") || fallbackAudio;

        return (
          <div key={i}>
            <div className="bg-white px-[30px] py-[15px] rounded-[10px] border border-gray-200">
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
                <p className="mt-2">
                  <span className=" text-emerald-700 font-semibold">
                    Reference:
                  </span>
                  <br />
                  {dua.refference_en}
                </p>
              )}

              <div className="flex justify-between mt-7">
                {dua.audio && (
                  <div>
                    <audio
                      ref={(el) => (audioRefs.current[i] = el)}
                      src={correctedAudio}
                      type="audio/mpeg/mp3"
                      preload="auto"
                      onError={(e) => {
                        console.error("Error loading audio:", e);
                        setAudioError(
                          "Failed to load audio. Playing fallback."
                        );
                      }}
                      onPlaying={() => setAudioError(null)}
                    />
                    <button
                      onClick={() => handlePlayPause(i)}
                      className="text-[#1FA45B] w-11 h-11"
                    >
                      {playingAudio === i ? (
                        <FaCirclePlay className="rotate-180" />
                      ) : (
                        <FaCirclePlay />
                      )}
                    </button>
                  </div>
                )}

                {audioError && (
                  <div className="text-red-500 mt-2">
                    <span>{audioError}</span>
                  </div>
                )}

                <div className="flex gap-[39px] mt-4 text-gray-500">
                  <FiCopy className="cursor-pointer hover:text-emerald-500" />
                  <FiBookmark className="cursor-pointer hover:text-emerald-500" />
                  {dua.audio && (
                    <FiVolume2 className="cursor-pointer hover:text-emerald-500" />
                  )}
                  <HiOutlineLightBulb className="cursor-pointer hover:text-emerald-500" />
                  <FiShare2 className="cursor-pointer hover:text-emerald-500" />
                  <BsExclamationOctagon className="cursor-pointer hover:text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
