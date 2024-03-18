import SongInfo from "./SongInfo";
import AudioControls from "./AudioControls";

interface AudioPlayerProps {}

const AudioPlayer: React.FC<AudioPlayerProps> = ({}) => {
  return (
    <footer className="fixed bottom-0 w-full max-w-screen-2xl">
      <div className=" bg-gray-800 mx-2 text-white p-2 rounded-t-lg flex">
        <SongInfo />
        <AudioControls />
        {
          // <VolumeControls />
        }
      </div>
    </footer>
  );
};

export default AudioPlayer;
