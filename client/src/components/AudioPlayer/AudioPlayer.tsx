import SongInfo from './SongInfo'

interface AudioPlayerProps {
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ }) => {
    return (
            <footer className="fixed bottom-0 w-full bg-gray-800 text-white p-2 rounded-t-lg flex">
                <SongInfo />
                {// <AudioControls />
                // <VolumeControls />
                }
            </footer>
    )
}

export default AudioPlayer
