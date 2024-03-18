import { SkipBackwardIcon, SkipForwardIcon, PlayIcon, PauseIcon } from './icons';

interface AudioControlsProps {
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    skipTrack: (direction: string) => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({ isPlaying, setIsPlaying, skipTrack }) => {
    return (
        <div className="flex items-center justify-center">
            <button onClick={() => skipTrack('skip-back')} className="text-3xl">
                <SkipBackwardIcon />
            </button>
            <button onClick={() => setIsPlaying(!isPlaying)} className="text-5xl">
                {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button onClick={() => skipTrack('skip-forward')} className="text-3xl">
                <SkipForwardIcon />
            </button>
        </div>
    )
}
