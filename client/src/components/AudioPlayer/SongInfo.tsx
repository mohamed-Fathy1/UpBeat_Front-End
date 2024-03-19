import { CiHeart } from "react-icons/ci";
import "./SongInfo.css";
import playerContext from "../../context/playerContext";
import { useContext } from "react";
import { Song } from "../../global.d";

interface SongInfoProps {}

const SongInfo: React.FC<SongInfoProps> = ({}) => {
  const { currentSong, playlist } = useContext(playerContext);

  const currentSongIndex = playlist.findIndex(
    (song: Song) => song.id === currentSong
  );
  return (
    <div className="flex items-center gap-3">
      <img
        src={playlist[currentSongIndex]?.image}
        alt={playlist[currentSongIndex]?.alt}
        className="w-14 aspect-square rounded-sm"
      />
      <div>
        <div className="text-sm font-semibold">
          {playlist[currentSongIndex]?.title}
        </div>
        <div className="text-xs text-gray-300">
          {playlist[currentSongIndex]?.artist}
        </div>
      </div>
      <div className="text-lg cursor-pointer">
        <CiHeart />
      </div>
    </div>
  );
};

export default SongInfo;
