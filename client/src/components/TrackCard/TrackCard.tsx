import { Link } from "react-router-dom";
import "./TrackCard.css";
import { Song } from "../../global.d";
import { useContext } from "react";
import playerContext from "../../context/playerContext";

interface TrackCardProps {
  id: number;
  link: string;
  image: string;
  artist: string;
  title: string;
  alt: string;
}

function TrackCard({ id, link, image, artist, title, alt }: TrackCardProps) {
  const { setCurrentSong, currentSong } = useContext(playerContext);

  return (
    <li
      onClick={() => setCurrentSong(id)}
      className={`content-item border-2 w-40 ${
        currentSong === id ? "border-green-500" : "border-transparent"
      }`}
    >
      <Link to={""} className="">
        <img src={image} alt={alt} className="rounded-sm" />
        <h3>{artist}</h3>
        <h5>{title}</h5>
      </Link>
    </li>
  );
}

export default TrackCard;
