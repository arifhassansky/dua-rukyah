import {
  FiBookmark,
  FiVolume2,
  FiCopy,
  FiShare2,
  FiCheck,
} from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { BsExclamationOctagon } from "react-icons/bs";
import { FaCirclePlay } from "react-icons/fa6";
import { useState, useRef } from "react";
import Image from "next/image";

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
  const [copiedIndex, setCopiedIndex] = useState(null);

  const audioRefs = useRef([]);

  const handlePlayPause = (index) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    if (playingAudio !== null && playingAudio !== index) {
      audioRefs.current[playingAudio]?.pause();
      setPlayingAudio(null);
    }

    if (currentAudio.paused) {
      currentAudio
        .play()
        .then(() => setPlayingAudio(index))
        .catch((error) => {
          console.error("Main audio failed:", error);
          currentAudio.src = fallbackAudio;
          currentAudio
            .play()
            .then(() => setPlayingAudio(index))
            .catch((fallbackError) =>
              console.error("Fallback also failed:", fallbackError)
            );
        });
    } else {
      currentAudio.pause();
      setPlayingAudio(null);
    }
  };

  // handle copy text
  const handleCopy = (dua, index) => {
    const textToCopy = `
  ${dua.dua_name_en || ""}
  ${dua.top_en || ""}
  ${dua.dua_arabic || ""}
  ${dua.transliteration_en ? "Transliteration: " + dua.transliteration_en : ""}
  ${dua.translation_en ? "Translation: " + dua.translation_en : ""}
  ${dua.refference_en ? "Reference: " + dua.refference_en : ""}
    `.trim();

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500 bg-white rounded-[10px] py-[15px] px-[30px]">
        <span className="text-green-700 font-semibold">Section: </span>
        <span className="text-gray-900 font-medium">
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
              <div className="flex items-center mb-7 gap-[5px]">
                <Image
                  src="/card_title_img.png"
                  width={35}
                  height={35}
                  alt="title image"
                />
                <h2 className="text-emerald-600 font-semibold flex items-center mb-2">
                  {i + 1}. {dua.dua_name_en}
                </h2>
              </div>

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
                  <span className="text-[#1FA45B] font-semibold">
                    Reference:
                  </span>
                  <br />
                  <span className="text-gray-800 font-semibold">
                    {dua.refference_en}
                  </span>
                </p>
              )}

              <div className="flex items-center justify-between mt-7">
                <div>
                  {dua.audio && (
                    <div>
                      <audio
                        ref={(el) => (audioRefs.current[i] = el)}
                        src={correctedAudio}
                        type="audio/mpeg/mp3"
                        preload="auto"
                        onError={(e) =>
                          console.error("Error loading audio:", e)
                        }
                      />
                      <button
                        onClick={() => handlePlayPause(i)}
                        className="text-[#1FA45B] "
                      >
                        {playingAudio === i ? (
                          <FaCirclePlay size={44} className="rotate-180" />
                        ) : (
                          <FaCirclePlay size={44} />
                        )}
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex gap-[39px] mt-4 text-gray-500 items-center">
                  <div className="flex items-center gap-1">
                    {copiedIndex === i ? (
                      <>
                        <FiCheck className="text-green-500" />
                        <span className="text-[#1FA45B] text-xs">Copied!</span>
                      </>
                    ) : (
                      <FiCopy
                        className="cursor-pointer hover:text-[#1FA45B]"
                        onClick={() => handleCopy(dua, i)}
                      />
                    )}
                  </div>

                  <FiBookmark className="cursor-pointer hover:text-[#1FA45B]" />
                  <HiOutlineLightBulb className="cursor-pointer hover:text-[#1FA45B]" />
                  <FiShare2 className="cursor-pointer hover:text-[#1FA45B]" />
                  <BsExclamationOctagon className="cursor-pointer hover:text-[#1FA45B]" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
