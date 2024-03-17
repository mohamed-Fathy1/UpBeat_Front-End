import TrackCard from "../TrackCard/TrackCard";
import "./TrackContrainer.css";
import { MusicData, Song } from "../../global.d";

interface TrackContainerProps {
  title: "New Released" | "Popular Artists" | "Popular Tracks";
  song: MusicData;
}

function TrackContainer({ title, song }: TrackContainerProps) {
  const data = song[title];

  return (
    <section className="track-container home-sections">
      <h2>{title}</h2>
      <div className="new-relased-items">
        <ul>
          {data?.map((item: Song, index: number) => (
            <TrackCard
              key={index}
              link={item.link}
              image={item.image}
              artist={item.artist}
              title={item.title}
              alt={item.alt}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrackContainer;