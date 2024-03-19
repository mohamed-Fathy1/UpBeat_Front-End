import SongInfo from "./SongInfo";
import AudioControls from "./AudioControls";
import VolumeControls from "./VolumeControls";

interface AudioPlayerProps {}

const AudioPlayer: React.FC<AudioPlayerProps> = ({}) => {
  return (
    <footer className="fixed bottom-0 w-full max-w-screen-2xl">
      <div className="relative bg-gray-800 mx-2 text-white py-3 pb-4 px-4 rounded-t-lg flex justify-between items-center">
        <SongInfo />
        <AudioControls />
        <VolumeControls />
      </div>
    </footer>
  );
};

export default AudioPlayer;
