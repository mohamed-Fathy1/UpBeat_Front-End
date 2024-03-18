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
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-5">
        <FaShuffle className="text-lg cursor-pointer" />
        <IoIosSkipBackward className="text-2xl cursor-pointer" />
        <div className="w-10 aspect-square text-gray-800 bg-white rounded-full flex items-center justify-center">
          {isPlaying ? (
            <FaPause
              onClick={() => setIsPlaying(false)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaPlay
              onClick={() => setIsPlaying(true)}
              className="text-xl cursor-pointer"
            />
          )}
        </div>
        <IoIosSkipForward className="text-2xl cursor-pointer" />
        <FiRepeat className="text-lg cursor-pointer" />
      </div>
      <div className="flex items-center gap-2">
        <div className="text-xs text-gray-300">0:00</div>
        <div className="w-96">
          <SliderHover />
        </div>
        <div className="text-xs text-gray-300">3:00</div>
      </div>
    </div>
  );
};

export default AudioControls;
