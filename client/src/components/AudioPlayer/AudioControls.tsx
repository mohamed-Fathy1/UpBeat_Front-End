import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { IoIosSkipForward } from "react-icons/io";
import { IoIosSkipBackward } from "react-icons/io";
import { FaShuffle } from "react-icons/fa6";
import { FiRepeat } from "react-icons/fi";
import { SliderHover } from "../SliderHover";
import { useState } from "react";

interface AudioControlsProps {
  // isPlaying: boolean;
  // setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  // skipTrack: (direction: string) => void;
}

const AudioControls: React.FC<
  AudioControlsProps
> = ({}: AudioControlsProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 mt-[2px]">
      <div className="flex items-center gap-5">
        <FaShuffle className="text-lg cursor-pointer" />
        <IoIosSkipBackward className="text-2xl cursor-pointer" />
        <div
          className="w-10 aspect-square text-gray-800 bg-white rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          {isPlaying ? (
            <FaPause className="text-2xl cursor-pointer" />
          ) : (
            <FaPlay className="text-xl" />
          )}
        </div>
        <IoIosSkipForward className="text-2xl cursor-pointer" />
        <FiRepeat className="text-lg cursor-pointer" />
      </div>
      <div className="flex items-center gap-2">
        <div className="text-xs text-gray-300">0:00</div>
        <div className="w-96">
          <SliderHover barStyles={{ backgroundColor: "228BE6#" }} />
        </div>
        <div className="text-xs text-gray-300">3:00</div>
      </div>
    </div>
  );
};

export default AudioControls;