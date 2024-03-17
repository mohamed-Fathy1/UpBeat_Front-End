import { Link } from "react-router-dom";
import "./TrackCard.css";

interface TrackCardProps {
    image: string;
    artist: string;
    title: string;
    alt: string;
}

function TrackCard({image, artist, title, alt}: TrackCardProps) {
  return (
    <li>
      <Link to="/" className="content-item">
        <img src={image} alt={alt} />
        <h3>{artist}</h3>
        <h5>{title}</h5>
      </Link>
    </li>
  );
}

export default TrackCard;
