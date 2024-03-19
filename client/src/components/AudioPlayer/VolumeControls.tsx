import { FaVolumeUp } from "react-icons/fa";
import { CiMaximize1 } from "react-icons/ci";
import { SliderHover } from "../SliderHover";

interface VolumeControlsProps {}

function VolumeControls({}: VolumeControlsProps) {
  return (
    <div className="flex items-center gap-3">
      <FaVolumeUp className="text-lg cursor-pointer" />
      <div className="w-20">
        <SliderHover barStyles={{ backgroundColor: "#228BE6" }} />
      </div>
      <CiMaximize1 className="text-lg cursor-pointer" />
    </div>
  );
}

export default VolumeControls;
