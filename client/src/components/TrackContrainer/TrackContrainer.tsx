import { useState, useEffect } from "react";
import TrackCard from "../TrackCard/TrackCard";
import "./TrackContrainer.css";

interface TrackContainerProps {
  title: string;
  song: any;
}

function TrackContainer({ title, song }: TrackContainerProps) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(song[title]);
    setData(song[title]);
  }, []);

  return (
    <section className="track-container home-sections">
      <h2>{title}</h2>
      <div className="new-relased-items">
        <ul>
          {data?.map((item: any, index: number) => (
            <TrackCard
              key={index}
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
