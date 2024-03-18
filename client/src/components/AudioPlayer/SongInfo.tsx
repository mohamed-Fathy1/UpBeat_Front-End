import { CiHeart } from "react-icons/ci";
import "./SongInfo.css";

interface SongInfoProps {
}

const SongInfo: React.FC<SongInfoProps> = ({}) => {
    return (
        <div className="flex items-center gap-3">
                <img
                    src="/assets/The_Weeknd_-_Blinding_Lights.png"
                    alt="album art"
                    className="w-14 aspect-square rounded-sm"/>
                <div>
                    <div className="text-base font-semibold">Song Title</div>
                    <div className="text-xs text-gray-300">Artist</div>
                </div>
                <div className="text-lg cursor-pointer">
                    <CiHeart/>
                </div>
        </div>
    )
}

export default SongInfo

