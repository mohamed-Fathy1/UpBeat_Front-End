import { FaVolumeUp } from "react-icons/fa";
import { CiMaximize1 } from "react-icons/ci";

interface VolumeControlsProps {}

function VolumeControls({}: VolumeControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <FaVolumeUp className="text-lg cursor-pointer" />
      <div className="w-20">
        <div className="w-20 h-2 bg-gray-600 rounded-full">
          <div className="w-1/2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <CiMaximize1 className="text-lg cursor-pointer" />
    </div>
  );
}

export default VolumeControls;
